package com.thejournalist.thejournalist.web;

import com.thejournalist.thejournalist.model.Article;
import com.thejournalist.thejournalist.model.Author;
import com.thejournalist.thejournalist.repository.AuthorRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;

import java.net.URI;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/authors")
public class AuthorAPI {
    @Autowired
    private final AuthorRepository authorRepository;

    public AuthorAPI(AuthorRepository authorRepository) {
        this.authorRepository = authorRepository;
    }

    // get all authors
    @GetMapping
    public List<Author> retrieveAllAuthors() {
        return authorRepository.findAll();
    }

    // get author by id
    @GetMapping("/{id}")
    public Author retrieveAuthor(@PathVariable long id) {
        Optional<Author> author = authorRepository.findById(id);

        if (!author.isPresent()) return null;

        return author.get();
    }

    // delete author by id
    @DeleteMapping("/{id}")
    public void deleteAuthor(@PathVariable long id) {
        authorRepository.deleteById(id);
    }

    // create author
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Object> createAuthor(@Valid @RequestBody Author author) {
        Author savedAuthor = authorRepository.save(author);

        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(savedAuthor.getAuthorid())
                .toUri();

        return ResponseEntity.created(location).build();
    }

    // update existing author
    @PutMapping("/{id}")
    public ResponseEntity<Object> updateAuthor(@Valid @RequestBody Author author, @PathVariable long id) {

        Optional<Author> authorOptional = authorRepository.findById(id);

        if (!authorOptional.isPresent())
            return ResponseEntity.notFound().build();

        author.setAuthorid(id);

        authorRepository.save(author);

        return ResponseEntity.noContent().build();
    }

}