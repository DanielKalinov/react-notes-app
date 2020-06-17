import React from 'react';
import '../css/RemoveBtn.css';

function RemoveBtn(props) {
	const removeNotes = () => {
		props.removeNotes();
	};

	let removeBtnStyle = () => {
		if (props.notesLength) {
			return {
				opacity: '1',
				color: '#bdbdbd',
			};
		} else {
			return {
				opacity: '0',
			};
		}
	};

	props.notes.forEach(note => {
		if (note.selected) {
			removeBtnStyle = () => {
				return {
					color: '#424242',
				};
			};
		}
	});

	return (
		<div className='removeBtnContainer'>
			<i
				className='material-icons removeBtn'
				onClick={removeNotes}
				style={removeBtnStyle()}
			>
				delete
			</i>
		</div>
	);
}

export default RemoveBtn;
