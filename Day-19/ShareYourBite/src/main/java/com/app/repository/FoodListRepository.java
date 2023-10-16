package com.app.repository;

import com.app.entity.FoodList;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FoodListRepository extends JpaRepository<FoodList,Long> {
}
