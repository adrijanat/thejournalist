package com.thejournalist.journalist.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public long categoryid;

    public String name;

    // relationships ---------------------------------------

    // ARTICLES
    @JsonIgnore
    @OneToMany(mappedBy="category")
    //@JsonManagedReference(value="category_articles")
    public List<Article> articles = new ArrayList<>();

}