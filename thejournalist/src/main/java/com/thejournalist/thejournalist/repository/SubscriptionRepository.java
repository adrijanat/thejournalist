package com.thejournalist.thejournalist.repository;


import com.thejournalist.thejournalist.model.Subscription;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SubscriptionRepository extends JpaRepository<Subscription, Long> {

}