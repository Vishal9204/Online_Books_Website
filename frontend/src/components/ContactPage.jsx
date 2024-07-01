import React from 'react'
import books from '../../public/books.jpg'
function ContactPage() {
  return (
    <>
    <div className='mx-auto md:px-20 px-4 mt-40 container max-w-screen-2xl'>
        <div className=" flex flex-col md:flex-row">
        <div className='p-9 w-full rounded-xl shadow-md shadow-slate-600 bg-slate-200 md:w-1/2 h-96 '>
        <div className='space-y-3'>
            <h1 className='text-4xl font-semibold '>Contact Us !</h1>
            <p className=' text-lg font-medium '>If your are looking for help,Contact us at:</p>
            <p className='text-md font-medium'>Email: vishalgupta9204@gmail.com</p>
            <p className='text-md font-medium'>Phone: +91-7903424875</p>

        </div>
        </div>
        <div className='w-full flex items-center justify-center md:w-1/2 h-96'>
        <img src={books} className=' h-72 w-72'/>
        </div>
        </div>

    </div>
    </>
  )
}

export default ContactPage
