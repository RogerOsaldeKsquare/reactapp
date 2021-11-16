import React from 'react';
import {Card, Grid } from 'semantic-ui-react';
import imagesc from '../assets/imagesc';
//import styled from "styled-components";
// import { CgSun } from "react-icons/cg";
// import { HiMoon } from "react-icons/hi";

export default function People({data}){
    return (
        <>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh'}}>
            <h1> People </h1>
            </div>
            <Grid columns={3}>
                {data.map((people, i)=>{
                    return(
                        <Grid.Column key={i}>
                        <Card>
                            <Card.Content>
                                <Card.Header>{people.name}</Card.Header>
                                <Card.Description>
                                    <div className="card-image-container">
                                        <img
                                            className="medium"
                                            style={{ width: 260, height: 300 }}
                                            src={imagesc[i]}
                                            alt={people.name}
                                        />
                                    </div>
                                    <strong>Height</strong>
                                    <p>{people.height}</p>
                                    <strong>Mass</strong>
                                    <p>{people.mass}</p>
                                    <strong>Hair Color</strong>
                                    <p>{people.hair_color}</p>
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