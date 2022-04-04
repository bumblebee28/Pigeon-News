import './App.css';
import './components/styles.css'
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './components/Footer';

export default function App() {

  const [mode, setmode] = useState('dark');

  const toggleMode = () => {

    if (mode === 'dark') {
      setmode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
    }
    else {
      setmode('dark')
      document.body.style.backgroundColor = '#04293A'
      document.body.style.color = 'white'

    }

  }


  return (
    <Router>
      <Navbar title="PIGEON news" mode={mode} togglemode={toggleMode} m={mode === 'light' ? <img src="https://img.icons8.com/material-outlined/24/000000/do-not-disturb-2.png" /> : <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABVklEQVRIib2WTU4CQRCFgZ0RVw5E7+Ee4QIG4kE0aojRhciBJLLlCIoGFm70DMjoVj8XvCYdnJ6pnkRf0pmkeT/VlekaKpUIIMRoajHkMvgVAGyVNSvUAufAC7BfwrwBzIDrYDowV5vnQCPS3NdmnwRoijBxJO0NgSfgU2sK3LoiVNxE2mZRNYlnfgykhLEEel5IYj21M/+W0R3QAra1DoGRfvsCumZjry2u8oscXl+c99jqh65yA/de3EFMwLNELQO3Le40RFjD2/vQVt0QsCNumuUZGhUx86aap6lVPXj7b3oeGAIc53Wd6CF0grGeJ4aA0w1NMVhd/aXa2M/hXYqzAHbNARL3dInQq9gG6lodYOxdtKMYY39UdHWJQlg4cyyjguxhlwAD4FGvbwo8ADeuLViGHf80rs9YfXD2rOYbITPgqogY/Oy5xpfRmlAUkIU//1fxA+yyWHyFCsRtAAAAAElFTkSuQmCC"></img>}/>
      <Routes>
        <Route exact path="/" element={<Home mode={mode} />}>
        </Route>
        <Route exact path="/general" element={<News pageSize="8" page='1' key="general" mode={mode} category="general" />}>
        </Route>
        <Route exact path="/business" element={<News pageSize="8" page='1' key="business" mode={mode} category="business" />}>
        </Route>
        <Route exact path="/entertainment" element={<News pageSize="8" page='1' key="entertainment" mode={mode} category="entertainment" />}>
        </Route>
        <Route exact path="/health" element={<News pageSize="8" page='1' key="health" mode={mode} category="health" />}>
        </Route>
        <Route exact path="/technology" element={<News pageSize="8" page='1' key="technology" mode={mode} category="technology" />}>
        </Route>
        <Route exact path="/sports" element={<News pageSize="8" page='1' key="sports" mode={mode} category="sports" />}>
        </Route>
        <Route exact path="/science" element={<News pageSize="8" page='1' key="science" mode={mode} category="science" />}>
        </Route>
      </Routes>
      <Footer title="&copy;Copyright Pigeon News 2022" m={mode}></Footer>
    </Router>

  )

}

