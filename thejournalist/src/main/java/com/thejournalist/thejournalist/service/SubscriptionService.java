package com.thejournalist.thejournalist.service;

import com.thejournalist.thejournalist.model.Subscription;
import com.thejournalist.thejournalist.repository.SubscriptionRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SubscriptionService {
    private final SubscriptionRepository subscriptionRepository;

    public SubscriptionService(SubscriptionRepository subscriptionRepository) {
        this.subscriptionRepository = subscriptionRepository;
    }

    // GET ALL
    public List<Subscription> findAll(){
        return this.subscriptionRepository.findAll();
    }

    // GET BY ID
    public Optional<Subscription> findById(long id){
        return this.subscriptionRepository.findById(id);
    }

    // CREATE NEW / UPDATE
    public Subscription save(Subscription subscription){
        return this.subscriptionRepository.save(subscription);
    }

    // DELETE BY ID
    public void deleteById(long id){
        this.subscriptionRepository.deleteById(id);
    }

    // SEARCH
    public List<Subscription> findSearch(String q){
        return this.subscriptionRepository.findByEmailContaining(q);
    }

}
