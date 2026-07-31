import axios from "axios"
import {  useEffect, useState} from "react"
import DbProductCard from "./DbProductCard"
const DbProduct = () => {
    const[data,setData]=useState([])


    const fetchData = async()=>{
        try {
            const res = await axios.get("http://localhost:8000/get-product")
           setData(res.data.data)
            
        } catch (error) {
            console.log(error)
            
        }

    }
useEffect(()=>{
fetchData()
},[])


  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">

{
    data.map((value)=>{
        return(
            <DbProductCard products={value} key={value._id} />
        )

    })
}
    </div>
  )
}

export default DbProduct