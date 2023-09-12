package com.example.book_management.service.user;

import com.example.book_management.model.user.Role;

import java.util.List;

public interface IRoleService {
    List<Role> findAll();
    Role findById(Integer id);
}
