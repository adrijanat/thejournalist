package com.thejournalist.thejournalist.model;

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

    // foreign keys ---------------------------------------

    // ARTICLES
    @OneToMany(mappedBy="category")
    @JsonManagedReference(value="category-articles")
    public List<Article> articles = new ArrayList<>();

}
