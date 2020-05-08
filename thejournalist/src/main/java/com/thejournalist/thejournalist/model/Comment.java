package com.thejournalist.thejournalist.model;


import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Date;

@Entity
@Data
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public long commentid;

    @NotBlank
    public String name;

    @NotBlank
    public String email;

    @NotBlank
    public String body;

    @CreationTimestamp
    public Date datecreated;

}