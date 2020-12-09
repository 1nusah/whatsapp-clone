import React from 'react';
import './Chat.css';
const ChatMessages = ({ messages }) => {
	console.log(messages);
	return (
		<div className="chatMessages">
			<div className="chat_body">
				{messages?.map((message) => (
					<p
						className={`chat_message ${message.received && 'chat_received'} `}
						key={message.id}
					>
						<span className="chat_name">{message.name}</span>
						<br />
						<p>{message.message}</p>
						<span className="chat_timestamp">{message.timestamp}</span>
						{console.log(message.timestamp)}
					</p>
				))}
			</div>
		</div>
	);
};

export default ChatMessages;
