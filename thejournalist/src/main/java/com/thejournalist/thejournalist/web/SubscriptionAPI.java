package com.thejournalist.thejournalist.web;

import com.thejournalist.thejournalist.model.Subscription;
import com.thejournalist.thejournalist.repository.SubscriptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/subscriptions")
public class SubscriptionAPI {
    @Autowired
    private final SubscriptionRepository subscriptionRepository;

    public SubscriptionAPI(SubscriptionRepository subscriptionRepository) {
        this.subscriptionRepository = subscriptionRepository;
    }

    // get all subscriptions
    @GetMapping("/")
    public List<Subscription> retrieveAllSubscriptions() {
        return subscriptionRepository.findAll();
    }

    // get subscription by id
    @GetMapping("/{id}")
    public Subscription retrieveSubscription(@PathVariable long id) {
        Optional<Subscription> subscription = subscriptionRepository.findById(id);

        if (!subscription.isPresent()) return null;

        return subscription.get();
    }

    // delete subscription by id
    @DeleteMapping("/{id}")
    public void deleteSubscription(@PathVariable long id) {
        subscriptionRepository.deleteById(id);
    }

    // create subscription
    @PostMapping("/")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Object> createSubscription(@Valid @RequestBody Subscription subscription) {
        Subscription savedSubscription = subscriptionRepository.save(subscription);

        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(savedSubscription.getSubscriptionid())
                .toUri();

        return ResponseEntity.created(location).build();
    }

    // update existing subscription
    @PutMapping("/{id}")
    public ResponseEntity<Object> updateSubscription(@Valid @RequestBody Subscription subscription, @PathVariable long id) {

        Optional<Subscription> subscriptionOptional = subscriptionRepository.findById(id);

        if (!subscriptionOptional.isPresent())
            return ResponseEntity.notFound().build();

        subscription.setSubscriptionid(id);

        subscriptionRepository.save(subscription);

        return ResponseEntity.noContent().build();
    }

}