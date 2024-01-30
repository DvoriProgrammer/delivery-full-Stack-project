package com.javatpoint.dto;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.javatpoint.model.Delivery;
import com.javatpoint.model.User;

import javax.persistence.ManyToOne;

public class CommentDTO {
    private Long id;
    private String coment;
    public int score;
    private int status;//1-מציע את עצמיתת2-ביקרות

    private UserDTO userId;

    public CommentDTO() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getComent() {
        return coment;
    }

    public void setComent(String coment) {
        this.coment = coment;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public UserDTO getUserId() {
        return userId;
    }

    public void setUserId(UserDTO userId) {
        this.userId = userId;
    }
}
