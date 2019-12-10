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

    render() {
    return(
        <React.Fragment>
         <section className="section-content">
         {this.state.shoes.map()}
        </React.Fragment>
    )
  }
}

export default ShoesList