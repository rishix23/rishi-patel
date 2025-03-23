Scalability for Dummies

1. Clones -
2. Databases -
3. Cache -
4. Asyncronism -

Performance vs scalability

**If you have a performance problem, your system is slow for a single user.**
**If you have a scalability problem, your system is fast for a single user but slow under heavy load.**

Latency vs Throughput

**Latency is the time to perform some action or to produce some result.**
**Throughput is the number of such actions or results per unit of time.**

CAP Theorem - Consistency, Availibility, Partition Tolderance

C - Consistency: Every user sees the latest, correct data, even if it takes time (e.g., bank balances).
A - Availability: Every request gets a response, even if the data might not be fully up-to-date (e.g., social media feeds).
P - Partition Tolerance: The system continues working even if parts are temporarily unable to communicate (e.g., online gaming servers during network issues).

**In practice can only really have CP or AP but not CA**

# Stream Processing Using Brokers

producer -> broker -> consumer

## Change data capture - specific to DB

DB -> broker -> forward to search index to update derived data

## Event sourcing - DB agnostic

Producer -> broker -> consumer -> database (can be switched out in the future)

## Message processing at least once

2 phase commit or idempotence

# Message queue vs event streaming vs stream processing
Use SQS → If you need a simple, managed queue for message passing with at-least-once delivery.
Use Kafka → If you need event replayability, high throughput, and multiple consumers reading the same data.
Use Flink → If you need to process and analyze streams in real time, transforming and aggregating data as it flows.

## Kafka Topic: orders-topic (with 3 partitions)

-------------------------------------------------|
Partition 0 | Order 1 | Order 4 | Order 7 |
Partition 1 | Order 2 | Order 5 | Order 8 |
Partition 2 | Order 3 | Order 6 | Order 9 |
-------------------------------------------------|
Consumer 1 -> Reads from Partition 0
Consumer 2 -> Reads from Partition 1
Consumer 3 -> Reads from Partition 2

Relational vs non relational
