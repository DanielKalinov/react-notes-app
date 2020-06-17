import React from 'react';

function Message(props) {
    let messageStyle = {
        display: !props.notesLength ? 'flex' : 'none',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        userSelect: 'none'
    }

    return (
        <div style={messageStyle}>
            <img src="illustration.svg" width='200' style={{ marginBottom: '20px' }}/>
            <h3>No saved notes.</h3>
        </div>
    )
}

export default Message;
