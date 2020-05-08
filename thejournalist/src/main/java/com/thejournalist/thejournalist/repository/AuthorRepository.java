package com.thejournalist.thejournalist.repository;

import com.thejournalist.thejournalist.model.Author;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AuthorRepository extends JpaRepository<Author, Long> {
    List<Author> findByNameContainingIgnoreCaseOrEmailContainingIgnoreCaseOrBioContainingIgnoreCase(String q1, String q2, String q3);
}