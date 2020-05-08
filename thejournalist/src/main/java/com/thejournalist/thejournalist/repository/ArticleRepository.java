package com.thejournalist.thejournalist.repository;

import com.thejournalist.thejournalist.model.Article;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface ArticleRepository extends JpaRepository<Article, Long> {
    /*default methods: save(), findOne(), findById(), findAll(), count(), delete(), deleteById() */

    // find by search
    List<Article> findByTitleContainingIgnoreCaseOrSummaryContainingIgnoreCaseOrBodyContainingIgnoreCase(String q1, String q2, String q3);

    // find all starting with latest
    List<Article> findByOrderByDatecreatedDesc();

    // latest
    List<Article> findFirst5ByOrderByDatecreatedDesc();

    // most viewed
    List<Article> findFirst5ByOrderByViewsDesc();

    // most upvoted
    List<Article> findFirst5ByOrderByUpvotesDesc();

    // latest in category
    Optional<Article> findFirstByCategory_Categoryid(long id);

}