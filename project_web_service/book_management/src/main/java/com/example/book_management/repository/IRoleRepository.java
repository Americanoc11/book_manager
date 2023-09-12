package com.example.book_management.repository;

import com.example.book_management.model.user.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IRoleRepository extends JpaRepository<Role,Integer> {
}
