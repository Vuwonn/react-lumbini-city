import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

const User = () => {
    const [data,setData]= useState([])

    useEffect(()=>{
        const fetchUser = async()=>{
        try {
                const res = await axios.get("http://localhost:8000/getusers")
                setData(res.data.data)
            
        } catch (error) {
            console.log(error);
            
        }

    }
    fetchUser()
    },[])

  return (
    <div className="mt-14">
        <table>
            <tr key="">
                <th>Sn</th>
                <th>Name</th>
                <th>fullName</th>
                <th>Address</th>
            </tr>

                {data.map((value)=>{
                    return(
                       <tr key={value.id}>
                        <td>
                            {value.id}
                        </td>
                        <td>
                            {value.fullName}
                        </td>
                        <td>
                            {value.address}
                        </td>
                       </tr>
                    )
                })}

        </table>

    </div>
  )
}

export default User