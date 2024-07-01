import React , { useState, useEffect } from 'react'
import Cards from './Cards'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Course() {
  //how to remove cors error
  // ans : npm install cors and add this code in your backend app.js file   
  const [book, setBook] = useState([]) ;

  useEffect(() => {
    axios.get('http://localhost:4001/book')
    .then((res) => {
      setBook(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <>
      <div className="mx-auto md:px-20 px-4 container max-w-screen-2xl">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="font-semibold text-2xl">
            We are delighted to have you <span className="text-pink-500">Here!</span>
          </h1>
          <p className="mt-12 text-balance">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium sapiente cumque deserunt, magni nulla sint soluta iure ratione dolore aperiam, illum tempora dolorem officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, veniam. Cumque molestiae nulla mollitia qui possimus aspernatur velit voluptatem, a officiis quisquam minima eum voluptatum harum. Natus minima provident recusandae?rem eius doloribus officiis, possimus sunt.
          </p>
          <Link to="/">
            <button className="bg-pink-500 mt-6 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-3 mt-12">
          {
            book.map((item) => (
              <Cards key={item.id} Name={item.name} Title={item.title} Img={item.image} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Course
