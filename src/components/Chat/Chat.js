import React from 'react';
import ChatHeader from '../Chatheader/ChatHeader';
import './Chat.css';
import ChatBottom from './ChatBottom';
import ChatMessages from './ChatMessages';
const Chat = () => (
	<div className="chat">
		<div className="chat_header">
			<ChatHeader />
		</div>
		<div>
			<ChatMessages />
			<ChatBottom />
		</div>
	</div>
);

export default Chat;
