package com.thejournalist.thejournalist.model;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
public class Subscription {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public long subscriptionid;

    public String name;

    public String email;

    public String address;

    @Enumerated(EnumType.STRING)
    public PaymentType paymentinfo;

    public String creditcardnumber;

    public String month;

    public String year;

    public String cvv;

    @CreationTimestamp
    public Date datecreated;

}

enum PaymentType { VISA, MASTERCARD, AMERICAN_EXPRESS, DISCOVER }