import React from 'react'
import image from '../../public/books.jpg'
function Banner() {
    return (
        <>
            <div className="flex flex-col md:flex-row mx-auto md:px-20 px-4 container max-w-screen-2xl mb-40">
                <div className="w-full md:w-1/2">
                    <div className="mt-32">
                        <div className="space-y-10">
                            <h1 className="text-3xl font-bold">Hello, Welcome to learn <span className="text-pink-500">something new Everyday!</span></h1>
                            <p>This website welcomes you to purchase books and grow your knoledge everyday. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, veniam veritatis corrupti nisi rem molestiae sed reiciendis optio alias dolor adipisci quia sint voluptatum dolorum repellendus corporis suscipit vitae quae?</p>
                            <label className="input input-bordered flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                    <path
                                        d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                </svg>
                                <input type="text" className="grow" placeholder="Email" />
                            </label>
                            <button className="btn btn-outline btn-secondary">Secondary</button>
                        </div>
                    </div>
                </div>
                <div className=" marker:w-full md:w-1/2">
                
                <img src={image} className="mt-32 h-80 w-80 mx-auto "/>
                
                </div>
            </div>

        </>
    )
}

export default Banner ;
