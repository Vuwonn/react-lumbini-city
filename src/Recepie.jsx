import axios from "axios"
import { useEffect, useState } from "react"
import KhanaCard from "./KhanaCard"


//usestate useEffect  Axios

const Recepie = () => {
    //step 1
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
    const [search,setSearch] = useState("")


    //step2  function to fetch data
        // - try ra catch
        // - asynnc & await
        // -api ko endpoint
    const fetchdata = async()=>{
        try {
            const res = await axios.get("https://dummyjson.com/recipes")
            setData(res.data.recipes)
            
        } catch (error) {
            console.log(error);   
            
        }
        finally{
            setLoading(false)
        }
    }
    //step 3  useeffect to fetch data
    // -useeffce ko syntax
    // - dependency array  

    useEffect(()=>{
        // actual code yeha lekhenxa
        fetchdata()

    },[])

    //setp 4 mapping data inside div
    // -data.map    (data comming from state)

    if(loading){
        return <h1 className="text-5xl flex h-screen items-center justify-center text-red-400">loading</h1>
    }

    const filtereddata = data.filter((value)=>value.name.toLowerCase().includes(search.toLowerCase()))



  return (
    <div>
        <input type="text" placeholder="search your food" className="p-4 m-6 border-2 " value={search}  onChange={(e)=>setSearch(e.target.value)} />
    <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
       
        {
            filtereddata.map((value)=>{
                return(
                    <KhanaCard  khana={value} key={value.id}/>

                )
            })
        }
        </div>
        </div>
  )
}

export default Recepie