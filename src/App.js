import { useEffect, useState } from 'react';
import Chat from './components/Chat/Chat';
import SideBar from './components/SideBar/SideBar';
import './App.css';
import Pusher from 'pusher-js';
import axios from './axios.js';
function App() {
	const [messages, setMessages] = useState([]);
	useEffect(() => {
		axios
			.get('/api/messages/sync')
			.then((response) => setMessages(response.data))
			.catch((error) => console.error(error));
	}, []);
	useEffect(() => {
		//put the pusher config here then life goes on
		const pusher = new Pusher('1b590fcb4646c963f34d', {
			cluster: 'mt1',
		});

		var channel = pusher.subscribe('messages');
		channel.bind('inserted', function (newMessage) {
			// alert(JSON.stringify(newMessage));
			setMessages([...messages, newMessage]);
		});
		return () => {
			channel.unbind_all();
			channel.unsubscribe();
		};
	}, [messages]);
	console.log(messages);
	return (
		<div className="app">
			<div className="app_body">
				<SideBar />
				<Chat messages={messages} />
			</div>
		</div>
	);
}

export default App;
