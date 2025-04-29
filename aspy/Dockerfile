FROM php:8.4-cli

# Instalamos utilidades del sistema
RUN apt-get update && apt-get install -y \
    unzip \
    libzip-dev \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    procps \
    git \
    && docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd fileinfo


# Instalar Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer


# Establecer el directorio de trabajo
WORKDIR /var/www

# Copiar los archivos del proyecto
COPY . .

# Instalar dependencias PHP (Laravel)
RUN composer install

# Exponer el puerto 8000
EXPOSE 8000

# Comando por defecto: correr servidor Laravel
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
