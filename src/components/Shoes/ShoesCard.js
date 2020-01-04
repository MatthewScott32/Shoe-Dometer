import React, { Component } from "react"
import "./ShoesCard.css"
import { Link } from "react-router-dom"
import ShoesCardDetails from "./ShoesCardDetails"
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles'
import CardContent from '@material-ui/core/CardContent';


const useStyles = makeStyles({
    card: {
      minWidth: 275,
      marginBottom: 5,
    }
  });


export default function ShoesCard(props) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

        return(
            <Card className={classes.card}>
                <CardContent>
                <div className="shoecard">
                    <div>
                    <picture>
                        <img src={props.shoe.image}/>
                    </picture>
                    <p><strong>Brand:</strong> {props.shoe.brand}</p>
                    <p><strong>Model:</strong> {props.shoe.model}</p>
                    <div className="shoebutton1">
                    <div className="shoebutton" onClick={() => {props.history.push(`/shoes/${props.shoe.id}`)}}>Details</div><br/>
                    <div className="shoebutton" onClick={() => {props.history.push(`/shoes/${props.shoe.id}/edit`)}}>Edit</div><br/>
                    <div className="shoebutton" onClick={() => props.deleteShoes(props.shoe.id)}>Delete</div><br/>
                    </div>
                </div>
               </div>
               </CardContent>
               </Card>
        )
    }


