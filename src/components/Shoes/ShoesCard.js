import React, { Component } from "react"
import "./ShoesCard.css"
import { Link } from "react-router-dom"
import { directive } from "@babel/types"

class ShoesCard extends Component {
    render() {
        return(
            <div>
                <div className="card">
                    <picture>
                        <img src={this.props.shoes.image} alt="Current Shoes"/>
                    </picture>
                    <p>Brand:{this.props.shoes.brand}</p>
                    <p>Model:{this.props.shoes.model}</p>
                    <p>Size:{this.props.shoes.size}</p>
                    <p>Date of Purchase:{this.props.shoes.dateOfPurchase}</p>
                    <p>Mileage:{this.props.shoes.mileage}</p>
                    <p>Injuries:{this.props.shoes.injuries}</p>
                    <p>Condition:{this.props.shoes.condition}</p>
                    <p>Trail, Road or Both:{this.props.shoes.trailRoadBoth}</p>
                    <p>Weight:{this.props.shoes.weight}</p>
                    <p>Races Used:{this.props.shoes.racesUsed}</p>
                    <p>Current:{this.props.shoes.current}</p>
                </div>
            </div>
        )
    }
}

export default ShoesCard