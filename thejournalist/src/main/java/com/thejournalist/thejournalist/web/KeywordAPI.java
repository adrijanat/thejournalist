package com.thejournalist.thejournalist.web;

import com.thejournalist.thejournalist.model.Keyword;
import com.thejournalist.thejournalist.service.KeywordService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MimeTypeUtils;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
//@RequestMapping("/keywords")
@RequestMapping(path = "/keywords", produces = MimeTypeUtils.APPLICATION_JSON_VALUE)
public class KeywordAPI {

    private final KeywordService keywordService;

    public KeywordAPI(KeywordService keywordService){
        this.keywordService = keywordService;
    }

    // GET ALL
    @GetMapping
    public ResponseEntity<List<Keyword>> getAllKeywords() {
        try {
             return new ResponseEntity<>(keywordService.findAll(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // GET BY ID
    @GetMapping("/{id}")
    public ResponseEntity<Keyword> getKeywordById(@PathVariable("id") long id) {
        Optional<Keyword> keyword = keywordService.findById(id);

        if (keyword.isPresent()) {
            return new ResponseEntity<>(keyword.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // CREATE NEW
    @PostMapping
    public ResponseEntity<Keyword> createKeyword(@RequestBody Keyword keyword) {
        try {
            return new ResponseEntity<>(keywordService.save(keyword), HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
        }
    }

    // UPDATE EXISTING
    @PutMapping("/{id}")
    public ResponseEntity<Keyword> updateKeyword(@PathVariable("id") long id, @RequestBody Keyword keyword) {
        Optional<Keyword> keywordO = keywordService.findById(id);
        if (keywordO.isPresent()){
            keyword.setKeywordid(id);
        }
        return new ResponseEntity<>(keywordService.save(keyword), HttpStatus.OK);
    }

    // DELETE BY ID
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteKeyword(@PathVariable("id") long id) {
        try {
            keywordService.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
        }
    }
}