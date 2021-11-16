import React from 'react';
import {Card, Grid } from 'semantic-ui-react';
import imagesp from "../assets/imagesp"


export default function Planets({data}){
    return (
        <>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh'}}>
            <h1> Planets </h1>
         </div>
        <Grid columns={3}>
            {data.map((planets, i)=>{
                return(
                    <Grid.Column key={i}>
                    <Card>
                        <Card.Content>
                            <Card.Header>{planets.name}</Card.Header>
                            <Card.Description>
                                <div className="card-image-container">
                                        <img
                                            className="medium"
                                            style={{ width: 260, height: 300 }}
                                            src={imagesp[i]}
                                            alt={planets.title}
                                        />
                                </div>
                                <strong>Climate</strong>
                                <p>{planets.climate}</p>
                                <strong>Diameter</strong>
                                <p>{planets.diameter}</p>
                                <strong>Population</strong>
                                <p>{planets.population}</p>
                            </Card.Description>
                        </Card.Content>
                    </Card>
                    </Grid.Column>
                )
            })}
        </Grid>
    </>
    )

}