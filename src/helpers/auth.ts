/**
 * Retrieves reCAPTCHA token
 * @returns {string}
 */
export const getRecaptchaToken = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    grecaptcha.ready(() => {
      if (!process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY) {
        reject('Key not found')
      } else {
        grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, { action: 'submit' })
          .then(token => resolve(token))
      }
    })
  })
}
