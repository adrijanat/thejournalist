package com.thejournalist.thejournalist.repository;

import com.thejournalist.thejournalist.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}