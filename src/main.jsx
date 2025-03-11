import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeLayouts from './Layouts/HomeLayouts.jsx';
import ExploreGears from './components/ExploreGears.jsx';
import AddEquipment from './components/AddEquipment.jsx';
import MyCollection from './components/MyCollection.jsx';
import Home from './components/Home.jsx';
import Login from './authenticationPage/Login.jsx';
import Register from './authenticationPage/Register.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import PrivateRoute from './privateRoute/PrivateRoute.jsx';
import EquipmentDetails from './components/EquipmentDetails.jsx';
import noData from './assets/nodata.jpg'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts></HomeLayouts>,
    errorElement: 
    <div className='min-h-screen flex justify-center items-center'>
      <img className='w-3/5' src={noData} alt="" />
    </div>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'explore',
        element: <ExploreGears></ExploreGears>,
        loader: () => fetch('http://localhost:5000/equipment')
      },
      {
        path: 'addEquipment',
        element:
          <PrivateRoute>
            <AddEquipment></AddEquipment>
          </PrivateRoute>
      },
      {
        path: '/equipment/details/:id',
        element: <PrivateRoute>
          <EquipmentDetails></EquipmentDetails>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/equipment/${params.id}`)
      },
      {
        path: 'myCollection',
        element:
          <PrivateRoute>
            <MyCollection></MyCollection>
          </PrivateRoute>,

      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'resister',
        element: <Register></Register>
      },
    ]
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
