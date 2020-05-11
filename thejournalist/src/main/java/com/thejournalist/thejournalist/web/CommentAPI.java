package com.thejournalist.thejournalist.web;

import com.thejournalist.thejournalist.model.Comment;
import com.thejournalist.thejournalist.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MimeTypeUtils;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path = "/comments", produces = MimeTypeUtils.APPLICATION_JSON_VALUE)
public class CommentAPI {

    @Autowired
    private final CommentService commentService;

    public CommentAPI(CommentService commentService){
        this.commentService = commentService;
    }

    // GET ALL
    @GetMapping
    public ResponseEntity<List<Comment>> getAllComments() {
        try {
             return new ResponseEntity<>(commentService.findAll(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // GET BY ID
    @GetMapping("/{id}")
    public ResponseEntity<Comment> getCommentById(@PathVariable("id") long id) {
        Optional<Comment> comment = commentService.findById(id);

        if (comment.isPresent()) {
            return new ResponseEntity<>(comment.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // CREATE NEW
    @PostMapping
    public ResponseEntity<Comment> createComment(@RequestBody Comment comment) {
        try {
            return new ResponseEntity<>(commentService.save(comment), HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
        }
    }

    // UPDATE EXISTING
    @PutMapping("/{id}")
    public ResponseEntity<Comment> updateComment(@PathVariable("id") long id, @RequestBody Comment comment) {
        Optional<Comment> commentO = commentService.findById(id);
        if (commentO.isPresent()){
            comment.setCommentid(id);
        }
        return new ResponseEntity<>(commentService.save(comment), HttpStatus.OK);
    }

    // DELETE BY ID
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteComment(@PathVariable("id") long id) {
        try {
            commentService.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
        }
    }
}