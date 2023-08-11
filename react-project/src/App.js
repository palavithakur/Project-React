import './App.css';

import Topbar from './Components/Topbar';
import Searchbar from './Components/Searchbar';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Section1 from './Components/Section1';
import Section2 from './Components/Section2';


function App() {
  return (
    <>
        <Topbar/> 
        <Searchbar/> 
        <Navbar/>
        <Banner/>
        <Section1/>
        <Section2/>
    </>
  );
}

export default App;
