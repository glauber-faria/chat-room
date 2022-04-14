import React, { useState } from "react";
import "./home.style.css";
import "../../assets/fundo.jpg"
import { Box, Button, TextField } from '@mui/material';
import Websocket from "../../components/Websocket";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function Home() {
  const [name, setName] = useState('');
  const [client, SetClient] = useState();
  const [content, setContent] = useState();

  const handleMessage = (msg) => {
    //console.log(msg);
    setContent(msg);
  };
  const handleClient = (client) => {
    SetClient(client);
  }

  const handleClick = () => {
    client.sendMessage("/app/join", JSON.stringify({'username': name}), (e) => console.log(e));
    //navigate('/chat', { state: { id: 7, color: 'green' } });
    // console.log(content);
    //navigate('/chat', content);
  }
  useEffect((() => {
    if(content){
      navigate('/chat', { state: content });
    }
  }), [content]);

  let navigate = useNavigate();
  return (
    <Box className="homecontainer">
      <Websocket
        url='http://localhost:8080/ws/'
        topics={['/topic/response']}
        handleMessage={handleMessage}
        client={handleClient}
      />
      <Box className="homebox">
        <h1 className="homeh1">CHAT ROOM</h1>
        <TextField label="Name" variant="outlined" color="primary" fullWidth style={{ marginBottom: '5vh'}} value={name} onChange={ (e) => setName(e.target.value)} />
        <Button variant="contained" fullWidth onClick={handleClick}>Entrar</Button>
      </Box>
    </Box>
  );
}

export default Home;