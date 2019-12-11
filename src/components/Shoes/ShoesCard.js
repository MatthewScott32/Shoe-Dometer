import React, { Component } from "react"
import "./ShoesCard.css"
// import { Link } from "react-router-dom"
// import { directive } from "@babel/types"

class ShoesCard extends Component {
    render() {
        return(
            <div>
                <div className="card">
                    <picture>
                        <img src={this.props.image} alt="Shoes"/>
                    </picture>
                    <p>Brand:{this.props.brand}</p>
                    <p>Model:{this.props.model}</p>
                    <p>Size:{this.props.size}</p>
                    <p>Date of Purchase:{this.props.dateOfPurchase}</p>
                    <p>Mileage:{this.props.mileage}</p>
                    <p>Injuries:{this.props.injuries}</p>
                    <p>Condition:{this.props.condition}</p>
                    <p>Trail, Road or Both:{this.props.trailRoadBoth}</p>
                    <p>Weight:{this.props.weight}</p>
                    <p>Races Used:{this.props.racesUsed}</p>
                    <p>Current:{this.props.current}</p>
                </div>
            </div>
        )
    }
}

export default ShoesCard