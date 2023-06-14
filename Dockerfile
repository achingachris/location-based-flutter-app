# Dockerfile for Next.js client
FROM node:14 as client

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY client/package*.json ./

# Install dependencies
RUN npm install

# Copy the client code
COPY client/ .

# Build the client app
RUN npm run build

# Dockerfile for Laravel server
FROM php:7.4-apache as server

# Set the working directory
WORKDIR /var/www/html

# Copy the server code
COPY server/ .

# Install PHP extensions and dependencies
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        libzip-dev \
        zip \
        unzip && \
    docker-php-ext-install pdo_mysql zip && \
    a2enmod rewrite

# Copy Apache configuration
COPY server/docker/apache.conf /etc/apache2/sites-available/000-default.conf

# Enable Apache rewrite module
RUN a2enmod rewrite

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Install Laravel dependencies
RUN composer install --optimize-autoloader --no-dev

# Set the proper file permissions
RUN chown -R www-data:www-data /var/www/html/storage && \
    chmod -R 755 /var/www/html/storage

# Expose ports
EXPOSE 80

# Set the entrypoint command
ENTRYPOINT [ "apache2-foreground" ]
