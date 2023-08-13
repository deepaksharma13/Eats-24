import React from 'react'


class UserClass extends React.Component {
    constructor(props){
        console.log("Child Constructor")
        super(props)

        this.state = {
            count: 0,
            count2: 2

        }
    }

    componentDidMount(){
        console.log("Child Component Did Mount")
       }
    

    render(){
        console.log("Child Render ")
        const {name} = this.props
        const {count,count2} = this.state
        return(
            <div className="outer">
            <h1>{name}</h1>
            <button onClick={()=> {this.setState({count: this.state.count + 1});}}>Count Inc</button>
            <h1>Count : {count}</h1>
            <h1>Count2 : {count2}</h1>
            <h2>ds514@hotmail.com</h2>
            <h3>Faridabad</h3>
          </div>
        )
    }
}

export default UserClass