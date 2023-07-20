import './App.css';
import './Utils/Util.scss';
import { UserCard } from './Components/Usercard/UserCard';
import bgImage from './assets/bg.jpg'

function App() {

  return (
    <div className="App" style={{backgroundImage: `url(${bgImage})`}}>
     <UserCard />
    </div>
  );
}

export default App;