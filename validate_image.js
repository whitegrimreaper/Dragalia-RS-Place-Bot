async function Validate_Image(filename) {
    const VALID_COLORS = ['#BE0039', '#FF4500', '#FFA800', '#FFD635', '#00A368', '#00CC78', '#7EED56', '#00756F', '#009EAA', '#2450A4', '#3690EA', '#51E9F4', '#493AC1', '#6A5CFF', '#811E9F', '#B44AC0', '#FF3881', '#FF99AA', '#6D482F', '#9C6926', '#000000', '#898D90', '#D4D7D9', '#FFFFFF'];
    const canvas = document.createElement('canvas');


    function getCanvasFromUrl(url, x = 0, y = 0) {
        return new Promise((resolve, reject) => {
            var ctx = canvas.getContext('2d');
            var img = new Image();
            img.crossOrigin = 'anonymous';
            img.onload = () => {
                ctx.drawImage(img, x, y);
                resolve(ctx);
            };
            img.onerror = reject;
            img.src = url;
        });
    }

    function rgbToHex(r, g, b) {
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
    }

    const context = await getCanvasFromUrl('https://endendragon.github.io/Dragalia-Place-Bot/maps/' + filename + '.png');
    const rgbaOrder = context.getImageData(0, 0, 2000, 1000).data;
    var bad = false;
    for (var i = 0; i < 2000000; i++) {
        const r = rgbaOrder[i * 4];
        const g = rgbaOrder[(i * 4) + 1];
        const b = rgbaOrder[(i * 4) + 2];

        const hex = rgbToHex(r, g, b);
        if (VALID_COLORS.indexOf(hex) === -1) {
            console.log(`Pixel at ${i % 2000}, ${Math.floor(i / 2000)} is wrong.`);
            bad = true;
        }
    }
    if (!bad) {
        console.log("All good!");
    }
}