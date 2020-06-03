import React from 'react';
import './App.css';
import AddTaskForm from './AddTaskForm';
import Task from './Task';

class App extends React.Component {

  constructor(props) {
    super(props);
      this.state = {
            tasks: []
      };
  }

  addTask(task) {
    this.setState({
      tasks: [...this.state.tasks, task]
    });
  }

  deleteTask(taskToDelete) {
    this.setState({
      tasks: this.state.tasks.filter(task => task !== taskToDelete)
    });
  }


	render() {
		return (
          <div className='App'>
            <AddTaskForm onAdd={this.addTask.bind(this)}/>
            <ul>
              {this.state.tasks.map((task, index) => {
                return <Task 
                          key={index} 
                          task={task}
                          onDelete={this.deleteTask.bind(this)}
                        />
              })}
            </ul>
			    </div>

		);
	}

}
export default App;
