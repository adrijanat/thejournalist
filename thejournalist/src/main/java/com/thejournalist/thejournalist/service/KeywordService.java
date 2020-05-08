package com.thejournalist.thejournalist.service;

import com.thejournalist.thejournalist.model.Keyword;
import com.thejournalist.thejournalist.repository.KeywordRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class KeywordService {
    private final KeywordRepository keywordRepository;

    public KeywordService(KeywordRepository keywordRepository) {
        this.keywordRepository = keywordRepository;
    }

    // GET ALL
    public List<Keyword> findAll(){
        return this.keywordRepository.findAll();
    }

    // GET BY ID
    public Optional<Keyword> findById(long id){
        return this.keywordRepository.findById(id);
    }

    // CREATE NEW / UPDATE
    public Keyword save(Keyword keyword){
        return this.keywordRepository.save(keyword);
    }

    // DELETE BY ID
    public void deleteById(long id){
        this.keywordRepository.deleteById(id);
    }
}
