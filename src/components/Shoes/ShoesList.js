import React, { Component } from 'react'
import ShoesCard from './ShoesCard'
import ShoeManager from '../../modules/ShoeManager'

class ShoesList extends Component {
    state = {
        shoes:[]
    }

    componentDidMount(){
        ShoeManager.getAll()
        .then((shoesArray) => {
            this.setState({
                shoes: shoesArray
            })
            console.log("shoes as state", this.state.shoes)
        })
    }

    render() {
    return(
        <React.Fragment>
         {/* <section className="section-content">
             <button type="button" className="btn" onClick={() => {this.props.history.push("/shoes/new")}}>Add Shoes</button>
         </section>
          <div className="container-cards"> */}
            {this.state.shoes.map(shoe =>
            <ShoesCard
               key={shoe.id}
               shoe={shoe}
         //    deleteShoe={this.deleteShoe}
               {...this.props}
               />
                )}
          {/* </div> */}
        </React.Fragment>
    )
  }
}

export default ShoesList