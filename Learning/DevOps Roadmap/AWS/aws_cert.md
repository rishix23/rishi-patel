# AWS Fundamentals

## IAM

IAM has users, user groups, and roles
Root account is not meant to be used, create seperate admin users

### Access Keys
Each user has max of 2 access keys created in security credentials
You need to deactivate in order to delete

### CLI Configuration

command to configure an AWS profile to use with the command line tool:
aws configure
you need the access key id, secret, region, and output

## Public vs Private Zones

- Public Internet zone
- AWS Public zone - S3
- AWS Private zone - vpc

## VPC Basics

- Region resilliant so if one availibility zone goes down, VPC still works in other availibility zones
- Uses 172.31.0.0/16 static range
- Default VPC is cerated by AWS and is same across all regions
- Includes subnets, internet gateways, network ACLs, and a security group
- Not recommended for production use since its not flexible

## EC2 Basics

- IAAS
- AZ resiliant
- Local on-host storage available or Elastic Block Store (EBS)
- Storage is charged when instance is stopped
- AMI has permissions, root volume, block device mapping

## S3 Basics

- Region resiliant and only belong to a region
- Runs from AWS public zone
- Objects consist of a key: myPic.jpg & value: content being stored with size range from 0 bytes to 5tb
- Unlimited objects in bucket
- Flat structure
- Soft limit 100 account/1000 hard limit
- command to list s3 buckets: aws s3 ls --profile iamadmin-general or aws s3 ls --profile iamadmin-production

# CloudFormation Basics

- Uses YAML or JSON
- Resources is mandatory
- Description must immediately follow template format version
- Creates a stack of logical resources -> which then creates physical resources

# CloudWatch Basics

Logs, Events, Metrics

- Collects and manages operational data
- Metrics - AWS Produts, Apps. on-premises
- CloudWatch Logs - AWS Products, Apps, On-Premises
- CloudWatch Events - AWS Services and Schedules
- Namespace (AWS/EC2) -> Metric (CPU Utilization) -> Datapoint
- Metric -> Alarm -> is it OK?/Alarm! -> SNS Notif or action

# Shared Responsibility Model

- Customer is responsible for security "in" the cloud (Customer Data, Apps, OS, Client and server side encrption, netowkring traffic protection)
- AWS is responsible for secutiry "of" the cloud (Software, Compute, Hardware, Regions)

# High-Availability vs Fault-Tolerance vs Disaster Recovery

## HA - aims to ensure an agreed level of operational performance ususally uptime, for a higher than normal period

Minimise any outages

- not about preventing user disruption, it's about keeping a system operational
- using redundant servers
- 4x4 wheel replacement

## FT - is a property that enables a system to continue operating properly in the event of the failure of some (one or more faults within) of its components

Operate through faults

- much more complex to implement
- minimize outages/route traffic around outages
- system has to operate through a failure without impacting customers
- plane with engine failure has other engines to carry through the fault

## DR - a set of policies, tools, and procedures, to enable the recovery or continuation of vital technology infrastructure and systems following natural or human-induced disaster

Used when HA + FT dont work

- pre planning and keeping the crucial and non-replaceable important parts of the system safe so you rebuild after a disaster
- pilot with parachutes in case of total engine loss

# Route53 Basics

Globally resilient

- Register Domains
- Host zones managed nameservers
- Global service, single databse

## Hosted Zones

- Zone Files in AWS
- Hosted on 4 managed name servers
- Can be public
- Or private linking to VPC's
- Stores records (recordsets)

### Record Types

- A record (IPv4)
- AAAA record (IPv6)
- CNAME (canonical name) points to other names e.g. CNAME ftp, mail, www -> A server record

- MX record is how a server finds a mail server (SMTP) for a domain

  - e.g. MX 10 mail <- higher priority becuase it's 10
  - MX 20 mail.other.domain <- host name
  - the mx record just contains the server host, the DNS resolver must then query this host to get the A record

- TXT record - use text to prove domain ownership
- TTL - how long the authoritative answer is held at the DNS resolver such as TTL 3600
  - if another user requests amazon.com the DNS resolver will return that non-authoritative answer
  - if you change provider to a different IP address the TTL value in the mx record could have an impact and cause delays becuase old mx records are being used

# IAM, ACCOUNTS AND AWS ORGANISATIONS

## IAM Policies

- statements
  - sid
  - action (service:operation) e.g. (s3: \*) for operation you can list a specific action, a list, or wildcard
  - resources matches AWS resources using wildcard or an ARN list
  - effect - either allow or deny

## Policy Overlap Rules
Deny - Allow - Deny

- explicit denies first
- explicit allows next
- implicit deny if neither deny or allow is mentioned

## Inline Policies and Managed Policies

- Inline is creating a policy per user (used for exceptions such as explicit allows/denies for a specific user)
- Managed is a policy referencing all the identities (resuable, low overhead) AWS Managed/Custom are types

## IAM Users

**5,000 IAM Users per account**
**IAM User can be a member of 10 IAM groups**

- Used for long term AWS usage for a single principal

## IAM Groups

**300 groups per account**
Containers for Users
Cant be referenced as a principal in a policy

## IAM Roles

Used by multiple principals or external services, if unknown or multiple then use a role!

- Trust policy
- Permissions policy
- Assume the role, temporarily
- Tempoarary credentials are given when assuming the role, by Secure Token Service (sts:AssumeRole)
  When to use:

      - Allows to use ID Federation
      - External identities > 5,000 users such as those in Azure can just assume a role and access AWS services
      - Use cross account so if you had 1,000 users in one account -> assume role to add data in second account's S3

### Service-linked Roles

**########################## REVIEW ##########################**

IAM Role linked to a specific AWS resource

- Ability to pass roles to a service and that role can have more elevated permissions thant the current user

## AWS Organizations

Managment Account/Master Account is the _main_ and then other accounts join from _standard accounts -> member accounts_

- Organizational Root - just a container for AWS accounts and organizational units (top level of the tree)
- Organizational units (OU) - bascially other _containers for AWS account_
- Consolidated Billing - all accounts bills go to -> _management/master account_
- Log directly into the login account then role switch to all the other accounts

Org -> OU -> AWS Account

## Service Control Polices

Policies that can be attached to Organization, OUs, or Individual Accounts _inherits down the tree_

_manamgement/master account is not affected by SCPs_

_They limit what the account can do including the account root user_

- Dont grant any permissions _only limit_

- **Only permissions within an identity policy within an account and allowed by the SCP are actually active**

## CloudWatch Logs

Public Service - usable from AWS or on-prem
Store, monitor and watch and access logging data

- EC2, VPC Flow Logs, Lambda, CloudTrail
- Can generate metrics based on logs
- Log sources -> Log Events -> Log streams -> Log group
- Retention & permissions & metric filters are generated by log group

## CloudTrail

Logs API calls/activities as a CloudTrail Events
Regional Service

- Logs free information with a 90 day retention period
- **Managmenet Events (create ec2, create vpc, destroy ec2) and Data Events (objects uploaded to S3, lamba function being invoked)**
- Create a single region trail or all regions

- CloudTrail enabled by default, but 90 days no S3
- Trails are how you configure S3 and CloudWatch Logs
- Management events _only_ by default
- Data events need to be enabled
- IAM, STS, CloudFront => Global Service Events
- _Not realtime_, there is a delay

## AWS Control Tower

Quick and easy setup of multi-account environment

- AWS Control Tower orchestrates the capabilities of several other AWS services, including AWS Organizations, AWS Service Catalog, and AWS IAM Identity Center (successor to AWS Single Sign-On), to build a landing zone in less than an hour. Resources are set up and managed on your behalf
- AWS Control Tower orchestration extends the capabilities of AWS Organizations

# S3

**Private by default**

## S3 Security

S3 policies are a form of _resource policy_

- Allow/deny same or different accounts
- Allow or deny anonymous principals
- _Principal_ in policy defines who the statement applies to
- ACLs on buckets and objects (prefer to use bucket policies)
- Block public access applies to anonymous principals

**Identity policies make sense if:**

- Controlling different resources
- You have preference for IAM
- Managing permissions within same account

**Bucket/resource policies make sense if:**

- Manage permissions on a specific resource like S3
- Allowing access to everyone on a resource then use resource policies
- Allow anonymous identities or cross-account use resource policy
- Never use ACLs unless you must

## S3 Static Hosting

- Allow access via HTTP
- Index/error documents are set

- Offloading by using S3 to store media or large data
- Out of band pages - if server was offline for maintenance then point user to S3 static hosting

## Object Versioning and MFA Delete

- Starts as disabled, then can enable versioning
- **Enabled -> suspended -> enable but never enable -> disable**
- When deleting a version its permanent when show versions is enabled
- If show versions is not enabled, a delete marker gets created for a deleted object, deleting that will undo the delete
- Version can be accessed by an ID and delete by specyfying ID

## MFA Delete

MFA is required to change bucket versioning state
MFA is required to delete versions

# Transfer Acceleration

- must be versioned
- uses edge location which has direct connections to other regions

# KMS

Regional and public service
Create store and manage keys
**Keys are stored in that specific region & never leave**

- Symmetric and asymmetric keys
- Encrypt/decrypt operation
- AWS managed keys or customer owned (customer owned is more configurable)
- KMS Keys support rotation
- Keys never leave KMS **FIPS 140-2 Level 2**
- Contains ID, policy, description and state (backed by physical key material)
- KMS keys can be used for up to 4kb

## DEKs

Generated using GenerateDataKey operation within KMS for data > 4kb
KMS provides the DEK to you then discards it **KMS doesn't store DEK**

- Plaintext version of key
- Cipchertext or encrypted version of the same key

Workflow:
**You perform the encryption or service using KMS performs the actual encryption**

- Encrypt using plaintext version
- Discard plaintext version
- Store encrypted data with the encrypted key

Decrytping:
Pass encrypted DEK back to KMS and ask to decrypt it using the same KMS key used to generate the DEK
Use decrypted DEK KMS gives back to decrypt the data and discard the decrypted DEK

## Key Policies and Security

- Key policy (like a resource policy for S3)
- **Every key has one**
- Explicitly have to tell the key to trust certain identities in the account
- Key policies (to trust an account identity) + IAM policies (manage what the use can do with KMS such as only create and manage keys vs encrypting/decrypting)

## S3 Server Side Encryption (SSE)

Buckets are not encrypted, objects are

Client side encryption - generate key, manage key, and encrypt before sending to S3
Server side encryption - allow S3 to handle most of this process and encryption happens at the server

SSE-C - encryption with customer provided keys - AWS only does the encrypt/decrypt operations
SSE-S3 - encryption with S3 manged keys (AES-256) - AWS manages key generation & encrypt/decrypt operations
SSE-KMS - encryption with KMS keys - **you create KMS key which is used to generate a DEK. KMS then decrypts DEK with the original KMS key. You need access to KMS.**

## S3 Bucket Keys

Bucket key is used for a period of time to generate DEKs for individual object encryptions - offloads work from KMS to S3
Only affects objects once enabled - **not retroactive**

- CloudTrail will show the bucket not the object in events
- With replication objects encryption is maintained
- If replicating plaintext (unencrypted) to a bucket using bucket keys then object is encrypted at the destination side and uses the settings of the destination

## S3 Object Storage Classes

S3 Standard - objects are replicated across 3 AZ's

- when objects are stored a HTTP/1.1 200 OK response is provided by S3 API Endpoint
- **billed GB/month fee for data stored**
- **$ per GB transferred OUT**
- **price per 1,000 requests fee**
- milliseconds first byte latency and objects can be made publicaly available

S3 Standard Infrequent Access

- **minimum 30 day storage before transition**
- Half the storage cost fee
- Per GB retrieval fee, overall cost increases with frequent access
- Minimum duration charge of 30 days
- Minimum capacity charge of 128kb per object
- **ideal if not accessing often, critical, long term, and not a lot of tiny objects**

S3 One Zone Infrequent Access

- Cheaper access to storage data since data is only stored in 1 AZ, but higher data loss risk
- **Used for long-lived data, non-critical, replaceable, and non frequent access**

S3 Glacier Instant Retrieval

- Minimum storage charge of 90 days

S3 Glacier Flexible Retrieval

- Cold objects, not immedialy available and cannot be publicaly accessible
- Retriveal they stored in S3 IA (expeditied -> 1-5 minutes, standard -> 3-5 hrs, bulk -> 5-12 hours)
- First byte latency of minutes or hours
- 40kb minimum billabe size and 90 day minimum billable duration
- **ideal for archival access like yearly access**

S3 Glacier Deep Archive

- Frozen state, not immedialy available and cannot be publicaly accessible
- 40kb minimum billabe size and 180 day minimum billable duration
- Retriveal they stored in S3 IA (standard -> 12 hrs, bulk -> 48 hours)
- **secondary long term backups**

S3 Intelligent Tiering
Moves automatically between the tiers - usage is changing or unknown

Fast Access - S3 Standard
Infrequent Access - S3 IA
Archive Instant Access - Glacier Instant Retrieval
Archive Access - Glacier Flexible Retrieval
Deep Archive - Glacier Deep Archive

## S3 Lifecycle Configuration

Set of rules

- Rules consist of actions
- Applies to buckets or groups of objects
- Transaction actions - change the storage class
- Expiration actions - can delete objects or object versions after a certain time period
- **Transitioning from standard to IA has 30 day wait minimum, and similiary if going from standard to glacier then another wait of 30 days at IA before transitioning to the glacier tiers**

## S3 Replication

Cross-Region Replication
Same-Region Replication

- Role is used to replicate from source to destination
- If its a differnt account the destination bucket needs a bucket policy that a role in a seperate account can write to it

### S3 Replication Options

SRR - Use for log aggregations, sync between TEST & PROD, resiliance with strict sovreignty
CRR - Global resilinace improvements, latency reduction

- Replicate all objects or subset of objects
- Which storage class objects in destination will use - **default is to maintain** (can you lower cost storage such as one zone IA in the destination to save money)
- Ownership - default is the source account
- Replication Time Control (RTC) - feature which adds a 15min SLA. Adds level of protectibility - use if you have strict set of requirements

### S3 Replciation Considerations

- **By default replication isnt retroactive**
- **Both source/destination buckets need versioning on**
- One way replication source -> destination by default (can enable bi-directional)
- Can handle unencrypted, SSE-S3, SSE-KMS (with extra config), SSE-C
- **Source bucket owner needs permission to objects**
- **No system events, no lifecycle managments, or any Glacier or Glacier Deep Archive**
- **Deletes are not replicated by default but can be added with DeleteMarkerReplication**

## S3 Presigned URLs

Used to access object in private S3 bucket with access right of an identity that generates them.
URL encodes all authentication and information in them, can be sent from S3 through application server -> presented to user

- Used to download object from S3
- Used for GET and PUT operations
- **Can create presigned URL for an object you DONT have access to**
- When using the URL the permissions match the identity used to create it
- **DONT generate presigned URLs with a role - the tempoarary credentials will expire**

## S3 Select and Glacier Select

- S3 retrieivng somethingup to 5TB which takes time filtering within an app costs a lot
- S3/Glacier Select uses SQL-like statements to select part of the object, prefiltered by S3
- **Filtering happens in S3 before its transferred which saves on speed + cost**

## S3 Events

Notification generated when events occur in a bucket and delivered to SNS, SQS, or Lambda

- Set notifications on object create/delete/restore/replication
- Event notification config - matches events and then sent to SNS, SQS, Lamba
- Events are generated by S3 service so resource policy must be created to allow S3 principal access

## S3 Access Logs

Server access logging provides detailed records for the requests that are made to a bucket

- Eable logging on source bucket which then sends logs to a target bucket
- S3 Log Delivery Group reads log config on source bucket and transfers to target bucket
- S3 Log Delivery Group needs access to target bucket using ACL
- Log files consist of log records

## S3 Object Lock

Implements a write once read many - No delete/no overwrite (WORM)

- requires versioning and individal objects are locked
- S3 object lock retention
- S3 object lock legal hold
- Can have 1, both, or none

## S3 Object Lock Retention

Specify days or years

- **Compliance mode - no changes to object version, or retention settings even by root user until retention expires**
- **Governance mode - special permissions can be added allowing lock settings to be adjusted using _s3:ByPassGovernanceRetention_**

## S3 Object Lock Legal Hold

No retention either set an object version on or off

- **No deletes or changes until legal hold has been removed**
- _s3:PutObjectLegalHold is required to add or remove_
- Prevent accidental deletions of critical object versions

## S3 Access Points

Simplifying access to S3 buckets/objects - functionally equivalent to an S3 bucket policy
Instead of 1 bucket with 1 bucket policy, you create many access points

- Each with different policies, each with different network access controls
- Each access point has its own endpoint address
- Each has its DNS address
- Has its own policy
- Access point with VPC Origin - must have matching permissions or delegation
  **aws s3 create-access-point --name myfile --account-id 12345 --bucket myBucketName**

# VPC

Regional Service operating from all the AZs in that region

- Create isolated networks
- Hybrid networking
- 1 mandatory primary private IPv4 CIDR Block
- Min /28 (16 IPs) to a Max /16 (65,536 IPs)
- Optional secondary IPv4 blocks
- Optional single assinged IPv6 /56 block

## DNS in VPC

- Provided by Route 53
- VPC Base IP + 2 address
- **enambleDNSHostnames - gives instances DNS hostnames**
- **enableDNSSupport - enables DNS resolution in VPC**

## VPC Subnets

Example: 10.16.16.0 -> 16 IPs available but 11 usable since there are 5 reserved

- AZ Resiliant
- A subnetwork of a VPC within a particular AZ
- **1 subnet in 1 AZ**
- **Cant overlap**
- 5 reserved IPs per subnet
  - Network addesss 10.16.16.0
  - Network + 1 IP address used by VPC router: 10.16.16.1
  - Network + 2 IP address used by DNS: 10.16.16.2
  - Network + 3 IP address used by future use: 10.16.16.3
  - Last address which is broadcast address: 10.16.16.255
- DHCP options set - computing devices rescieve IP automatically

## VPC Routing and Internet Gateway

Every VPC has one and is highly available

- Each subnet has its own configurable _route table_
- **Route tables are attached to 0 or more subnets**
- **Subnets require a route table either the main route table of VPC or a custom one you create**

### Internet Gateway

Regionally resiliant gateway attached to a VPC

- Only attached to one VPC at a time
- Gateways traffic between VPC and the internet
- **Instances have public/private IPv4 addresses and the instance OS only sees the private IP address**
- **Instances with IPv6 are are public by default so no translation is necessary**

## Bastion Host or Jump Box

Often the only way into the private VPC

## Stateful and Stateless Firewalls

- Stateless doesnt know state so you need to define two rules
- Stateful is intelligent enough to understand the connection so an explicit allow request will implicity allow the response

## NACLS

**Associated only with subnets and filter traffic across the subnet boundry**

- Sstateless so both request and response parts need 1 inbound/outbound rule
- Can explciity allow and **_deny_**
- Rules match destination IP/range, port, and protocol and either allow/deny based on a match
- _Rules are processed in order, and lowest rule number first_
- Rule pairs request port and ehpermeral port resposnse on each NACL which occurs in a VPC, and to/from a VPC
- Default NACLs allows everything, but _custom NACLs deny everything_

## Security Groups

Stateful - detect reposne traffic automatically

- **No explicit deny**
- If you allow all traffic you cant explicitly deny a subset of that traffic - use NACL with SG
- Attached to ENIs not instances or subnets

### Self-referencing

If a security group self references it means anything that has this SG attached

## NAT and NAT Gateways

Remaapping source or destination IPs

- AZ resiliant
- IP masquerading - hidng CIDR blocks behind one IP
- Gives private CIDR ranges _outgoing_ internet access
- Runs from a public subnet to get a public IPv4 address
- Uses Elastic IPs (Static IPv4 Public)
- NAT bills on running cost + data processing cost
- **NAT Gateways only used with NACLs**
- _NAT Gateways dont work with IPv6_
- _NAT Gateways cannot be bastion hosts_

# EC2 Basics

AZ Resiliant
Run on EC2 hosts

- Shared or dedicated hosts
- EC2 hosts have storage networking and data networking

## EC2 Instance Types

## Storage Refresher

- Direct attached storage
- Network attached storage (EBS)
- Ephemeral Storage - temporary storage
- Peristent storage - lives on past the lifetime of the instance

Block storage - Volume presented to the OS as a collection of blocks and is mountable/bootable
File storage - presented as a file share and has structure, mountable NOT bootable
Object storage - collection of objects flat not mountable/not bootable

IO(Block) size x IOPS = Throughput

## EBS ?????

- Block storage - raw disk allocations (volume)
- Storage is provisioned in ONE AZ
- EBS volume can be attached and detached
- Snapshots can be copied across regions to provide global resiliance
- Used for boot volumes

### GP2 / GP3

### Provisioned IOPS SSD

Provides high performance for mission-critical, low-latency, or high-throughput workloads.

### HDD Based - Low cost, low performance

- Throughput Optimized HDD (st1) - big data, data warehouse, log processing
- Cold HDD (st2) - archives

## Instance Stores - Ephermeal

- Phycially connected block storage devices
- Highest storage performance
- _Cant attach afterwards creation_

## Instance Store vs EBS

## DEEP REVIEW ##

- Persistant storage -> EBS
- Resiliant storage -> EBS
- Storage isolate from lifecycle changes -> EBS
- Cost -> instance store
- Cheap = ST1 or ST2
- Throughput/streaming -> ST1
- GP2/3 - up to 16,000 IOPS per volume
- IO1/2 - up to 64,000 IOPS
- RAID0 + EBS up to 260,000 IOPS
- More than 260,000 IOPS -> instance store

## EBS Snapshots

Becomes region resiliant

- First snapshot is full copy of 'data' to S3
- Future snapshots are incremental
- Snapshots can be copied to another region
- _Snapshots restore lazily_
- Fast Snapshot Restore - immediate restore

## EBS Encryption

Accounts an be set up to encrypt by deafult - default KMS key
Otherwise choose KMS key to use
Each volume uses 1 DEK

- _Snapshots and future volumes use the same DEK_
- _Cant change a volume to be encrypted_
- _OS isnt aware of encryption_

## EC2 Network and DNS Architecture

- Secondary ENI + MAC = Licensing
- Differnt security groups - multiple interfaces
- **OS doesnt see public IPv4**
- IPv4 public ips are dynamic - stop and start = change
- Public DNS = private IP in VPC, public everywhere else

## AMIs

Regional

- **One region, only works in that region**
- AMI Baking - Creating an AMI from a configured EC2
- **Cant be edited**
- **Can be copied between regions**
- Your account has access only by default

## EC2 Purchase Options

- On-demand - Default option
- Spot - not reliable - AWS sells capacity at discounts using a max price budget of the customer
- Reserved - Long term consistent use - once committed to reserve - get them for cheap
- Dedicated Host - belongs to you only and only pay for the host
- Dedicated Instances - your own instances but dont have to manage host
- Scheduled Reserved Instances -

## EC2 Metadata

- **169.254.169.254/latest/meta-data**
- Environment, networking, authentication

# CONTAINERS AND ECS

- Container definition - Images/ports
- Task definition (blueprint) - Security (Task Role), which Docker containers to run, how much CPU/memoery to allocate, IAM roles
- Task role - IAM role which the task assumes
- Service - how many copies, HA, restarts

## Cluster Types

- EC2 Mode - pay for EC2 instances, price concious
- Fargate Mode - overhead concious, small/burst workloads, batch/periodic workloads

## ECR

- Integrated with IAM

## EKS

- AWS managed Kubernetes - open source and cloud agnostic
- EKS Cluster - EKS Control plane + EKS Nodes
- Storage - can use EBS

# ADVANCED EC2

# Bootstrapping

- EC2 Build Automation
- http://169.254.169.254/latest/user-data
- Anything in usere data is executed by instance OS
- **ONLY executed on launch**
- Not secure
- Boot-to-service-time

- cfn-init - helper script - installed on EC2 OS (desired state)

## EC2 Instance Roles

- EC2 assumes the role to have access to other AWS services
- Credentials are inside meta-data

## SSM Parameter Store

- Storage for configuration and secrets
- Strings, strings list, secure string
- Plaintext and ciphertext
- Database strings

## System and application logs

- CloudWatch agent needs to be installed into the EC2

## Placement Groups

- Cluster - pack instances close together - 10Gbps - _One AZ ONLY_
- Spread - provides infratructure isolation _7 instances per AZ_
- Partition - more than 7 instances in a AZ - _max 7 partitions per AZ_ - each partition has its own rack - no sharing between paritions - topology aware

## Dedicated Hosts

- Host dedicated to you
- No instance charges just the host

## Enhanced Networking and EBS Optimized

- Uses SR-IOV - NIC is virtualization aware
- Higher I/O + lower host CPU usage
- More bandwidth

- EBS optimized means dedicated capacity for EBS
- Cost extra, enabled by default

# ROUTE 53

Globally resiliant

## Public Hosted Zones

- DNS DB (zone file) hosted by R53 (Public Name Servers)
- Accessible from the public zone

## Private Hosted Zones

- Not public only accessible via VPC
- Available in 1 or more VPCs

## CNAME vs ALIAS

- CNAME maps name -> name (www.catagram.io => catagram.io) cant reference the naked domain
- Alias records map a NAME to an AWS resource
- Alias can be used for both aked/apex and normal records
- **For AWS Resources always use Alias**

## Simple Routing

- No health checks
- Use when you want to route requests to **one** service such as a web server
- Doesnt support health checks

## Health Checks

- Configured seperately, but **used** by records
- Health checkers located globally
- Check every 30s

## Failover Routing

- Secondary record value is returned if primary record health check fails

## Multi Value Routing

Improves availability

- Returns mumtiple values (IPs) for each record
- Allows to check the health of each resource

## Weighted Routing

Simple load balancing or testing new software versions

- Adds weights to a record and returned based on that weight
- If only want 5% to go to a server then you can set the weight to 5 for that record

## Latency Based Routing

When optimising for performance and user experience

- Speciifes the region in the record and lowest latency record is returned

## Geolocation Routing

- Only returns relevant records (restricting content)

## Geoproximity Routing

- Works on distance between user and resources
- Uses bias to route more/less traffic to a certain region

## Interoperability

- Registrar and Domain Hosting

## Implementing DNSSEC in Route 53

- R53 creates a zone signing key
- Create a key signing key used by R53 on the records and the top level domain

# RDS

## ACID and BASE

Transactional models

ACID = consistency (atomic, consistent, isolated, durable)
BASE = availibility (Basically available, soft state, eventually consistent)

## Databases on EC2

- Access to DB instance OS, Advanced DB tuning, DB or DB version AWS does not provide, specific OS/DB combination AWS dont provide

## Architecture

- Need a subnet group
- **No access to OS or SSH**
- Instances can have multiple DBs on them
- Has its own dedicated EBS storage per instance
- Synchronus replication to standby
- Asynchronus replication to read replicas
- Backups happen to S3

## Multi AZ - Instance

- **Synchronus replication to stand by instance**
- Reads from standby during failovers
- Not free tier
- **One stand by replica ONLY**
- Same region only
- Backups taken from stand by

## Multi AZ - Cluster

- **1 Writer and 2 reader instances using synchronus replication**
- Fast writes to local storage => flushed to EBS
- Reader instances can be used for reads
- Data is commited when 1+ readers finishes writing
- Cluster endpoint points at cluster while reader endpoints point at reader
- Instance endpoints - point at specific instances - used for testing/fault finding

## RDS Backups

- Automate backups stored in AWS S3 -> 0-35 days
- Snapshots - full -> then incremental -> taken from standby
- **Manual Snapshots dont expire -> you need to delete**
- Can replicate backups to another region - not by default

## RDS Restores

- New RDS instance created when using automated backup/snapshot to restore from
- Endpoint changes after restore

## RDS Read Replicas

- Seperate instance
- **Asynchronous replication from primary to read replicas**
- 5x direct read-replicas per DB instance
- Failure only
- Read only - until promoted

## RDS Security

- SSL/TLS in transit
- RDS supports EBS volume encryption
- Encyption cant be removed once added
- MYSQL and Oracle support Transparent Data Encryption (handled with DB engine)

## RDS IAM Authentication

- Policy attached to user/role maps to -> local db user
- **Only used for authentication not authorization**

## RDS Custom

## Aurora

Supports auto scaling
**Supports 3+ AZ resiliance**

- Uses a cluster
- A single primary instance + 0 or more replicas
- Uses cluster volume
- Replicas happen on cluster volume storage layer

## Aurora Severless

- Aurora Capacity Units
- Infrequently used applications/new applications
- Unpredictable workloads

## Aurora Global Database

- Cross Region DR and BC
- Global Read Scaling

## Aurora Multi Master Writes

- All instances are R/W
- With a write after committed to storage its replicated across other instances

## RDS Proxy

- Establishes to the DB instance
- Lambda connects to proxy which is much quicker than connecting directly to instance
- Abstracts client away from failover events
- Too many connections error, using Lambda, long running applications
- Fully managed DB proxy for RDS/Aurora
- Only accessible from VPC
- Uses SSL/TLS
- Reduces failover time by over 60%

## Database Migraton Service

- Uses source/destination endpoints and migration instance to migrate data
- Schema Conversion Tool - converting one DB engine to another (different ones such Oracle to PostgreSQL)

# ELASTIC FILE SYSTEM

- Can be mounted in Linux only
- Shared between many EC2 instances
- Have mount targets with IPs in every AZ
- General or max I/O
- Burstbale (unpredectible) and provisioned (predictable)
- Standard and infrequent access

## AWS Backups

- Fully managed data-protection backup
- Consolidate management into one place
- Backup plans - frequency, window, lifecycle, vault
- Resources - what resources are backed up

- Vault-lock - write once, read many
- On-demand - manual backups created as necessary
- Point in time recovery

# HA AND SCALING

## Elastic Load Balancer Architecture

- ELB is a DNS A record pointing at 1+ nodes per AZ
- Nodes (in one subnet per AZ) can scale
- Internet-facing means public IPv4s
- Internal is private only
- EC2 doesnt need to be public to work with a LB
- Require 8+ free IPs per subnet, and a /27 subnet to allow scaling

## ALB vs NLB

- ALB is layer 7 listens on HTTP/HTTPS
- Content type, cookies, custom headers, user location, and app behaviour
- SSL termination happens on the ALB
- **ALBs must have SSL certs if HTTPS is used**
- Slower than NLB
- Rules direct connections which arrive at a listener

- NLB layer 4 understands TCP, UDP, TCP_UDP
- No understanding of HTTP/HTTPS
- Really fast
- SMTP, SSH, Game servers
- Have static IPs for whitelisting
- Forward TCP to instances -> unbroken encryption
- Private link

## Launch Configuration and Launch Templates

- Allow EC2 config to be defined in advance
- AMI, Instance type, storage, key pair, userdata, IAM Role
- Used for auto scaling groups
- Launch templates allow to launch EC2s

## Auto Scaling Groups

- Automatic scaling and self-healing for EC2
- Uses LCs and LTs
- minimum:desired:maximum capacity

## ASG Scaling policies

- Manual, scheduled (know there will be demand or not)
- Simple (CPU above 50% => +1 CPU below 50% => -1),
- Stepped more flexible can define CPU between 50%-60%, 60%-70%
- Target tracking (50% CPU on average)
- SQS Queue
- Scheduled Scaling → Scale at fixed times (e.g., add instances every morning at 8 AM).
- Predictive Scaling → Uses machine learning to anticipate demand spikes (good for predictable workloads).

## ASG Lifecycle Policies

- Perform an action before the EC2 is launched/terminated like indexing/backing up data

## ASG Health Checks

EC2 - anything other than running -> unhealthy
ELB - healthy = running and passing ELB check
Custom - using external tool to determine healthy/unhealthy

## SSL Offload and Session Stickiness

- Bridging - connection is terminated on ELB, SSL cert is installed on ELB
- Pass through - client sends to NLB and it goes through unbroken to instances
- Offload - SSL terminated and then unecrypted passed to instance using HTTP - EC2 doesnt need SSL cert installed

- Stickiness - session is hosted on EC2 so ALB provides a cookies to reference which instance client gets sent to

## Gateway Load Balancers

- Inbound/Outbound traffic inspection
- GWLB endpoints - traffic enters/leaves these endpoints
- Balances packets against backend applicances

# SEVERLESS AND APPLICATION SERVICES

## AWS LAMBDA

- Function as a service
- **15m timeout**
- Public networking - public internet + public AWS resources
- Private networking - access all VPC based resources, obeys all VPC networking rules (need NAT GW/IGW for VPC Lambdas to access internet resources)

- **Execution role for Lambda**

- Synchronus - client waiting for result to be returned, errors and retries has to be handled within client
- **Asynchronus - S3 for example isnt waiting for a response if it uses lamda to upload a picture - idempotent**
  - Events can be sent to a dead letter queue after repeated failed processing
  - Supports destinations (SQS, SNS) where successful or failed events can be sent
- Event driven - typically used on streams/queues which dont support event generation to invoke lambda

  - Permissions from the lambda execution role are used by event source mapping to interact with the event source
  - SQS or SNS topics can be used for any discarded failed batches

- Lambda function can reuse execution context, but has to assume it cant.
- Provisioned concurrecny - AWS keeps x amount of warm contexts

## CloudWatch Events and Event Bridge

- Observe if x happens or at y times do z
- EventBridge is CloudWatch v2
- A default event bus for the account
- EventBridge monitors default event bus and match pattern rules -> rule executed -> can invoke a lambda

## Severless Architecture

### SNS

Public AWS Service - HA and Scalable

- Coordinates the sending and delivery of messages
- Publisher sends messages to topics
- Topics have subscribers which receive messages
- Delivery status, delivery retries, SSE, cross account via topic policy

### Step Functions

State machines - start - state - ends

- States are things which occur
- Maximum duration 1 year
- Standard workflow (default) and express

## API Gateways

HA, scalable, handles authorisation, throttiling, caching, CORS, etc.

- Sits in betwwen clients and integrations such as AWS services (SNS, Lambda, HTTP endpoints)
- Create and manage APIs
- Provide APIs to use HTTP/HTTPS/Websocket APIs

- Authentication -
- APIs deployed to stages

- 400 - Bad request
- 403 - Access denied
- 429 - Throttling error
- 502 - Bad gateway - bad output returned by Lambda
- 503 - Service unavailable
- 504 - Integration/failure timeout

- Cache TTL is 300 seconds

## SQS Queues

- Public HA queue
- Asynchronus
- **Standard guarentee at least once deilvery - multi lane highway**
- **FIFO - guarentee once delivery and order - one lane - nust have .fifo suffix**
- **Visibily timeout - amount of time a message is hidden once received, and if it's not already deleted it reappears for reprocessing**
- Short polling - immediate
- Long polling - longer polls
- Encryption at rest and in transit
- Delay queues - when added they are invisible, max of 15 mins
- Dead letter queues - can be used for problem messages, when a receive count > max receive count then gets moved to dead letter queue

## Kinesis Data Stream

**Real-time data capture: Capture data from various sources, such as logs, metrics, social media, and IoT devices.**
Public service and HA

- Scalabale streaming service
- Streams store default of 24 hours of a moving window of data
- Store data for up 365 days
- Data ingestion, analytics, monitoring, app clicks
- Requires manual scaling such as adjusting number of shards

## Kinesis Data Stream Firehose

Fully managed streaming service that automatically delivers data to AWS services like S3, Redshift, or Elasticsearch.

- **Near real time delivery**
- Load data for data lakes/data stores
- Supports lambda
- Can deliver to HTTP, Redshift, ElasticSearch, Splunk, and S3
- Data can be sent directly to firehose
- No persistent data storage—it just ingests and delivers the data

## Kinesis Data Analytics

- Real time processing of data
- Ingests from data stream or firehose
- Uses SQL
- Election data, leadersboards for games, etc.

## Kinesis Video Stream

- Ingest live video data from producers
- Security cameras, smartphones, cars, drones, etc
- **Cant access directly via storage, only API**

## Amazon Congnito

- Authentication, authorization, user management for mobile/web apps
- **User pools - allow to sign in and get a JWT (cant be used to access AWS services) and user management**
- **Identity pool - allow you to access temporary AWS credentials**

- **User pool token can be used with identity pool to get temporary AWS credentials**

## AWS Glue 101

- Severless extract, transform, and load
- Moves and transforms data between source and destinations
- Data catalog - peristent metadata about sources in a region

## Amazon MQ

Not a public service

- Open source message broker
- Provides queues/topics
- Single instance
- No AWS integration

## Amazon AppFlow

- Source/destination connector
- Aggreagte data from different sources
- Public endpoints
- Contact records from Salesforce to Redshift

# CLOUDFRONT

- Content delivery network
- Uses distributions which is a configuration

## Beahaviours

- Caching controls set on beaviour
- Matches based a pattern
- Specify HTTP methods
- Configure field level encryption
- Restrict viewer access

## TTL and Invalidations

- More frequent cache hits = less origin load
- **Default TTL is 24 hours**
- **Cache-control max-age/smaxage - value in seconds, direct CF to apply a TTL**
- **Expires header - specifies specific date/time an object should expired**
- **Custom origin or S3**

- Cache invalidation happens on distribution using a pattern path such as images/cat1.img
- Applies to all edge locations
- Use versioned file names differnt file names for different versions

## ACM

Regional service

- Lets you run public or private CA
- **Generate (automatically renews) or import (responsible to renew) certificates**
- **Only deploy certificates to supported services (CF and ALBs) not EC2**
- **Certificates cannot leave region**
- **Cloudfront always use us-east-1 for ACM - it uses a distribution to specify the certificate which sends it to edge locations**

## Cloudfront SSL/TLS

- By default uses \*.cloudfront.net certificate
- Two SSL connections viewer -> cloudfront -> origin
- Both need valid public certificates (and intermediate certificates)

## Origin Types and Architecture

- S3 Origins
- **Use custom origin to configure ports or minimum SSL protocol version**

## Securing the CF Content Delievery Path

- Origin access identity is a type of identity
- It can be asscociated with a distribution
- CF becomes the OAI

## Private Distribution and Behaviours

- Public behaviours - open access to objects
- Private behaviours - requests require a signed cookie or URL
- **OLD - A CF key is created by an account root user**
- **OLD - The account is added as a trusted signer**
- **NEW - Trusted key groups**
- **Signed URLs provides access to one object**
- **Cookies provide access to groups of objects - use for groups of call such as all cat gifs**

## Lambda@edge

- Can run Lambda at edge locations
- Lambda@Edge allows cloudfront to run lambda function at CloudFront edge locations to modify traffic between the viewer and edge location and edge locations and origins

## AWS Global Accelerator
Designed to improve global network performance by offering entry point onto the global AWS transit network as close to customers as possible using Anycast IP addresses

- Moves AWS Network closer to customer
- Connections enter at edge using anycast IPs
- Transfer over AWS backbone to 1+ locations
- **Can be used for non HTTP/HTTPS (TCP/UDP) - difference from CloudFront**

# ADVANCED VPC NETWORKING

## VPC Flow Logs

- **Captures metadata**
- Attached to a VPC - all ENIs in that VPC
- Attached to subnets - all ENIs in that subnet
- Attached to ENIs directly
- Log destinations like S3 or CloudWatch Logs
- **ICMP = 1, TCP = 6, UDP = 17**

## Egress only Internet Gateway

HA by default

- Allows IPv6 IPs to access public internet
- Inbound denied

## Gateway Endpoints

**HA across all AZs in a region by default**

- Provide private access to S3 and DynamoDB
- **Uses a prefix list and route table**
- Not accessible outside VPC they are in

## Gateway Interfaces

- **Provide private access to S3 and DynamoDB using DNS**
- **Added to specific subnets - an ENI - not HA**
- **Uses DNS and a private IP address for the interface endpoint**
- Network access controlled by security groups
- TCP and IPv4 only
- Use private link
- Private traffic travels to interface endpoint -> public service

## VPC Peering

Direct encrypted between 2 VPCs only

- Works same/cross-region and same/cross-account
- **Not transitive**

# HYBRID ENVIRONMENTS AND MIGRATION

## Border Gateway Protocol

## IPSEC VPN Fundamentals

- Sets up secure tunnels across insecure networks
- Provides authentication and encryption

## AWS Site-to-Site VPN

Full HA

- A logical connection between a VPC and on-prem network encrypted using IPSec running over public internet
- **VPN speed limit of 1.25Gbps**
- **Latency considerations, inconsistent, public internet**
- **Quick to setup in hours for all configurations**

## Direct Connect

Business Prem -> DX Location -> AWS Region
Port allocation at a DX Location

- **Low latency/high throughput**
- DX Location is not owned by AWS
- Comms provider extends the DX port into your business premises if no space/equipment at DX Location

## Public VIF + VPN

- Private encrypted connection for DX

## Transit Gateway

Network transit hub to connect VPCs to on-premises networks

- Supports transitive routing
- Can be used to create global networks
- Peer with different regions, same or cross account

## Storage Gateway

Supports migrations, extensions, storage tiering, DR, and replacement of backup systems

### Volume Stored

- iSCSI Raw Block Devices
- **All stored locally**
- **Great for full disk backup**
- **Assists with DR, create EBS volumes in AWS**
- **Local volumes on prem -> asyncrhonus copy to S3 -> EBS snapshots are created**

### Volume Cached

- **Volume cached primary data stored in S3 which is AWS managed**
- **Data is stored in AWS and you have a local volume cache on premises**
- **Capacity extension**
- Frequently accessed data

### Tape - VPL Mode

### File

- **Bridges on-premises file storage and S3**
- **Mount points via NFS or SMB**
- **Files stored into a mount point are visible objects in S3**
- **S3 objects visible as files on-premises files**
- **Primary data held on S3**

## Snowball - Edge - Snowmobile

Transfer data in/out of AWS

- **Snowball (10TB - 10PB) and multiple devices sent to multiple business premises which is only storage**
- **Snowball Edge - both storage and compute - data processing on ingestion**
- **Snowmobile - portable DC within shipping container on a truck (10PB+)**

## AWS Directory Service

- Simple AD Mode - an implementation of Samba 4 (compatibility with basics AD functions)
- AWS Managed Microsoft AD - an actual Microsoft AD DS Implementation
- AD Connector - proxies requests back to an on-premises directory (existing active directory on-premises and want a minimal AWS footprint to run isolated services which need a directory)

## DataSync Service

Orchestrate the movement of large scale data (amounts or files) from on-premises NAS/SAN into AWS or vice-versa

- Needs to integrate with EFS, FSx, S3 or bi drectional/incremental/schedule transfer

## FSx for Windows File Server

Fully managed native windows native file servers/shares

- **Native file system accessible over SMB**
- **Windows permission model**
- **Integrates with DS and your own directory**

## FSx for Lustre
Amazon FSx For Lustre is a high-performance file system for fast processing of workloads.

- POSIX
- It delivers extreme performance for scenarios such as Big Data, Machine Learning and Financial Modeling
- Open-source parallel file system which stores data across multiple network file servers to maximize performance and reduce bottlenecks

## AWS Transfer Family

Managed file transfer service - supports transferring to or from S3 and EFS

- FTP/FTPS/SFTP/AS2

# SECURITY, DEPLOYMENT, AND OPERATIONS

## AWS Secrets Manager

- **Designed for secrets**
- **Supports automatic rotation using Lambda**
- **Directly integrates with RDS**

## Application Layer 7 Firewalls

- **L3/L4 request/response are seperate an unrelated**
- **L5 (session) request/response can be considered as part of one session (reduces admin overhead)**
- **L7 firewalls are aware of HTTP and can detect abnormal requests and protocol specific attacks**
- **HTTPS terminated at firewall then new encrypted L7 connection from FW to backend**
- **Data can be inspected, blocked, replaced, or tagged and it can identify, block, and adjust specific applications**

## WAF - NEED REVIEW

## AWS Shield

AWS Shield Standard and Advanced

- Protects against DDOS attacks
- Standard is free and advanced costs
- Common L3/L4 attacks
- Shield standard is automatically provided with Cloudfront and R53

## Cloud HSM

A single tenant Hardware Securty Module (HSM) which is AWS managed fully

- **Fully FIPS 140-2 Level 3**
- **Access using industry standard APIs like PKCS#11, Java cryptograpghy extensions, Microsoft cryptong libraries**
- **No native integration with AWS services**
- **Offload the SSl/TLS processing for web servers**
- **Enable transparent data encryption (TDE) for Oracle dbs**
- **Protect the private keys for an issuing certificate authority**

## AWS Config

- Record config changes over time on resources
- Auditing change and complicance with standards
- All the information is stored regionally in an S3 config bucket

## Amazon Macie

Data Security and Data Privacy Service

- Discover, monitor, and protect data which is stored in S3 buckets

## AWS Inspector

- **Scans EC2 isntances and the instance OS**
- **Finds vulnerabilities and deviations**
- Provides a report of findings ordered by priority
- Network assesment (agentless)
- Network and host assesment (agent)
- Network reachability
- **CVE**
- **CIS benchmarks**
- **Security best practices for Amazon Inspector**

## AWS Gaurdduty

Guard Duty is an automatic threat detection service which reviews data from supported services and attempts to identify any events outside of the 'norm' for a given AWS account or Accounts

# CLOUDFORMATION

Written in YAML or JSON

- Template parameters - ones you can specify, pseudo paramters - AWS specified
- **Mappings - Uses key/values which improves template portability**
- **Outputs - accesible from parent stack when nesting and exporting allowing cross-stack references**

- **Resources in a stack share a lifecycle**
- **Whole templates can be reused in other stacks**
- **Nested stacks - Use when stacks form one of the solutions - lifecycle linked**
- **Stacks designed to be isolated and self-contained**
- **Outputs can be exported to be referenced by other stacks**
- **Export name must be a unique name in that region where fn::ImportValue can be used instead of Ref**
- **Use cross-stack references for service-oriented, different lifecycles, or stack reuse**
- **StackSets are a feature of CloudFormation allowing infrastructure to be deployed and managed across multiple regions and multiple accounts from a single location**
- **CFN uses the permission of the identity logged in to create resources**
- **Stack roles allow an IAM role to be passed into the stack via PassRole**
- **The identity creating the stack doesnt need resource permissions, just PassRole**
- **CloudFormationInit and cfn-init are tools which allow a desired state configuration management system to be implemented within CloudFormation**
- **The cfn-hup helper is a daemon that detects changes in resource metadata and runs user-specified actions when a change is detected**
- **Change sets allow you to preview how proposed changes to a stack might impact your running resources**
- **Custom resources let CFN integrate with anything it doesnt yet**

# NOSQL DATABASES AND DYNAMODB

Public DBaaS - key/value

- No self-managed server or infrastructure

## DynamoDB Consistency, Presistance, and Performance

- **Every operation consumes at least 1 RCU/WCU**
- **1 RCU is 1x4KB read operation per second**
- **1 WCU is 1x1KB write operation per second**

## DynamoDB Local and Global Secondary Indexes

- **LSI must be created with table**
- **LSI shares the RCU/WCU with the table**
- **Query can only work on 1 PK at a time**
- **Alternative sort key (local secondary index)**
- **Some or all atrributes (projection)**

- **GSI can be created anytime**
- **Alternative PK/SK**
- **Have their own RCU/WCU allocations**

## DynamoDB Streams

- DynamoDB Streams are a 24 hour rolling window of time ordered changes to ITEMS in a DynamoDB table
- Lambda can be integrated to provide trigger functionality - invoking when new entries are added on the stream

## Global Tables

- DynamoDB Global Tables provides multi-master global replication of DynamoDB tables which can be used for performance, HA or DR/BC reasons.

## DynamoDB DAX

DynamoDB Accelerator (DAX) is an in-memory cache designed specifically for DynamoDB. It should be your default choice for any DynamoDB caching related questions

- Supports read caching of items and query/scan results
- Supports write-through and read caching
- Runs from within VPC
- Good for read heavy workloads

## DynamoDB TTL

Timestamp for automatic deletions within a table

## Amazon Athena

Serverless interactive querying service

- Querying AWS logs

## Elasticache

In-memory database which has high performance

- **Managed Redis or Memcached as a service**
- **Can be used to cache data for read heavy workloads with low latency requirements**
- **Reduces DB workloads**
- **Can be used to store sessiond data (Stateless Servers)**
- **Requires application code changes**

Memcached

- **Uses simple data structures (string)**
- **No replication**
- **Multiple nodes (sharding)**
- **No backups**
- **Multithreaded**

Redis

- **Uses advanced data structures**
- **Multi AZ**
- **Replication (scale reads)**
- **Supports backups**
- **Transactions**

## Redshift Architecture

**Built on relational database model**
Redshift is a column based, petabyte scale, data warehousing product within AWS

- **Enhanced VPC routing**

# AWS ARTIFACT

AWS Artifact is your go-to, central resource for compliance-related information that matters to you

- \*\*

prev, right
^
|

prev = self.right.prev
next = self.right

prev.next = node
next.prev = node

node.prev = prev
node.next = next
