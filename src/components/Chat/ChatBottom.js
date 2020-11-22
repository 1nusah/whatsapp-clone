import React from 'react';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import MicNoneIcon from '@material-ui/icons/MicNone';
import './Chat.css';
const ChatBottom = () => {
	return (
		<div className="chat_bottom">
			<IconButton>
				<EmojiEmotionsIcon style={{ fontSize: 30 }} />
			</IconButton>
			<input placeholder="Type a message" autofocus />
			<IconButton>
				<SendIcon style={{ fontSize: 30, color: '#25D366' }} />
			</IconButton>
			<IconButton>
				<MicNoneIcon style={{ fontSize: 30, color: 'gray' }} />
			</IconButton>
		</div>
	);
};

export default ChatBottom;
