import React, { Component } from 'react';
import ShoesManager from '../../modules/ShoesManager';
// import './ShoesForm.css'

class ShoesForm extends Component {
    
    state ={
        userId: "",
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
            const currentUser = JSON.parse(localStorage.getItem("credentials"))
            const shoes = {
                userId: currentUser.id,
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
        ShoesManager.getAll()
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
                    <select type="select" id="trailRoadBoth" onChange={this.handleFieldChange}>
                        <option value="none">Select</option>
                        <option value="Trail">Trail</option>
                        <option value="Road">Road</option>
                        <option value="Both">Both</option>
                    </select>
                    <h3>Weight</h3>
                    <select type="select" id="weight" onChange={this.handleFieldChange}>
                        <option value="none">Select</option>
                        <option value="Light">Light</option>
                        <option value="Medium">Medium</option>
                        <option value="Heavy">Heavy</option>
                    </select>
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