import React,{ Component } from "react"

class InputTodo extends Component {
    state ={
        title:""
    };

    onChange = e =>{
        // console.log("hello")
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        // console.log(this.state.title);
        this.props.addTodoProps(this.state.title);
        this.setState({
            title: ""
        });
    };

    render() {
        return(
            <form onSubmit={this.handleSubmit} className = "form-container">
                <input 
                    className = "input-text"
                    type = "text" 
                    placeholder = "Add todo..." 
                    value = {this.state.title}
                    name="title"
                    onChange = {this.onChange}
                />
                <input 
                    className = "input-submit"    
                    type = "submit" 
                    value = "Submit" 
                />
            </form>
        )
    }
}

export default InputTodo

