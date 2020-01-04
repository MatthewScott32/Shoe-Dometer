import React, { Component } from 'react';
import ShoesManager from '../../modules/ShoesManager';
import { getUser } from '../../modules/Helpers';
import './ShoesEditForm.css'

class ShoesEditForm extends Component {
    
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
        loadingStatus: true,
    };

    handleFieldChange = event => {
        const stateToChange = {};
        stateToChange[event.target.id] = event.target.value;
        this.setState(stateToChange);
    };

    handleCheckbox = event => {
        const stateToChange = {};
        stateToChange[event.target.id] = event.target.checked
        this.setState(stateToChange)
    }

    updateExistingShoes = event => {
        event.preventDefault();
            this.setState({ loadingStatus: true});
            const editedShoes = {
                id: this.props.match.params.shoesId,
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

            ShoesManager.update(editedShoes)
            .then(() => this.props.history.push("/shoes"))
        
            }

            componentDidMount() {
                ShoesManager.get(this.props.match.params.shoesId)
                .then(shoes => {
                    this.setState({
                        brand: shoes.brand,
                        model: shoes.model,
                        size: shoes.size,
                        dateOfPurchase: shoes.dateOfPurchase,
                        mileage: shoes.mileage,
                        injuries: shoes.injuries,
                        condition: shoes.condition,
                        trailRoadBoth: shoes.trailRoadBoth,
                        weight: shoes.weight,
                        racesUsed: shoes.racesUsed,
                        current: shoes.current,
                        loadingStatus: false,
                    })
                })
            }

            render() {
                return(
                    <>
                    <body className="shoeeditbody">
                    <form className="shoeeditform">
                    <fieldset>
                   
                    <h3 htmlFor="brand">Brand</h3>
                    <input className="shoeinput1" type="input" required
                    onChange={this.handleFieldChange}
                    id="brand"
                    value={this.state.brand}/>
                    {/* <hr/> */}
                

                    
                    <h3 htmlFor="model">Model</h3>
                    <input className="shoeinput2"  type="input" required
                    onChange={this.handleFieldChange}
                    id="model"
                    value={this.state.model}/>
                    {/* <hr/> */}
                   

                    <h3 htmlFor="size">Size</h3>
                    <input className="shoeinput1" type="input" required 
                    onChange={this.handleFieldChange}
                    id="size"
                    value={this.state.size}/>
                    {/* <hr/> */}
                    

                    <h3 htmlFor="dateOfPurchase">Date of Purchase</h3>
                    <input className="shoeinput2" type="date" required 
                    onChange={this.handleFieldChange}
                    id="dateOfPurchase"
                    value={this.state.dateOfPurchase}/>
                    {/* <hr/> */}

                    <h3 htmlFor="mileage">Mileage</h3>
                    <input className="shoeinput1" type="number" required 
                    onChange={this.handleFieldChange}
                    id="mileage"
                    value={this.state.mileage}/>
                    {/* <hr/> */}

                    <h3 htmlFor="injuries">Injuries</h3>
                    <input className="shoeinput2" type="input" required 
                    onChange={this.handleFieldChange}
                    id="injuries"
                    value={this.state.injuries}/>
                    {/* <hr/> */}

                    <h3 htmlFor="condition">Condition</h3>
                    <input className="shoeinput1" type="input" required 
                    onChange={this.handleFieldChange}
                    id="condition"
                    value={this.state.condition}/>
                    {/* <hr/> */}

                    <h3 htmlFor="trailRoadBoth">Trail, Road, Both</h3>
                    <input className="shoeinput2" type="input" required 
                    onChange={this.handleFieldChange}
                    id="trailRoadBoth"
                    value={this.state.trailRoadBoth}/>
                    {/* <hr/> */}

                    <h3 htmlFor="weight">Shoe Weight</h3>
                    <input className="shoeinput1" type="input" required 
                    onChange={this.handleFieldChange}
                    id="weight"
                    value={this.state.weight}/>
                    {/* <hr/> */}
                    
                    <div>
                    <h3 htmlFor="racesUsed">Races Used</h3>
                    <input className="shoeinput2" type="input" required 
                    onChange={this.handleFieldChange}
                    id="racesUsed"
                    value={this.state.racesUsed}/>
                    {/* <hr/> */}
                    </div>
                    </fieldset>

                    <div>
                    <h3 htmlFor="current" className="currenttitle">Current</h3>
                    <input className="checkbox1"  type="checkbox" required 
                    onChange={this.handleCheckbox}
                    id="current"
                    value={this.state.current}
                    checked={this.state.current} />
                    {/* <hr/> */}
                    </div>

                    
                    <div className="submitbutton"
                     disabled={this.state.loadingStatus}
                     onClick={this.updateExistingShoes}>
                     Submit</div>
                    </form>
                    </body>
              </>
             );
           }
        }

                   
               
        
    
export default ShoesEditForm