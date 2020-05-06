import React, { Component } from 'react'
import ReactSpeedometer from "react-d3-speedometer" ;


export class Meter extends Component {
    constructor()
    {
        super();
        this.state ={
            data: '',
        }
    }
    handle(event) {
        this.setState ({
              data : event.target.value 
        })
    }

    render() {
        return (
            <div>
                  <ReactSpeedometer
    customSegmentStops={[0,20,40,60,80,100,120,150,180,200]}
    segmentColors={["firebrick","firebrick",,"firebrick","tomato","tomato", "tomato","gold", "gold", "limegreen","limegreen"]}
    value={this.state.data}
    maxValue ={200}
    minValue ={0}
  />
  <input type ="text" onChange= {this.handle.bind(this)} />
  
            </div>
        )
    }
}

export default Meter
