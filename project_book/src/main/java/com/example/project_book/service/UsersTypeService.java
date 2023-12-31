package com.example.project_book.service;


import com.example.project_book.model.RoleUser;
import com.example.project_book.repo.IUsersTypeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsersTypeService implements IUsersTypeService {
    @Autowired
    private IUsersTypeRepo usersTypeRepo;

    @Override
    public List<RoleUser> getListUsers() {
        return usersTypeRepo.findAll();
    }

    @Override
    public void add(RoleUser usersType) {
            usersTypeRepo.save(usersType);
    }
}
