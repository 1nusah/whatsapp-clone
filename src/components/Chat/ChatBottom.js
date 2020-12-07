import React, { useState } from 'react';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import MicNoneIcon from '@material-ui/icons/MicNone';
import './Chat.css';
const ChatBottom = () => {
	const [textMessage, setTextMessage] = useState('');
	const handleChange = (e) => {
		setTextMessage(e.target.value);
	};
	return (
		<div className="chat_bottom">
			<IconButton>
				<EmojiEmotionsIcon style={{ fontSize: 30 }} />
			</IconButton>
			<input placeholder="Type a message" autoFocus onChange={handleChange} />

			{textMessage?.length === 0 ? (
				<IconButton>
					<MicNoneIcon style={{ fontSize: 30, color: 'gray' }} />
				</IconButton>
			) : (
				<IconButton>
					<SendIcon style={{ fontSize: 30, color: '#25D366' }} />
				</IconButton>
			)}
		</div>
	);
};

export default ChatBottom;
