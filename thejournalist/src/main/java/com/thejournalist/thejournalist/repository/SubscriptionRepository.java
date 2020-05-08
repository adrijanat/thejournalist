package com.thejournalist.thejournalist.repository;


import com.thejournalist.thejournalist.model.Subscription;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SubscriptionRepository extends JpaRepository<Subscription, Long> {
    List<Subscription> findByEmailContaining(String q);
}