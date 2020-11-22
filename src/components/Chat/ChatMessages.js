import React from 'react';
import './Chat.css';
const ChatMessages = () => {
	return (
		<div className="chatMessages">
			<div className="chat_body">
				<p className="chat_message">
					<span className="chat_name"></span>
					This is a message
					<span className="chat_timestamp">
						{new Date().getHours()} : {new Date().getMinutes()}
					</span>
				</p>
			</div>{' '}
			<div className="chat_body">
				<p className="chat_message">
					<span className="chat_name"></span>
					This is a message
					<span className="chat_timestamp">
						{new Date().getHours()} : {new Date().getMinutes()}
					</span>
				</p>
			</div>{' '}
			<div className="chat_body">
				<p className="chat_message">
					<span className="chat_name"></span>
					This is a message
					<span className="chat_timestamp">
						{new Date().getHours()} : {new Date().getMinutes()}
					</span>
				</p>
			</div>
			<div className="chat_body chat_received">
				<p className="chat_message ">
					<span className="chat_name"></span>
					This is a message
					<span className="chat_timestamp">
						{new Date().getHours()} : {new Date().getMinutes()}
					</span>
				</p>
			</div>{' '}
			<div className="chat_body chat_received">
				<p className="chat_message ">
					<span className="chat_name"></span>
					This is a message
					<span className="chat_timestamp">
						{new Date().getHours()} : {new Date().getMinutes()}
					</span>
				</p>
			</div>
		</div>
	);
};

export default ChatMessages;
