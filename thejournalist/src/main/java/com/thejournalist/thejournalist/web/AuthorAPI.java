package com.thejournalist.thejournalist.web;

import com.thejournalist.thejournalist.model.Author;
import com.thejournalist.thejournalist.service.AuthorService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MimeTypeUtils;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
//@RequestMapping("/authors")
@RequestMapping(path = "/authors", produces = MimeTypeUtils.APPLICATION_JSON_VALUE)
public class AuthorAPI {

    private final AuthorService authorService;

    public AuthorAPI(AuthorService authorService){
        this.authorService = authorService;
    }

    // GET ALL
    @GetMapping
    public ResponseEntity<List<Author>> getAllAuthors(@RequestParam(required=false) String q) {
        try {
            if (q == null){ return new ResponseEntity<>(authorService.findAll(), HttpStatus.OK); }
            else { return new ResponseEntity<>(authorService.findSearch(q), HttpStatus.OK); }
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // GET BY ID
    @GetMapping("/{id}")
    public ResponseEntity<Author> getAuthorById(@PathVariable("id") long id) {
        Optional<Author> author = authorService.findById(id);

        if (author.isPresent()) {
            return new ResponseEntity<>(author.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // CREATE NEW
    @PostMapping
    public ResponseEntity<Author> createAuthor(@RequestBody Author author) {
        try {
            return new ResponseEntity<>(authorService.save(author), HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
        }
    }

    // UPDATE EXISTING
    @PutMapping("/{id}")
    public ResponseEntity<Author> updateAuthor(@PathVariable("id") long id, @RequestBody Author author) {
        Optional<Author> authorO = authorService.findById(id);
        if (authorO.isPresent()){
            author.setAuthorid(id);
        }
        return new ResponseEntity<>(authorService.save(author), HttpStatus.OK);
    }

    // DELETE BY ID
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteAuthor(@PathVariable("id") long id) {
        try {
            authorService.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
        }
    }
}