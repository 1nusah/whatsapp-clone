import React from 'react';
import { IconButton } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './SideBarChat.css';
const SidebarChat = () => {
	return (
		<div className="sidebarChat">
			<IconButton>
				<AccountCircleIcon style={{ fontSize: 40 }} />
			</IconButton>
			<div className="sidebarChat_info">
				<h4>Room name</h4>
				<p>This is the last message</p>
			</div>
		</div>
	);
};

export default SidebarChat;
