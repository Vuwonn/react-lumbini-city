
const KhanaCard = ({khana}) => {
  return (
    <div className="group w-72 overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-200 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:border-orange-400">
      <img src={khana.image} alt="" />
      <p>{khana.name}</p>
      <p>{khana.caloriesPerServing}</p>
      <p>{khana.rating}</p>
    </div>
  )
}

export default KhanaCard