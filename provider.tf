# provider.tf

provider "aws" {
  region = "ap-south-1"  # Change this to your preferred AWS region
}

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }
}
