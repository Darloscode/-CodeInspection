
# ASPY 🐳

Este proyecto incluye:

- PHP 8.2 con Laravel
- PostgreSQL 13
- Nginx
- PgAdmin 4
- Soporte para frontend 

---

## 📦 Requisitos

- [Docker](https://www.docker.com/products/docker-desktop)
- [Git](https://git-scm.com/)
- [Composer](https://getcomposer.org/)
- [Node.js & npm](https://nodejs.org/) (para compilar assets si usas Breeze/Jetstream)

---

## 🚀 Clonado e inicialización

```bash
# 1. Clonar el repositorio
git clone https://github.com/Aspy-Ecuador/Aspy
cd aspy

# 2. Levantar los servicios con Docker
docker-compose up -d --build

# 3. Ingresar al contenedor PHP
docker-compose exec php bash
```

---

## ⚙️ Configuración de Laravel

Dentro del contenedor PHP:

```bash
cd /var/www/aspy

# Instalar dependencias
composer install

# Copiar .env si no existe
cp .env.example .env

# Generar clave
php artisan key:generate

# Ejecutar migraciones
php artisan migrate
```

---

## 🌐 Acceso a servicios

| Servicio       | URL                           |
|----------------|-------------------------------|
| Laravel App    | http://localhost:8080         |
| PgAdmin        | http://localhost:5050         |

> **PgAdmin credenciales**:
> - Email: `admin@admin.com`
> - Password: `admin`

Conexión en PgAdmin:
- Host: `db`
- Usuario: `postgres`
- Contraseña: `postgres`
- Base de datos: `laravel`

---

## 🧑‍💻 Desarrollo en Laravel

### Crear rutas

Edita el archivo `routes/web.php`:

```php
Route::get('/', function () {
    return view('welcome');
});
```

### Crear un controlador

```bash
php artisan make:controller HomeController
```

Y luego define la ruta:

```php
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index']);
```

### Crear vistas

Guarda archivos Blade en `resources/views`. Ejemplo: `home.blade.php`

```php
<!-- resources/views/home.blade.php -->
<h1>Bienvenido a la página de inicio</h1>
```

### Crear modelos y migraciones

```bash
php artisan make:model Producto -m
```

Esto genera el modelo y la migración. Edita el archivo en `database/migrations/` y luego:

```bash
php artisan migrate
```

---

## 🔐 Rutas protegidas con Sanctum (API)

### 1. Crear rutas en `routes/api.php`

```php
use App\Http\Controllers\AuthController;

Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->get('/user', [AuthController::class, 'user']);
Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, 'logout']);
```

### 2. Consume la ruta desde React o Postman

Envía un `POST /api/login` con email y password.

---

## 🛡 Conexión a PostgreSQL desde PgAdmin

### Paso a paso:

1. Ir a http://localhost:5050
2. Iniciar sesión con:
   - Email: `admin@admin.com`
   - Password: `admin`

3. Registrar nuevo servidor con estos datos:

| Campo                  | Valor           |
|------------------------|-----------------|
| Nombre/Dirección       | Laravel DB      |
| Host name / address    | `db`            |
| Puerto                 | `5432`          |
| Base de datos          | `laravel`       |
| Usuario                | `postgres`      |
| Contraseña             | `postgres`      |

> ⚠️ La base `postgres` es administrativa. Laravel usa `laravel`.

Una vez conectado, explora `Schemas > public > Tables`.

---

## 🧼 Comandos útiles

```bash
# Ver contenedores activos
docker ps

# Ver logs
docker logs aspy        # Laravel backend
docker logs nginx       # Nginx
docker logs aspy-db     # PostgreSQL

# Detener y reiniciar todo
docker-compose down -v
docker-compose up -d --build

# Limpiar cachés de Laravel
php artisan config:clear
php artisan cache:clear
php artisan view:clear
```

---

## 🧠 Notas adicionales

- Si tienes errores de permisos:
  ```bash
  chmod -R 775 storage bootstrap/cache
  chown -R www-data:www-data storage bootstrap/cache
  ```

- Puedes conectar Laravel con PostgreSQL configurando `.env` con:
  ```
  DB_CONNECTION=pgsql
  DB_HOST=db
  DB_PORT=5432
  DB_DATABASE=laravel
  DB_USERNAME=postgres
  DB_PASSWORD=postgres
  ```

---

## ✨ ¡Listo para comenzar!

Empieza creando tus rutas, controladores, vistas, migraciones y autenticación. Laravel ya está conectado a PostgreSQL y funcionando sobre Docker 🚀
