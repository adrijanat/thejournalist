package com.thejournalist.thejournalist.service;

import com.thejournalist.thejournalist.model.Story;
import com.thejournalist.thejournalist.repository.StoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StoryService {
    private final StoryRepository storyRepository;

    public StoryService(StoryRepository storyRepository) {
        this.storyRepository = storyRepository;
    }

    // GET ALL
    public List<Story> findAll(){
        return this.storyRepository.findAll();
    }

    // GET BY ID
    public Optional<Story> findById(long id){
        return this.storyRepository.findById(id);
    }

    // CREATE NEW / UPDATE
    public Story save(Story story){
        return this.storyRepository.save(story);
    }

    // DELETE BY ID
    public void deleteById(long id){
        this.storyRepository.deleteById(id);
    }
}
