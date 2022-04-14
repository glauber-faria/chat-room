import { Card, TextareaAutosize } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import "./chat.style.css"
const Chat = () => {
  const [content] = useState("ajsdhkajshdkajsdhakjsdhakshdkajshdkajshd");
  const [log] = useState();
  return (
    <Box className="chatcontainer">
      <Card variant="outlined" className={["chatbox", "chatbox1"]}>
        <h1 className="chath1">Mensagens</h1>
        <TextareaAutosize
          placeholder="Maximum 4 rows"
          defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua."
          style={{ width: '60vw', height: '50vh'}}
          className="chatdiv"
        />
        {/* <div className="chatdiv">{content}</div> */}
      </Card>
      <Card variant="outlined" className={["chatbox", "chatbox2"]}>
        <h1 className="chath1">Log</h1>
      </Card>
    </Box>
  );
}
export default Chat;