import React from 'react'
import { Link } from 'react-router-dom'
import Head from './head'

const Main = () => {
  return (
    <div>
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen">
        <div id="title" className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          Main
          <div> <Link to="/dashboard/profile/9ae87d4d-5b0d-4513-9300-ab551b2a2381"> Go to Profile </Link> </div>
          <div> <Link to="/dashboard"> Go to Root </Link> </div>
        </div>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default Main
