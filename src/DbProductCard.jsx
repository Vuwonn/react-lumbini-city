const DbProductCard = ({products}) => {
  return (
    <div className='group w-72 overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-200 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:border-orange-400'>
        <img src={products.image} alt="" />
        <p>{products.title}</p>
        <p>{products.description}</p>
        <p>{products.price}</p>
        <p>{products.discount}</p>

    </div>
  )
}

export default DbProductCard