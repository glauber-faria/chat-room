package com.server.chatroom.controller;

import java.util.Iterator;

import com.server.chatroom.enums.ActivityType;
import com.server.chatroom.model.Activity;
import com.server.chatroom.model.Colaborate;
import com.server.chatroom.model.Content;
import com.server.chatroom.model.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.EventListener;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.stereotype.Controller;
import org.springframework.web.socket.messaging.SessionDisconnectEvent;

@Controller
public class MessageController {

    private static final Content CONTENT = new Content();
    @Autowired
    private SimpMessageSendingOperations message;

    @MessageMapping("/join")
    @SendTo("/topic/response")
    public Content join (@Payload User user, SimpMessageHeaderAccessor accessor){
        CONTENT.getUsers().add(user);
        CONTENT.getActivity().add(new Activity(user, ActivityType.JOIN));
        accessor.getSessionAttributes().put("user", user);
        return CONTENT;
    }

    @MessageMapping("/colaborate ")
    @SendTo("/topic/response")
    public Content join (@Payload Colaborate colaborate, SimpMessageHeaderAccessor accessor){
        CONTENT.setContent(colaborate.getContent());
        return CONTENT;
    }

    @EventListener
    public void socketDisconnect(SessionDisconnectEvent event){
        StompHeaderAccessor wrap = StompHeaderAccessor.wrap(event.getMessage());
        if(wrap.getSessionAttributes().containsKey("user")){
            User user = (User) wrap.getSessionAttributes().get("user");
            Iterator<User> iterator = CONTENT.getUsers().iterator();
            while(iterator.hasNext()){
                User current = iterator.next();

                if(current.getUsername().equals(user.getUsername())){
                    iterator.remove();;
                }
            }
            CONTENT.getActivity().add(new Activity(user, ActivityType.LEAVE));
        }
        message.convertAndSend("/topic/response", CONTENT);
    }
}
