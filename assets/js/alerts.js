import { Toast } from 'toastify-react-native';

const showToastsAddItem = () => {
    Toast.success('Agregado al carrito', 'center');
}

const showToastsDeleteList = () => {
    Toast.error('Libro eliminado 💔', 'top');
}

const showToastsClearCart = () => {
    Toast.error('Carrito Vacio 💔', 'top');
}

const showToastsBuyCart = () => {
    Toast.info('Productos comprados 💞', 'top');
}

const showToastsLoginOk = () => {
    Toast.info('Bienvenido(a) 💞', 'top');
}

const showToastsLoginError = () => {
    Toast.info('Error al iniciar sesión', 'top');
}



export { showToastsAddItem, showToastsDeleteList, showToastsClearCart, showToastsLoginOk, showToastsLoginError, showToastsBuyCart }