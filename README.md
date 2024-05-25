# Nombre del Proyecto

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

- **src/**
  - **models/**: Contiene los modelos de datos utilizados en la aplicación.
  - **services/**: Contiene la lógica de negocio y acceso a datos.
  - **controllers/**: Controladores para manejar las solicitudes HTTP.
  - **routes/**: Definición de rutas para la API.
  - **assets/img/**: Imágenes y recursos estáticos.
  - **database/**: Scripts y archivos relacionados con la base de datos.

## Cómo ejecutar el servidor
```bash
git clone https://github.com/DanielRC04/AppFlotaBack.git
```
Entra en la carpeta `database/` o accede al archivo SQL desde Google Drive y ejecútalo en MySQL. No se requieren credenciales de inicio de sesión como contraseña. Si se necesitan credenciales, agrégalas en un archivo `.env`.

# Instala las dependencias del proyecto:
```bash
npm install
```

Finalmente, inicia el servidor en modo desarrollo:
```bash
npm run dev:start
```

El servidor estará disponible en `http://localhost:3002/`.

## Configuración Adicional

- Si se necesitan ajustes adicionales, como variables de entorno o configuraciones específicas, revisa el archivo `.env` para modificarlos según sea necesario.

## Probar la Colección de Postman
### Brands
https://api.postman.com/collections/31334158-9a4586c5-883a-470d-974f-981e8491f371?access_key=PMAT-01HYPZ0T2SZ7RFGMBK1A6AJ4QN

### CarCategories
https://api.postman.com/collections/31334158-dc5cdee6-a532-42c0-91b0-4d3348b8c1eb?access_key=PMAT-01HYPYWKJFZFY9MQAFGWAH7DCH

### CarImages
https://api.postman.com/collections/31334158-99f96f60-914f-4f45-986a-c23b5a440cfe?access_key=PMAT-01HYPZ2XD0TA518KH7B9EWS900

### Cars
https://api.postman.com/collections/31334158-99f96f60-914f-4f45-986a-c23b5a440cfe?access_key=PMAT-01HYPZ2XD0TA518KH7B9EWS900

### Cities
https://api.postman.com/collections/31334158-7a425576-67d2-4df9-8df8-aeb164424727?access_key=PMAT-01HYPZ42NZ8DGCDGHEFCFK9JYE

### Rents
https://api.postman.com/collections/31334158-4b9fb5d9-884e-47bd-965d-41a5c04691c1?access_key=PMAT-01HYPZ4R43GN6YC58DTEJZRHST

### States
https://api.postman.com/collections/31334158-445e15d2-8573-464a-a8cf-779af70b922d?access_key=PMAT-01HYPZ56JRVGWJVA4C2T9H5K3Z

### Users
https://api.postman.com/collections/31334158-85b4fc50-b984-4b39-b9c2-3e5eab58de3a?access_key=PMAT-01HYPZ5V5HQYKP8SH595AED7VA

### Importar la colección en Postman:
La persona a la que has enviado el archivo debe abrir Postman en su computadora.
En Postman, haz clic en el botón "Import" en la esquina superior derecha.
Selecciona "Import File" y luego elige el archivo de colección que enviaste.
Postman importará la colección y estará disponible en su panel izquierdo para que puedan hacer pruebas.
