import React, { Component } from "react"
import RaceCardDetails from "./RaceCardDetails"
import "./RaceCard.css"
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles'
import CardContent from '@material-ui/core/CardContent';


const useStyles = makeStyles({
    card: {
      minWidth: 275,
      marginBottom: 5,
    }
  });


  export default function  RacesCard(props) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
        return(
            <Card className={classes.card}>
            <CardContent>
                <div class="racecard">
                  <div>
                    <p><strong>Name:</strong> {props.race.raceName}</p>
                    <p><strong>Location:</strong> {props.race.raceLocation}</p>
                    <p><strong>Date:</strong> {props.race.raceDate}</p>
                    <div class="racebutton" onClick={() => {props.history.push(`/races/${props.race.id}`)}}>Details</div>
                    <div class="racebutton" onClick={() => {props.history.push(`/races/${props.race.id}/edit`)}}>Edit</div>
                    <div class="racebutton" onClick={() => props.deleteRaces(props.race.id)}>Delete</div>
                  </div>
                </div>
                </CardContent>
                </Card>
        )
    }