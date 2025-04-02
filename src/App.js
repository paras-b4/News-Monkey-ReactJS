
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
export default class App extends Component {
 
  render() {
    return (
      <div>
      <Router>
     
        <Navbar/>
       <Routes>
        <Route exact path='/business'  element={<News pageSize={5} key="business" country="us" category='business'/>}/>
        <Route exact path='/' element={<News pageSize={5} key="general" country="us" category='general'/>}/>
        <Route exact path='/entertainment' element={<News pageSize={5}  key="entertainment" country="us" category='entertainment'/>}/>
        <Route exact path='/general' element={ <News pageSize={5} key="general" country="us" category='general'/>}/>
        <Route exact path='/sports' element={<News pageSize={5} key="sports" country="us" category='sports'/>}/>
        <Route exact path='/science' element={ <News pageSize={5}  key="science" country="us" category='science'/>}/>
        <Route exact path='/technology' element={ <News pageSize={5} key="technology" country="us" category='technology'/>}/>
        <Route exact path='/health'  element={ <News key="health" pageSize={5} country="us" category='health'/>}/>
       </Routes>
       </Router>
        
      </div>
     
    )
  }
}




