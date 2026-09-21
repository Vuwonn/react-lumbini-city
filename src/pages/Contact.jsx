import React from 'react'
import { useForm } from 'react-hook-form';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div>
      <div className="flex flex-col sm:flex-row w-full h-180 text-white overflow-hidden">
<div className="w-[40%] h-full text-white z-999 flex items-center justify-center border bg-gray-500">
<h1 className='text-4xl'>contact</h1>
</div>
<div className="w-[60%] h-full text-black z-999 flex justify-center items-center border bg-gray-200">

<form onSubmit={handleSubmit((data) => console.log(data))} className='flex flex-col gap-10 '>
<label htmlFor="name">Name</label>
<input {...register('Name', { required: true })} className='outline-none placeholder:text-gray-500' type="text" name='name' id='name' placeholder='Enter your name' />
{errors.Name && <p className='text-red-600'>Name is required.</p>}
<label htmlFor="email">Email</label>
<input {...register('Email', { required: true })} className='outline-none placeholder:text-gray-500' type="email" name='email' id='email' placeholder='Enter your Email' />
{errors.Email && <p className='text-red-600'>Email is required.</p>}
<label htmlFor="description">Description</label>
<textarea {...register('Description', { required: true })} className='outline-none placeholder:text-gray-500' name='description' id='description' placeholder='Enter Your Message'/>
{errors.Description && <p className='text-red-600'>Description is required.</p>}
<button className='border px-2 py-2 cursor-pointer' type='submit'>Submit</button>
</form>
</div>
</div>
    </div>
  )
}

export default Contact
