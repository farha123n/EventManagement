import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './Provider/AuthProvider';
import { MdDeleteForever } from 'react-icons/md';
import { CiViewBoard } from 'react-icons/ci';
import { FaRegEdit } from 'react-icons/fa';
import Bit from './Bit';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const MyPostedTask = () => {
    const { user, bitProvider } = useContext(AuthContext);
    const [showBid, setShowBid] = useState(false)
    const email = user?.email;

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        if (email) {
            fetch(`https://my-freelance-server.vercel.app/tasks/email/${email}`)
                .then(res => res.json())
                .then(data => {
                    setTasks(data);
                    console.log('data is', data);
                });
        }
    }, [email]);
    const handleDelete = (id) => {
        Swal
        .fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {

            if (result.isConfirmed) {
                fetch(`https://my-freelance-server.vercel.app/tasks/${id}`,{
                    method:'DELETE',
                }).then(res=>res.json).then(data=>{
                    if(data.deletedCount){
                       
                         Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
                    }
                     const remainingTask=tasks.filter(t=>t._id!==id)
                         setTasks(remainingTask)
                })
               
            }
        })
        
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Budget</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task, index) => (
                            <tr key={task._id} className="bg-base-200">
                                <td>{index + 1}</td>
                                <td>{task.title}</td>
                                <td>{task.category}</td>
                                <td>${task.budget}</td>
                                <td>
                                    <div className="join join-vertical">
                                        <button
                                            onClick={() => setShowBid(!showBid)}
                                            className='bg-blue-500 text-white px-4 py-2 mt-3 rounded'
                                        >
                                            {showBid ? 'Hide Bids' : 'View Bids'}
                                        </button>
                                        {showBid && <Bit tid={task._id.toString()}></Bit>}
                                        <Link to={`/tasks/update/${task._id}`}> <button className="btn join-item"><FaRegEdit /></button></Link>
                                        <button onClick={() => { handleDelete(task._id) }} className="btn join-item"><MdDeleteForever /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPostedTask;
