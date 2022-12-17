import logo from './logo.svg';
import './App.css';
import Navbaar from './Components/Navbar/Navbaar';
import Body from './Components/Body/Body';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="m-auto w-[428px]">
  <Navbaar></Navbaar>
  <Body></Body>
  <Footer></Footer>
    </div>
  );
}

export default App;
