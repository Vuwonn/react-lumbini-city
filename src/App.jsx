import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Home";
import Recepie from "./Recepie";
import TestState from "./TestState";
import Layout from "./Layout";
import Login from "./Login";
import Register from "./Register";
import DbProduct from "./DbProduct";
import Khanabitra from "./Khanabitra";
import KhanaCard from "./KhanaCard";
import Addcard from "./Addcard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="about" element={<Recepie />} />

          <Route path="contact" element={<TestState />} />

          <Route path="ourproduct" element={<DbProduct />} />

          <Route path="khanacard" element={<KhanaCard />} />

          <Route path="khanabitra/:id" element={<Khanabitra />} />

          <Route path="addcard" element={<Addcard />} />

          <Route path="login" element={<Login />} />

          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
