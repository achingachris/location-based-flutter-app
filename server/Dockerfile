# Base image
FROM php:8.0-apache

# Set the working directory
WORKDIR /var/www/html

# Copy the application files to the working directory
COPY . .

# Install dependencies
RUN apt-get update && apt-get install -y \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    && docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath opcache \
    && a2enmod rewrite

# Set up the PHP configuration
COPY ./docker/php.ini /usr/local/etc/php/

# Set up the Apache configuration
COPY ./docker/apache.conf /etc/apache2/sites-available/000-default.conf

# Enable Apache rewrite module
RUN a2enmod rewrite

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Install Laravel dependencies
RUN composer install --optimize-autoloader --no-dev

# Generate Laravel application key
RUN php artisan key:generate

# Set up storage and cache permissions
RUN chown -R www-data:www-data \
    /var/www/html/storage \
    /var/www/html/bootstrap/cache

# Expose port 80
EXPOSE 80

# Start Apache server
CMD ["apache2-foreground"]
