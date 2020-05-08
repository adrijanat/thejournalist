package com.thejournalist.thejournalist.service;

import com.thejournalist.thejournalist.model.Comment;
import com.thejournalist.thejournalist.repository.CommentRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CommentService {
    private final CommentRepository commentRepository;

    public CommentService(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    // GET ALL
    public List<Comment> findAll(){
        return this.commentRepository.findAll();
    }

    // GET BY ID
    public Optional<Comment> findById(long id){
        return this.commentRepository.findById(id);
    }

    // CREATE NEW / UPDATE
    public Comment save(Comment comment){
        return this.commentRepository.save(comment);
    }

    // DELETE BY ID
    public void deleteById(long id){
        this.commentRepository.deleteById(id);
    }
}
