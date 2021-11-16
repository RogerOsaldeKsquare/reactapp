import React, {useState,useEffect} from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import {Container, Dimmer, Loader } from 'semantic-ui-react';
import Home from './components/Home';
import People from './components/People';
import Planets from './components/Planets';
import Films from './components/Films';


function App() {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState([true]);



  useEffect(()=>{
    async function fetchPeople(){
      let res = await fetch('https://swapi.dev/api/people/?format=json');
      let data = await res.json();
      setPeople(data.results);
      setLoading(false);
    }

    async function fetchPlanets(){
      let res = await fetch('https://swapi.dev/api/planets/?format=json');
      let data = await res.json();
      setPlanets(data.results);
      setLoading(false);
    }

      fetchPeople();
      fetchPlanets();

  }, [])

  return (
      <Router>
        <Navbar />
          <Container>
            {loading ? (
              <Dimmer active inverted>
                  <Loader inverted>Loading</Loader>
              </Dimmer>
            ) : (
              <Routes>
              <Route element={<Home />} exact path='/'>
              </Route>
              <Route element={<People data={people}/>} exact path='/people'>
              </Route>
              <Route element={<Planets data={planets} />} exact path='/planets'>
              </Route>
              <Route element={<Films data_planets={planets} />} exact path='/films'>
              </Route>
              </Routes>
            ) }
          </Container>
      </Router>
  );
}

export default App;

