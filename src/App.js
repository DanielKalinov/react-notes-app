import React, { Component } from 'react';
import './App.css';

import { v4 as uuidv4 } from 'uuid';

import AddNoteForm from './components/js/AddNoteForm';
import RemoveBtn from './components/js/RemoveBtn';
import NoteList from './components/js/NoteList';
import Message from './components/js/Message';

class App extends Component {
	state = {
		notes: [],
	};

	addNote = title => {
		let newNote = {
			id: uuidv4(),
			title,
			selected: false,
		};

		this.setState({ notes: [...this.state.notes, newNote] });
	};

	editNote = (id, value) => {
		this.setState({
			notes: this.state.notes.map(note => {
				if (note.id === id) {
					note.title = value;
				}
				return note;
			}),
		});
	};

	selectNote = id => {
		this.setState({
			notes: this.state.notes.map(note => {
				if (note.id === id) {
					note.selected = !note.selected;
				}
				return note;
			}),
		});
	};

	removeNotes = () => {
		this.setState({
			notes: [...this.state.notes.filter(note => !note.selected)],
		});
	};

	render() {
		return (
			<div className='App'>
				<AddNoteForm addNote={this.addNote} />

				<RemoveBtn
					removeNotes={this.removeNotes}
					notes={this.state.notes}
					notesLength={this.state.notes.length}
				/>

				<Message notesLength={this.state.notes.length} />

				<NoteList
					notes={this.state.notes}
					editNote={this.editNote}
					selectNote={this.selectNote}
				/>
			</div>
		);
	}
}

export default App;
