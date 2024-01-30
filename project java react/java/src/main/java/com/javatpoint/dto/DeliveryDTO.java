package com.javatpoint.dto;

import com.javatpoint.model.Category;
import com.javatpoint.model.Coments;
import com.javatpoint.model.User;

import javax.persistence.GeneratedValue;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import java.time.LocalDateTime;
import java.util.List;

public class DeliveryDTO {


    @GeneratedValue
    private Long id;
    private String fromWhere;
    private String toWhere;
    private int price;
    private int size;///1-small,2-medium,3-big,4-uge
    private boolean status;//false for not delivered
    private String recognaize;
    private UserDTO chosenUser;

    // private boolean deliverMan;///true for the deliverman,false for the person who needs the deliving
    private LocalDateTime dateTime;//
    private String requesHour;
    private LocalDateTime postingDate;

    public LocalDateTime getPostingDate() {
        return postingDate;
    }

    public void setPostingDate(LocalDateTime postingDate) {
        this.postingDate = postingDate;
    }

    private UserDTO userId;
//@JsonIgnore


    public UserDTO getChosenUser() {
        return chosenUser;
    }

    public void setChosenUser(UserDTO chosenUser) {
        this.chosenUser = chosenUser;
    }

    private List<CommentDTO> coments;

    private Category category;//שליח משלוח

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

    public String getRecognaize() {
        return recognaize;
    }

    public void setRecognaize(String recognaize) {
        this.recognaize = recognaize;
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

    public UserDTO getUserId() {
        return userId;
    }

    public void setUserId(UserDTO userId) {
        this.userId = userId;
    }

    public List<CommentDTO> getComents() {
        return coments;
    }

    public void setComents(List<CommentDTO> coments) {
        this.coments = coments;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }
}
