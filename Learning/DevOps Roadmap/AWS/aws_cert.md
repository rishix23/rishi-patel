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
- Storage is charged when isntance is stopped
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

## Bation Host or Jump Box

Often the only way into the private VPC

## Stateful and Stateless Firewalls

- Stateless doesnt know state so you need to define two rules
- Stateful is intelligent enough to understand the connection so an explicit allow requent will implicity allow the response

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
