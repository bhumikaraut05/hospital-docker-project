# Dockerfile for LifeCare Hospital Website
# Simple static site served with nginx

FROM nginx:alpine

# Set working directory
WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*

# Copy website files
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# No CMD needed, nginx runs by default
