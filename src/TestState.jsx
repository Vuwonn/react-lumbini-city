import { useEffect, useState } from "react"
import axios from "axios"
import Apicard from "./Apicard"

const TestState = () => {
    // let count = 0

    // const increase = ()=>{
    //     count = count+1
    //     console.log(count);
        
    // }
    const [data,setData]= useState([])
//fetching data from api 
  const fetchdata = async()=>{
    try {
        const res =  await axios.get("https://dummyjson.com/products")
        setData(res.data.products)
  
    } catch (error) {
        console.log(error);
         
    }

  }
  //useeffect
 useEffect(()=>{
    fetchdata()
 },[])




  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
{
   data.map((value)=>{
    return(
        <Apicard products={value} key={value.id} />
    )
   }) 
}
  


    </div>
  )
}

export default TestState