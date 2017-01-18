# KomikiApp

Aplicación de ejemplo creada con React Native por [Imanol Terán](http://imanolteran.com/) para el curso de [Euskadinnova](http://www.spri.eus/euskadinnova/es/enpresa-digitala/agenda/react-native-apps-multiplataforma/12102.aspx).

Usa el API pública de Marvel para mostrar un listado con detalles sobre superhéroes.

## Prerequisitos

- Instalar [Brew](http://brew.sh/) (macOS) o [Chocolatey](https://chocolatey.org/) (Windows).
- Hacer la instalación de [React Native](https://facebook.github.io/react-native/docs/getting-started.html#content) correspondiente.
- Registrarse como desarrollador en [Marvel](https://developer.marvel.com/) y obtener una clave de API.

## Compilar el proyecto

- Clonar o descargar este repositorio.

	```bash
	git clone https://github.com/ijaureguialzo/KomikiApp.git
	```
- Duplicar el fichero `src/components/claves-ejemplo.js` como `src/components/claves.js` y poner dentro los valores de las claves obtenidas de Marvel.
- Descargar las dependencias: 

	```bash
	npm install
	```
- Arrancar el proyecto en el simulador:

	- iOS:

		```bash
		react-native run-ios
		```
	- Android:

		```bash
		react-native run-android
		```

## Notas

- Hay que haber arrancado antes un emulador de Android, no lo arranca automáticamente.
- Para configurar la [depuración con Webstorm](https://blog.jetbrains.com/webstorm/2016/12/developing-mobile-apps-with-react-native-in-webstorm/), hay que [instalar la versión 6](http://apple.stackexchange.com/questions/171530/how-do-i-downgrade-node-or-install-a-specific-previous-version-using-homebrew) de Nodejs.
- El API de Marvel, en los resultados, devuelve URLs que no usan https y hay que reescribirlas o desactivar [App Transport Security](http://iosdevtips.co/post/121756573323/ios-9-xcode-7-http-connect-server-error) para que la aplicación de iOS cargue las imágenes.

