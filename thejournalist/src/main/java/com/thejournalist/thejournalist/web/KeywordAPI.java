package com.thejournalist.thejournalist.web;

import com.thejournalist.thejournalist.model.Keyword;
import com.thejournalist.thejournalist.repository.KeywordRepository;
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
@RequestMapping("/keywords")
public class KeywordAPI {
    @Autowired
    private final KeywordRepository keywordRepository;

    public KeywordAPI(KeywordRepository keywordRepository) {
        this.keywordRepository = keywordRepository;
    }

    // get all keywords
    @GetMapping
    public List<Keyword> retrieveAllKeywords() {
        return keywordRepository.findAll();
    }

    // get keyword by id
    @GetMapping("/{id}")
    public Keyword retrieveKeyword(@PathVariable long id) {
        Optional<Keyword> keyword = keywordRepository.findById(id);

        if (!keyword.isPresent()) return null;

        return keyword.get();
    }

    // delete keyword by id
    @DeleteMapping("/{id}")
    public void deleteKeyword(@PathVariable long id) {
        keywordRepository.deleteById(id);
    }

    // create keyword
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Object> createKeyword(@Valid @RequestBody Keyword keyword) {

        Keyword savedKeyword = keywordRepository.save(keyword);

        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(savedKeyword.getKeywordid())
                .toUri();

        return ResponseEntity.created(location).build();
    }

    // update existing keyword
    @PutMapping("/{id}")
    public ResponseEntity<Object> updateKeyword(@Valid @RequestBody Keyword keyword, @PathVariable long id) {

        Optional<Keyword> keywordOptional = keywordRepository.findById(id);

        if (!keywordOptional.isPresent())
            return ResponseEntity.notFound().build();

        keyword.setKeywordid(id);

        keywordRepository.save(keyword);

        return ResponseEntity.noContent().build();
    }

}