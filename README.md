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

El servidor estará disponible en `http://localhost:3000/`.

## Configuración Adicional

- Si se necesitan ajustes adicionales, como variables de entorno o configuraciones específicas, revisa el archivo `.env` para modificarlos según sea necesario.

## Compartir y Probar la Colección de Postman

Comparte el archivo exportado con la persona que va a probar y sigue estos pasos para importar la colección en Postman y configurar el entorno si es necesario:

### Importar la colección en Postman:
La persona a la que has enviado el archivo debe abrir Postman en su computadora.
En Postman, haz clic en el botón "Import" en la esquina superior derecha.
Selecciona "Import File" y luego elige el archivo de colección que enviaste.
Postman importará la colección y estará disponible en su panel izquierdo para que puedan hacer pruebas.
