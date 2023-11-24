import './App.css';
import { Nav } from './components/Nav';
import { Header } from './components/Header';
import JsonData from "./data/data.json";
import { useState, useEffect } from 'react';
import { Skills } from './components/Skills';
import { AboutMe } from './components/AboutMe';
import { Contact } from './components/Contact';

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
      <AboutMe data={landingPageData.AboutMe}/>
      <Contact data={landingPageData.Contact}/>
    </div>
  );
}

export default App;
