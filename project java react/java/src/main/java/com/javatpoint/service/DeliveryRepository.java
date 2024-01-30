package com.javatpoint.service;

import com.javatpoint.model.Category;
import com.javatpoint.model.Delivery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public interface DeliveryRepository extends JpaRepository<Delivery,Long> {
   // List<Delivery> findAllByDeliverMan(boolean b);
//   Delivery findById(long id);
   List<Delivery> findAllByStatus(boolean b);
   List<Delivery> findAllByCategoryId(long id);
//   List<Delivery> findAllByUserIdId(long id);
   Optional<Delivery> findById(long id);
}
