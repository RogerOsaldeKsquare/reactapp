import React, {useState} from "react";
import Modal from "react-modal"
import {Form, Button } from "react-bootstrap";
import '../App.css';

Modal.setAppElement('#root')
const customStyles = {
  content: {
    top: '35%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width: '50%',
    transform: 'translate(-40%, -10%)',
  },
};


function Forms({addMovies, planets}){

    const [episode, setEpisode] = useState();
    const [title, setTitle] = useState();
    const [producer, setProducer] = useState();
    const [date, setDate] = useState();
    const [director, setDirector] = useState();
    const [planet, setPlanet] = useState();

    const movies = (e)=>{
        e.preventDefault()
        addMovies({episode_id:episode, title:title, producer:producer, release_date:date, director:director,planets:planet, opening_crawl:"Coming Soon..."})
    }


  const [modalIsOpen, setModalIsOpen] = useState(false);
  return(
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '15vh'}} className="Modal" >
      <button className="button" onClick={()=> setModalIsOpen(true)} >Add a Film</button>
      <Modal onSubmit={()=> setModalIsOpen(false)} isOpen={modalIsOpen} onRequestClose={()=> setModalIsOpen(false) } style={customStyles}>
          <h1>Add a Film</h1>
          <div className="Form">
      <Form onSubmit={movies}>

                        <Form.Group >
                            <Form.Label>Episode</Form.Label>
                            <Form.Control required type="number" onChange={(e)=> setEpisode(e.target.value)}/>
                        </Form.Group>

                        <Form.Group >
                            <Form.Label>Title</Form.Label>
                            <Form.Control required type="text" onChange={(e)=> setTitle(e.target.value)}/>
                        </Form.Group>



                        <Form.Group >
                            <Form.Label>Producer</Form.Label>
                            <Form.Control required type="text" onChange={(e)=> setProducer(e.target.value)}/>
                        </Form.Group>

                        <Form.Group >
                            <Form.Label>Release date</Form.Label>
                            <Form.Control required type="date" onChange={(e)=> setDate(e.target.value)}/>
                        </Form.Group>



                        <Form.Group >
                            <Form.Label>Director</Form.Label>
                            <Form.Control required type="text" onChange={(e)=> setDirector(e.target.value)}/>
                        </Form.Group>

                        <Form.Group  >
                        <Form.Label>Planet</Form.Label>
                            <Form.Select required onChange={(e)=> setPlanet(e.target.value)}>
                                <option defaultValue hidden >Planet</option>
                                {planets.map((planet, i)=>(
                                    <option key={i}>{planet.name}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>

                    

                        <Form.Group controlId="formFileLg" >
                            <Form.Label>Image Episode</Form.Label>
                            <Form.Control type="file" size="sm" />
                        </Form.Group>


                        <Button type="submit" > Submit </Button>

                </Form>
                </div>
        <button onClick={()=> setModalIsOpen(false)}>Close window</button>
      </Modal>
    </div>
  )
}

export default Forms