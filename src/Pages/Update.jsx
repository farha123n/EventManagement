import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../Component/Provider/AuthProvider';
import Swal from 'sweetalert2';

const Update = () => {


    const [showDropdown, setShowDropdown] = useState(false);
    const { user } = useContext(AuthContext)
    const data = useLoaderData()
    const { _id, title, category, deadLine, description, budget } = data
    const [cat, setCategory] = useState(category)
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const updateTitle = form.title.value
        const updateDescription = form.description.value
        const updateDate = form.date.value
        const updateBudget = form.budget.value
        const upName = form.name.value
        const upEmail = form.email.value
        const updatedTask = {
            title: updateTitle, description: updateDescription,
            deadLine: updateDate, budget: updateBudget, name: upName,
            email: upEmail
        }
        fetch(`https://my-freelance-server.vercel.app/tasks/${_id}`, {
            method: 'PUT',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(updatedTask)

        }).then(res => res.json()).then(data => {
            if (data.modifiedCount) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log("updated data", data)
            }

        })

    }

    return (
         <div className='bg-primary p-3'>
            <p className='text-center text-highlight text-3xl bg-black md:w-1/3 mx-auto p-2 my-4'>Update Task</p>
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
                        name='title'
                        type="text"
                        placeholder="Title"
                        required
                        defaultValue={title}
                        className="w-full px-4 py-2 text-white placeholder-white bg-[#1f1f1f] border border-[#888888] rounded-lg focus:outline-none focus:border-[#ffcc00]"
                    />

                    <p className='text-white'>Dead Line</p>
                    <input
                        name="date"
                        type="date"
                        defaultValue={deadLine}
                        placeholder="Deadline"
                        className="w-full px-4 py-2 text-white placeholder-white bg-[#1f1f1f] border border-[#888888] rounded-lg focus:outline-none focus:border-[#ffcc00]"
                    />
                    <input
                        name="budget"
                        type="number"
                        placeholder="budget"
                        defaultValue={budget}
                        required
                        className="w-full px-4 py-2 text-white placeholder-white bg-[#1f1f1f] border border-[#888888] rounded-lg focus:outline-none focus:border-[#ffcc00]"
                    />
                    <textarea
                        name="description"
                        rows="4"
                        cols="5"
                        defaultValue={description}
                        placeholder="description..."
                        className="w-full px-4 py-2 text-white placeholder-white bg-[#1f1f1f] border border-[#888888] rounded-lg focus:outline-none focus:border-[#ffcc00]"

                    ></textarea>
                    <input
                        readOnly
                        name="name"
                        type="text"
                        placeholder="Name"
                        required
                        defaultValue={user?.displayName || ""}
                        className="w-full px-4 py-2 text-white placeholder-white bg-[#1f1f1f] border border-[#888888] rounded-lg focus:outline-none focus:border-[#ffcc00]"
                    />
                    <input
                        readOnly
                        name="email"
                        type="email"
                        placeholder="Email"
                        defaultValue={user?.email || ""}
                        required
                        className="w-full px-4 py-2 text-white placeholder-white bg-[#1f1f1f] border border-[#888888] rounded-lg focus:outline-none focus:border-[#ffcc00]"
                    />
                    <button
                        type="submit"
                        className="w-full bg-[#ffcc00] text-black py-2 rounded-lg font-semibold hover:bg-yellow-400 transition"
                    >Update task</button>
                </form>
            </div>
        </div>
</div>
       
    );
};

export default Update;