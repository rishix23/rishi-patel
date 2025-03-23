variable "instance_type" {
  description = "The type of instance to launch"
  type        = string
}

variable "ami_id" {
  description = "The ID of the AMI to use for the instance"
  type        = string
}