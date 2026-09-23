import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import { Loader } from 'lucide-react'

const Products = () => {

  const { id } = useParams()

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchdata = async () => {

    try {

      setLoading(true)

      const res = await axios.get(
        `https://dummyjson.com/users/${id}`
      )

      setData(res.data)

    } catch (error) {

      console.log(error)

    } finally {

      setLoading(false)

    }
  }

  useEffect(() => {
    fetchdata()
  }, [id])


  // Loading
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-3">

        <Loader className="animate-spin text-blue-600" size={30} />

        <h2 className="text-xl">
          Loading...
        </h2>

      </div>
    )
  }


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">

      <div className="bg-white w-full max-w-3xl p-6 rounded-lg shadow">

        <div className="grid md:grid-cols-2 gap-8 items-center">


          {/* Image */}
          <div className="flex justify-center">

            <img
              src={data.image}
              alt={data.firstName}
              className="w-64 h-64 rounded-lg object-cover"
            />

          </div>


          {/* Details */}
          <div className="space-y-3">

            <div>
              <p className="text-gray-500">
                Name
              </p>

              <h1 className="text-2xl font-bold">
                {data.firstName} {data.lastName}
              </h1>
            </div>


            <div>
              <p className="text-gray-500">
                Maiden Name
              </p>

              <p className="font-semibold">
                {data.maidenName}
              </p>
            </div>


            <div>
              <p className="text-gray-500">
                Age
              </p>

              <p className="font-semibold">
                {data.age}
              </p>
            </div>


            <div>
              <p className="text-gray-500">
                Gender
              </p>

              <p className="font-semibold capitalize">
                {data.gender}
              </p>
            </div>


            <div>
              <p className="text-gray-500">
                Email
              </p>

              <p className="font-semibold">
                {data.email}
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Products

