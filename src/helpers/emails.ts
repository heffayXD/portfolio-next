import nodeMailer, { Transporter } from 'nodemailer'
import { google } from 'googleapis'
import { OAuth2Client } from 'google-auth-library'
import { MailOptions } from 'nodemailer/lib/json-transport'

const { OAuth2 } = google.auth

const getAccessToken = (client: OAuth2Client) => {
  return new Promise((resolve, reject) => {
    client.getAccessToken((err, token) => {
      if (err) reject(err)
      resolve(token)
    })
  })
}

/**
 * Creates the email transport
 */
const createTransport = async (): Promise<Transporter> => {
    const client = new OAuth2(
      process.env.EMAIL_OAUTH_CLIENT,
      process.env.EMAIL_OAUTH_SECRET,
      'https://developers.google.com/oauthplayground'
    )

    client.setCredentials({ refresh_token: process.env.EMAIL_REFRESH })

    const accessToken = await getAccessToken(client)

    return nodeMailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.EMAIL_USER,
        clientId: process.env.EMAIL_OAUTH_CLIENT,
        clientSecret: process.env.EMAIL_OAUTH_SECRET,
        refreshToken: process.env.EMAIL_REFRESH,
        accessToken,
        expires: 1
      }
    } as nodeMailer.TransportOptions)
}

/**
 * Sends an email as a Promise
 */
const sendEmailPromise = (transport: Transporter, options: MailOptions): Promise<string> => {
  return new Promise(resolve => {
    transport.sendMail(options, (err, info) => {
      if (err) {
        console.error(err)
        return resolve('')
      }

      resolve(info)
    })
  })
}

/**
 * Sends an email
 */
export const sendEmail = async (to: string, subject: string, html: string, props = {}) => {
  const transport = await createTransport()

  return sendEmailPromise(transport, {
    ...props,
    from: process.env.EMAIL_USER,
    to,
    subject,
    html
  })
}
