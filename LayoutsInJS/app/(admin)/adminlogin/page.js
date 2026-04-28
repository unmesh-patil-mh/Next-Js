import React from 'react'

const page = () => {
  return (
    <div>
      Hii I am Admin Login
    </div>
  )
}

export default page

// TO GIVE TITLE TO OUR INDIVIDUAL PAGE IT IS USED 

export async function generateMetaData( {params} ){
  return {
    title : "Admin Login Page"
  }
}
