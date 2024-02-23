# Use an official Node.js runtime as a base image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app
RUN npm run build

# Expose port 3000 to the outside world
EXPOSE 3000

# Define environment variable
ENV REACT_AUTH_SERVICE "http://3.85.17.0:5000/api/Auth"
ENV REACT_APPS_SERVICE "http://3.85.17.0:5001/api"

# Run the application
CMD ["npm", "start"]
