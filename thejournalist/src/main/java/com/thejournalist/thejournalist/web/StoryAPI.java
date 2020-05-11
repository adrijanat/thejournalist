package com.thejournalist.thejournalist.web;

import com.thejournalist.thejournalist.model.Story;
import com.thejournalist.thejournalist.service.StoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MimeTypeUtils;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path = "/stories", produces = MimeTypeUtils.APPLICATION_JSON_VALUE)
public class StoryAPI {

    @Autowired
    private final StoryService storyService;

    public StoryAPI(StoryService storyService){
        this.storyService = storyService;
    }

    // GET ALL
    @GetMapping
    public ResponseEntity<List<Story>> getAllStories() {
        try {
             return new ResponseEntity<>(storyService.findAll(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // GET BY ID
    @GetMapping("/{id}")
    public ResponseEntity<Story> getStoryById(@PathVariable("id") long id) {
        Optional<Story> story = storyService.findById(id);

        if (story.isPresent()) {
            return new ResponseEntity<>(story.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // CREATE NEW
    @PostMapping
    public ResponseEntity<Story> createStory(@RequestBody Story story) {
        try {
            return new ResponseEntity<>(storyService.save(story), HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
        }
    }

    // UPDATE EXISTING
    @PutMapping("/{id}")
    public ResponseEntity<Story> updateStory(@PathVariable("id") long id, @RequestBody Story story) {
        Optional<Story> storyO = storyService.findById(id);
        if (storyO.isPresent()){
            story.setStoryid(id);
        }
        return new ResponseEntity<>(storyService.save(story), HttpStatus.OK);
    }

    // DELETE BY ID
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteStory(@PathVariable("id") long id) {
        try {
            storyService.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
        }
    }
}