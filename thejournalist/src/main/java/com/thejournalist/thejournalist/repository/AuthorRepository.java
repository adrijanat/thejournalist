package com.thejournalist.thejournalist.repository;

import com.thejournalist.thejournalist.model.Author;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuthorRepository extends JpaRepository<Author, Long> {

}