package com.example.book_management.config;

import com.example.book_management.model.user.Role;
import com.example.book_management.repository.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CustomUserDetailsService implements UserDetailsService {
    @Autowired
    private IUserRepository userRepository;
    public CustomUserDetailsService(IUserRepository userRepository) {
        this.userRepository = userRepository;
    }
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        com.example.book_management.model.user.User users= this.userRepository.findByEmail(email);
        if (users == null) {
            System.out.println("Email not found! " + email);
            throw new UsernameNotFoundException("Email: " + email + " was not found in the database");
        }
        List<com.example.book_management.model.user.User> userRole = this.userRepository.findAllByRole(users.getRole());
        List<GrantedAuthority> grantList = new ArrayList<>();
        if (userRole != null) {
            for (com.example.book_management.model.user.User u : userRole) {
                GrantedAuthority authority = new SimpleGrantedAuthority("ROLE_" + u.getRole().getName());
                grantList.add(authority);
            }
        }
        UserDetails userDetails = (UserDetails) new User(users.getEmail(), //
                users.getPassword(), grantList);
        return userDetails;
    }
}
