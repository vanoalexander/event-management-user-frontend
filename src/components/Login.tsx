import React from 'react'

const Login = () => {
    return (
        <div className='m-48'>
            <p className='text-center font-extrabold text-2xl m-5'>LOGIN</p>
            <form className="max-w-sm mx-auto md:border md:border-gray-700 md:rounded-2xl md:p-10">
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="name@flowbite.com" required />
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900">Your password</label>
                    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
                </div>
                <button type="submit" className="text-white bg-orange-500 hover:bg-orange-400 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
            </form>
        </div>
    )
}

export default Login