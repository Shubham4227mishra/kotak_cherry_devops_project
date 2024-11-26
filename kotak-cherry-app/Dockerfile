# Dockerfile

# Use the official Node.js image from Docker Hub
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json (for npm install) into the container
COPY package.json package-lock.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Expose the app on port 8080
EXPOSE 8080

# Start the Node.js application
CMD ["node", "app.js"]

