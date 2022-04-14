package com.server.chatroom.model;

import java.time.LocalDateTime;

import com.server.chatroom.enums.ActivityType;

public class Activity {
    
    private User user;
    private ActivityType type;
    private LocalDateTime data = LocalDateTime.now();
    
    public Activity(User user, ActivityType type) {
        this.user = user;
        this.type = type;
    }


    /* public Activity(User user, LocalDateTime data) {
        this.user = user;
        this.data = data;
    } */
 
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public ActivityType getType() {
        return type;
    }

    public void setType(ActivityType type) {
        this.type = type;
    }

    public LocalDateTime getData() {
        return data;
    }

    public void setData(LocalDateTime data) {
        this.data = data;
    }

    
}
