import React from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod'; // or 'zod/v4'

const schema = z.object({
  Name: z.string()
  .min(3,"2 vanda dherai hunu pareo")
  .max(10,"max 100 word"),

  Email: z.string()
  .min(2,"min 2 ota hunu aryo ")
  .max(30,"must be less than 30"),

  Description:z.string()
  .min(2,"min 2 ota hunu aryo ")
  .max(30,"must be less than 30"),


});

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
  resolver: zodResolver(schema),
});
  return (
    <div>
      <div className="flex flex-col sm:flex-row w-full h-180 text-white overflow-hidden">
        <div className="w-[40%] h-full text-white z-999 flex items-center justify-center border bg-gray-500">
          <h1 className='text-4xl'>contact</h1>
        </div>
        <div className="w-[60%] h-full text-black z-999 flex justify-center items-center border bg-gray-200">

          <form onSubmit={handleSubmit((data) => console.log(data))} className='flex flex-col gap-10 '>
            <label htmlFor="name">Name</label>
            <input {...register('Name')} className='outline-none placeholder:text-gray-500' type="text"  placeholder='Enter your name' />
            {errors.Name?.message && <p className='text-red-600'>{errors.Name?.message}</p>}



            <label htmlFor="email">Email</label>
            <input {...register('Email')} className='outline-none placeholder:text-gray-500' type="email" 
             placeholder='Enter your Email' />
            {errors.Email?.message  && <p className='text-red-600'>{errors.Email?.message}</p>}



            <label htmlFor="description">Description</label>
            <textarea {...register('Description')} className='outline-none placeholder:text-gray-500' placeholder='Enter Your Message' />
            {errors.Description?.message && <p className='text-red-600'>{errors.Description?.message}</p>}


            <button className='border px-2 py-2 cursor-pointer' type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
