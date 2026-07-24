import { Link } from 'react-router'

const Register = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full">
        <form className='flex flex-col gap-2 shadow-2xl bg-amber-50 p-10 '>
           <label> Email</label>
            <input type="text" placeholder='enter your email' className='p-4 border-2'/>
            
            <label>Password</label>
            <input type="text" placeholder='enter your password' className='p-4 border-2'/>

            <label>Address</label>
            <input type="text" placeholder='enter your Address' className='p-4 border-2'/>

            <label> Phone Number</label>
            <input type="text" placeholder='enter your Number' className='p-4 border-2'/>
          <div>  <button  className="bg-blue-600  p-4 "> Register</button>
            <Link to="/register" >Login</Link> </div>
           
        </form>
    </div>
  )
}

export default Register