'use client'
import { useState } from 'react'

// import { getRecaptchaToken } from 'helpers/auth'

const Contact = () => {
  const [fields, setFields] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setFields({ ...fields, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (loading || sent) return
    setLoading(true)
    setError('')

    try {
      // const token = await getRecaptchaToken()
      // const [success, result] = await api.post('/contact', { ...fields, token })
      // if (!success) throw result

      setSent(true)
    } catch (err) {
      console.error(err)
      setError('Something went Wrong')
    }
    
    setLoading(false)
  }

  return (
    <div
      id='contact'
      className='flex justify-around items-center flex-wrap py-10 bg-primary text-white'
    >
      <h1 className='text-4xl text-center w-full font-bold font-montserrat'>
        Contact
      </h1>
      <form
        className='p-0 mt-5 max-w-[800px] text-center md:mt-0 md:p-5'
        onSubmit={handleSubmit}
      >
        <div className='flex md:flex-nowrap gap-4 flex-wrap justify-center w-full mb-4'>
          <input
            required
            className='w-full md:m-auto m-2 text-base rounded-md p-4 border-0 bg-white text-primary placeholder-primary shadow-md outline-none'
            type='text'
            name='name'
            aria-label='Name'
            placeholder='Name'
            value={fields.name}
            onChange={handleChange}
          />
          <input
            required
            className='w-full md:m-auto m-2 text-base rounded-md p-4 border-0 bg-white text-primary placeholder-primary shadow-md outline-none'
            type='text'
            name='email'
            aria-label='Email'
            placeholder='Email'
            value={fields.email}
            onChange={handleChange}
          />
        </div>
        <div className='flex flex-wrap justify-center w-full mb-4'>
          <textarea
            required
            className='w-full md:m-auto m-2 text-base rounded-md p-4 border-0 bg-white text-primary placeholder-primary shadow-md max-w-full resize-none min-h-[15vh] outline-none'
            name='message'
            aria-label='Message'
            placeholder='Message'
            value={fields.message}
            onChange={handleChange}
          />
        </div>

        <input
          type='submit'
          className='uppercase md:w-full w-[calc(100%_-_1rem)] md:mx-auto mx-2 rounded-md bg-white text-primary placeholder-primary border-none shadow-md py-4 text-lg px-10 hover:cursor-pointer active:bg-black mb-4 outline-none'
          value={loading ? 'Sending...' : (sent ? 'Sent' : 'Submit')}
          disabled={loading || sent}
        />
        <p className='text-sm p-3 w-full'>
          This site is protected by reCAPTCHA and the Google <a className='underline' href='https://policies.google.com/privacy' target='_blank' rel='noreferrer nofollow'>Privacy Policy</a> and <a className='underline' href='https://policies.google.com/terms' target='_blank' rel='noreferrer nofollow'>Terms of Service</a> apply.
        </p>
        {
          sent
            ? <p className='mt-4 text-lg'>Message has been sent.</p>
            : <p className='mt-4 text-lg text-error font-semibold'>{error}</p>
        }
      </form>
    </div>
  )
}

export default Contact
