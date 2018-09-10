import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faAngleDoubleUp,
	faAngleDoubleDown,
	faRedo
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

import './App.css';

library.add(faAngleDoubleUp, faAngleDoubleDown, faRedo);

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		};
		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
		this.reset = this.reset.bind(this);
	}

	increment() {
		this.setState({
			count: this.state.count + 1
		});
	}

	decrement() {
		this.setState({
			count: this.state.count - 1
		});
	}

	reset() {
		this.setState({
			count: 0
		});
	}

	render() {
		return (
			<div>
				<div className="heading">
					<h1>Counter</h1>
				</div>
				<div className="display">
					<h2>Current Count: {this.state.count} </h2>
				</div>
				<div className="buttons">
					<Button
						variant="outlined"
						color="primary"
						className="inc-button"
						onClick={this.increment}
					>
						Increment!
						<FontAwesomeIcon
							icon="angle-double-up"
							size="lg"
							pull="right"
							className="inc"
						/>
					</Button>
					<Button
						variant="outlined"
						color="primary"
						className="dec-button"
						onClick={this.decrement}
					>
						Decrement!
						<FontAwesomeIcon
							icon="angle-double-down"
							size="lg"
							pull="right"
							className="dec"
						/>
					</Button>
					<Button
						variant="outlined"
						color="secondary"
						className="reset-button"
						onClick={this.reset}
					>
						RESET
						<FontAwesomeIcon
							icon="redo"
							spin
							pull="right"
							size="lg"
							className="reset"
						/>
					</Button>
				</div>
			</div>
		);
	}
}

export default App;
