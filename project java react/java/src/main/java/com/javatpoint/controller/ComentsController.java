package com.javatpoint.controller;
import java.util.ArrayList;
import java.util.List;

import com.javatpoint.dto.CommentDTO;
import com.javatpoint.model.Category;
import com.javatpoint.model.Coments;
import com.javatpoint.model.Delivery;
import com.javatpoint.service.ComentsRepository;
import com.javatpoint.service.DeliveryRepository;
import com.javatpoint.service.MapStructMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/coments")
@CrossOrigin
public class ComentsController{
    private ComentsRepository comentsRepository;
    private MapStructMapper mapper;
    @Autowired
    public ComentsController(ComentsRepository comentsRepository,MapStructMapper mapper) {
        this.comentsRepository = comentsRepository;
        this.mapper=mapper;
    }
    @GetMapping("/get")
    public List<Coments> getComents(){
        return comentsRepository.findAll();
    }

    @GetMapping("/get2")
    public ResponseEntity<List<Coments>> getComents2(){
        try{
            List<Coments> coments=new ArrayList<>();
            comentsRepository.findAll().forEach(e->coments.add(e));
            return new ResponseEntity<>(coments, HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/getByDelivery/{id}")
    public ResponseEntity<List<CommentDTO>> getByDelivery(@PathVariable long id){
        try{
            List<Coments> coments=new ArrayList<>();
            comentsRepository.findAllByUsersOfferId(id).forEach(c->coments.add(c));;
            return new ResponseEntity<>(mapper.todtoComment2(coments), HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @PostMapping("/add")
    public ResponseEntity<Coments> addComment(@RequestBody Coments c){
        try{
            Coments newComment = comentsRepository.save(c);
            return new ResponseEntity<>(newComment,HttpStatus.CREATED);

        }
        catch (Exception e){
            System.out.println(e);
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
//   private DeliveryRepository deliveryRepository
//    @PostMapping("/add")
//    public ResponseEntity<Coments> addComent(@RequestBody Coments c) {
//        try {
//            // Set the delivery for the comment
//            c.setUsersOffer(deliveryRepository.findById(c.getUsersOffer().getId()).orElse(null));
//
//            // Set the user for the comment
//            //c.setUserId(userRepository.findById(c.getUserId().getId()).orElse(null));
//
//            // Save the comment
//            Coments newComent = comentsRepository.save(c);
//
//            return new ResponseEntity<>(newComent, HttpStatus.CREATED);
//        } catch (Exception e) {
//            System.out.println(e);
//            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }




}
