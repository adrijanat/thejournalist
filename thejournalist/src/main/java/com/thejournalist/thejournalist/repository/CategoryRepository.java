package com.thejournalist.thejournalist.repository;

import com.thejournalist.thejournalist.model.Article;
import com.thejournalist.thejournalist.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}