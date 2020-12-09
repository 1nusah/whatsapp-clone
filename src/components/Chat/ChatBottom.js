import React, { useState } from 'react';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import MicNoneIcon from '@material-ui/icons/MicNone';
import './Chat.css';
import axios from '../../axios';
const ChatBottom = () => {
	const [textMessage, setTextMessage] = useState('');
	const handleChange = (e) => {
		setTextMessage(e.target.value);
	};
	const sendMessage = async () => {
		//console.log('hi there my people');
		await axios
			.post('/api/messages/new', {
				message: textMessage,
				name: 'Dollar man',
				timestamp: 'now',
				received: false,
			})
			.then()
			.catch((err) => console.log(err));
		setTextMessage('');
	};
	return (
		<div className="chat_bottom">
			<IconButton>
				<EmojiEmotionsIcon style={{ fontSize: 30 }} />
			</IconButton>

			<input
				placeholder="Type a message"
				autoFocus
				onChange={handleChange}
				value={textMessage}
			/>

			{textMessage?.length === 0 ? (
				<IconButton>
					<MicNoneIcon style={{ fontSize: 30, color: 'gray' }} />
				</IconButton>
			) : (
				<IconButton onClick={sendMessage}>
					<SendIcon style={{ fontSize: 30, color: '#25D366' }} />
				</IconButton>
			)}
		</div>
	);
};

export default ChatBottom;
