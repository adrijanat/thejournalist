package com.thejournalist.thejournalist.repository;

import com.thejournalist.thejournalist.model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Long> {

}