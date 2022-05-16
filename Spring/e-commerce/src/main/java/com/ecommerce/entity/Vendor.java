package com.ecommerce.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Entity
@Table(name="vendorDummy2")
public class Vendor {

	

	@Id
	private int id;
	@NotEmpty
	@OneToOne
	private User mail;
	@NotEmpty
	@Size(min=4,message="Registration number must have at least 4 characters")
	private String registrationNumber;
	@Size(min=11,message="Invalid phone number")
	private String shopPhone;
	@NotEmpty(message="Address cannot be empty")
	private String shopAddress;
	@NotEmpty
	@Size(min=4,message="Name must have at least 4 characters")
	private String shopName;
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public User getMail() {
		return mail;
	}
	public void setMail(User mail) {
		this.mail = mail;
	}
	public String getRegistrationNumber() {
		return registrationNumber;
	}
	public void setRegistrationNumber(String registrationNumber) {
		this.registrationNumber = registrationNumber;
	}
	public String getShopPhone() {
		return shopPhone;
	}
	public void setShopPhone(String shopPhone) {
		this.shopPhone = shopPhone;
	}
	public String getShopAddress() {
		return shopAddress;
	}
	public void setShopAddress(String shopAddress) {
		this.shopAddress = shopAddress;
	}
	public String getShopName() {
		return shopName;
	}
	public void setShopName(String shopName) {
		this.shopName = shopName;
	}
}
