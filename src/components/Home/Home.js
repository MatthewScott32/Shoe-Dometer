import React, { Component } from 'react'
import "./home.css"

class Home extends Component {
  render() {
    return (
      <>
      <body className="homebody">
      <div className="title">
        <h1>
          Welcome to Shoe-Dometer!
        </h1>
      </div>
      <div className= "slogan">
        <h2>
            Tracking Your Miles While You Make Tracks
        </h2>
      </div>

      <div className="homeline">
        <hr/>
      </div>
      {/* <div className="homebuttons">
      <div className="homebutton1">
        <div className="button" className="section-content" onClick={() => {this.props.history.push("/login")}}>Login</div>
      </div>
      <div className="homebutton2">
        <div className="button" className="section-content" onClick={() => {this.props.history.push("/register")}}>Register</div>
      </div>
      </div> */}
      </body>
      </>
    )
  }
}

export default Home