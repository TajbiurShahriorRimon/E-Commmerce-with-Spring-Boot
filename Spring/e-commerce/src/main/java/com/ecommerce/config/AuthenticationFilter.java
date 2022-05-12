package com.ecommerce.config;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.context.SecurityContextImpl;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.ecommerce.security.JwtUtil;
import com.ecommerce.service.LoginServiceImpl;

@Component
public class AuthenticationFilter extends OncePerRequestFilter{

	@Autowired
	private LoginServiceImpl loginService;
	@Autowired
	private JwtUtil jwt;
	
	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		String requestTokenHeader=request.getHeader("Authorization");
		String username=null;
		String jwtToken=null;
		if(requestTokenHeader!=null && requestTokenHeader.startsWith("Bearer ")) {
			
			jwtToken=requestTokenHeader.substring(7);
			
			try {
				username=this.jwt.extractUsername(jwtToken);
				
				UserDetails userdetails= this.loginService.loadUserByUsername(username);
				
				if(username!=null && SecurityContextHolder.getContext().getAuthentication()!=null) {
					
					UsernamePasswordAuthenticationToken authToken= new UsernamePasswordAuthenticationToken(userdetails, null, userdetails.getAuthorities());
					authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
					SecurityContextHolder.getContext().setAuthentication(authToken);
				}else {
					System.out.println("Token is not validated");
					
				}
				
				
			}catch (Exception e) {
				e.printStackTrace();
			}
		}
		System.out.println("No token header");
		filterChain.doFilter(request, response);
	}

}
