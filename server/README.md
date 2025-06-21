## Proceso de construccion del backend
### Setup inicial
#### Instalacion de dependencias
```
npm init -y
npm install express cors dotenv mysql2
npm install -D typescript ts-node-dev @types/node @types/express
npm install --save-dev @types/cors
npm install --save-dev @types/mysql2
```
Ejemplo de instalacion de una dependencia:
```
Instalas jsonwebtoken como dependencia de producción:
npm install jsonwebtoken

Instalas @types/jsonwebtoken como dependencia de desarrollo:
npm install --save-dev @types/jsonwebtoken
```
Otras dependencias como mysql2 ya viene con soporte TypeScript incorporado, no es posible ni necesario @types/mysql2.
#### Inicializar TypeScript
```
npx tsc --init
```
Luego modificamos el archivo tsconfig.json para que quede más adecuado al proyecto:
```
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true
  }
}
```