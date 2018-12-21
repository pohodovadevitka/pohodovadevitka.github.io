const process = require("child_process");
const path = require("path");
const fs = require("fs");

const point = (w, h) => ({
  h: Math.round(Number(h)),
  w: Math.round(Number(w))
})

const fitToArea = (area, rect) => {
  const k = Math.sqrt(area / (rect.w * rect.h));
  return point(rect.w * k, rect.h * k);
};

const items = [
  {
    file: "kargoma.png",
    url: "http://www.mannen.cz"
  },
  {
    file: "vyziva-pro-fitness.jpg",
    url: "http://www.vyziva-pro-fitness.cz"
  },
  {
    file: "agfoods.jpg",
    url: "http://www.agfoods.eu"
  },
  {
    file: "alfaagro.png",
    url: "http://www.alfaagro.cz"
  },
  {
    file: "bibusmetals.png",
    url: "http://www.bibusmetals.cz"
  },
  {
    file: "fabory.png",
    url: "http://www.fabory.cz"
  },
  {
    file: "pbsvb.png",
    url: "http://www.pbsvb.cz"
  },
  {
    file: "promatservis.jpg",
    url: "http://www.promatservis.cz"
  },
  {
    file: "vbites.png",
    url: "http://www.vbites.cz"
  },
  {
    file: "primapol.png",
    url: "http://www.primapol.cz"
  },
  {
    file: "ickk.png",
    url: "http://www.vbites.cz/zivot-ve-meste/2017-03-28-07-19-31/informacni-centrum-a-klub-kultury"
  },
  {
    file: "jerabkovapekarna.jpg",
    url: "http://www.jerabkovapekarna.cz"
  },
  {
    file: "mtmetal.png",
    url: "http://www.mtmetal.com"
  },
  {
    file: "kovyaslitiny.png",
    url: "http://www.kovyaslitiny.cz"
  },
  {
    file: "itwcz.png",
    url: "http://www.itwcz.com"
  },
  {
    file: "zamecnictvinemec.png",
    url: "http://www.zamecnictvinemec.cz"
  },
  {
    file: "dynamicmetals.png",
    url: "http://www.dynamicmetalsltd.cz"
  },
  {
    file: "slamamilan.png",
    url: "http://www.slamamilan.cz"
  }
];

const AREA = 220 * 50;
const srcDir = "../_sponsors_original"
const dstDir =  "../images/sponsors"

for (const item of items) {
  const srcFile = path.resolve(__dirname, srcDir, item.file);
  const dstFile = path.resolve(__dirname, dstDir, item.file);
  const size = process.execSync(`convert ${srcFile} -print "%wx%h" /dev/null`)
    .toString()
    .split("x");
  const srcRect = point(size[0], size[1]);
  const dstRect = fitToArea(AREA, srcRect);

  process.execSync(`convert ${srcFile} -resize ${dstRect.w}x${dstRect.h} ${dstFile}`);
  console.log(
    `a[href="${item.url}"] { width: ${dstRect.w}px; height: ${dstRect.h}px; }`
  );
}
