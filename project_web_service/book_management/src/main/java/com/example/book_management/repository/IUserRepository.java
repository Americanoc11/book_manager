package com.example.book_management.repository;

import com.example.book_management.model.user.Role;
import com.example.book_management.model.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface IUserRepository extends JpaRepository<User,Integer> {
    User findByEmail(String email);
    List<User> findAllByRole(Role user);

    Optional<User> getUserByEmailAndPassword(String email, String password);
}
