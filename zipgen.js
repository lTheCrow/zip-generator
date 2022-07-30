const fs = require("fs");

/** 
 * Este modulo requiere de archiver para comprimir el archivo .zip
 * npm i archiver 
 */
const archiver = require("archiver");

/** 
 * ZipData almacenara los datos del archivo zipdata.json
 * 
 * Los datos que contiene son los siguientes:
 *  - exerciseNumber  -> Numero de Ejercicio
 *  - authors         -> Nombre de los Autores
 *  
 *  - zipName         -> Nombre del archivo zip que se generara
 *  - src             -> Directorio donde estan los archivos a comprimir 
 *  - dst             -> Directorio donde se guardara el archivo .zip
 */
class ZipData {

  exerciseNumber = "";
  authors = [];
  zipName = "";
  src = "";
  dst = "";

  constructor (exerciseNumber, authors, src, dst) {
    this.exerciseNumber = exerciseNumber.toString().padStart(2, '0');

    for (let i = 0; i < authors.length; i++)
      this.authors[i] = this.formatAuthorName(authors[i]);

    this.src = src;
    this.dst = dst;

    this.generateZipName();
  }

  formatAuthorName(authorName) {
    return authorName.toLowerCase().replaceAll(" ", "_");
  }

  formatAuthorList(authorList) {
    return authorList.trim().replaceAll(" ", "-");
  }

  generateZipName() {
    let authorList = "";

    this.authors.forEach(author => {
      authorList += (author + ' ');
    });

    authorList = this.formatAuthorList(authorList);
    this.zipName = `bc_60810-ejercicio_${this.exerciseNumber}-${authorList}.zip`;  
  }

  createZipDirectory(dir) {
    if (!fs.existsSync(dir))
      fs.mkdirSync(dir);
  }

  generateZipArchive() {
    const archive = archiver('zip', { zlib: { level: 9 }});

    this.createZipDirectory(this.dst);
    const stream = fs.createWriteStream(this.dst + "/" + this.zipName);

    return new Promise((resolve, reject) => {
      archive
        .directory(this.src, false)
        .on('error', err => reject(err))
        .pipe(stream);

      stream.on('close', () => resolve());
      archive.finalize();
    });
  }

  get zipName() {
    return this.zipName;
  }

}

function readJsonFile(filename) {
  const json = fs.readFileSync(filename);
  const data = JSON.parse(json);
  
  return data;
}

// Busca si hay un archivo llamado zipdata.json
// Si no hay, obtiene los datos por prompt y los guarda en el archivo zipdata.json

// Si hay, obtiene los datos directamente en el archivo
jsonData = readJsonFile('zipdata.json');
let zipData = new ZipData(jsonData.exerciseNumber, jsonData.authors, jsonData.src, jsonData.dst);

// Genera el archivo .zip
zipData.generateZipArchive();
