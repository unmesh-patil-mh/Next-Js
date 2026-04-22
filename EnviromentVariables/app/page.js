"use client"

export default function Home() {
  // console.log("ID is: ",process.env.ID)
  // console.log("Secret is ",process.env.SECRET)
  return (
   <div>
    This is main Page . The ID is {process.env.NEXT_PUBLIC_ID} and THe Secret is {process.env.NEXT_PUBLIC_SECRET}
    {/* IT Will Work on server site if we use use client it will not work to isse client side me work karvane ke liye we add NEXT_PUBLIC_ID */}
   </div>
  );
}
