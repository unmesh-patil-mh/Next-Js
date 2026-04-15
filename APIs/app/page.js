"use client"
import Image from "next/image";

export default function Home() {
  const handleclick = async() => {
    let data ={
      name: "Unmesh",
      Role: "Coder"
    }
    let a = await fetch("/api/add", {method: "POST" , headers:{
     "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
  })
    let res = await a.json()
    console.log(res)
  }
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-xl font-bold">NextJs api route demo</h1>
      <button onClick={handleclick}>Click me</button>
    </div>
  );
}
