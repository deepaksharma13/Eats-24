import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header'
import Body from './components/Body'
import About from './components/About'
import Contact from './components/ContactUs'
import Error from './components/Error'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
//import SwiggyMart from "./components/SwiggyMart"


const SwiggyMart = lazy(()=> import ("./components/SwiggyMart"))

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet/>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[{
          path:"/",
          element:<Body />
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/contact",
      element:<Contact/>
    },
    {
      path:"/SwiggyMart",
      element: <Suspense fallback={<h1>Loading....</h1>}><SwiggyMart/></Suspense> 
    },
    {
      path:"/restaurants/:resId",
      element:<RestaurantMenu/>
    }
  ],
    errorElement:<Error/>
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
