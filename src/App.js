import { useEffect } from 'react';
import Chat from './components/Chat/Chat';
import SideBar from './components/SideBar/SideBar';
import './App.css';
import Pusher from 'pusher-js';
function App() {
	useEffect(() => {
		//put the pusher config here then life goes on
		const pusher = new Pusher('1b590fcb4646c963f34d', {
			cluster: 'mt1',
		});

		var channel = pusher.subscribe('messages');
		channel.bind('inserted', function (data) {
			alert(JSON.stringify(data));
		});
	}, []);
	return (
		<div className="app">
			<div className="app_body">
				<SideBar />
				<Chat />
			</div>
		</div>
	);
}

export default App;
