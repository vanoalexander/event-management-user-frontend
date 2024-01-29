import React from 'react'

const Signup = () => {
    return (
        <div className='m-40'>
            <h2 className='text-center font-extrabold text-2xl m-5'>Sign Up</h2>
            <form>
                <div className="mb-6">
                    <div className='mb-6'>
                        <label className="block mb-2 text-sm font-medium text-gray-900">Username</label>
                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="John" required />
                    </div>
                    <div className='mb-6'>
                        <label className="block mb-2 text-sm font-medium text-gray-900">Email address</label>
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="john.doe@company.com" required />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="•••••••••" required />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900">Confirm password</label>
                        <input type="password" id="confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="•••••••••" required />
                    </div>
                    <button type="submit" className="text-white bg-orange-500 hover:bg-orange-400 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Signup