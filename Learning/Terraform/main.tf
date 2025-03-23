provider "aws" {
  region = "us-east-1"  # us-east-1 is commonly used for free tier
}

# Create S3 bucket for state
resource "aws_s3_bucket" "terraform_state" {
  bucket = "my-terraform-state-bucket-rishi"
}

# Enable versioning for state history
resource "aws_s3_bucket_versioning" "terraform_state" {
  bucket = aws_s3_bucket.terraform_state.id
  versioning_configuration {
    status = "Enabled"
  }
}

# Enable server-side encryption
resource "aws_s3_bucket_server_side_encryption_configuration" "terraform_state" {
  bucket = aws_s3_bucket.terraform_state.id
  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}

# Create DynamoDB table for state locking
resource "aws_dynamodb_table" "terraform_locks" {
  name         = "terraform-state-lock"
  billing_mode = "PAY_PER_REQUEST"  # Free tier eligible
  hash_key     = "LockID"
  attribute {
    name = "LockID"
    type = "S"
  }
}

terraform {
  backend "s3" {
    bucket         = "my-terraform-state-bucket-rishi"
    key            = "terraform/state/main.tfstate"
    region         = "us-east-1"
    encrypt        = true
    dynamodb_table = "terraform-state-lock"
  }
}

# module s3_module {
#   source = "./s3_module"
#   bucket_name = "rishis-existing-bucket"
# }

# module rishi_ec2 {
#   source = "./web_server_module"
#   ami_id = "ami-08b5b3a93ed654d19"
#   instance_type = "t2.micro"
# }

# output "instance_id" {
#   value = module.rishi_ec2.instance_id
# }

# output "public_ip" {
#   value = module.rishi_ec2.public_ip
# }

# output "bucket_name" {
#   value = module.s3_module.bucket_name
# }