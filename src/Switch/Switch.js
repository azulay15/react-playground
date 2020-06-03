import React from 'react';
import './Switch.scss';

class Switch extends React.Component {

    constructor(props) {
        super(props);
		this.state = {
			enabled: true
		};

    }

    switchMode() {
        this.setState({
            enabled: !this.state.enabled
        })
        console.log('switched')
    }

	render() {
		return (
            <div className={ this.state.enabled ? 'Switch' : 'Switch--disabled' }
                onClick={this.switchMode.bind(this)}>
                <div className="handle" >
			    </div>
            </div>

		);
	}

}



export default Switch;