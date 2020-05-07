package com.thejournalist.thejournalist.web;

import com.thejournalist.thejournalist.model.Article;
import com.thejournalist.thejournalist.repository.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;
import java.util.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/articles")
public class ArticleAPI {
    @Autowired
    private final ArticleRepository articleRepository;

    public ArticleAPI(ArticleRepository articleRepository) {
        this.articleRepository = articleRepository;
    }

    // get all articles
    @GetMapping
    public List<Article> retrieveAllArticles(@RequestParam(required=false) String q) {
        if(q==null){
            return articleRepository.findAll();
        }
        else{
            return articleRepository.findByTitleContainingIgnoreCaseOrSummaryContainingIgnoreCaseOrBodyContainingIgnoreCase(q,q,q);
        }
    }

    // latest article in category
    @GetMapping("/latestincat/{catid}")
    public Article retrieveLatestInCategory(@PathVariable long catid) {
        return articleRepository.findFirstByCategory_Categoryid(catid);
    }

    // get 5 latest articles
    @GetMapping("/latest")
    public List<Article> retrieveLatestArticles() {
        return articleRepository.findFirst5ByOrderByDatecreatedDesc();
    }


    // get 5 most viewed articles
    @GetMapping("/mostviewed")
    public List<Article> retrieveMostViewedArticles() {
        return articleRepository.findFirst5ByOrderByViewsDesc();
    }


    /*
    // get 5 most commented articles
    @GetMapping("/mostcommented")
    public List<Article> retrieveMostCommentedArticles() {
        return articleRepository.mostCommented();
    }*/


    // get 5 most upvoted articles
    @GetMapping("/mostupvoted")
    public List<Article> retrieveMostUpvotedArticles() {
        return articleRepository.findFirst5ByOrderByUpvotesDesc();
    }


    // get article by id
    @GetMapping("/{id}")
    public Article retrieveArticle(@PathVariable long id) {
        Optional<Article> article = articleRepository.findById(id);

        if (!article.isPresent()) return null;

        return article.get();
    }

    // delete article by id
    @DeleteMapping("/{id}")
    public void deleteArticle(@PathVariable long id) {
        articleRepository.deleteById(id);
    }


    // create article
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Object> createArticle(@Valid @RequestBody Article article) {

        Article savedArticle = articleRepository.save(article);

        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(savedArticle.getArticleid())
                .toUri();

        return ResponseEntity.created(location).build();
    }


    // update existing article
    @PutMapping("/{id}")
    public ResponseEntity<Object> updateArticle(@Valid @RequestBody Article article, @PathVariable long id) {

        Optional<Article> articleOptional = articleRepository.findById(id);

        if (!articleOptional.isPresent())
            return ResponseEntity.notFound().build();

        article.setArticleid(id);

        articleRepository.save(article);

        return ResponseEntity.noContent().build();
    }

}