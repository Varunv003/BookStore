import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Login!</h3>
                    {/* Email */}
                    <div className='mt-4 space-y-2'>
                        <span>Email</span>
                        <br />
                        <input type="email" placeholder='Enter your Email'
                        className='w-80 px-3 py-1 border rounded-md outline-none' />
                    </div>
                    {/* password */}
                    <div className='mt-5 space-y-2'>
                        <span>Password</span>
                        <br />
                        <input type="text" placeholder='Enter your Password'
                        className='w-80 px-3 py-1 border rounded-md outline-none' />
                    </div>
                    {/* button */}
                    <div className='flex justify-around mt-6'>
                        <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Login</button>
                        <p className='mt-1'>Not Registered? <Link to="/signup" className='underlien text-blue-500 cursor-pointer'>Signup</Link></p>{' '}
                    </div>
                    
                </div>
            </dialog>
        </div>
    )
}

export default Login