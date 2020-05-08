package com.thejournalist.thejournalist.web;

import com.thejournalist.thejournalist.model.Subscription;
import com.thejournalist.thejournalist.service.SubscriptionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MimeTypeUtils;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
//@RequestMapping("/subscriptions")
@RequestMapping(path = "/subscriptions", produces = MimeTypeUtils.APPLICATION_JSON_VALUE)
public class SubscriptionAPI {

    private final SubscriptionService subscriptionService;

    public SubscriptionAPI(SubscriptionService subscriptionService){
        this.subscriptionService = subscriptionService;
    }

    // GET ALL
    @GetMapping
    public ResponseEntity<List<Subscription>> getAllSubscriptions(@RequestParam(required=false) String q) {
        try {
            if (q == null){ return new ResponseEntity<>(subscriptionService.findAll(), HttpStatus.OK); }
            else { return new ResponseEntity<>(subscriptionService.findSearch(q), HttpStatus.OK); }
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // GET BY ID
    @GetMapping("/{id}")
    public ResponseEntity<Subscription> getSubscriptionById(@PathVariable("id") long id) {
        Optional<Subscription> subscription = subscriptionService.findById(id);

        if (subscription.isPresent()) {
            return new ResponseEntity<>(subscription.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // CREATE NEW
    @PostMapping
    public ResponseEntity<Subscription> createSubscription(@RequestBody Subscription subscription) {
        try {
            return new ResponseEntity<>(subscriptionService.save(subscription), HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
        }
    }

    // UPDATE EXISTING
    @PutMapping("/{id}")
    public ResponseEntity<Subscription> updateSubscription(@PathVariable("id") long id, @RequestBody Subscription subscription) {
        Optional<Subscription> subscriptionO = subscriptionService.findById(id);
        if (subscriptionO.isPresent()){
            subscription.setSubscriptionid(id);
        }
        return new ResponseEntity<>(subscriptionService.save(subscription), HttpStatus.OK);
    }

    // DELETE BY ID
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteSubscription(@PathVariable("id") long id) {
        try {
            subscriptionService.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
        }
    }
}