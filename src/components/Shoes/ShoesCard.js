import React, { Component } from "react"
import "./ShoesCard.css"
import { Link } from "react-router-dom"
import ShoesCardDetails from "./ShoesCardDetails"
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
                    <button type="button" onClick={() => this.props.deleteShoes(this.props.shoe.id)}>Delete</button><br/>
                    <button type="button" onClick={() => {this.props.history.push(`/shoes/${this.props.shoe.id}/edit`)}}>Edit</button><br/>
                    <button type="button" onClick={() => {this.props.history.push(`/shoes/${this.props.shoe.id}`)}}>Details</button><br/>
                </div>
            </div>
        )
    }
}

export default ShoesCard