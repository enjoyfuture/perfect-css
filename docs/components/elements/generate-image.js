(function () {
  /**
   * 生成图片
   generateImage({
      fontSize: 12,
      color: '#fff',
      background: '#FB803A',
      text: '最热',
      size: [40, 40],
      ratio: 2
   })
   * @returns {string}
   */
  function generateImage({
    fontSize = null,
    color = '#fff',
    background = '#616161',
    text = '',
    size = [600, 200],
  }) {
    const width = size[0],
      height = size[1],
      fontFamily = 'sans-serif';

    if (!fontSize) { // 取宽度的 1/15
      fontSize = width / 15;
    }
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = width;
    canvas.height = height;
    ctx.fillStyle = background;
    ctx.fillRect(0, 0, width, height);

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = color;
    ctx.font = `bold ${fontSize}px ${fontFamily}`;
    ctx.fillText(text, (width / 2), (height / 2), width);
    return canvas.toDataURL('image/png');
  }

  const generateImgBtn = document.getElementById('generateImgBtn');
  generateImgBtn.addEventListener('click', () => {
    const fontSize = document.getElementById('fontSize').value;
    const color = document.getElementById('color').value;
    const background = document.getElementById('background').value;
    const text = document.getElementById('text').value;
    const sizeWidth = document.getElementById('sizeWidth').value;
    const sizeHeight = document.getElementById('sizeHeight').value;

    const imgData = generateImage({
      fontSize,
      color,
      background,
      text,
      size: [parseInt(sizeWidth, 10) || 600, parseInt(sizeHeight, 10) || 200],
    });

    document.getElementById('generateImg').src = imgData;
    document.getElementById('generateImgData').innerHTML = imgData;
  }, false);

  generateImgBtn.click();
})();
