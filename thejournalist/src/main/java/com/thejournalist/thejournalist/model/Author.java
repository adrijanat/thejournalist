package com.thejournalist.journalist.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import net.minidev.json.annotate.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Author {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public long authorid;

    @NotBlank
    public String name;

    @NotBlank
    public String email;

    public String bio;

    public String image;


    // relationships  ---------------------------------------

    // ARTICLES
    @ManyToMany
    //@JsonManagedReference(value="authors_articles")
    @JoinTable(name = "authors_articles",
            joinColumns = @JoinColumn(name = "authorid", referencedColumnName = "authorid"),
            inverseJoinColumns = @JoinColumn(name = "articleid", referencedColumnName = "articleid"))
    public List<Article> articles = new ArrayList<>();
}