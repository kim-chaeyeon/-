package com.example.blog.domain.post.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Post {
    @Id
    private Long id;
}
