# Next.js Teslop Shop - Ecommerce Demo

## Configuración Proyecto:

### 1.- Configurar variables de entorno:

Renombrar el archivo **.env.template** a **.env**

### 2.- Iniciar contenedor de Docker:

Para correr localmente, se necesita ejecutar la base de datos MongoDB de un contenedor de Docker.

```
yarn docker
```

o

```
docker-compose up -d
```

- El `-d`, significa **detached** (El contenedor se ejecuta en el fondo, despegada, de la terminal. )

### 3.-Llenar base de datos con información de prueba

Llamar al endpoint :

```
http://localhost:3000/api/seed
```

### 4.- Reconstruir los módulos de node y levantar Next:

```
yarn
yarn dev
```
