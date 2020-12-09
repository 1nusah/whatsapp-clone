import React from 'react';
import './SideBar.css';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import { Avatar, IconButton } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SidebarChat from '../SideBarChat/SidebarChat';
const SideBar = () => {
	return (
		<div className="sidebar">
			<div className="sidebar_header">
				<IconButton>
					<AccountCircleIcon style={{ fontSize: 40 }} />
				</IconButton>
				<div className="sidebar_headerRight">
					<IconButton>
						<DonutLargeIcon />
					</IconButton>
					<IconButton>
						<ChatIcon />
					</IconButton>
					<IconButton>
						<MoreVertIcon />
					</IconButton>
				</div>
			</div>
			<div className="sidebar_search">
				<div className="sidebar_searchContainer">
					<SearchOutlinedIcon />
					<input placeholder="Search or start new chat" />
				</div>
			</div>
			<div className="sidebar_chats">
				<SidebarChat />
				<SidebarChat />
				{/* <SidebarChat />
				<SidebarChat />
				<SidebarChat />
				<SidebarChat />
				<SidebarChat /> */}
			</div>
		</div>
	);
};

export default SideBar;
