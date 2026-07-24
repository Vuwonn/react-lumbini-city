// import Card from "./Card"
// import Hero from "./Hero"
// import Navbar from "./Navbar"
import Recepie from "./Recepie"
// import TestState from "./TestState"
import Navbar from './Navbar';
import Hero from './Hero';
import TestState from "./TestState";

const Home = () => {
// const products = [{
//   id:1,
//   image:"https://img.drz.lazcdn.com/static/np/p/5d725a6d46773715af11f20a3e85caee.jpg_200x200q80.jpg_.avif",
//   title:"product1",
//   rating:"5 star",
//   price:1200
// },
// {
//   id:2,
//   image:"https://img.drz.lazcdn.com/static/np/p/4aafbd332c99c34117106e1680e79bf9.jpg_200x200q80.jpg_.avif",
//   title:"product2",
//   rating:"0 rating",
//   price:300
// },
// {
//   id:3,
//   image:"https://img.drz.lazcdn.com/static/np/p/077916f622d51a08b03250457413486b.jpg_200x200q80.jpg_.avif",
//   title:"product 3",
//   rating:"100 rating",
//   price:0.23
// }
// ]

  return (
    <div>
      <Navbar name={name}/>
      <Hero/>

      <TestState/>
      <Recepie/>
   
    </div>
  )
}

export default Home