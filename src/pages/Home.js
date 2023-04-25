import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Chat from '../components/Chatbox/Chat'

const Home = () => {
  return (
    <div className='home'>
              <div className="container">
        <Sidebar/>
        <Chat/>
      </div>
      </div>
  )
}

export default Home