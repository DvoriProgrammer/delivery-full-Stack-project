package com.javatpoint.service;

import com.javatpoint.model.Coments;
import com.javatpoint.model.Delivery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface ComentsRepository extends JpaRepository<Coments,Long> {
    List<Coments> findAllByUsersOfferId(long id);
}
