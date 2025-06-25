import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from './Provider/AuthProvider';

const AddTask = () => {
    const { user } = useContext(AuthContext)
    const [showDropdown, setShowDropdown] = useState(false);
    const [category, setCategory] = useState('not selected')
    console.log(category)
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const title = form.title.value
        const description = form.description.value
        const date = form.date.value
        const budget = form.budget.value
        const name = form.name.value
        const email = form.email.value
        const task = {
            title: title, category: category, description: description, deadLine: date, budget: budget,
            name: name, email: email
        }
        console.log(task)

        fetch(`https://my-freelance-server.vercel.app/tasks`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(task)
        }).then(res => res.json()).then(data => {
            toast.success('data inserted')
            form.reset();
            setCategory('not selected')
        })
    }

    return (
        <div className='bg-primary p-3'>
            <p className='text-center text-highlight text-3xl bg-black md:w-1/3 mx-auto p-2 my-4'>Add Task</p>
            <div className='bg-primary md:p-10 md:flex  md:justify-between'>
                <div className=' border-2 '>
                    <div className="md:relative w-full md:inline-block md:min-h-screen text-left group">

                        <button onClick={() => setShowDropdown(prev => !prev)}
                             className="px-4 py-2 bg-black text-highlight rounded-md md:absolute md:left-0 md:top-0   md:w-36">
                            category
                        </button>
                        <p className='md:absolute md:left-4 md:top-12 bg-highlight text-black p-2'>{category}</p>


                        {showDropdown && (
                            <div className="absolute md:left-35  md:top-0 top-72  mt-2 w-full md:w-40 bg-white border rounded-md shadow-lg z-10">
                                <button onClick={() => { setCategory("Web Developer"); setShowDropdown(false); }} className="block px-4 py-2 text-gray-700 hover:bg-blue-300 hover:text-yellow-800">Web Developer</button>
                                <button onClick={() => { setCategory("Writing"); setShowDropdown(false); }} className="block px-4 py-2 text-gray-700 hover:bg-blue-300 hover:text-yellow-800">Writing</button>
                                <button onClick={() => { setCategory("Marketing"); setShowDropdown(false); }} className="block px-4 py-2 text-gray-700 hover:bg-blue-300 hover:text-yellow-800">Marketing</button>
                            </div>
                        )}
                    </div>
                </div>
                <div className='bg-black p-10 w-full md:w-1/2 border-2 border-red-400 '>
                    <form onSubmit={handleSubmit} className="space-y-4 "
                    >
                        <input
                            name="title"
                            type="text"
                            placeholder="Title"
                            required
                            className="w-full px-4 py-2 text-white placeholder-white bg-[#1f1f1f] border border-[#888888] rounded-lg focus:outline-none focus:border-[#ffcc00]"
                        />

                        <p className='text-white'>Dead Line</p>
                        <input
                            name="date"
                            type="date"
                            placeholder="Deadline"
                            className="w-full px-4 py-2 text-white placeholder-white bg-[#1f1f1f] border border-[#888888] rounded-lg focus:outline-none focus:border-[#ffcc00]"
                        />
                        <input
                            name="budget"
                            type="number"
                            placeholder="budget"
                            required
                            className="w-full px-4 py-2 text-white placeholder-white bg-[#1f1f1f] border border-[#888888] rounded-lg focus:outline-none focus:border-[#ffcc00]"
                        />
                        <textarea
                            name="description"
                            rows="4"
                            cols="5"
                            placeholder="description..."
                            className="w-full px-4 py-2 text-white placeholder-white bg-[#1f1f1f] border border-[#888888] rounded-lg focus:outline-none focus:border-[#ffcc00]"

                        ></textarea>
                        <input
                            readonly
                            name="name"
                            type="text"
                            placeholder="Name"
                            required
                            value={user?.displayName || ""}
                            className="w-full px-4 py-2 text-white placeholder-white bg-[#1f1f1f] border border-[#888888] rounded-lg focus:outline-none focus:border-[#ffcc00]"
                        />
                        <input
                            readOnly
                            name="email"
                            type="email"
                            placeholder="Email"
                            value={user?.email || ""}
                            required
                            className="w-full px-4 py-2 text-white placeholder-white bg-[#1f1f1f] border border-[#888888] rounded-lg focus:outline-none focus:border-[#ffcc00]"
                        />
                        <button
                            type="submit"
                            className="w-full bg-[#ffcc00] text-black py-2 rounded-lg font-semibold hover:bg-yellow-400 transition"
                        >Add task</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddTask;