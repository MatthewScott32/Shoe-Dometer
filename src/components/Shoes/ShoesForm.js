import React, { Component } from 'react';
import ShoesManager from '../../modules/ShoesManager';
import { getUser } from '../../modules/Helpers';
// import './ShoesForm.css'

class ShoesForm extends Component {
    
    state ={
        userId: getUser().id,
        // image: "",
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
        current: true,
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateTochange = {};
        stateTochange[evt.target.id] = evt.target.value;
        this.setState(stateTochange);
    };

    handleCheckbox = e => {
        const stateToChange = {};
        stateToChange[e.target.id] = e.target.checked
        this.setState(stateToChange)
    };

    constructNewShoes = evt => {
        evt.preventDefault();
        if (this.state.brand === "" || this.state.model === "" 
        || this.state.size === "" || this.state.dateOfPurchase === ""
        || this.state.mileage === "" || this.state.injuries === ""
        || this.state.condition === "" || this.state.trailRoadBoth === ""
        || this.state.weight === "" || this.state.racesUsed === "") {
            window.alert("Form Incomplete") 
        } else {
            this.setState({ loadingStatus: true});
            const shoes = {
                userId: getUser().id,
                // image: this.state.image,
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
            ShoesManager.post(shoes)
            .then(() => this.props.history.push("/shoes"));
        }
    }
    
    
    componentDidMount() {
        ShoesManager.getAllAccountShoes(getUser().id)
        .then(shoes => this.setState({shoes: shoes}))
    }
    
    render() {
        return (
            <>
            <div className="card">
             <div className="card-body">
              <article id="newShoesForm"><h1>New Shoes</h1>
                <section>
                    {/* <h3>Picture</h3>
                    <input type="image" id="image" onChange={this.handleFieldChange}/> */}
                    <h3>Brand</h3>
                    <input type="input" id="brand" onChange={this.handleFieldChange}/>
                    <h3>Model</h3>
                    <input type="input" id="model" onChange={this.handleFieldChange}/>
                    <h3>Size</h3>
                    <input type="input" id="size" onChange={this.handleFieldChange}/>
                    <h3>Date of Purchase</h3>
                    <input type="date" id="dateOfPurchase" onChange={this.handleFieldChange}/>
                    <h3>Mileage</h3>
                    <input type="number" id="mileage" onChange={this.handleFieldChange}/>
                    <h3>Injuries</h3>
                    <input type="input" id="injuries" onChange={this.handleFieldChange}/>
                    <h3>Condition with Miles</h3>
                    <input type="input" id="condition" onChange={this.handleFieldChange}/>
                    <h3>Trail, Road, Both</h3>
                    <input type="input" id="trailRoadBoth" onChange={this.handleFieldChange}/>
                    <h3>Shoe Weight</h3>
                    <input type="input" id="weight" onChange={this.handleFieldChange}/>
                    <h3>Races Used</h3>
                    <input type="input" id="racesUsed" onChange={this.handleFieldChange}/>
                    <h3>Current</h3>
                    <input type="checkbox" id="current" onChange={this.handleCheckbox} checked={this.state.current}/>
                </section>
                <button id="saveShoes" disabled={this.state.loadingStatus} onClick={this.constructNewShoes}>Save Pair</button>
               </article>
              </div>
             </div>
                </>
                )
            }
        }

export default ShoesForm