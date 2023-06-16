# how to run
# docker build -t myimageName .
# docker run -it myimageName bash

# Check Node.js and npm version
# node -v && npm -v

# Use Ubuntu 22.04 as base image
FROM ubuntu:22.04

# Set environment variables for non-interactive installation
ENV DEBIAN_FRONTEND=noninteractive

# Update system and install necessary packages
RUN apt-get update -y && apt-get upgrade -y && \
    apt-get install -y wget python3 python3-pip curl && \
    apt-get install -y python-is-python3 

# Install Node.js LTS
RUN curl -sL https://deb.nodesource.com/setup_lts.x | bash - &&\
    apt-get install -y nodejs