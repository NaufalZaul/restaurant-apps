const sharp = require('sharp/lib');
const fs = require('fs');
const path = require('path');

const targetFile = path.resolve(__dirname, '../../public/images/heros');
const destinationFile = path.resolve(__dirname, '../../../dist/images/heros');

if (!fs.existsSync(destinationFile)) fs.mkdirSync(destinationFile, { recursive: true });

fs.readdirSync(targetFile)
  .forEach((imageFile) => {
    // untuk width besar dengan ukuran 800px
    sharp(`${targetFile}/${imageFile}`).resize(800)
      .toFile(path.resolve(
        __dirname,
        `${destinationFile}/${imageFile.split('.').slice(0, -1).join('.')}-large.jpg`,
      ));

    // untuk width kecil dengan ukuran 480px
    sharp(`${targetFile}/${imageFile}`).resize(480)
      .toFile(path.resolve(
        __dirname,
        `${destinationFile}/${imageFile.split('.').slice(0, -1).join('.')}-small.jpg`,
      ));
  });
