import { AccountCircle, MoreVert } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import './ChatHeader.css';
const ChatHeader = () => {
	return (
		<div className="chatHeader">
			<IconButton>
				<AccountCircle style={{ fontSize: 40 }} />
			</IconButton>
			<div className="chatHeader_details">
				<h4>Room Name</h4>
				<p>Last seen at ...</p>
			</div>
			<div className="chat_buttons">
				<IconButton>
					<SearchIcon />
				</IconButton>
				<IconButton>
					<AttachFileIcon />
				</IconButton>
				<IconButton>
					<MoreVert />
				</IconButton>
			</div>
		</div>
	);
};

export default ChatHeader;
