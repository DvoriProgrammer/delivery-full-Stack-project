package com.javatpoint.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
public class User {
    @Id
    @GeneratedValue
    private Long id;
    private String password;
    private  String email;
    private  String firstName;
    private  String lastName;
    private  boolean status;//manager-1,user-0
    private String phone;
    private  int level;//דרוג
    private int deliverCount;//הוא שלח
    private String img;

    public List<Coments> getComents() {
        return coments;
    }

    public List<Delivery> getMydeliversHistory() {
        return MydeliversHistory;
    }

    public void setMydeliversHistory(List<Delivery> mydeliversHistory) {
        MydeliversHistory = mydeliversHistory;
    }

    public void setComents(List<Coments> coments) {
        this.coments = coments;
    }

    @JsonIgnore
    @OneToMany(mappedBy = "userId")
    private List<Coments> coments;
    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    private  int deliveredCount;//שלחו בשבילו
    @JsonIgnore
    @OneToMany(mappedBy = "userId")
    private List<Delivery> deliversHistory;
    @JsonIgnore
    @OneToMany(mappedBy = "chosenUser")
    private List<Delivery> MydeliversHistory;

    public LocalDateTime getJoiningDate() {
        return joiningDate;
    }

    public void setJoiningDate(LocalDateTime joiningDate) {
        this.joiningDate = joiningDate;
    }

    private LocalDateTime joiningDate;
    ///////////////////לקשר לביקורות
    //private List<Coments> coments=new ArrayList<>();

    public User() {

    }
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public int getLevel() {
        return level;
    }

    public void setLevel(int level) {
        this.level = level;
    }

    public int getDeliverCount() {
        return deliverCount;
    }

    public void setDeliverCount(int deliverCount) {
        this.deliverCount = deliverCount;
    }

    public int getDeliveredCount() {
        return deliveredCount;
    }

    public void setDeliveredCount(int deliveredCount) {
        this.deliveredCount = deliveredCount;
    }

    public List<Delivery> getDeliversHistory() {
        return deliversHistory;
    }

    public void setDeliversHistory(List<Delivery> deliversHistory) {
        this.deliversHistory = deliversHistory;
    }

    public User(Long id, String password, String email, String firstName, String lastName, boolean status, String phone, int level, int deliverCount, int deliveredCount, List<Delivery> deliversHistory,String img,List<Coments> coments,List<Delivery>  MydeliversHistory,LocalDateTime joiningDate) {
        this.id = id;
        this.password = password;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.status = status;
        this.phone = phone;
        this.level = level;
        this.deliverCount = 0;
        this.deliveredCount = deliveredCount;
        this.deliversHistory = deliversHistory;
        this.img=img;
        this.coments=coments;
        this.MydeliversHistory=MydeliversHistory;
        this.joiningDate=joiningDate;
    }
}
