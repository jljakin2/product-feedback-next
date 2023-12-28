# Use the official Node.js image as your parent image.
FROM node:16

# Set the working directory to /backend.
WORKDIR /backend

# Copy the package.json and package-lock.json from your backend directory.
COPY backend/package*.json ./

# Set environment variables
ARG COOKIE_SECRET
ENV COOKIE_SECRET=${COOKIE_SECRET}

ARG CLOUDINARY_CLOUD_NAME
ENV CLOUDINARY_CLOUD_NAME=${CLOUDINARY_CLOUD_NAME}

ARG CLOUDINARY_KEY
ENV CLOUDINARY_KEY=${CLOUDINARY_KEY}

ARG CLOUDINARY_SECRET
ENV CLOUDINARY_SECRET=${CLOUDINARY_SECRET}

ARG COOKIE_SECRET
ENV COOKIE_SECRET=${COOKIE_SECRET}

ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}

ARG ADMIN_USERNAME
ENV ADMIN_USERNAME=${ADMIN_USERNAME}

ARG ADMIN_PASSWORD
ENV ADMIN_PASSWORD=${ADMIN_PASSWORD}

ARG NODE_ENV
ENV NODE_ENV=${NODE_ENV}

# Install any dependencies.
RUN npm install

# Copy the rest of your backend code to the Docker image.
COPY backend/ ./

# If your backend has a build step, include it here.
# For example, if you're using TypeScript:
RUN npm run build

# Specify the command to run your app.
CMD ["npm", "run", "start"]