import React, { Component } from 'react';
import '../css/AddNoteForm.css';

class AddNoteForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
		};

		this.message = React.createRef();
	}

	handleChange = e => {
		this.setState({ title: e.target.value });
	};

	addNote = e => {
		e.preventDefault();
		if (this.state.title) {
			this.setState({ title: '' });
			this.props.addNote(this.state.title);
			this.message.current.style.display = 'none';
		} else {
			this.message.current.style.display = 'block';
		}
	};

	render() {
		return (
			<React.Fragment>
				<form onSubmit={this.addNote}>
					<input
						type='text'
						className='input-field'
						value={this.state.title}
						onChange={this.handleChange}
						placeholder='Enter note title here'
					/>
					<button type='submit' className='add-btn' onClick={this.addNote}>
						+
					</button>
				</form>

				<p className='message' ref={this.message} style={{ marginTop: '10px' }}>
					Please enter a non-blank note title!
				</p>
			</React.Fragment>
		);
	}
}

export default AddNoteForm;
