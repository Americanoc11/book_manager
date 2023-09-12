package com.example.book_management.service.user;

import com.example.book_management.dto.LoginDTO;
import com.example.book_management.model.user.User;
import com.example.book_management.response.LoginResponse;

import java.util.List;

public interface IUserService {
    List<User> findAll();
    void create(User user);
    User findById(Integer id);
    void deleteById(Integer id);
    void updateById(User user);
    boolean exitsById(Integer id);

    LoginResponse loginUser(LoginDTO loginDTO);
}
