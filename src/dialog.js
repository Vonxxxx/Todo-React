import React, { Component } from 'react';

class Dialog extends Component {
	constructor (props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick () {
		var newid = this.props.nums+1;
		var value = this.refs.myText.value;
		if (value !== '') {
			var obj = {
				id: newid,
				name: value,
				status: 0
			};
			this.refs.myText.value = '';
			this.props.addNewTask(obj);
		}
	}

	render () {
		return (
			
			<div className="dialog">
				<div>
					<label>Add Todo</label>
					<input type="text" ref="myText" placeholder="任务名称"/>
                    <input type="button" value="Add" onClick={this.handleClick}/>
				</div>
			</div>
		);
	}
}

export default Dialog;