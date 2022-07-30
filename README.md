# zip-generator
Generador del archivo zip para la entrega de tareas del bootcamp

## Dependencias
```
nodejs
npm 
archiver
```

## Guia de Uso

Primero establecemos el proyecto con npm
```
npm init -y
```

Despues instalamos archiver
```
npm install -g archiver
```

Ahora establecemos los datos para el generador de zip en el archivo zipdata.json
Hay que establecer:
- El number de ejercicio
- Los nombres de autores
- El directorio donde estan los archivos que queremos comprimir
- El directorio donde enviaremos el archivo comprimido

Aqui abajo te dejare un json esqueleto para guiarte
```
{
  "exerciseNumber": 0
  "authors": ["", ""],
  "src": "",
  "dst": ""
}
```