import React, { Component } from 'react'
import { Select, Button, Row, Col } from 'react-materialize'

export class calculator extends Component {

        state = {
            value:'default',
            fees: '',
            defaultQty:1,
            additionCost:0,
            hide:"hide",
            showQty:"hide"
            
        }
        handleIncrease = (e) =>{
           // console.log("increase")
            //const no =  this.state.defaultQty
            
            //console.log(e)
            if(this.state.defaultQty !== 20){
                //const incr = 0
                if (this.state.defaultQty >= 4 && this.state.defaultQty <= 8){
                    //const incr = +50
                    this.setState({
                        hide:"show",
                        additionCost: 50
                    })
                } else if (this.state.defaultQty >= 9 && this.state.defaultQty <= 13){
                    //const incr = +100
                    this.setState({
                        //hide: "show",
                        additionCost: 100
                    })
                } else if (this.state.defaultQty >= 14 && this.state.defaultQty <= 18) {
                    this.setState({
                        //hide: "show",
                        additionCost: 150
                    })
                } else if (this.state.defaultQty >= 19) {
                    this.setState({
                       // hide: "show",
                        additionCost: 200
                    })
                }
                else{
                    this.setState({
                        hide: "hide",
                        additionCost: 0
                    })
                }
                this.setState({
                    defaultQty: this.state.defaultQty + e
                })
            }else{

            }
            
        }
    handleDeduct = (e) => {
        // console.log("increase")
        //const no =  this.state.defaultQty
        //const incr = e
        //console.log(e)
        if (this.state.defaultQty !== 1){
            if(this.state.defaultQty <= 5){
                this.setState({
                    hide: "hide",
                    additionCost: 0
                })
            }
            else if (this.state.defaultQty >= 6 && this.state.defaultQty <= 10) {
                //const incr = +50
                this.setState({
                    //hide: "show",
                    additionCost: 50
                })
            } else if (this.state.defaultQty >= 11 && this.state.defaultQty <= 15) {
                //const incr = +100
                this.setState({
                    //hide: "show",
                    additionCost: 100
                })
            } else if (this.state.defaultQty >= 16 && this.state.defaultQty <= 20) {
                this.setState({
                    //hide: "show",
                    additionCost: 150
                })
            } else if (this.state.defaultQty >= 20) {
                this.setState({
                    // hide: "show",
                    additionCost: 200
                })
            }
            else {
                this.setState({
                    hide: "hide",
                    additionCost: 0
                })
            }
            this.setState({
                defaultQty: this.state.defaultQty + e
            })
        }else{
            
        }
        
    }
        handleSelected = (e) =>{
            //console.log(e.target.value)
            if (e.target.value == "SE"){

                this.setState({
                    fees:"100",
                    showQty:"show"
                })
            } else if (e.target.value == "QA"){
                this.setState({
                    fees: "150",
                    showQty: "show"
                })
            }
        }
        render() {
            return (
                <div> 
                    <div class="input-field col s12">
                    
                        <Select value={this.state.value} onChange={this.handleSelected}>
                            <option value="default" disabled>Choose your option</option>
                            <option value="SE">SOFTWARE ENGINEER</option>
                            <option value="QA">SOFTWARE QUALITY ENGINEER</option>
                        </Select>
                        <Row>
                            <Col>
                                <h3>Fees</h3>
                                <h5>$ {this.state.fees}</h5>
                            </Col>
                            <Col className={this.state.hide}>
                                <h5>Additional Cost</h5>
                                <h5>$ {this.state.additionCost}</h5>
                            </Col>
                        </Row>
                      

                        
                        <Row className={this.state.showQty}>
                            <h3>Candidate Qty</h3>
                            <Col>
                            <Button
                                floating
                                large
                                className="red"
                                waves="light"
                                icon="+"
                                    onClick={() => this.handleIncrease(+1)}
                            /></Col>
                            <Col><h3>{this.state.defaultQty}</h3></Col>
                            <Col>
                                <Button
                                    floating
                                    large
                                    className="red"
                                    waves="light"
                                    icon="-"
                                    onClick={() => this.handleDeduct(-1)}
                                />
                            </Col>
                        </Row>
                        
                        
                        
                </div>
                    
            </div>
            )
  }
}

export default calculator
