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

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts></HomeLayouts>,
    children: [
      {
        path: 'explore',
        element: <ExploreGears></ExploreGears>
      },
      {
        path: 'addEquipment',
        element: <AddEquipment></AddEquipment>
      },
      {
        path: 'collection',
        element: <MyCollection></MyCollection>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
