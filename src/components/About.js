import React from 'react'
import User from './User'
import UserClass from './UserClass'

class About extends React.Component{
  constructor(){
    console.log("Parent Constructor")
    super()
  }

   componentDidMount(){
    console.log("Parent Component Did Mount")
   }


  render () {
    console.log("Parent Render")
  return(
    <div>
    <h1>This is About Page</h1>
   
   {/* <User name={"Deepak (fun)"}/> */}
   <UserClass name={"Deepak (Class) "} />
    </div>
    )
  }
  
}


export default About