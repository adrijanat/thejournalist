package com.thejournalist.thejournalist.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.*;

@Entity
@Data
public class Article {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public long articleid;

    @NotBlank
    public String title;

    public String summary;

    @NotBlank
    @Column(columnDefinition = "TEXT")
    public String body;

    @Column(columnDefinition = "integer default 0")
    public int upvotes;

    @Column(columnDefinition = "integer default 0")
    public int views;

    public String image;

    public String status;

    @CreationTimestamp
    public Date datecreated;

    @UpdateTimestamp
    public Date datelastmodified;

    // foreign keys ---------------------------------------

    // COMMENTS
    @OneToMany(/*mappedBy = "article", */orphanRemoval = true)
    /*@JoinTable(name = "article_comment",
            joinColumns = @JoinColumn(name = "articleid", referencedColumnName = "articleid"),
            inverseJoinColumns = @JoinColumn(name = "commentid", referencedColumnName = "commentid"))*/
    public List<Comment> comments = new ArrayList<>();

    // STORIES
    @OneToMany(/*mappedBy = "article", */orphanRemoval = true)
    /*@JoinTable(name = "article_story",
            joinColumns = @JoinColumn(name = "articleid", referencedColumnName = "articleid"),
            inverseJoinColumns = @JoinColumn(name = "storyid", referencedColumnName = "storyid"))*/
    public List<Story> stories = new ArrayList<>();

    // CATEGORY
    @JsonBackReference(value="category-articles")
    @ManyToOne
    @JoinColumn(name="categoryid")
    public Category category;

    // KEYWORDS
    @JsonBackReference
    @ManyToMany(mappedBy = "articles")
    public List<Keyword> keywords = new ArrayList<>();

    // AUTHORS
    @JsonBackReference(value="author-articles")
    @ManyToMany(mappedBy = "articles")
    public List<Author> authors = new ArrayList<>();

}