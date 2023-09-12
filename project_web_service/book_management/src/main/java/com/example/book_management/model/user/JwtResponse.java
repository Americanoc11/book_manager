package com.example.book_management.model.user;

public class JwtResponse {

    private String token;
    private String type = "Bearer";

    public JwtResponse(String token) {
        this.token = token;
    }

    // Getters và setters (nếu cần)

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
