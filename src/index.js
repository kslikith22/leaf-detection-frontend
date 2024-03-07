import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App';
import About from "./Components/About"
import Server from './Components/Server';

import { createBrowserRouter,RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  { 
    path : '/',
    element :<App/>,
    errorElement:<h1>Page not found</h1>
  
  
  },
  {
    path : '/about',
    element :<About/>
  },{

    path :"/server",
    element :<Server/>
  }

  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
