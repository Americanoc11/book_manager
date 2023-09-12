package com.example.book_management.service.user;

import com.example.book_management.model.user.Role;
import com.example.book_management.repository.IRoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class RoleService implements IRoleService{
    @Autowired
    private IRoleRepository roleRepository;
    @Override
    public List<Role> findAll() {
        return roleRepository.findAll();
    }

    @Override
    public Role findById(Integer id) {
        return roleRepository.findById(id).orElseThrow(()->new IllegalArgumentException("Invalid Id: "+id));
    }
}
