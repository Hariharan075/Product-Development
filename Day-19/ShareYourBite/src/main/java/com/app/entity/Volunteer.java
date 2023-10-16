package com.app.entity;

import jakarta.persistence.*;
import org.hibernate.annotations.CascadeType;

@Entity
public class Volunteer {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long volunteerId;
    private String volunteerName;
    private String volunteerPassword;
    private Long volunteerAge;
    private Long volunteerMobile;
    private String volunteerEmail;
    private String volunteerLocation;

    @OneToOne
    @JoinColumn(name = "uid")
    private User user;

public Volunteer(){

}

    public Volunteer(Long volunteerId, String volunteerName, Long volunteerAge, Long volunteerMobile, String volunteerEmail, String volunteerLocation, User user,String volunteerPassword) {
        this.volunteerId = volunteerId;
        this.volunteerName = volunteerName;
        this.volunteerAge = volunteerAge;
        this.volunteerMobile = volunteerMobile;
        this.volunteerEmail = volunteerEmail;
        this.volunteerLocation = volunteerLocation;
        this.user=user;
        this.volunteerPassword=volunteerPassword;
    }

    public Long getVolunteerId() {
        return volunteerId;
    }

    public void setVolunteerId(Long volunteerId) {
        this.volunteerId = volunteerId;
    }

    public String getVolunteerName() {
        return volunteerName;
    }

    public void setVolunteerName(String volunteerName) {
        this.volunteerName = volunteerName;
    }

    public Long getVolunteerAge() {
        return volunteerAge;
    }

    public void setVolunteerAge(Long volunteerAge) {
        this.volunteerAge = volunteerAge;
    }

    public Long getVolunteerMobile() {
        return volunteerMobile;
    }

    public void setVolunteerMobile(Long volunteerMobile) {
        this.volunteerMobile = volunteerMobile;
    }

    public String getVolunteerEmail() {
        return volunteerEmail;
    }

    public void setVolunteerEmail(String volunteerEmail) {
        this.volunteerEmail = volunteerEmail;
    }

    public String getVolunteerLocation() {
        return volunteerLocation;
    }

    public void setVolunteerLocation(String volunteerLocation) {
        this.volunteerLocation = volunteerLocation;
    }

    public User getUser_id() {
        return user;
    }

    public void setUser_id(User user_id) {
        this.user = user;
    }

    public String getVolunteerPassword() {
        return volunteerPassword;
    }

    public void setVolunteerPassword(String volunteerPassword) {
        this.volunteerPassword = volunteerPassword;
    }
}
