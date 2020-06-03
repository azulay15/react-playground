import React from 'react';

class AddTaskForm extends React.Component {

    constructor(props) {
        super(props);
        this.taskInput = React.createRef();


    }

    addTask(e) {
        e.preventDefault();
        this.props.onAdd({
            title: this.taskInput.current.value
        });
        e.target.reset();
    }



	render() {
		return (
            <form 
            className='AddTaskForm'
            onSubmit={this.addTask.bind(this)}>
                <input ref={this.taskInput} placeholder="Your task..."/>
                <button>Add</button>
            </form>

		);
	}

}



export default AddTaskForm;