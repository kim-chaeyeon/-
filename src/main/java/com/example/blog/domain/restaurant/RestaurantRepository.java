package com.example.blog.domain.restaurant;


import jakarta.transaction.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface RestaurantRepository extends JpaRepository<Restaurant, Integer> {
    Restaurant findByTitle(String title);

    Restaurant findByTitleAndContent(String title, String content);

    Page<Restaurant> findAll(Specification<Restaurant> spec, Pageable pageable);

    @Transactional
    // @Modifying // 만약 아래 쿼리가 SELECT가 아니라면 이걸 붙여야 한다.
    @Modifying
    // nativeQuery = true 여야 MySQL 쿼리 문법 사용 가능
    @Query(value="ALTER TABLE restaurant AUTO_INCREMENT = 1", nativeQuery = true)
    void clearAutoIncrement();
}

