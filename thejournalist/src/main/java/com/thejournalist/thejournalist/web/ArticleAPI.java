package com.thejournalist.journalist.web;

import com.thejournalist.journalist.service.ArticleService;
import com.thejournalist.journalist.model.Article;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MimeTypeUtils;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path = "/articles", produces = MimeTypeUtils.APPLICATION_JSON_VALUE)
public class ArticleAPI {

    @Autowired
    private final ArticleService articleService;

    public ArticleAPI(ArticleService articleService){
        this.articleService = articleService;
    }

    // GET ALL
    @GetMapping
    public ResponseEntity<List<Article>> getAllArticles(@RequestParam(required=false) String q) {
        try {
            if (q == null){ return new ResponseEntity<>(articleService.findAll(), HttpStatus.OK); }
            else { return new ResponseEntity<>(articleService.findSearch(q), HttpStatus.OK); }
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // GET BY ID
    @GetMapping("/{id}")
    public ResponseEntity<Article> getArticleById(@PathVariable("id") long id) {
        Optional<Article> article = articleService.findById(id);

        if (article.isPresent()) {
            return new ResponseEntity<>(article.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // CREATE NEW
    @PostMapping
    public ResponseEntity<Article> createArticle(@RequestBody Article article) {
        try {
            return new ResponseEntity<>(articleService.save(article), HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
        }
    }

    // UPDATE EXISTING
    @PutMapping("/{id}")
    public ResponseEntity<Article> updateArticle(@PathVariable("id") long id, @RequestBody Article article) {
        Optional<Article> articleO = articleService.findById(id);
        if (articleO.isPresent()){
            article.setArticleid(id);
        }
        return new ResponseEntity<>(articleService.save(article), HttpStatus.OK);
    }

    // DELETE BY ID
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteArticle(@PathVariable("id") long id) {
        try {
            articleService.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
        }
    }

    // LATEST ARTICLE IN CATEGORY
    @GetMapping("/latestincat/{catid}")
    public ResponseEntity<Article> getLatestInCategory(@PathVariable long catid) {
        Optional<Article> article = articleService.findInCat(catid);

        if (article.isPresent()) {
            return new ResponseEntity<>(article.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // 5 LATEST ARTICLES
    @GetMapping("/latest")
    public ResponseEntity<List<Article>> getLatestArticles() {
        try {
            return new ResponseEntity<>(articleService.findLatest5(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
        }
    }

    // 5 MOST VIEWED
    @GetMapping("/mostviewed")
    public ResponseEntity<List<Article>> getMostViewedArticles() {
        try {
            return new ResponseEntity<>(articleService.findMostViewed5(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
        }
    }

    // 5 MOST UPVOTED
    @GetMapping("/mostupvoted")
    public ResponseEntity<List<Article>> getMostUpvotedArticles() {
        try {
            return new ResponseEntity<>(articleService.findMostUpvoted5(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
        }
    }

    // INCREMENT UPVOTES
    @PostMapping("/{id}/upvote")
    public ResponseEntity<HttpStatus> incrementUpvotes(@PathVariable("id") long id) {
        try {
            articleService.incrementUpvotes(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
        }
    }

    // INCREMENT VIEWS
    @PostMapping("/{id}/view")
    public ResponseEntity<HttpStatus> incrementViews(@PathVariable("id") long id) {
        try {
            articleService.incrementViews(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
        }
    }

    // STAT: UPVOTES BY CATEGORY
    @GetMapping("/stat1")
    public ResponseEntity<Map<String,Integer>> getUpvotesByCat() {
        try {
            return new ResponseEntity<>(articleService.upvotesByCategory(), HttpStatus.OK);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
        }
    }

}