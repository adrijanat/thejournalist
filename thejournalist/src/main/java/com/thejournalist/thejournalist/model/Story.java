package com.thejournalist.journalist.model;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@Data
public class Story {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public long storyid;

    @NotBlank
    public String question;

    @NotBlank
    public String name;

    public String location;

    @NotBlank
    public String email;

    public String summary;

    @NotBlank
    @Column(columnDefinition = "TEXT")
    public String body;

    public String image;
}