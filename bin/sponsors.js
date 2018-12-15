const process = require('child_process');
const path = require('path');
const fs = require('fs');

const fitToArea = (area, rect) => {
  const k = Math.sqrt(area / (rect.w * rect.h));
  return {
    w: Math.round(rect.w * k),
    h: Math.round(rect.h * k)
  };
};

const URL = {
  "mannen.png": "http://www.mannen.cz",
  "vyziva-pro-fitness.jpg": "http://www.vyziva-pro-fitness.cz",
  "agfoods.jpg": "http://www.agfoods.eu",
  "alfaagro.png": "http://www.alfaagro.cz",
  "bibusmetals.png": "http://www.bibusmetals.cz",
  "fabory.png": "http://www.fabory.cz",
  "pbsvb.png": "http://www.pbsvb.cz",
  "promatservis.jpg": "http://www.promatservis.cz",
  "vbites.png": "http://www.vbites.cz",
  "primapol.png": "http://www.primapol.cz",
  "ickk.png": "http://www.vbites.cz/zivot-ve-meste/2017-03-28-07-19-31/informacni-centrum-a-klub-kultury",
  "jerabkovapekarna.jpg": "http://www.jerabkovapekarna.cz",
  "mtmetal.png": "http://www.mtmetal.com",
  "kovyaslitiny.png": "http://www.kovyaslitiny.cz",
  "itwcz.png": "http://www.itwcz.com",
  "dynamicmetals.png": "http://www.dynamicmetalsltd.cz",
  "slamamilan.png": "http://www.slamamilan.cz",
};
const images = [];
const AREA = 220 * 50;
const imagesDirectory = path.resolve(__dirname, '../images/sponsors');

fs.readdir(imagesDirectory, (err, files) => {
  if (err) throw e;

  // console.table(files);

  files.forEach((file) => {
    const image = path.resolve(imagesDirectory, file);
    const size = process.execSync(`convert ${image} -print "%wx%h" /dev/null`)
        .toString()
        .split('x')
        .map(x => Math.round(Number(x)));
    const rect = {w: size[0], h: size[1]};
    images.push({
      file: file,
      original: rect,
      resized: fitToArea(AREA, rect),
    })
  });

  const css = images.filter((item) => item.file in URL)
    .map((item) => `#menu-sponsors a[href="${URL[item.file]}"] {
  background-image: url(../images/sponsors/${item.file});
  background-size: ${item.resized.w}px ${item.resized.h}px;
  width: ${item.resized.w}px;
  height: ${item.resized.h}px;
}
`).join("");

  console.log(css);
});

