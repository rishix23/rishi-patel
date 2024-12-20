# OSI Model

OSI MODEL
Application
Presentation
Session
Transport
Network
Data Link
Physical

# Layer 1 - Physical

- Physical shared medium (network interface card connected from latop 1 directly to laptop 2)
- Medium can be copper wire, fibre (light), ethernet cables, WiFi (radio frequencies) ?
- Standards for transmistting onto the medium
- Standards for receiving from the medium
- No access control and no uniquely identified devices - a hub just repeats the communication and causes collisions
- Hubs are layer one devices (they dont understand frames they just send data)

# Layer 2 - Data Link

- Identifiable devices using MAC addresses (network interface cards, wifi adapters, ethernet adapaters)
- Media access control (sharing)
- Collision detection
- Unicast (1:1) and broadcast (1:ALL)
- Switches are layer 2 devices are hubs with superpowers (more intelligent, STORES and FORWARDS frames to ports using MAC addresses)

# Layer 3 - Network

- IP (Layer 3) protocol adds cross network IP addessing and routing to move data between Local Area Networks without P2P (Point to Point direct links) For example, very difficult to to P2P routing from West to East coast of US

## Packet Routing and ARP

Lets say you send a packet from a West coast server -> East coast server
Intermediate routers: remove incoming Ethernet frames, examine IP header, and consult the routing table

-> adds new Ethernet frame with next router's MAC address and forwards the packet to the next router
When the packet reaches the Final router: removes Ethernet frame, checks destination IP belongs to LAN, uses ARP to resolve IP to MAC address: checks ARP cache -> Sends ARP request to all devices on LAN (if not in cache) -> Updates ARP cache with correct response

-> the final router (East cost router) adds an ethernet frame with destination device's MAC address, destination device receives packet, removes Ethernet frame, and processes IP header

## IP Addressing

133.33.3.7 ----> two parts (network, hosts)
| | | |
each number is 8 bits. each 8 bit (octet) segment is 1 byte. so 4 bytes
if network parts match = same network
if network parts dont match = remote

## Subnet Masks

Classes
Class A: 0.0.0.0 to 127.255.255.255 (default subnet mask: /8 or 255.0.0.0)
Class B: 128.0.0.0 to 191.255.255.255 (default subnet mask: /16 or 255.255.0.0)
Class C: 192.0.0.0 to 223.255.255.255 (default subnet mask: /24 or 255.255.255.0)

A subnet mask is a dotted decimal version of a binary number hich indicates which part of an IP is NETWORK(1) and HOST(0)
e.g. 255.255.0.0 is same as /16:
11111111.11111111.00000000.00000000 = 16 1's

Figure out start and end of a local network 133.33.3.7/16:

Subnet mask -> 255.255.0.0 (Class B)
Binary -> 11111111.11111111.00000000.00000000 -> which is network/host?

Start is all 0 in host part -> 133.33.00000000.00000000 -> 133.33.0.0
End is all 1 in host part -> 133.33.11111111.11111111 -> 133.33.255.255

Range is 133.33.0.0 -> 133.33.255.255

## Routers

every router has a route table
a route table is a collection of routes
it will have a destination field and next hop/target field
the router checks the destination - where is it going to?
it will look for routes that match this destination (the most specific one)

## ARP

Address Resolution Protocol - operates between Layer 3 and Layer 2

## Summary

- IP addresses IPv4 or IPv6
- ARP Find the mac adress for this IP
- Route - where to forward this packet
- Route Table - multiple routes
- Router - moves packets from source to destination - encapulating in L2 on the way

# Layer 4 - Transport

TCP
UDP
TCP Header

TCP Segments - encapsulated within IP packets
Source port
Destinatio port
Sequence Number - incremented a
Acknowledgements -
Window - control the rate of sending data and flow control
Checksum -
Urgent pointer -

TCP - 3 way handshake

- SYN is sent from client (sends a random sequence number)
- SYN-ACK - synchronuze sequence numbers + ackknowlwegde segment from client
- ACK

# Layer 5 - Sessions and state

Stateless firewall - one outbound rule & one inbound rule for a request/repsponse _response always uses emphemeral ports_
Network Access Control List - stateless firewall which needs 2 rules for each TCP connection

Stateful firewall - allowing the request, implicity allows the reponse weather the request is inbound or outbound

# NAT

- use to overcome IPv4 shortages
- provide security benefits
- translates private IPv4 addresses to public
- static NAT - 1 private to 1 (fixed) public translation (IGW)
- dynamic NAT - 1 private to 1st available public
- Port Address Translation (PAT) - many private to 1 public IP (NATGW)

# IP Addressing and Subnetting

- Review and add notes

# DDOS Attacks

- Review and add notes

# Border Gateway Protocol

Advertises the shortest path to a desitnation to all other BGP paths. All BGP networks work together to create a dynamic ever changing topology.

# Layer 7 Firewalls

# IPSEC VPN

- setup secure tunnels across insecure networks
- 2 phases
- Internet Key Exchange (IKE Phase 1 tunnel) - certificate or pre-shared key authentication (slow and heavy) each side creates a DH private key + derives a public key (exchange of the public keys happen)
- IKE Phase 2 tunnel architectually running over phase 1 - fast and agile

# Encryption

add review notes here

# DNS

- DNS Zone - database containing records e.g. \*.netflix.com
- ZoneFile - the "file" storing the zone on disk
- Name Server (NS) - a DNS server hosting one or more Zones and holds 1 or more ZoneFiles
- Authoritative - real or genuine records (boss)
- Non-authoritative/cached - copies of records/zones stored elsewhere to speed things up

# DNS Walking the tree

- import picture here of screenshot

# DNSSEC

adds security to DNS by verifying the result and only validates

- Data origin authentication (this data comes from the right zone, like Netflix.com)
- Data integrity - is the data the same from Netflix.com
- DNS chain of trust root zone -> records
- DNSSEC client will recieve both DNS/DNSSEC results

- RRSET - resource record set

  0 127
  128 191
  192 233
