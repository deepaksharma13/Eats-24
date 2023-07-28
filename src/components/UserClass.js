import React from 'react'


class UserClass extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            count: 0,
            count2: 2

        }
    }

    render(){
        const {name} = this.props
        const {count,count2} = this.state
        return(
            <div className="outer">
            <h1>{name}</h1>
            <h1>Count : {count}</h1>
            <h1>Count2 : {count2}</h1>
            <h2>ds514@hotmail.com</h2>
            <h3>Faridabad</h3>
          </div>
        )
    }
}

export default UserClass