//Creamos comando de lista de directorios ls

const fs = require('node:fs/promises')
const path = require('node:path')
const pc = require('picocolors')

const folder = process.argv[2] ?? '.';

async function ls (folder) {
    let files
    try {
        files = await fs.readdir(folder)
    }catch {
        console.error(pc.red(`Error al leer el directorio: ${folder}`))
        process.exit(1)
    }

    const filesPromises = files.map(async file => {
        const filePath = path.join(folder, file)
        let stats

        try{
             stats = await fs.stat(filePath)
        } catch {
            console.error(`Error al leer el archivo: ${filePath}`)
            process.exit(1)
        }
        
        const isDirectory = stats.isDirectory()
        const fileType = isDirectory ? 'd' : 'f'
        const fileSize = stats.size.toString()
        const fileModifed = stats.mtime.toLocaleString()
        const fileName = path.basename(filePath)
        return `${pc.bgMagenta(fileType)} ${pc.blue(file.padEnd(30))} ${pc.green(fileSize.padStart(10))} ${pc.yellow(fileModifed)}`
    })

    const filesInfo = await Promise.all(filesPromises)
    filesInfo.forEach(fileInfo => console.log(fileInfo))
    
} 
ls(folder)
