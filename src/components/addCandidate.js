import React, { Component } from 'react'
import axios from 'axios'

export class addCandidate extends Component {
    constructor(props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDesChange = this.handleDesChange.bind(this);
        this.handlePositionChange = this.handlePositionChange.bind(this);

        this.state = {
            name: '',
            description: '',
            position:''
        }
    }
    handleNameChange = (e) => {
        this.setState({
            name: e.target.value
           
        });

    }
    handleDesChange = (e) => {
        this.setState({
            description: e.target.value
        });

    }
    handlePositionChange = (e) => {
        this.setState({
            position: e.target.value
        });

    }
    handleSubmit = (e) =>{
        e.preventDefault();
        const CandidateDetails = {
            name: this.state.name,
            description: this.state.description,
            position:this.state.position,
        }

        axios.post('http://localhost:8000/api/candidate/create', CandidateDetails)
            .then(res => console.log(res.data));

        this.setState({
            name: '',
            description: '',
            position:'',
        });

        
    }
  render() {
    return (
      <div>
        <form>
            <div class="input-field col s6">
                <input type="text" id="Cname" onChange={this.handleNameChange} value={this.state.name} />
                <label htmlFor="Cname">Name</label>
            </div>
            <div class="input-field col s6">
                <input type="text" id="Cdes" onChange={this.handleDesChange} value={this.state.description} />
                    <label htmlFor="Cdes">Description</label>
            </div>
            <div class="input-field col s6">
                <input type="text" id="Cpos" onChange={this.handlePositionChange} value={this.state.position} />
                    <label htmlFor="Cpos">Position</label>
            </div>
            <a class="waves-effect waves-light btn" onClick={this.handleSubmit} >Add</a>
        </form>
      </div>
    )
  }
}

export default addCandidate
