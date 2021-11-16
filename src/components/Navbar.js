import React, {useState} from 'react';
import {Menu, Container} from 'semantic-ui-react';
import {Link} from 'react-router-dom'
import { Switch } from '@mui/material';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function Navbar(){
    const [theme, setTheme] = useState(true);
    console.log(theme)
    return (
        <div>

            <Menu inverted color={theme ? "black": "blue"}>
            <Switch onChange={(e)=>setTheme(e.target.checked)} {...label} />
                <Container>
                <Link to='/'>
                <Menu.Item name='star wars API'/>
                </Link>
                
                <Link to='/people'>
                <Menu.Item name='people'/>
                </Link>
                
                <Link to='/planets'>
                <Menu.Item name='planets'/>
                </Link>

                <Link to='/films'>
                <Menu.Item name='films'/>
                </Link>
                </Container>
            </Menu>
            

        </div>
    )

}