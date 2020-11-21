import Chat from './components/Chat/Chat';
import SideBar from './components/SideBar/SideBar';
import './App.css';
function App() {
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
