package com.thejournalist.journalist.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
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

    // relationships ---------------------------------------

    // COMMENTS
    @OneToMany(orphanRemoval = true)
    public List<Comment> comments = new ArrayList<>();

    // STORIES
    @OneToMany(orphanRemoval = true)
    public List<Story> stories = new ArrayList<>();

    // CATEGORY
    @ManyToOne
    @JoinColumn(name="categoryid")
    @JsonBackReference(value="category_articles")
    public Category category;

    // AUTHORS
    @ManyToMany(mappedBy = "articles")
    @JsonBackReference(value="authors_articles")
    public List<Author> authors = new ArrayList<>();

    // KEYWORDS
    @ManyToMany(mappedBy = "articles")
    @JsonBackReference(value="keywords_articles")
    public List<Keyword> keywords = new ArrayList<>();
}