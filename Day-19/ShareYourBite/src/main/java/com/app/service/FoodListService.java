package com.app.service;

import com.app.entity.FoodList;
import com.app.repository.FoodListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FoodListService {

    @Autowired
    FoodListRepository foodrepo;

    public List<FoodList> getAllList()
    {
        return foodrepo.findAll();
    }

    public FoodList getListById(Long id) {
        return foodrepo.findById(id).orElse(null);
    }

    public void addList(FoodList add)
    {
        foodrepo.save(add);
    }

    public String deleteListById(Long id) {
        if(foodrepo.findById(id).isEmpty())
            return "No item Found with the Id:"+id;
        else {
            foodrepo.deleteById(id);
            return "Delete Successfull";
        }

    }

    public FoodList updateList(FoodList add) {
        return foodrepo.save(add);
    }

}
