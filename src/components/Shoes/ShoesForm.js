import React, { Component } from 'react';
import ShoeManager from '../../modules/ShoeManager';
import './EventForm.css'

class ShoeForm extends Component {
    
    state ={
        image: "",
        brand: "",
        model: "",
        size: "",
        dateOfPurchase: "",
        mileage: "",
        injuries: "",
        condition: "",
        trailRoadBoth: "",
        weight: "",
        racesUsed: "",
        current: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateTochange = {};
        stateTochange[evt.target.id] = evt.target.value;
        this.setState(stateTochange);
    };

    constructNewShoe = evt => {
        evt.preventDefault();
        if (this.state.brand === "" || this.state.model === "" 
        || this.state.size === "" || this.state.dateOfPurchase === ""
        || this.state.mileage === "" || this.state.injuries === ""
        || this.state.condition === "" || this.state.trailRoadBoth === ""
        || this.state.weight === "" || this.state.racesUsed === ""
        || this.state.current === "") {
            window.alert("Form is Incomplete Fuck-Face") 
        } else {
            this.setState({ loadingStatus: true});
            const shoe = {
                image: this.state.image,
                brand: this.state.brand,
                model: this.state.model,
                size: this.state.size,
                dateOfPurchase: this.state.dateOfPurchase,
                mileage: this.state.mileage,
                injuries: this.state.injuries,
                condition: this.state.condition,
                trailRoadBoth: this.state.trailRoadBoth,
                weight: this.state.weight,
                racesUsed: this.state.racesUsed,
                current: this.state.current
            };

            ShoeManager.post(shoe)
            .then(() => this.props.history.push("/shoes"));
        }
    }


        componentDidMount() {
            ShoeManager.getAll()
            .then(shoes => this.setState({shoes: shoes}))
        }

        render() {
            return (
          <>
            <div className="card">
             <div className="card-body">
              <article id="newShoeForm"><h1>Add New Shoes</h1>
                <section>
                    <h3>Name</h3>
                    <input type="text" id="name" onChange={this.handleFieldChange}/>
                </section>
               </article>
              </div>
             </div>
                </>
                )
            }
        }

export default ShoeForm