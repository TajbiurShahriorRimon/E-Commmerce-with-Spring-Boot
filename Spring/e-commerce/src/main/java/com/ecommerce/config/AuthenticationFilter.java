package com.ecommerce.config;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

@Component
public class AuthenticationFilter extends OncePerRequestFilter{

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		String requestTokenHeader=request.getHeader("Authorization");
		String username=null;
		String jwtToken=null;
		if(requestTokenHeader!=null && requestTokenHeader.startsWith("Bearer ")) {
			
			jwtToken=requestTokenHeader.substring(7);
		}
	}

}
