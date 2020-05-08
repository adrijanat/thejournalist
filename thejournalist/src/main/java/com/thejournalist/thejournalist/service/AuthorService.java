package com.thejournalist.thejournalist.service;

import com.thejournalist.thejournalist.model.Author;
import com.thejournalist.thejournalist.repository.AuthorRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AuthorService {
    private final AuthorRepository authorRepository;

    public AuthorService(AuthorRepository authorRepository) {
        this.authorRepository = authorRepository;
    }

    // GET ALL
    public List<Author> findAll(){
        return this.authorRepository.findAll();
    }

    // GET BY ID
    public Optional<Author> findById(long id){
        return this.authorRepository.findById(id);
    }

    // CREATE NEW / UPDATE
    public Author save(Author author){
        return this.authorRepository.save(author);
    }

    // DELETE BY ID
    public void deleteById(long id){
        this.authorRepository.deleteById(id);
    }

    // SEARCH
    public List<Author> findSearch(String q){
        return this.authorRepository.findByNameContainingIgnoreCaseOrEmailContainingIgnoreCaseOrBioContainingIgnoreCase(q,q,q);
    }

}