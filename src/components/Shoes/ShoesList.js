import React, { Component } from 'react'
import ShoesCard from './ShoesCard'
import ShoesManager from '../../modules/ShoesManager'

class ShoesList extends Component {
    state = {
        shoes:[]
    }

    componentDidMount(){
        ShoesManager.getAll()
        .then((shoesArray) => {
            this.setState({
                shoes: shoesArray
            })
        })
    }

    deleteShoes = id => {
        ShoesManager.delete(id)
        .then(() => {
            ShoesManager.getAll()
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
          <button type="button" className="section-content" onClick={() => {this.props.history.push("/shoes/new")}}>Add Shoes</button>
          <div className="container-cards">
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