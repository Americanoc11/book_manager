package com.example.book_management.service.user;

import com.example.book_management.dto.LoginDTO;
import com.example.book_management.model.user.Role;
import com.example.book_management.model.user.User;
import com.example.book_management.repository.IUserRepository;
import com.example.book_management.response.LoginResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService implements IUserService {
    @Autowired
    private IUserRepository userRepository;
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    public void create(User user) {
        user.setRole(new Role(2, "USER"));
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        user.setFlagDelete(false);
        userRepository.save(user);
    }

    @Override
    public User findById(Integer id) {
        return userRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Invalid id: " + id));
    }

    @Override
    public void deleteById(Integer id) {
        if (this.exitsById(id)) {
            userRepository.deleteById(id);
        } else {
            throw new IllegalArgumentException("Invalid Id" + id);
        }
    }

    @Override
    public void updateById(User user) {
        if (this.exitsById(user.getId())) {
            userRepository.save(user);
        } else {
            throw new IllegalArgumentException("Invalid Id" + user.getId());
        }
    }

    @Override
    public boolean exitsById(Integer id) {
        return userRepository.existsById(id);
    }

    @Override
    public LoginResponse loginUser(LoginDTO loginDTO) {
        String msg = "";
        User user = userRepository.findByEmail(loginDTO.getEmail());
        if (user != null) {
            String password = loginDTO.getPassword();
            String encodedPassword = user.getPassword();
            Boolean isPasswordRight = bCryptPasswordEncoder.matches(password, encodedPassword);
            if (isPasswordRight) {
                Optional<User> users = userRepository.getUserByEmailAndPassword(user.getEmail(), user.getPassword());
                if (users.isPresent()) {
                    return new LoginResponse("Login Success", true);
                } else {
                    return new LoginResponse("Login Failed", false);
                }
            }
        } else {
            return new LoginResponse("Email not exits", false);
        }
        return null;
    }

}
