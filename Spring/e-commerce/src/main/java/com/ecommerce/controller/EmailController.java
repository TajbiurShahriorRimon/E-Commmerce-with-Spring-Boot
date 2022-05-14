package com.ecommerce.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.entity.Mail;

@RestController
public class EmailController {

	
	@Autowired
	 public JavaMailSender emailSender;
	
	@PostMapping(value="/mailTest")
	public void sendMail(@RequestBody Mail mail ) {
		SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
		simpleMailMessage.setTo(mail.getMail());
		simpleMailMessage.setSubject("bruh");
		simpleMailMessage.setText("Ready to rumble?");
		System.out.println(mail.getMail());
		emailSender.send(simpleMailMessage);
		System.out.println("Success");
	}
	
	
}
