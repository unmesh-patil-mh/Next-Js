"use client"
import { submitaction } from "@/actions/form";
import { useRef } from "react";

export default function Home() {

  let ref = useRef();

// Niche ka kaam hum actions folder me form.js me karenge

  // const submitaction = async (e) => {
  //   "use server"
  //   console.log(e.get("name") , e.get("add"))
  //   let a = await fs.writeFile("Unmesh.txt",`Name is ${e.get("name")} and Address is ${e.get("add")}`)
  //   let b = fs.readFile("unmesh.txt");
  //   console.log(b)
  // }
  // MATLAB YE FUNCTION JAB CHALEGA TAB SARRA KAM SERVER ME HOGA

  return (
    <div className="w-2/3 m-auto p-5">
      <form ref={ref} action={ (e) => {submitaction(e); ref.current.reset()}}>
        <div className="p-2">
          <label htmlFor="name">Name</label>
          <input name="name" id="name" className="text-black bg-white ml-5" type="text" />
        </div>
        <div className="p-2">
          <label htmlFor="add">Address</label>
          <input name="add" id="add" className="text-black bg-white ml-5" type="text" />
        </div>
        <div className="p-2">
          <button className="bg-gray-800 rounded-2xl p-2">Submit</button>
        </div>
      </form>
    </div>
  );
}
