package com.thejournalist.thejournalist.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Data
public class Keyword {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public long keywordid;

    public String name;

    // foreign keys ---------------------------------------

    // ARTICLES
    @ManyToMany
    @JsonManagedReference
    @JoinTable(name = "keywords_articles",
            joinColumns = @JoinColumn(name = "keywordid", referencedColumnName = "keywordid"),
            inverseJoinColumns = @JoinColumn(name = "articleid", referencedColumnName = "articleid"))
    public List<Article> articles = new ArrayList<>();

}
