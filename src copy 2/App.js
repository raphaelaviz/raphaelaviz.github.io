import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Links from './components/Links';
import GlobalStyles from './GlobalStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <Home />
      <Links/>
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;