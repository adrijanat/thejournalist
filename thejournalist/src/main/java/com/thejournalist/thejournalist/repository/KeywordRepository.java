package com.thejournalist.thejournalist.repository;

import com.thejournalist.thejournalist.model.Keyword;
import org.springframework.data.jpa.repository.JpaRepository;

public interface KeywordRepository extends JpaRepository<Keyword, Long> {

}