import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'
import Head from './Head'

const Body = () => {
  return (
    <>
    <Head/>
      <div className="p-4 flex  ">
        <SideBar />
        {/* <VideoContainer/>
        <Watchpage/> */}
        <Outlet />
      </div>
    </>
  );
}

export default Body
