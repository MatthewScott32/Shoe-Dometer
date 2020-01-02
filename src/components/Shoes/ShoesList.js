import React, { Component } from 'react'
import ShoesCard from './ShoesCard'
import ShoesManager from '../../modules/ShoesManager'
import { getUser } from '../../modules/Helpers'
import "./shoeslist.css"

class ShoesList extends Component {
    state = {
        shoes:[]
    }

    componentDidMount(){
        ShoesManager.getAllAccountShoes(getUser().id)
        .then((shoesArray) => {
            console.log(shoesArray)
            this.setState({
                shoes: shoesArray
            })
        })
    }

    deleteShoes = id => {
        ShoesManager.delete(id)
        .then(() => {
            ShoesManager.getAllAccountShoes(getUser().id)
            .then((newShoes) => {
                this.setState({
                    shoes: newShoes
                })
            })
        })
    }

    render() {
    return(
        <React.Fragment>
          <div class="addshoebutton" onClick={() => {this.props.history.push("/shoes/new")}}>Add Shoes</div>
          <div className="shoescontainercards">
            {this.state.shoes.map(shoe =>
            <ShoesCard
               key={shoe.id}
               shoe={shoe}
               {...this.props}
            deleteShoes={this.deleteShoes}
               />
                )}
          </div>
        </React.Fragment>
    )
  }
}

export default ShoesList