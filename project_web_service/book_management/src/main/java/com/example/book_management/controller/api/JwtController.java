package com.example.book_management.controller.api;

import com.example.book_management.config.CustomUserDetailsService;
import com.example.book_management.model.user.CustomUserDetails;
import com.example.book_management.model.user.JwtResponse;
import com.example.book_management.service.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class JwtController {

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private CustomUserDetailsService userDetailsService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/authenticate")
    public ResponseEntity<?> authenticate(@RequestBody CustomUserDetails customUserDetails) throws Exception {
        // Xác thực thông tin người dùng
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        customUserDetails.getUsername(),
                        customUserDetails.getPassword()
                )
        );

        // Lấy thông tin người dùng từ cơ sở dữ liệu
        final UserDetails userDetails = userDetailsService.loadUserByUsername(customUserDetails.getUsername());

        // Tạo JWT
        final String token = jwtUtil.generateToken(userDetails);

        // Trả về JWT trong phản hồi
        return ResponseEntity.ok(new JwtResponse(token));
    }

    @GetMapping("/user-profile")
    public ResponseEntity<?> getUserProfile(@RequestHeader("Authorization") String token) {
        // Loại bỏ tiền tố "Bearer" để lấy token
        if (token != null && token.startsWith("Bearer ")) {
            token = token.substring(7);
        }

        // Trích xuất thông tin người dùng từ JWT
        UserDetails userDetails = jwtUtil.extractUserDetails(token);

        // Trả về thông tin người dùng trong phản hồi
        return ResponseEntity.ok(userDetails);
    }
}
