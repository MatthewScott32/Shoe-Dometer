import React, { Component } from 'react'
import "./home.css"

class Home extends Component {
  render() {
    return (
      <>
      <body class="homebody">
      <div class="title">
        <h1>
          Welcome to Shoe-Dometer!
        </h1>
      </div>
      <div class= "slogan">
        <h2>
            Tracking Your Miles While You Make Tracks
        </h2>
      </div>

      <div class="homeline">
        <hr/>
      </div>
      {/* <div class="homebuttons">
      <div class="homebutton1">
        <div class="button" className="section-content" onClick={() => {this.props.history.push("/login")}}>Login</div>
      </div>
      <div class="homebutton2">
        <div class="button" className="section-content" onClick={() => {this.props.history.push("/register")}}>Register</div>
      </div>
      </div> */}
      </body>
      </>
    )
  }
}

export default Home