package com.app.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name="data")
public class Admin {

    @Id
    // ID Auto generated
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long cid;
    private String collegename;
    private String collegecategory;
    private String collegelocation;
    private float collegerating;
    private String collegeimg;
    public Long getCid() {
        return cid;
    }
    public void setCid(Long cid) {
        this.cid = cid;
    }
    public String getCollegename() {
        return collegename;
    }
    public void setCollegename(String collegename) {
        this.collegename = collegename;
    }
    public String getCollegecategory() {
        return collegecategory;
    }
    public void setCollegecategory(String collegecategory) {
        this.collegecategory = collegecategory;
    }
    public String getCollegelocation() {
        return collegelocation;
    }
    public void setCollegelocation(String collegelocation) {
        this.collegelocation = collegelocation;
    }
    public float getCollegerating() {
        return collegerating;
    }
    public void setCollegerating(float collegerating) {
        this.collegerating = collegerating;
    }
    public String getCollegeimg() {
        return collegeimg;
    }
    public void setCollegeimg(String collegeimg) {
        this.collegeimg = collegeimg;
    }

}
