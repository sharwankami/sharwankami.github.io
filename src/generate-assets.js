const path = require('path')
const fs = require('fs')
const childProcess = require('child_process')

console.log('Generating favicons')
var masterLogoPath = path.resolve(__dirname, '../static/logo-sk.svg')
var appleTouchLogoPath = path.resolve(__dirname, '../static/logo-sk.svg')
var imageExportPath = path.resolve(__dirname, '../static/assets/images')

if (!fs.existsSync(imageExportPath)) {
    fs.mkdirSync(imageExportPath, { recursive: true })
}

//console.log(masterLogoPath, appleTouchLogoPath, imageExportPath);

let iconSizes = [16, 32, 48, 192, 512]
iconSizes.forEach((size) => {
    let iconFilename = path.resolve(
        imageExportPath,
        `favicon-${size}x${size}.png`
    )
    let cmd = `inkscape -w ${size} -h ${size} --export-type="png" --export-filename=${iconFilename}  ${masterLogoPath}`
    childProcess.exec(cmd, (error, stdout, stderr) => {
        console.log(error)
        console.log(stdout)
        console.log(stderr)
    })
})

//create apple touch icon
let appleIconPath = path.resolve(imageExportPath, 'apple-touch-icon.png')
childProcess.exec(
    `inkscape -w 180 -h 180 --export-type=png --export-filename=${appleIconPath} ${appleTouchLogoPath}`
)

let imgPathIcon16 = path.resolve(imageExportPath, 'favicon-16x16.png')
let imgPathIcon32 = path.resolve(imageExportPath, 'favicon-16x16.png')
let imgPathIcon48 = path.resolve(imageExportPath, 'favicon-16x16.png')
let imgPathFavicon = path.resolve(imageExportPath, 'favicon.ico')

childProcess.exec(
    `magick ${imgPathIcon16} ${imgPathIcon32} ${imgPathIcon48} ${imgPathFavicon}`
)

let manifestJson = {
    short_name: 'samnet',
    name: 'Samhandlingsnett',
    icons: [
        {
            src: '/favicon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
        },
        {
            src: '/favicon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
        },
    ],
    start_url: '.',
    display: 'standalone',
    theme_color: '#000',
    background_color: '#ffffff',
}

fs.writeFile(
    path.resolve(imageExportPath, 'manifest.json'),
    JSON.stringify(manifestJson),
    'utf8',
    (err, data) => {}
)
