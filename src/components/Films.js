import React from 'react';
import {Card, Grid } from 'semantic-ui-react';
import images from "../assets/images"
import ModalF from './Modal'
import Forms from './Form'
import { useState, useEffect } from 'react';



export default function Films({data_planets}){
    const [allFilms, setFilms] = useState([]);
    const addMovies= (movie)=>{
        setFilms([...allFilms, movie])
    }
    useEffect(()=>{
        async function fetchFilms(){
          let res = await fetch('https://swapi.dev/api/films/?format=json');
          let data = await res.json();
          setFilms(data.results);
        }
          fetchFilms();
    
    
      }, [])

    return (
        <>
             <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh'}}>
            <h1> Films </h1>
            </div>
            <Grid columns={3}>
                {allFilms.map((films, i)=>{
                    return(
                        <Grid.Column key={i}>
                        <Card>
                            <Card.Content>
                                <Card.Header>{films.title}</Card.Header>
                                <Card.Description>
                                    <div className="card-image-container">
                                        <img
                                            className="medium"
                                            style={{ width: 260, height: 300 }}
                                            src={images[i]}
                                            alt={films.title}
                                        />
                                    </div>
                                    <strong>Director</strong>
                                    <p>{films.director}</p>
                                    <strong>Release Date</strong>
                                    <p>{films.release_date}</p>
                                </Card.Description>
                                <ModalF films={films}/>
                            </Card.Content>
                        </Card>
                        </Grid.Column>
                    )
                })}
            </Grid>
            
            <Forms addMovies = {addMovies} planets={data_planets}/>
        </>
    )

}