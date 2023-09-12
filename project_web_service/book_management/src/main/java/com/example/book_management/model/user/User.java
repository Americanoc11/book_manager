package com.example.book_management.model.user;

import javax.persistence.*;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_user")
    private Integer id;
    @Column(name = "name")
    private String name;
    @Column(name = "birth_of_day")
    private String DOB;
    @Column(name = "gender_user")
    private Boolean gender;
    @Column(name = "phone")
    private String phone;
    @Column(name = "email_user")
    private String email;
    @Column(name = "pass_user")
    private String password;
    @ManyToOne
    @JoinColumn(name = "id_role", nullable = false)
    private Role role;

    @Column(name = "is_delete")
    private boolean isFlagDelete;

    public User() {
    }

    public User(Integer id, String name, String DOB, Boolean gender, String phone, String email, String password, Role role, boolean isFlagDelete) {
        this.id = id;
        this.name = name;
        this.DOB = DOB;
        this.gender = gender;
        this.phone = phone;
        this.email = email;
        this.password = password;
        this.role = role;
        this.isFlagDelete = isFlagDelete;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDOB() {
        return DOB;
    }

    public void setDOB(String DOB) {
        this.DOB = DOB;
    }

    public Boolean getGender() {
        return gender;
    }

    public void setGender(Boolean gender) {
        this.gender = gender;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public boolean isFlagDelete() {
        return isFlagDelete;
    }

    public void setFlagDelete(boolean flagDelete) {
        isFlagDelete = flagDelete;
    }
}
