# zip-generator
Generador del archivo zip para la entrega de tareas del bootcamp.

## Dependencias
```
nodejs
npm 
archiver
prompt-sync
```

## Guia de Uso

Clonamos el repositorio
```
git clone https://github.com/lTheCrow/zip-generator.git
cd zip-generator
```

O directamente descargar el script del release e incluirlo en tu proyecto:
https://github.com/lTheCrow/zip-generator/releases/download/release/zip-generator.zip

Primero establecemos el proyecto con npm para poder instalar las dependencias
```
npm init -y
```

Despues instalamos archiver y prompt-sync para que el script funcione
```
npm install archiver
npm install prompt-sync
```

Al no tener el archivo zipdata.json creado, el programa detectara que no esta
y te pedira los datos en la linea comandos para poder crear el archivo
.zip. 

Ademas el programa guardara en el archivo zipdata.json los datos ingresados, asi
que no tendremos que estar cada vez que ejecutemos el programa poniendo los datos

Datos para el generador de zip que hay que darle son los siguientes:
- El numero del ejercicio
- Los nombres de autores separados por coma
- El directorio donde estan los archivos que queremos comprimir
- El directorio donde enviaremos el archivo comprimido

Ejemplo:
```
![image](https://user-images.githubusercontent.com/42654770/181875303-b580e561-ac30-4f8e-9872-554249983c46.png)
```

JSON Esqueleto donde se almacenaran los datos
```
{
  "exerciseNumber": 0
  "authors": ["", ""],
  "src": "",
  "dst": ""
}

Warning: Por ahora el programa no tiene mucho chequeo de los inputs por lo que
pueden surgir errores al poner mal los datos
```
