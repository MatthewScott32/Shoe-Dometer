import React, { Component } from "react"
import "./CurrentShoes.css"
import ShoesCard from "../Shoes/ShoesCard"
import ShoesManager from "../../modules/ShoesManager"
import { getUser } from "../../modules/Helpers"
// import { Link } from "react-router-dom"
// import { directive } from "@babel/types"



class CurrentShoes extends Component {

    state = {
        currentShoe:{},
        hasShoe: false
    }

componentDidMount() {
    ShoesManager.getAllAccountShoes(getUser().id)
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
      <body class="currentshoebody">
      <div class="currentshoecard">
         {(this.state.hasShoe)
         ?
         <ShoesCard
               key={this.state.currentShoe.id}
               shoe={this.state.currentShoe}
               {...this.props}
               />
               :
            <h2 class="noshoe">No Current Shoes</h2>
            
            }
            <div class="invisibleline">
            <hr/>
            </div>
      </div>
      </body>
      </>
    )
  }
}

export default CurrentShoes