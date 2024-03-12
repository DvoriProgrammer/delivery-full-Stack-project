package com.javatpoint.controller;

import com.javatpoint.model.Category;
import com.javatpoint.model.Coments;
import com.javatpoint.service.CategoryRepository;
import com.javatpoint.service.ComentsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/category")
@CrossOrigin
public class CategoryController {

    private CategoryRepository categoryRepository;

    @Autowired
    public CategoryController(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @GetMapping("/get")
    public List<Category> getCategory(){
        return categoryRepository.findAll();
    }


    @GetMapping("/get2")
    public ResponseEntity<List<Category>> getCategory2(){
        try{
            List<Category> categories=new ArrayList<>();
            categoryRepository.findAll().forEach(e->categories.add(e));
            return new ResponseEntity<>(categories, HttpStatus.OK);
        }
        catch (Exception e){
        return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}
