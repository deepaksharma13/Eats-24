import React from 'react'
import User from './User'
import UserClass from './UserClass'

const About = () => {
  return (
    <div>
    <h1>This is About Page</h1>
   
   <User name={"Deepak (fun)"}/>
   <UserClass name={"Deepak (Class) "} />
    </div>
  )
}

export default About