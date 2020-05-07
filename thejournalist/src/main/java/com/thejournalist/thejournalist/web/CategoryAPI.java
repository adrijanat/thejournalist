package com.thejournalist.thejournalist.web;

import com.thejournalist.thejournalist.model.Article;
import com.thejournalist.thejournalist.model.Category;
import com.thejournalist.thejournalist.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/categories")
public class CategoryAPI {
    @Autowired
    private final CategoryRepository categoryRepository;

    public CategoryAPI(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    // get all categories
    @GetMapping
    public List<Category> retrieveAllCategories() {
        return categoryRepository.findAll();
    }

    // get category by id
    @GetMapping("/{id}")
    public Category retrieveCategory(@PathVariable long id) {
        Optional<Category> category = categoryRepository.findById(id);

        if (!category.isPresent()) return null;

        return category.get();
    }

    // delete category by id
    @DeleteMapping("/{id}")
    public void deleteCategory(@PathVariable long id) {
        categoryRepository.deleteById(id);
    }

    // create category
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Object> createCategory(@Valid @RequestBody Category category) {

        Category savedCategory = categoryRepository.save(category);

        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(savedCategory.getCategoryid())
                .toUri();

        return ResponseEntity.created(location).build();
    }

    // update existing category
    @PutMapping("/{id}")
    public ResponseEntity<Object> updateCategory(@Valid @RequestBody Category category, @PathVariable long id) {

        Optional<Category> categoryOptional = categoryRepository.findById(id);

        if (!categoryOptional.isPresent())
            return ResponseEntity.notFound().build();

        category.setCategoryid(id);

        categoryRepository.save(category);

        return ResponseEntity.noContent().build();
    }

}