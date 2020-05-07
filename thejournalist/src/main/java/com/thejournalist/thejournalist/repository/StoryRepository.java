package com.thejournalist.thejournalist.repository;

import com.thejournalist.thejournalist.model.Story;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StoryRepository extends JpaRepository<Story, Long> {

}