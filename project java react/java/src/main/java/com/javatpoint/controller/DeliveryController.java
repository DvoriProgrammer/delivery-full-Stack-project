package com.javatpoint.controller;


import com.javatpoint.dto.DeliveryDTO;
import com.javatpoint.model.Coments;
import com.javatpoint.model.Delivery;
import com.javatpoint.model.User;
import com.javatpoint.service.ComentsRepository;
import com.javatpoint.service.DeliveryRepository;
import com.javatpoint.service.MapStructMapper;
import com.javatpoint.service.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;

import java.util.ArrayList;
import java.util.List;


@RestController
@RequestMapping("/api/delivery")
@CrossOrigin
public class DeliveryController {

    private MapStructMapper mapper;
    private DeliveryRepository deliveryRepository;
    private UserRepository userRepository;

    @Autowired
    public DeliveryController(DeliveryRepository deliveryRepository,MapStructMapper mapper,UserRepository userRepository) {
        this.deliveryRepository = deliveryRepository;
        this.mapper=mapper;
        this.userRepository=userRepository;
    }

    @GetMapping("/get")
    public List<Delivery> getDelivery(){
        return deliveryRepository.findAll();
    }

    @GetMapping("/get2")
    public ResponseEntity<List<Delivery>> getDelivery2(){
        try{
            List<Delivery> deliveries=new ArrayList<>();
            deliveryRepository.findAll().forEach(e->deliveries.add(e));
            return new ResponseEntity<>(deliveries, HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/getRequests/{id}")
    public ResponseEntity<List<DeliveryDTO>> getRequests(@PathVariable long id){
        try{
            List<Delivery> deliveries=new ArrayList<>();
            deliveryRepository.findAllByCategoryId(id).forEach(c->deliveries.add(c));
            deliveryRepository.findAllByStatus(true).forEach(c->deliveries.remove(c));
            return new ResponseEntity(mapper.todto2(deliveries), HttpStatus.OK);
        }
        catch (Exception e){
            System.out.println(e);
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }



//    @GetMapping("/choosen/{id}")
//    public ResponseEntity<List<DeliveryDTO>> choosenUser(@PathVariable long id){
//        try{
//            List<Delivery> deliveries=new ArrayList<>();
//            deliveryRepository.findAllByUserIdId(id).forEach(c->deliveries.add(c));
//            deliveryRepository.findAllByStatus(false).forEach(c->deliveries.remove(c));
//            return new ResponseEntity(mapper.todto2(deliveries), HttpStatus.OK);
//        }
//        catch (Exception e){
//            System.out.println(e);
//            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
//        }
  //  }



    @PostMapping("/create")
    public ResponseEntity<Delivery> createDelivery(@RequestBody Delivery d){
        try{
            Delivery newDelivery=deliveryRepository.save(d);
            return new ResponseEntity<>(newDelivery,HttpStatus.CREATED);

        }
        catch (Exception e){
            System.out.println(e);
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity deleteRequest(@PathVariable long id){
        try{
            deliveryRepository.deleteById(id);
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        }
        catch (Exception e)
        {
            System.out.println(e);
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }







    @PutMapping("/update/{id}/{userId}")
    public ResponseEntity updateDelivery(@PathVariable long id,@PathVariable long userId){
        Delivery d=deliveryRepository.findById(id).orElse(null);;
        if(d!=null)
        {
//            d.setCategory(delivery.getCatgory());
//            d.setComents(delivery.getComents());
//            d.setDateTime(delivery.getDateTime());
//            d.setFromWhere(delivery.getFromWhere());
//            d.setPrice(delivery.getPrice());
//            d.setRecognaize(delivery.getRecognaize());
//            d.setRequesHour(delivery.getRequesHour());
            d.setStatus(true);
//            d.setSize(delivery.getSize());
//            d.setToWhere(delivery.getToWhere());
//            d.setUserId(delivery.getUserId());
            User u= userRepository.findById(userId).orElse(null);
            u.setDeliverCount(u.getDeliverCount()+1);
            userRepository.save(u);
            d.setChosenUser(u);
            deliveryRepository.save(d);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);

        }
    }



}
