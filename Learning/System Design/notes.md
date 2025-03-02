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
