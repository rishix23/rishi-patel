# IAM

IAM has users, user groups, and roles
Root account is not meant to be used, create seperate admin users
## Access Keys
Each user has max of 2 access keys created in security credentials
You need to deactivate in order to delete

access key for general: NhzpCTjtwJiCftnxrMECA7vNxInjUt2v9PVzc2QD
access key for production: F3Nt9UdBdI231kD7F6Hk7lmj77vuUo9U3G6ESiCL

## CLI Configuration

command to configure an AWS profile to use with the command line tool:
aws configure
you need the access key id, secret, region, and output

command to list s3 buckets:
aws s3 ls --profile iamadmin-general or aws s3 ls --profile iamadmin-production
