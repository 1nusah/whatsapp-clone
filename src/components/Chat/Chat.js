import React from 'react';
import ChatHeader from '../Chatheader/ChatHeader';
import './Chat.css';
import ChatBottom from './ChatBottom';
import ChatMessages from './ChatMessages';
const Chat = ({ messages }) => (
	<div className="chat">
		<div className="chat_header">
			<ChatHeader />
		</div>
		<div>
			<ChatMessages messages={messages} />
			<ChatBottom />
		</div>
	</div>
);

export default Chat;
