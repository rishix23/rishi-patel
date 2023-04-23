# Use an official Node runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed dependencies
RUN npm install

# Expose port 5000
EXPOSE 5000

# Define environment variables
ENV PORT=5000
ENV URI='mongodb+srv://rishix23:Absegami16!@cluster1.insdjk8.mongodb.net/?retryWrites=true&w=majority'
 
# Start the server
CMD ["npm", "start"]
