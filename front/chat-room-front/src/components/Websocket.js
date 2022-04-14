import React from 'react';
import SocketJsClient from 'react-stomp';

const Websocket = ({ handleMessage, url, topics, client }) => (
  <SocketJsClient
    // url="cda/stomp"
    url={url}
    topics={topics}
    onMessage={handleMessage}
    ref={client}
    autoReconnect
  />
);
export default Websocket;
