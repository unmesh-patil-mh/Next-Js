// "use client"
// NEXT.JS ME BY DEFAULT SAB KUCH EK SERVER COMPONENT REHETA HAI ISLIYE HUMHE USE STATE , USE EFFECT ETC USE KARNE KE LIYE "USE CLIENT" LINKHNA PADTA HAI PAGE KE AAGE 

// import { useState , useEffect } from "react";
import fs from "fs/promises"
import Navbar from "@/component/Navbar"

export default function Home() {

  // const [count, setcount] = useState(0)

  // AGAR USE CLIENT HATA DE TO HUM CONSOLE LOG JO BHI KARENGE VO NAHI DIKHEGA HUMHE CROME KE TERMINAL ME KYUKI YE SERVER COMPONENT HAI TO VO APNE SERVER ME CONSOLE LOG KAREGA 
  // "USE CLIENT" AGAR NAHI USE KARENGE TO APNI HARR CHIZZ APNE SERVER SIDE PE LOG HOGI CLIENT SITE PE JANE KE JARURAT BHI NAHI PADEGI
  // AGAR NAVBAR CLIENT COMPONENT HAI AUR HUMHARA PAGE.JS SERVER COMPONENT PHIR BHI HUM APNE NAVBAR KO IMPORT KAR SAKTE HAI APNE PAGE.JS FILE ME

  // CLIENT AUR SERVER SITE SAMJNE KE LIYE EK EXAMPLE

  let a = fs.readFile("data.json")
  a.then(e => {console.log(e.toString())})

  return (
    
    <div className="text-center">
      <Navbar />
      
    {/* <div className="font-bold p-2">The Count is {count}</div> */}
    <div>
    {/* <button className="font-bold py-2 px-3 bg-gray-900 rounded-2xl" onClick={() => {setcount(count + 1)}}>Click Me</button> */}
    </div>
    </div>
  );
}
