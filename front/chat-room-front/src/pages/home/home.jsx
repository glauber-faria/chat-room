import React, { useState } from "react";
import "./home.style.css";
import "../../assets/fundo.jpg"
import { Box, Button, TextField } from '@mui/material';
function Home() {
  const [name, setName] = useState('');
  return (
    <Box className="homecontainer">
      <Box className="homebox">
        <h1 className="homeh1">CHAT ROOM</h1>
        <TextField label="Name" variant="outlined" color="primary" fullWidth style={{ marginBottom: '5vh'}} value={name} onChange={ (e) => setName(e.target.value)} />
        <Button variant="contained" fullWidth onClick={() => console.log(name)}>Entrar</Button>
      </Box>
    </Box>
  );
}

export default Home;