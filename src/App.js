import './App.css';
import { Nav } from './components/Nav';
import { Header } from './components/Header';
import JsonData from "./data/data.json";
import { useState, useEffect } from 'react';

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div className="App">
      <Nav />
      <Header data={landingPageData.Header}/>
    </div>
  );
}

export default App;
