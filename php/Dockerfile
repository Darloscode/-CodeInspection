FROM php:8.2-fpm

RUN apt-get update && apt-get install -y \
    libpq-dev zip unzip curl git \
    && docker-php-ext-install pdo pdo_pgsql

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/aspy

CMD ["/bin/sh", "-c", "if [ ! -f artisan ]; then composer create-project laravel/laravel .; fi && php-fpm"]