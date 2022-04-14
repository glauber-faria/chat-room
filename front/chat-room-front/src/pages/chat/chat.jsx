import { Card, TextareaAutosize } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import "./chat.style.css"
const Chat = () => {
  const { state } = useLocation();
  const [{ activity }, setActivity] = useState(state);
  const [{ content }, setContent] = useState(state);
  const [{ users }, setUsers] = useState(state);

  useEffect((() => {
    console.log(activity);
  }), []);

  return (
    <Box className="chatcontainer">
      <Card variant="outlined" className={["chatbox", "chatbox1"]}>
        <h1 className="chath1">Mensagens</h1>
        <TextareaAutosize
          style={{ width: '60vw', height: '50vh' }}
          className="chatdiv"
          value={content}
        />
        {/* <div className="chatdiv">{x}</div> */}
      </Card>
      <Card variant="outlined" className={["chatbox", "chatbox2"]}>
        <h1 className="chath1">Log</h1>
        <div>
          {
            activity.map((item) => {
              return (
                <div>
                  {(new Date(item.data)).toLocaleDateString()} às {(new Date(item.data)).toLocaleTimeString()} 
                  - {item.user.username} - <b>{item.type}</b>
                  <br />
                </div>
              )
            })
          }
        </div>
      </Card>
    </Box>
  );
}
export default Chat;