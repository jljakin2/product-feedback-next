# Use the official Node.js image as your parent image.
FROM node:16

# Set the working directory to /backend.
WORKDIR /backend

# Copy the package.json and package-lock.json from your backend directory.
COPY backend/package*.json ./

# Install any dependencies.
RUN npm install

# Copy the rest of your backend code to the Docker image.
COPY backend/ ./

# If your backend has a build step, include it here.
# For example, if you're using TypeScript:
RUN npm run build

# Specify the command to run your app.
CMD [ "node", "index.js" ]