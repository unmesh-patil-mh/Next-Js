"use client"
import React from 'react'

const page = () => {
  return (
    <div>
      <div className="container">
        Hii this is Container using style jsx

        {/* if we want style jsx as global just do
            <style jsx global>
        */}
        <style jsx>
            {`
                .container{
                    background-color: red;
                    color: white;
                }
            `}
        </style>
      </div>
      <div className="container">
        Hii The above container style will not be applied here because it is Highlt localized
      </div>
    </div>
  )
}

export default page
