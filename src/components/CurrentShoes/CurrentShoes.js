import React, { Component } from "react"
import "./CurrentShoes.css"
import ShoesCard from "../Shoes/ShoesCard"
import ShoesManager from "../../modules/ShoesManager"
// import { Link } from "react-router-dom"
// import { directive } from "@babel/types"



class CurrentShoes extends Component {

    state = {
        currentShoe:{},
        hasShoe: false
    }

componentDidMount() {
    ShoesManager.getAll()
    .then(Shoes => {
      let currentShoeArray = Shoes.filter(shoe => {
            return shoe.current === true
        })
        if(currentShoeArray.length !== 0){
            this.setState({
            currentShoe: currentShoeArray[0],
            hasShoe: true
        })
      }
    })
}

  render() {
    return (
      <>
         {(this.state.hasShoe)
         ?
         <ShoesCard
               key={this.state.currentShoe.id}
               shoe={this.state.currentShoe}
               {...this.props}
               />
               :
            <h2>No Current Shoes</h2>
            }
      </>
    )
  }
}

export default CurrentShoes