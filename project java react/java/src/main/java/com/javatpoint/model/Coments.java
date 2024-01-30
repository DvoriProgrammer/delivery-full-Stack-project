package com.javatpoint.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.util.List;

@Entity
public class Coments {
    @Id
    @GeneratedValue
    private Long id;
    private String coment;
    public int score;
    private int status;//1-מציע את עצמיתת2-ביקרות
//    @JsonIgnore
//    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)

    @JsonBackReference
    @ManyToOne
    private Delivery usersOffer;//הצעות-ביקורת משתמש למשתמשים
//    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
//    @JsonIgnore
//    @JsonBackReference
    @ManyToOne
    private User userId;


//    @ManyToMany
//    private List<User> usersRevuewr;// לדוג אתה אחלה משלוחן ביקורות משתמש על ידי המשתמשים-בקורת שכתבו עלי

    public Coments() {

    }

    public User getUserId() {
        return userId;
    }

    public void setUserId(User userId) {
        this.userId = userId;
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

    public Delivery getUsersOffer() {
        return usersOffer;
    }

    public void setUsersOffer(Delivery usersOffer) {
        this.usersOffer = usersOffer;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public Coments(Long id, String coment, int score, Delivery usersOffer, int status) {
        this.id = id;
        this.coment = coment;
        this.score = score;
        this.usersOffer = usersOffer;
        this.status = status;

    }
}
