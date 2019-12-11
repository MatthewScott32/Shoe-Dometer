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
                        <img src={this.props.shoe.image} alt="Shoes"/>
                    </picture>
                    <p>Brand:{this.props.shoe.brand}</p>
                    <p>Model:{this.props.shoe.model}</p>
                    <p>Size:{this.props.shoe.size}</p>
                    <p>Date of Purchase:{this.props.shoe.dateOfPurchase}</p>
                    <p>Mileage:{this.props.shoe.mileage}</p>
                    <p>Injuries:{this.props.shoe.injuries}</p>
                    <p>Condition:{this.props.shoe.condition}</p>
                    <p>Trail, Road or Both:{this.props.shoe.trailRoadBoth}</p>
                    <p>Weight:{this.props.shoe.weight}</p>
                    <p>Races Used:{this.props.shoe.racesUsed}</p>
                    <p>Current:{this.props.shoe.current}</p>
                </div>
            </div>
        )
    }
}

export default ShoesCard