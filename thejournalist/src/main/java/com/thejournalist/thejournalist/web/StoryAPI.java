package com.thejournalist.thejournalist.web;

import com.thejournalist.thejournalist.model.Story;
import com.thejournalist.thejournalist.repository.StoryRepository;
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
@RequestMapping("/stories")
public class StoryAPI {
    @Autowired
    private final StoryRepository storyRepository;

    public StoryAPI(StoryRepository storyRepository) {
        this.storyRepository = storyRepository;
    }

    // get all stories
    @GetMapping("/stories")
    public List<Story> retrieveAllStorys() {
        return storyRepository.findAll();
    }

    // get story by id
    @GetMapping("/stories/{id}")
    public Story retrieveStory(@PathVariable long id) {
        Optional<Story> story = storyRepository.findById(id);

        if (!story.isPresent()) return null;

        return story.get();
    }

    // delete story by id
    @DeleteMapping("/stories/{id}")
    public void deleteStory(@PathVariable long id) {
        storyRepository.deleteById(id);
    }

    // create story
    @PostMapping("/stories")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Object> createStory(@Valid @RequestBody Story story) {
        Story savedStory = storyRepository.save(story);

        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(savedStory.getStoryid())
                .toUri();

        return ResponseEntity.created(location).build();
    }

    // update existing story
    @PutMapping("/stories/{id}")
    public ResponseEntity<Object> updateStory(@Valid @RequestBody Story story, @PathVariable long id) {

        Optional<Story> storyOptional = storyRepository.findById(id);

        if (!storyOptional.isPresent())
            return ResponseEntity.notFound().build();

        story.setStoryid(id);

        storyRepository.save(story);

        return ResponseEntity.noContent().build();
    }

}