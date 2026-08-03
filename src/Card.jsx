   
const Card = ({products}) => {
  return (
    <div className="w-72 flex hover:-translate-y-2 transition flex-col gap-3 shadow-2xl border rounded-lg p-4  ">
        <img src={products.image} alt=""  className="h-48 w-full object-cover rounded"/>
        <p className="text-xl font-bold">{products.title}</p>
        <p>{products.rating} ghfjas</p>
        <p className="text-orange-600"> $ {products.price}</p>
    </div>
  )
}

export default Card