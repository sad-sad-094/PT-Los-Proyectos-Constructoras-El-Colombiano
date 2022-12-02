# Los Proyectos Constructoras

Es una aplicación que responde a los requerimientos técnicas de la prueba de selección de El Colombiano.

**Los Proyectos Constructoras**, es una app que permite a un administrador afiliado a una constructora, crear un perfil para su empresa y administrar la información de su portafolio de proyectos y de los clientes interesados en sus proyectos activos.

Al interior de la aplicación, el usuario podrá crear un perfil para registrar su empresa, dónde tendrá acceso a las herramientas que le brinda el sistema. Estas herramientas consisten en una vista donde obtendrá la lista de sus proyectos activos y una vista donde podrá ver los clientes que están interesados en sus proyectos. A su vez tendrá a la mano formularios con los cuales podrá actualizar, constantemente, la información de los proyectos y agregar nuevos, de igual manera que lo podrá hacer con los clientes, pudiendo agregar a todo cliente nuevo que tenga interés en un proyecto.

## Descripción de la prueba

La prueba técnica de selección, consiste en la construcción de un sistema web que le permita a un grupo de constructoras administrar sus proyectos de vivienda y los perfiles de las personas interesadas en dichos proyectos.

Los **requerimientos** consisten en la creación de un CRUD para los proyectos de vivienda, donde se puedan administrar y almacenar los datos de cada proyecto (Código, Nombre, Dirección, Constructora, Contacto); un CRUD para los perfiles de las personas que están interesadas en las obras. Estos, deberán realizarse con la implementación de formularios, dentro de los cuales al menos uno deberá tener la función de autocompletar (información obtenida desde la base de datos), al menos uno debe solicitar una fecha la cual deberá seleccionarse desde un calendario. Y, por último, realizar validaciones tanto del lado del servidor como del usuario.

El **stack de tecnologías** solicitado es el siguiente:
* PHP o .Net o C# (versión 5).
* JavaScript.
* Base de datos de elección libre.

El **tiempo de realización** de la prueba es de dos (2) días hábiles.

## Desarrollo de la prueba

**Los Poryectos Constructora** usa `Firestore` para administrar los registros de proyectos y clientes en las bases de datos, y los perfiles de las constructoras. Estas trabajan usando los métodos `getDocs`, `query`, `where`, `collection`, `updateDoc` y `setDoc` para manejar la información entre `Firestore` y la aplicación. La autenticación se realiza con los métodos de `Firebase` (_correo y constraseña_). Por último, la **Interfaz de usuario** fue construída con `React JS` como framework principal de _frontend_ y librerías como `Redux`, `Redux Toolkit`, `React-Redux`, `React-Icons`, `React-Bootstrap`, `Bootstrap`, `React-Toastify`, `React-Router-Dom` y `Normalize.css`, y el preprocesador de CSS `SASS`.

## Instrucciones para la ejecución de la aplicación en local

Para ejecutar esta prueba técnica en local, es necesario tener instalado `Node.JS` en su versión _16.17.0_, `Yarn` en su versión _1.22.19_ y git.

**Nota:** Para ejecutar la modificar la prueba, deberá hacerse con `Yarn` ya que la app fue construída con `Yarn`.

En _primer lugar_ es necesario clonar el repositorio en un directorio local, mediante consola o terminal usando el comando:
```
git clone https://github.com/sad-sad-094/PT-Generador-Prefiles-GSE.git
```

Una vez clonado el repositorio, es necesario instalar, en el directorio donde fue clonado, las dependencias para su funcionamiento (consola o terminal):
```
yarn install
```

Una vez instaladas las dependencias, la aplicación podrá ejecutarse (consola o terminal) en un puerto local (_localhost_):
```
yarn start
```

## Instrucciones para despliegue de la aplicación en `Firebase Hosting`

Para desplegar la aplicación en `Firebase Hosting`. Es necesario instalar la `Firebase CLI`.

Esta se puede instalar de la siguiente manera:
```
yarn global add firebase-tools
```
Luego configurar los servidores de `Firebase Hosting`. Esto se realiza con los siguientes pasos:

1.
```
yarn build
```
2.
```
firebase login
```
3.
```
firebase init
```
4.
```
firebase deploy
```

**Nota:** algunos de estos comandos tienen sus propios internos que deberán ser seguidos.


## Despliegue

Los Proyecto Constructoras fue desplegado con `Firebase Hosting`.

Enlace de despliegue: `https://los-proyectos-constructoras.web.app`
