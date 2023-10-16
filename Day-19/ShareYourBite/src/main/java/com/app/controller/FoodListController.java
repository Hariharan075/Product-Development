package com.app.controller;

import com.app.entity.FoodList;
import com.app.service.FoodListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class FoodListController {

    @Autowired
    FoodListService foodservice;

  @GetMapping("/api/list/getFood")
  public List<FoodList> getList(){
      return foodservice.getAllList();
    }

    @GetMapping("/api/list/getFood/{id}")
    public ResponseEntity<FoodList> getListById(@PathVariable Long id) {
        FoodList add = foodservice.getListById(id);
        return ResponseEntity.ok(add);
    }

    @PostMapping(" ")
    public ResponseEntity<String> addList(@RequestBody FoodList add) {
        foodservice.addList(add);
        return ResponseEntity.ok("Food details added successfully");
    }

    @DeleteMapping("/api/list/deleteFood/{id}")
    public ResponseEntity<String> deleteList(@PathVariable Long id) {
        return ResponseEntity.ok(foodservice.deleteListById(id));
    }

    @PutMapping("/api/list/editFood/{id}")
    public ResponseEntity<FoodList> updateList(@PathVariable Long id , @RequestBody FoodList add){
        add.setFoodId(id);
        FoodList updatedList = foodservice.updateList(add);
        return ResponseEntity.ok(updatedList);
    }



}

