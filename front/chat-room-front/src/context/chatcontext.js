import React, { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router";

const Context = createContext();

function ChatContext() {
  const [content, setContent] = useState({});



  return (
    <Context.Provider value={{
      content
    }}>
      
    </ Context.Provider>
  );
}

export default {Context, ChatContext};