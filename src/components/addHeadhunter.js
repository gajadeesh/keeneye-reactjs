import React, { Component } from 'react'
import axios from 'axios'
export class addHeadhunter extends Component {
    constructor(props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDesChange = this.handleDesChange.bind(this);

        this.state = {
            name: '',
            description: ''
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
    handleSubmit = (e) => {
        e.preventDefault();
        const headHunter = {
            name: this.state.name,
            description: this.state.description
        }

        axios.post('http://localhost:8000/api/headhunter/create', headHunter)
            .then(res => console.log(res.data));

        this.setState({
            name: '',
            description: ''
        })
    }
  render() {
    return (
      <div>
            <form onSubmit={this.handleSubmit}> 
                <div class="input-field col s6">
                    <input type="text" id="Cname" onChange={this.handleNameChange} value={this.state.name} />
                    <label htmlFor="Cname">Name</label>
                </div>
                <div class="input-field col s6">
                    <input type="text" id="Cdes" onChange={this.handleDesChange} value={this.state.description} />
                    <label htmlFor="Cdes">Description</label>
                </div>
                <a class="waves-effect waves-light btn" onClick={this.handleSubmit} >Add</a>
            </form>
      </div>
    )
  }
}

export default addHeadhunter
