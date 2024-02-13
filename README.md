# Eccommerce Books

## Carpeta Components

- ### Componente BookItem

```

- Componente para representar un elemento de libro en la lista de libros.
-
- Props:
- - navigation: Objeto de navegación de React Navigation.
- - book: Objeto que representa un libro.

```

- ### Componente Card

```
El componente Card es un contenedor reutilizable diseñado para envolver otros elementos y proporcionarles un aspecto de tarjeta.

- Props
- children: Este es un prop especial en React que permite incluir elementos dentro del componente Card. Estos elementos serán renderizados dentro del contenedor de la tarjeta.

- style: Permite especificar estilos personalizados para el componente Card. Se fusionarán con los estilos predeterminados del componente.

```

- ### Componente Carrousel

```
Componente Carrousel
El componente Carrousel es un componente de presentación que muestra una serie de imágenes en un carrusel deslizante.

Props
El componente Carrousel no acepta props directamente. En cambio, obtiene las imágenes para mostrar del estado global de Redux utilizando el selector shopReducer.bookSelected.images.

El componente Carrousel se utiliza directamente en otro componente, lo que resulta en la visualización de un carrusel deslizante de imágenes obtenidas del estado global de Redux.

```

- ### Componente CartItem

```
El componente CartItem representa un elemento individual en el carrito de compras. Muestra la información del producto, incluida la imagen, el título, la marca, el precio por unidad, la cantidad y el precio total del producto.

Props
item (object): Un objeto que contiene la información del producto, incluidos title, brand, price, quantity y thumbnail.
onDelete (function): Una función que se llama cuando se presiona el icono de eliminación de un producto del carrito. Toma el id del producto como argumento.

El componente CartItem se utiliza en otro componente para mostrar un elemento del carrito de compras. Se proporcionan los datos del producto y una función de eliminación para manejar la eliminación del producto del carrito.

```

- ### Componente CustomError

```
El componente CustomError muestra un mensaje de error personalizado en color rojo.


Props
error (string): El mensaje de error que se mostrará en el componente.

```

- ### Componente GenderBook

```
El componente GenderItem muestra un elemento de género en una tarjeta que se puede seleccionar para navegar a la lista de libros correspondiente.

Props
gender (string): El género que se mostrará en la tarjeta.
navigation (objeto de navegación): La navegación proporcionada por React Navigation.

```

- ### Componente Header

```
El componente Header representa la barra de encabezado de la aplicación, que puede contener un título, un botón de retroceso y un botón de cierre de sesión.

Props
navigation (objeto de navegación): La navegación proporcionada por React Navigation.
title (string): El título que se mostrará en la barra de encabezado.

```

- ### Componente Input

```
El componente Input proporciona un campo de entrada de texto personalizado con etiqueta opcional y opción de mostrar un mensaje de error.

Props
label (string): Etiqueta opcional para el campo de entrada.
isSecureEntry (booleano, por defecto false): Indica si el campo de entrada debe ocultar su contenido (por ejemplo, para contraseñas).
error (string, opcional): Mensaje de error a mostrar.
onChange (función): Función de devolución de llamada para manejar cambios en el texto del campo de entrada.

```

- ### Componente LocationSelector

```
El componente LocationSelector permite al usuario confirmar su ubicación actual y actualizarla si es necesario.

Props
No usa

Descripción
El componente LocationSelector utiliza la API de ubicación de Expo para obtener la ubicación actual del usuario. Muestra la dirección actual, la distancia a una ubicación predefinida y proporciona un botón para actualizar la ubicación.

```

- ### Componente MapPreview

```
El componente MapPreview muestra una vista previa estática de un mapa utilizando la API de Google Maps.

Props
location: Objeto que contiene las coordenadas de latitud y longitud de la ubicación a mostrar en el mapa.

```

- ### Componente OrderItem

```
El componente OrderItem representa un elemento individual de la lista de órdenes.

Props
-order: Objeto que contiene la información de la orden, como la fecha de creación y el total.
-setOrderId: Función para establecer el ID de la orden seleccionada.
-setModalVisible: Función para establecer la visibilidad del modal.

```

- ### Componente Search

```
El componente Search permite a los usuarios buscar elementos mediante una entrada de texto.

Props
onSearchHandlerEvent: Función de devolución de llamada que se ejecuta cuando se realiza una búsqueda.

```

# Screens

## Screen BookDetail

```
La pantalla BookDetail muestra los detalles de un libro seleccionado, incluyendo su título, descripción, precio y la opción para agregarlo al carrito.

Descripción
La pantalla BookDetail muestra los detalles de un libro, incluyendo su título, descripción y precio. Permite a los usuarios agregar el libro al carrito presionando el botón "Agregar al Carrito". Además, muestra un indicador de carga mientras se obtienen los detalles del libro y un mensaje si el libro no se encuentra.

```

## Screen BooksByCategory

```
La pantalla BooksByCategory muestra una lista de libros filtrados por género. Permite a los usuarios buscar libros por título y navegar a los detalles de cada libro.

Descripción
La pantalla BooksByCategory muestra una lista de libros filtrados por género. Los usuarios pueden buscar libros por título utilizando el componente Search, y los resultados se muestran en un FlatList de componentes BookItem. Además, se muestra un indicador de carga mientras se obtienen los datos de la API.

```

## Screen CartScreen

```
La pantalla CartScreen muestra los elementos agregados al carrito de compras. Permite a los usuarios eliminar elementos del carrito, vaciar completamente el carrito y confirmar la compra.

Descripción
La pantalla CartScreen muestra los elementos agregados al carrito de compras. Permite a los usuarios eliminar elementos individuales del carrito, vaciar completamente el carrito y confirmar la compra. El total de la compra se muestra en la parte inferior de la pantalla.

```

## Screen Categories

```
La pantalla Categories muestra una lista de categorías de libros disponibles. Utiliza la consulta useGetGendersQuery para obtener la lista de géneros desde el servidor.

Además muestra una lista de categorías de libros disponibles. Muestra un indicador de carga mientras se cargan los datos y maneja errores mostrando un componente CustomError personalizado si se produce un error al cargar los datos.

```

## Screen ImageSelector

```
El componente ImageSelector permite al usuario seleccionar o tomar una foto y confirmarla como su imagen de perfil. Utiliza la biblioteca expo-image-picker para interactuar con la cámara del dispositivo.

 Muestra una vista previa de la imagen seleccionada y proporciona botones para tomar otra foto o confirmar la imagen seleccionada. Después de confirmar la imagen, la guarda en el estado global y la envía al servidor para su almacenamiento.

```

## Screen Login

```
Descripción
El componente Login permite a los usuarios iniciar sesión en la aplicación ingresando su correo electrónico y contraseña. Muestra dos campos de entrada (Input) para el correo electrónico y la contraseña. Cuando el usuario envía el formulario de inicio de sesión, se dispara la mutación useLogInMutation para iniciar sesión en la aplicación. Si la autenticación es exitosa, se muestra un mensaje de éxito y se redirige al usuario a la página de inicio (Home). Si hay algún error durante el inicio de sesión, se muestra un mensaje de error.
```

## Screen Orders

```
Descripción
El componente Orders muestra las órdenes de compra realizadas por el usuario. Utiliza la consulta useGetOrdersQuery para obtener las órdenes del usuario actual. Muestra cada orden como un elemento de la lista usando el componente OrderItem. Al hacer clic en una orden, se abre un modal que muestra los detalles de esa orden, como el artículo comprado, el autor, el género y el total de la compra.

Propiedades
Ninguna
Estado
orderData: Almacena los datos de las órdenes obtenidas de la consulta.
orderIdSelected: Almacena el ID de la orden seleccionada para ver los detalles.
orderSelected: Almacena los detalles de la orden seleccionada.
modalVisible: Controla la visibilidad del modal para ver los detalles de la orden.
Métodos
Ninguno
Estilos
El componente Orders utiliza estilos para dar formato a los elementos de la lista de órdenes y al modal que muestra los detalles de la orden.

```

## Screen profile

```
- Descripción
El componente ProfileScreen muestra la información del perfil del usuario. Muestra la imagen de perfil del usuario, el nombre, el rol, el nivel, la dirección y la ciudad. También muestra la última ubicación guardada del usuario si está disponible. Permite al usuario seleccionar una imagen de perfil y editar su ubicación.

- Propiedades
navigation: Objeto de navegación para navegar entre pantallas.

-Estado
Ninguno

-Métodos
Ninguno

-Estilos
El componente ProfileScreen utiliza estilos para dar formato a los elementos de la pantalla de perfil, incluyendo la imagen de perfil, el contenedor de datos del usuario y la información de ubicación.

```

## Screen Signup

```
Descripción
El componente Signup es una pantalla de registro que permite a los usuarios crear una cuenta ingresando su correo electrónico y contraseña. También muestra mensajes de error si la información ingresada no cumple con los criterios de validación.

Propiedades
-navigation: Objeto de navegación para navegar entre pantallas.
Estado
-email: Estado para almacenar el correo electrónico ingresado por el usuario.
-password: Estado para almacenar la contraseña ingresada por el usuario.
-confirmPassword: Estado para almacenar la confirmación de contraseña ingresada por el usuario.
-emailError: Estado para almacenar mensajes de error relacionados con el correo electrónico.
-passwordError: Estado para almacenar mensajes de error relacionados con la contraseña.
confirmPasswordError: Estado para almacenar mensajes de error relacionados con la confirmación de contraseña.
Métodos
-onSubmit: Método que se ejecuta cuando el usuario presiona el botón de registro. Valida la información ingresada por el usuario y realiza la acción de registro si la información es válida.

Estilos
El componente Signup utiliza estilos para dar formato a los elementos de la pantalla de registro, incluyendo los campos de entrada, botones y enlaces de navegación.
```
