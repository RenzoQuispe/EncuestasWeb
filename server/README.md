## Proceso de construccion del backend
### Setup inicial
#### Instalacion de dependencias
```
npm init -y
npm install express cors dotenv
npm install -D typescript ts-node-dev @types/node @types/express
```
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