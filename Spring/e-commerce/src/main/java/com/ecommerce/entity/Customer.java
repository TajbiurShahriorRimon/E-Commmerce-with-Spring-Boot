package com.ecommerce.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotEmpty;

@Entity
public class Customer {
	
	@Id
	private int id;
	@NotEmpty
	@OneToOne
	private User mail;
	
	
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
	
	

}
