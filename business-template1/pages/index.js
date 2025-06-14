import Image from "next/image";
import Navbar from "./components/Navbar";
import { Edu_NSW_ACT_Hand_Cursive } from "next/font/google";


const eduFont = Edu_NSW_ACT_Hand_Cursive({
    weight: "400",
    subsets: ["latin"],
  });

export default function Home() {
  return (
    <Navbar />
  );
}
