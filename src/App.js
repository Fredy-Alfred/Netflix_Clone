import './App.css';
import Banner from './components/banner/Banner';
import NavBar from './components/navbar/NavBar';
import RowPost from './components/rowPost/RowPost';
import { action, originals, comedy } from './constants/Endpoints'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost title="Netflix Originals" url={originals} />
      <RowPost title="Action" isSmall url={action} />
      <RowPost title="Comedy" isSmall url={comedy} />
    </div>
  );
}

export default App;
