package com.javatpoint.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.xml.crypto.Data;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Entity
public class Delivery {
 @Id
    @GeneratedValue
    private Long id;
    private String fromWhere;
    private String toWhere;
    private int price;
    private int size;///1-small,2-medium,3-big,4-uge
    private boolean status;//false for not delivered
    private String recognaize;



    public void setRecognaize(String recognaize) {
        this.recognaize = recognaize;
    }
    private LocalDateTime postingDate;

    public LocalDateTime getPostingDate() {
        return postingDate;
    }

    public void setPostingDate(LocalDateTime postingDate) {
        this.postingDate = postingDate;
    }

    // private boolean deliverMan;///true for the deliverman,false for the person who needs the deliving
    private LocalDateTime dateTime;//
    private String requesHour;


   @ManyToOne
   private User userId;
//@JsonIgnore

   @OneToMany(mappedBy = "usersOffer")//הרבה תגובות
   private List<Coments> coments;

    public User getChosenUser() {
        return chosenUser;
    }

    public void setChosenUser(User chosenUser) {
        this.chosenUser = chosenUser;
    }

    @ManyToOne
   private User chosenUser;
   @ManyToOne
   private  Category category;//שליח משלוח
    public String getRecognaize() {
        return recognaize;
    }
    public Delivery() {}

    public Category getCatgory() {
        return category;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFromWhere() {
        return fromWhere;
    }

    public void setFromWhere(String fromWhere) {
        this.fromWhere = fromWhere;
    }

    public String getToWhere() {
        return toWhere;
    }

    public void setToWhere(String toWhere) {
        this.toWhere = toWhere;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }



    public LocalDateTime getDateTime() {
        return dateTime;
    }

    public void setDateTime(LocalDateTime dateTime) {
        this.dateTime = dateTime;
    }

    public String getRequesHour() {
        return requesHour;
    }

    public void setRequesHour(String requesHour) {
        this.requesHour = requesHour;
    }

    public User getUserId() {
        return userId;
    }

    public void setUserId(User userId) {
        this.userId = userId;
    }

    public List<Coments> getComents() {
        return coments;
    }

    public void setComents(List<Coments> coments) {
        this.coments = coments;
    }



    public void setCategory(Category category) {
        this.category = category;
    }

    public Delivery(Long id, String fromWhere, String toWhere, int price, int size, boolean status, LocalDateTime dateTime, String requesHour, User userId, List<Coments> coments, Category category,String recognaize,User chosenUser,LocalDateTime postingDate) {
        this.id = id;
        this.fromWhere = fromWhere;
        this.toWhere = toWhere;
        this.price = price;
        this.size = size;
        this.status = status;
        this.dateTime = dateTime;
        this.requesHour = requesHour;
        this.userId = userId;
        this.coments = coments;
        this.category = category;
        this.recognaize=recognaize;
        this.chosenUser=chosenUser;
        this.postingDate=postingDate;
    }
}
