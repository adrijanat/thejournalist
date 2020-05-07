package com.thejournalist.thejournalist.web;

import com.thejournalist.thejournalist.model.Comment;
import com.thejournalist.thejournalist.repository.CommentRepository;
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
@RequestMapping("/comments")
public class CommentAPI {
    @Autowired
    private final CommentRepository commentRepository;

    public CommentAPI(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    // get all comments
    @GetMapping
    public List<Comment> retrieveAllComments() {
        return commentRepository.findAll();
    }

    // get comment by id
    @GetMapping("/{id}")
    public Comment retrieveComment(@PathVariable long id) {
        Optional<Comment> comment = commentRepository.findById(id);

        if (!comment.isPresent()) return null;

        return comment.get();
    }

    // delete comment by id
    @DeleteMapping("/{id}")
    public void deleteComment(@PathVariable long id) {
        commentRepository.deleteById(id);
    }

    // create comment
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Object> createComment(@Valid @RequestBody Comment comment) {
        Comment savedComment = commentRepository.save(comment);

        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(savedComment.getCommentid())
                .toUri();

        return ResponseEntity.created(location).build();
    }

    // update existing comment
    @PutMapping("/{id}")
    public ResponseEntity<Object> updateComment(@Valid @RequestBody Comment comment, @PathVariable long id) {

        Optional<Comment> commentOptional = commentRepository.findById(id);

        if (!commentOptional.isPresent())
            return ResponseEntity.notFound().build();

        comment.setCommentid(id);

        commentRepository.save(comment);

        return ResponseEntity.noContent().build();
    }

}