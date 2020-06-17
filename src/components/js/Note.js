import React, { Component } from 'react';
import '../css/Note.css';

class Note extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: this.props.note.title,
		};
	}

	handleChange = e => {
		this.setState({ value: e.target.value }, this.editNote);
	};

	editNote = () => {
		this.props.editNote(this.props.note.id, this.state.value);
	};

	checkBoxChange = () => {
		this.props.selectNote(this.props.note.id);
	};

	render() {
		return (
			<div className='note'>
				<input
					type='text'
					value={this.state.value}
					className='input-field'
					onChange={this.handleChange}
				/>
				<input
					type='checkbox'
					className='checkbox'
					onChange={this.checkBoxChange}
					checked={this.props.note.checked}
				/>
			</div>
		);
	}
}

export default Note;
