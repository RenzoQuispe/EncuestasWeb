## Proceso de construccion del frontend

### Inicializar Angular
```bash
npx @angular/cli new client --routing --style=css
cd client
npm install
npx ng serve
```
## Comandos

```bash
ng generate component component-name
```
```bash
ng generate --help
```
```bash
ng build
```
```bash
ng test
```
```bash
ng e2e
```
## Estructura inicial de client/src
```
src     //Carpeta raíz del código fuente Angular
├── app     //Carpeta de la aplicación en sí (componentes y configuración)
│   ├── app.config.server.ts        //Configuración del servidor
│   ├── app.config.ts       //Configuración del cliente
│   ├── app.css     //Estilos del componente raíz
│   ├── app.html        //Vista HTML del componente raíz
│   ├── app.routes.server.ts        //Rutas para el servidor (SSR)
│   ├── app.routes.ts       //Rutas del cliente
│   ├── app.spec.ts     //Pruebas unitarias del componente principal
│   └── app.ts      //Componente raíz de la app (standalone)
├── index.html      //HTML raíz de la aplicación
├── main.server.ts      //Arranca la app en el servidor (SSR)
├── main.ts     //Arranca la app en el navegador
├── server.ts       //Servidor Express para SSR
└── styles.css      //Estilos globales
```
