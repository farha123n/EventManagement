import { createBrowserRouter } from "react-router";
import Root from "../Component/Root";
import Home from "../Pages/Home";
import AddTask from "../Component/AddTask";
import MyPostedTask from "../Component/MyPostedTask";
import Browstask from "../Component/Browstask";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import PrivateRoute from "../Component/Provider/PrivateRoute";
import TaskDetails from "../Pages/TaskDetails";
import Update from "../Pages/Update";
import Error from "../Pages/Error";
import Loader from "../Pages/Loader";


export const router=createBrowserRouter([
    {
        path:'/',Component:Root,
        errorElement:<Error></Error>,
        children:[
            {
                index:true,
                loader:()=>fetch('https://my-freelance-server.vercel.app/sortedTask'),
               
                hydrateFallbackElement:<Loader></Loader>,
                element:<Home></Home>
            },
            {
                path:'/addTask' ,
                element:<PrivateRoute><AddTask></AddTask></PrivateRoute>
            },
            {
                path:'/myPostTask',element:<PrivateRoute><MyPostedTask></MyPostedTask></PrivateRoute>
            },
            {
                path:'/browsTask',
                 loader:()=>fetch('https://my-freelance-server.vercel.app/tasks'),
                 hydrateFallbackElement:<Loader></Loader>,
                element:<Browstask></Browstask>
            },
            {
                path:'/register',element:<Register></Register>
            },
            {
              path:"/tasks/:id",
              loader:({params})=>fetch(`https://my-freelance-server.vercel.app/tasks/${params.id}`),
              hydrateFallbackElement:<Loader></Loader>,
              element:<PrivateRoute><TaskDetails></TaskDetails></PrivateRoute>
            },
            {
                path:'/login',element:<Login></Login>
            },
            {
                path:'tasks/update/:id',
                loader:({params})=>fetch(`https://my-freelance-server.vercel.app/tasks/${params.id}`),
               hydrateFallbackElement:<Loader></Loader>,
                element:<PrivateRoute><Update></Update></PrivateRoute>
            }
        ]
    }
])