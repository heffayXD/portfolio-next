import { getTemplate } from '@/helpers/templates'
import { sendEmail } from '@/helpers/emails'

export async function POST(request: Request) {
  try {
    const { email, message, name, token } = await request.json()

    if (!token) {
      throw new Error('reCAPTCHA Token Required')
    }

    const template = await getTemplate('emails', 'contact', { email, message, name })

    await sendEmail(
      process.env.CONTACT_EMAIL || '',
      'Contact Request from heffay.dev',
      template,
      { replyTo: email }
    )

    return Response.json(
      { message: 'Message sent' },
      { status: 200 }
    )
  } catch (err) {
    console.error(err)
    return Response.json(
      { message: 'Something went wrong' },
      { status: 500 }
    )
  }
}