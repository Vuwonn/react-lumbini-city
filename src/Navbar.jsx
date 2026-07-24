import { Link } from "react-router"
import "./App.css"
const Navbar = ({name}) => {
  return (
    <div className="text-red-900 flex  bg-green-500  p-5  justify-around h-14 w-full  text-2xl fixed z-10 items-center" >
        <div>
          LOGO HO YO
        </div>
        <div className="flex gap-10 ">
            <Link to="/">Home</Link>
           <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
            <Link to='/login'> <button className="bg-blue-500 rounded p-2">login</button></Link>
        </div>
    </div>
  )
}

export default Navbar