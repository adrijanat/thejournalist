package com.thejournalist.thejournalist.service;

import com.thejournalist.thejournalist.model.Category;
import com.thejournalist.thejournalist.repository.CategoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {
    private final CategoryRepository categoryRepository;

    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    // GET ALL
    public List<Category> findAll(){
        return this.categoryRepository.findAll();
    }

    // GET BY ID
    public Optional<Category> findById(long id){
        return this.categoryRepository.findById(id);
    }

    // CREATE NEW / UPDATE
    public Category save(Category category){
        return this.categoryRepository.save(category);
    }

    // DELETE BY ID
    public void deleteById(long id){
        this.categoryRepository.deleteById(id);
    }

}
