import React, { Component } from "react"
import "./ShoesCard.css"
import ShoesManager from "../../modules/ShoesManager"
import { getUser } from "../../modules/Helpers"
import CurrentShoes from "../CurrentShoes/CurrentShoes"
// import { Link } from "react-router-dom"
// import { directive } from "@babel/types"

class ShoesCardDetails extends Component {

    state = {
        shoe:{},
        currentShoe: {}
    }

        componentDidMount(){
        ShoesManager.get(this.props.shoeId)
        .then((shoeDetailCard) => {
            ShoesManager.getCurrentShoe(getUser().id)
            .then(currentShoe => {
                this.setState({
                currentShoe: currentShoe[0], 
                shoe:shoeDetailCard})
        })
    })
}

            deleteShoes = id => {
                ShoesManager.delete(id)
                .then(() => {
                    this.props.history.push('/shoes')
                //     ShoesManager.getAllAccountShoes(getUser().id)
                //     .then((newShoes) => {
                //         this.setState({
                //             shoes: newShoes
                        })
                //     })
                // })
            }


render() {
    // console.log(this.state.currentShoe)
    return(   
        //  msg = this.state.currentShoe ? 'Wearing' : 'Closet'
            <div>
                <div className="cardDetails">
                    {/* <picture>
                        <img src={this.props.shoe.image}/>
                    </picture> */}
                    <p><strong>Brand:</strong> {this.state.shoe.brand}</p>
                    <p><strong>Model:</strong> {this.state.shoe.model}</p>
                    <p><strong>Size:</strong> {this.state.shoe.size}</p>
                    <p><strong>Date of Purchase:</strong> {this.state.shoe.dateOfPurchase}</p>
                    <p><strong>Mileage:</strong> {this.state.shoe.mileage}</p>
                    <p><strong>Injuries:</strong> {this.state.shoe.injuries}</p>
                    <p><strong>Condition:</strong> {this.state.shoe.condition}</p>
                    <p><strong>Trail, Road or Both:</strong> {this.state.shoe.trailRoadBoth}</p>
                    <p><strong>Shoe Weight:</strong> {this.state.shoe.weight}</p>
                    <p><strong>Races Used:</strong> {this.state.shoe.racesUsed}</p>
                    <p><strong>Current:</strong> {this.state.currentShoe ? 'Wearing' : 'Closet' }</p>
                    <button type="button" onClick={() => this.deleteShoes(this.props.shoeId)}>Delete</button><br/>
                    <button type="button" onClick={() => {this.props.history.push(`/shoes/${this.state.shoe.id}/edit`)}}>Edit</button><br/>
                </div>
            </div>
        )
    }
}

export default ShoesCardDetails