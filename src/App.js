
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
export default class App extends Component {
 apikey=process.env.REACT_APP_NEWS_API
  render() {
    return (
      <div>
      <Router>
     
        <Navbar/>
       <Routes>
        <Route exact path='/business'  element={<News pageSize={5} apikey={this.apikey} key="business" country="us" category='business'/>}/>
        <Route exact path='/' element={<News pageSize={5}  apikey={this.apikey} key="general" country="us" category='general'/>}/>
        <Route exact path='/entertainment' element={<News pageSize={5}  apikey={this.apikey}  key="entertainment" country="us" category='entertainment'/>}/>
        <Route exact path='/general' element={ <News pageSize={5}  apikey={this.apikey} key="general" country="us" category='general'/>}/>
        <Route exact path='/sports' element={<News pageSize={5}  apikey={this.apikey} key="sports" country="us" category='sports'/>}/>
        <Route exact path='/science' element={ <News pageSize={5}  apikey={this.apikey}  key="science" country="us" category='science'/>}/>
        <Route exact path='/technology' element={ <News pageSize={5} apikey={this.apikey}  key="technology" country="us" category='technology'/>}/>
        <Route exact path='/health'  element={ <News key="health" apikey={this.apikey}  pageSize={5} country="us" category='health'/>}/>
       </Routes>
       </Router>
        
      </div>
     
    )
  }
}




