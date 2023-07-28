# Stage 1: Build the Angular application
FROM node:16 as builder

WORKDIR /app

# Copy package.json and package-lock.json to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire Angular project
COPY . .

# Build the Angular app (adjust the build command if needed)
RUN npm run build -- --output-path=dist/recipe

# Stage 2: Create the production image
FROM nginx:1.21-alpine

# Copy the built Angular app from the builder stage
COPY --from=builder /app/dist/recipe /usr/share/nginx/html/

# (Optional) If your Angular app uses client-side routing with URLs
# and not just the base path, you may need to add this configuration.
# You can also configure your backend server to handle these URLs.
# RUN rm /etc/nginx/conf.d/default.conf
# COPY nginx-custom.conf /etc/nginx/conf.d/default.conf

# Expose the port that the Nginx server will listen on
EXPOSE 80

# Start Nginx to serve the Angular app
CMD ["nginx", "-g", "daemon off;"]
