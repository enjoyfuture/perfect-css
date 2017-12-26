import digitMatrix from './digit-matrix';

const dom = document;
const radius = 8;
const marginTop = 60;
const marginLeft = 30;

// 带动画的时钟
class ClockAnimation {
  constructor(selector) {
    const clockEl = dom.querySelector(selector);
    clockEl.width = 600;
    clockEl.height = 600;
    const ctx = clockEl.getContext('2d');
    const {width, height} = ctx.canvas;
    this.ctx = ctx;
    this.width = 600;
    this.height = 600;

    this.draw();
  }

  draw() {
    const {ctx, width, height} = this;
    ctx.clearRect(0, 0, width, height);
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    this.drawDigit(marginLeft, marginTop, parseInt(hour / 10, 10));

    // renderDigit(MARGIN_LEFT + 15 * (radius + 1), MARGIN_TOP, parseInt(hours % 10), ctx);
    // renderDigit(MARGIN_LEFT + 30 * (radius + 1), MARGIN_TOP, 10, ctx);
    // renderDigit(MARGIN_LEFT + 39 * (radius + 1), MARGIN_TOP, parseInt(minutes / 10), ctx);
    // renderDigit(MARGIN_LEFT + 54 * (radius + 1), MARGIN_TOP, parseInt(minutes % 10), ctx);
    // renderDigit(MARGIN_LEFT + 69 * (radius + 1), MARGIN_TOP, 10, ctx);
    // renderDigit(MARGIN_LEFT + 78 * (radius + 1), MARGIN_TOP, parseInt(seconds / 10), ctx);
    // renderDigit(MARGIN_LEFT + 93 * (radius + 1), MARGIN_TOP, parseInt(seconds % 10), ctx);

    // for (var i = 0; i < balls.length; i++) {
    //   ctx.fillStyle = balls[i].color;
    //
    //   ctx.beginPath();
    //   ctx.arc(balls[i].x, balls[i].y, radius, 0, 2 * Math.PI, true);
    //   ctx.closePath();
    //
    //   ctx.fill();
    // }
  }


  drawDigit(x, y, num) {
    const {ctx} = this;
    ctx.fillStyle = 'rgb(0,102,153)';

    for (let i = 0; i < digitMatrix[num].length; i++) {
      for (let j = 0; j < digitMatrix[num][i].length; j++) {
        if (digitMatrix[num][i][j] === 1) {
          ctx.beginPath();
          ctx.arc(x + j * 2 * (radius + 1) + (radius + 1), y + i * 2 * (radius + 1) + (radius + 1), radius, 0, 2 * Math.PI);
          ctx.closePath();

          ctx.fill();
        }
      }
    }
  }
}

export default ClockAnimation;
