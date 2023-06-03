import React from 'react';
import './todoInput.css';

export default class TodoInput extends React.Component {
    constructor(props){
        super(props);

        this.state = {value: ""};

        this.handleChange = this.handleChange.bind(this);
        this.addTodo = this.addTodo.bind(this);
        
    }

    handleChange(e) {
        console.log("text:",e.target.value);       
        this.setState({value: e.target.value})
    }
    addTodo(todo) {
        // console.log("Todo:" ,todo);
        this.props.addTodo(todo);
        this.setState({value: ''})
    }
    render() {
        return (
            <div>
                <input  type="text" value={this.state.value} onChange={this.handleChange}/>
                <button className="btn btn-primary" onClick={()=>this.addTodo(this.state.value)} >Submit</button>
            </div>
        )
    }
}