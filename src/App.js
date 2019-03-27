import React, { Component } from 'react';
import HunterList from './components/hHunterList'
//import HunterSingle from './components/hHunterSingle'
import CandidatesList from './components/CandidatesList'
import Header from './components/header'
import Home from './components/home'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import { Modal, Button, Icon, TextInput } from 'react-materialize'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headHunters: [],
      Candidates: []
    }
  }
  handleCSearch = (e) =>{
   // e.length ? (
     // console.log(e.target.value)
      const searchResult = e.target.value

    if (searchResult.length > null) {
      const Candidates = this.state.Candidates.filter(search =>{
        //console.log(search)
        return search.name.toLowerCase().indexOf(searchResult.toLowerCase()) !== -1;
      })

      this.setState({
        Candidates
      })

    }else{
      axios.get('http://localhost:8000/api/candidate')
        .then(response => {
          this.setState({ Candidates: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    //):(

    //)
  }

  handleHSearch = (e) => {
    // e.length ? (
    //console.log(e.target.value)
    const searchResult = e.target.value

    if(searchResult.length>null){
      const headHunters = this.state.headHunters.filter(search => {
        //console.log(search.name)

        return search.name.toLowerCase().indexOf(searchResult.toLowerCase()) !== -1;
      })
      
      this.setState({
        headHunters
      })
    }else{
      axios.get('http://localhost:8000/api/headhunter')
        .then(response => {
          this.setState({ headHunters: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    
    
    //):(

    //)
  }
  componentDidMount() {
    axios.get('http://localhost:8000/api/candidate')
      .then(response => {
        this.setState({ Candidates: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://localhost:8000/api/headhunter')
      .then(response => {
        this.setState({ headHunters: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  //   fetch("http://localhost:8000/api/candidate", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       'Access-Control-Allow-Origin': '*',
  //       'Content-Type': 'multipart/form-data'
  //     },
  //    // body: JSON.stringify(data)
  //   }).then(function (response) {
  //     return response.json(); //response.json() is resolving its promise. It waits for the body to load
  //   }).then(function (Candidates) {
  //     //Do your logic
  //     this.setState({ Candidates })
  //   });
  // }
      //body: JSON.stringify(data)
  //   })
  //     .then(response => response.json())
  //     .then(Candidates => this.setState({ Candidates }));
    }

  render(){
    return (
      <BrowserRouter>
      <div className="App">
        <Header/>
        <div className = "todo-app container">
            <Switch>
              <Route exact path="/" components={Home} />
            <Route  exact path="/candidates" component={CandidatesList} >
                <TextInput label="Search" onChange={this.handleCSearch}/>
                <CandidatesList candidateList={this.state.Candidates}/>
            </Route>
            <Route exact path="/headhunters"  component={HunterList}>
                <TextInput label="Search" onChange={this.handleHSearch} />
                <HunterList headHunters={this.state.headHunters} />
              </Route>
              </Switch>
        </ div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
