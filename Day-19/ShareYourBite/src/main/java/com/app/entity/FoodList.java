package com.app.entity;

import jakarta.persistence.*;

@Entity
public class FoodList {
	@Id	
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long foodId;
	private String foodTitle;
	private String foodDescription;
	private String foodPickDate;
	private String foodExpiry;
	private String foodLocation;

	@ManyToOne
	@JoinColumn(name = "uid")
	private User userId;

	public User getUserId() {
		return userId;
	}

	public void setUserId(User userId) {
		this.userId = userId;
	}

	public Long getFoodId() {
		return foodId;
	}

	public void setFoodId(Long foodId) {
		this.foodId = foodId;
	}

	public String getFoodTitle() {
		return foodTitle;
	}

	public void setFoodTitle(String foodTitle) {
		this.foodTitle = foodTitle;
	}

	public String getFoodDescription() {
		return foodDescription;
	}

	public void setFoodDescription(String foodDescription) {
		this.foodDescription = foodDescription;
	}

	public String getFoodPickDate() {
		return foodPickDate;
	}

	public void setFoodPickDate(String foodPickDate) {
		this.foodPickDate = foodPickDate;
	}

	public String getFoodExpiry() {
		return foodExpiry;
	}

	public void setFoodExpiry(String foodExpiry) {
		this.foodExpiry = foodExpiry;
	}

	public String getFoodLocation() {
		return foodLocation;
	}

	public void setFoodLocation(String foodLocation) {
		this.foodLocation = foodLocation;
	}


	public FoodList() {
		// TODO Auto-generated constructor stub
	}

	public FoodList(Long foodId, String foodTitle, String foodDescription, String foodPickDate, String foodExpiry, String foodLocation,User userId) {
		this.foodId = foodId;
		this.foodTitle = foodTitle;
		this.foodDescription = foodDescription;
		this.foodPickDate = foodPickDate;
		this.foodExpiry = foodExpiry;
		this.foodLocation = foodLocation;
		this.userId=userId;
	}
}
