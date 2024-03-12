package com.javatpoint.controller;

import com.javatpoint.dto.UserDTO;
import com.javatpoint.model.Coments;
import com.javatpoint.model.Delivery;
import com.javatpoint.model.User;
import com.javatpoint.service.ComentsRepository;
import com.javatpoint.service.MailService;
import com.javatpoint.service.MapStructMapper;
import com.javatpoint.service.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.Files;

import java.nio.file.Files;
@RestController
@RequestMapping("/api/user")
@CrossOrigin
public class UserController {
    private MapStructMapper mapper;
    private  static String PATH_IMG=System.getProperty("user.dir")+"\\images\\";
    private UserRepository userRepository;
    private MailService mail;
    @Autowired
    public UserController(UserRepository userRepository,MapStructMapper mapper,MailService mail) {
        this.userRepository = userRepository;
        this.mapper=mapper;
        this.mail=mail;
    }

    @PostMapping("/getmail")
    public String getMail(@RequestBody List<User> users){
        User u1=users.get(0);
        User u2=users.get(1);
        System.out.println(u1);
        System.out.println("-----------------------------------");
        System.out.println(u2);
        mail.sendEmail(u1.getEmail(),u2.getFirstName()+"  comments your request 📦","come to 'By the way' to read the comments");
        return "ok";
    }


    @PostMapping("/forgotYourPassword")
    public String forgotYourPassword(@RequestBody User user){

//        System.out.println(u1);
//        System.out.println("-----------------------------------");
//        System.out.println(u2);
        User u=userRepository.findByEmail(user.getEmail()).orElse(null);
        if(u!=null)
           {mail.sendEmail(user.getEmail(),"here is your password 📦",u.getPassword());
            return "ok";}
        else return "not a user";
    }
    @GetMapping("/get")
    public List<User> getComents(){
        return userRepository.findAll();
    }

    @PostMapping ("/signIn")
    public ResponseEntity signIn(@RequestBody User u) throws IOException {
        User u1=userRepository.findByEmail(u.getEmail()).orElse(null);
        if(u1!=null && u1.getPassword().equals(u.getPassword()))
            return new ResponseEntity(mapper.userDTO(u1),HttpStatus.OK);
        return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @PostMapping("/add")
    public ResponseEntity<Delivery> createRecipe(@RequestBody User u){
        try{
            User u2=userRepository.findByEmail(u.getEmail()).orElse(null);
            User newUser=userRepository.save(u);
            return new ResponseEntity(newUser,HttpStatus.CREATED);
        }
        catch (Exception e){
            System.out.println(e);
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PostMapping("/signUp")
    public ResponseEntity signUpWithImg(@RequestPart("img") MultipartFile file,@RequestPart("user") User u){
        User u1=userRepository.findByEmail(u.getEmail()).orElse(null);
        if(u1!=null)
            return new ResponseEntity<>(null,HttpStatus.CONFLICT);
        try{
            String filePath=PATH_IMG+file.getOriginalFilename();
            Path filename= Paths.get(filePath);
            Files.write(filename,file.getBytes());
            u.setImg(filePath);
            userRepository.save(u);
            return new ResponseEntity(mapper.userDTO(u), HttpStatus.CREATED);
        }
        catch (Exception e){
            System.out.println(e);
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }
    @GetMapping("/get/{id}")
    public ResponseEntity<UserDTO> getDTO(@PathVariable long id)  {
        User u=userRepository.findById(id).orElse(null);
        if(u!=null){
            return new ResponseEntity(u,HttpStatus.OK);
        }
        else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }


}
