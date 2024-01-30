package com.javatpoint.service;

import org.springframework.data.jpa.repository.JpaRepository;
import com.javatpoint.model.User;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public interface UserRepository extends JpaRepository<User,Long> {

    Optional<User> findByEmail(String email);
    Optional<User> findById(long id);

}
