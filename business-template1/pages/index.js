import Image from "next/image";
import Navbar from "./components/Navbar";
import HomePage from "./components/Home";
import AboutUs from "./components/About";
import MenuPage from "./components/Menu";


export default function Home() {
  return (
    <>

    <Navbar/>
    <HomePage/>
    <AboutUs/>
    <MenuPage/>
    </>

  )

  
}
