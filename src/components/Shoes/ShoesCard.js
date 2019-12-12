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
                        <img src={this.props.shoe.image}/>
                    </picture>
                    <p><strong>Brand:</strong> {this.props.shoe.brand}</p>
                    <p><strong>Model:</strong> {this.props.shoe.model}</p>
                    <p><strong>Size:</strong> {this.props.shoe.size}</p>
                    <p><strong>Date of Purchase:</strong> {this.props.shoe.dateOfPurchase}</p>
                    <p><strong>Mileage:</strong> {this.props.shoe.mileage}</p>
                    <p><strong>Injuries:</strong> {this.props.shoe.injuries}</p>
                    <p><strong>Condition:</strong> {this.props.shoe.condition}</p>
                    <p><strong>Trail, Road or Both:</strong> {this.props.shoe.trailRoadBoth}</p>
                    <p><strong>Weight:</strong> {this.props.shoe.weight}</p>
                    <p><strong>Races Used:</strong> {this.props.shoe.racesUsed}</p>
                    <p><strong>Current:</strong> {this.props.shoe.current}</p>
                    <button type="button" onClick={() => this.props.deleteShoes(this.props.shoe.id)}>Delete</button><br/>
                </div>
            </div>
        )
    }
}

export default ShoesCard