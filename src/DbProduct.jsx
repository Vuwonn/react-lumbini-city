import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'

const DbProduct = () => {
    const [data, setData] = useState([])
    const navigate = useNavigate()

    const fetchdata = async () => {
        try {
            const res = await axios.get('https://dummyjson.com/users')
            setData(res.data.users)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchdata()
    }, [])

    return (
        <div className="min-h-screen bg-slate-100 p-6">

            <h1 className="text-2xl font-bold text-center mb-6">
                User Details
            </h1>

            <div className="max-w-5xl mx-auto bg-white rounded-lg shadow overflow-hidden">

                <table className="w-full border-collapse">

                    {/* Header */}
                    <thead>
                        <tr className="bg-blue-600 text-white">
                            <th className="p-3 text-left">
                                First Name
                            </th>

                            <th className="p-3 text-left">
                                Last Name
                            </th>

                            <th className="p-3 text-left">
                                Maiden Name
                            </th>

                            <th className="p-3 text-left">
                                Image
                            </th>

                            <th className="p-3 text-left">
                                Age
                            </th>

                            <th className="p-3 text-left">
                                Gender
                            </th>
                            <th className="p-3 text-center">
                                Email
                            </th>
                        </tr>
                    </thead>

                    {/* Body */}
                    <tbody>
                        {data.map((value) => (
                            <tr
                                key={value.id}
                                onClick={() =>
                                    navigate(`/users/${value.id}`)
                                }
                                className="border-b hover:bg-slate-100 cursor-pointer"
                            >

                                <td className="p-3">
                                    {value.firstName}
                                </td>

                                <td className="p-3">
                                    {value.lastName}
                                </td>

                                <td className="p-3">
                                    {value.maidenName}
                                </td>

                                <td className="p-3">
                                    <img
                                        src={value.image}
                                        alt={value.firstName}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                </td>

                                <td className="p-3">
                                    {value.age}
                                </td>

                                <td className="p-3 capitalize">
                                    {value.gender}
                                </td>
                                <td className="p-3 capitalize text-center">
                                    {value.email}
                                </td>

                            </tr>
                        ))}
                    </tbody>

                </table>

            </div>
        </div>
    )
}

export default DbProduct

