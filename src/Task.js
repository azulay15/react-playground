import React from 'react';

class Task extends React.Component {


	render() {
		return (
            <li className='Task'>
                {this.props.task.title}
                <button onClick={this.props.onDelete.bind(this, this.props.task)}>Delete</button>
            </li>

		);
	}

}



export default Task;
