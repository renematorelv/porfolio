import './App.css';
import { Nav } from './components/Nav';
import { Header } from './components/Header';
import JsonData from "./data/data.json";
import { useState, useEffect } from 'react';
import { Skills } from './components/Skills';

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div className="App">
      <Nav />
      <Header data={landingPageData.Header}/>
      <Skills data={landingPageData.Skills}/>
    </div>
  );
}

export default App;
