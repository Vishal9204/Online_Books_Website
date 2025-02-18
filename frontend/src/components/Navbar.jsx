import React , {useState , useEffect} from 'react'
import Login from './Login'


function Navbar() {
    const navItems = (
        <>
            <li>
                <a href = "/">Home</a>
            </li>
            <li>
                <a href = "/Courses">Courses</a>
            </li>
            <li>
                <a href = "/Contact">Contact</a>
            </li>
            <li>
                <a href = "/About">About</a>
            </li>
        </>
    )

    const [sticky , setSticky] = useState(false) ;
    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 0){
                setSticky(true) ;
            }
            else setSticky(false) ;
        }
        window.addEventListener('scroll' , handleScroll) ;

        return () => {
            window.removeEventListener('scroll' , handleScroll) ;
        }
    }, [])
    return (
        <>
            <div className= {`mx-auto md:px-20 px-4 container max-w-screen-2xl fixed top-0 left-0 right-0 
            ${
                sticky ?  "sticky-navbar shadow-md bg-base-200 duration-300 transition-all ease-in-out" : "" 
            }`}
            >
                <div className="navbar ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                {navItems}
                            </ul>
                        </div>
                        <a className=" font-bold text-xl">BookStore</a>
                    </div>

                    <div className="navbar-end space-x-3">
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                {navItems}
                            </ul>
                        </div>
                        <div>
                            <label className="px-2 py-1 hover:border rounded-md flex items-center gap-2">
                                <input type="text" className="grow outline-none" placeholder="Search" />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        fillRule="evenodd"
                                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                        clipRule="evenodd" />
                                </svg>
                            </label>
                        </div>
                        <div>
                            <label className="flex cursor-pointer gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="5" />
                                    <path
                                        d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                                </svg>
                                <input type="checkbox" value="synthwave" className="toggle theme-controller" />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                </svg>
                            </label>
                        </div>
                        <div >
                            <a className="text-white cursor-pointer bg-black px-3 py-2 rounded-xl "
                            onClick = {()=> {
                                document.getElementById("my_modal_1").showModal() ;
                            }} >Login</a>
                            <Login />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
