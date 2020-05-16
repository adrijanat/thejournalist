package com.thejournalist.journalist.service;

import com.thejournalist.journalist.model.Article;
import com.thejournalist.journalist.repository.ArticleRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ArticleService {
    private final ArticleRepository articleRepository;

    public ArticleService(ArticleRepository articleRepository) {
        this.articleRepository = articleRepository;
    }

    // GET ALL
    public List<Article> findAll(){
        return this.articleRepository.findAll();
    }

    // GET BY ID
    public Optional<Article> findById(long id){
        return this.articleRepository.findById(id);
    }

    // CREATE NEW / UPDATE
    public Article save(Article article){
        return this.articleRepository.save(article);
    }

    // DELETE BY ID
    public void deleteById(long id){
        this.articleRepository.deleteById(id);
    }

    // SEARCH
    public List<Article> findSearch(String q){ return this.articleRepository.findByTitleContainingIgnoreCaseOrSummaryContainingIgnoreCaseOrBodyContainingIgnoreCaseAndStatusEquals(q,q,q,"published"); }

    // LATEST ARTICLE IN CATEGORY
    public Optional<Article> findInCat(long catid){ return this.articleRepository.findFirstByCategory_CategoryidAndStatusEquals(catid,"published"); }

    // 5 LATEST
    public List<Article> findLatest5(){
        return this.articleRepository.findFirst5ByAndStatusEqualsOrderByDatecreatedDesc("published");
    }

    // 5 MOST VIEWED
    public List<Article> findMostViewed5(){
        return this.articleRepository.findFirst5ByAndStatusEqualsOrderByViewsDesc("published");
    }

    // 5 MOST UPVOTED
    public List<Article> findMostUpvoted5(){
        return this.articleRepository.findFirst5ByAndStatusEqualsOrderByUpvotesDesc("published");
    }

    // INCREMENT UPVOTES
    public void incrementUpvotes(long id){ this.articleRepository.incrementUpvotes(id); }

    // INCREMENT VIEWS
    public void incrementViews(long id){ this.articleRepository.incrementViews(id); }
}
