(function () {
  // 计算颜色对比色，支持 RGB 格式
  function contrast(color) {
    const rgb = [parseInt(color.substring(1, 3), 16),
      parseInt(color.substring(3, 5), 16),
      parseInt(color.substring(5, 7), 16)];
    for (let i = 0; i < 3; i++) {
      rgb[i] = 255 - rgb[i];
    }
    return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
  }

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

    if (!fontSize) { // 取宽度的 1/8
      fontSize = (width / 8).toFixed();
    }
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = width;
    canvas.height = height;
    ctx.fillStyle = background;
    ctx.fillRect(0, 0, width, height);

    // 背景上设置小点
    ctx.fillStyle = contrast(background);
    const pointX = width / 2;
    const pointY = height / 2;
    for (let i = 0; i < pointY; i++) {
      for (let j = 0; j < pointX; j++) {
        ctx.fillRect(i * 20 + 9, j * 20 + 9, 2, 2);
      }
    }

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
