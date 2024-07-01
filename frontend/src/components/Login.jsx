import React from 'react'

function Login() {
    return (
        <div>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Login!</h3>
                    <div >
                        <div className = 'mt-4 flex flex-col'>
                        <span>Email</span>
                        <input placeholder='Enter your email' ></input>
                        </div>
                        <div className = 'mt-7 flex flex-col'>
                        <span>Password</span>
                        <input placeholder='Enter your password'></input>
                        </div>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default Login
