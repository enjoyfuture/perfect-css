const dom = document;
const hours = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2];

class Clock {
  constructor(selector) {
    const clockEl = dom.querySelector(selector);
    const ctx = clockEl.getContext('2d');
    const { width, height } = ctx.canvas;

    const r = width / 2;

    this.ctx = ctx;
    this.r = r;
    this.rem = width / 200; // 以 200px 为基准

    this.draw();
    setInterval(this.draw, 1000);
  }

  // 画整个时钟
  draw = () => {
    const ctx = this.ctx;

    ctx.clearRect(0, 0, 200, 200);
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    this.drawBackground();
    this.drawHour(hour, minute);
    this.drawMinute(minute);
    this.drawSecond(second);
    this.drawDot();
    ctx.restore();
  };

  // 画时钟背景
  drawBackground() {
    const ctx = this.ctx;
    const r = this.r;
    const rem = this.rem;

    ctx.save();
    ctx.translate(r, r);
    ctx.beginPath();
    ctx.lineWidth = 10 * rem;
    ctx.arc(0, 0, r - ctx.lineWidth / 2, 0, 2 * Math.PI, false);
    ctx.stroke();
    ctx.font = `${18 * rem}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    hours.forEach((item, i) => {
      const rad = ((2 * Math.PI) / 12) * i;
      const x = Math.cos(rad) * (r - 30 * rem);
      const y = Math.sin(rad) * (r - 30 * rem);
      ctx.fillText(item, x, y);
    });

    for (let i = 0; i < 60; i++) {
      const rad = ((2 * Math.PI) / 60) * i;
      const x = Math.cos(rad) * (r - 18 * rem);
      const y = Math.sin(rad) * (r - 18 * rem);
      ctx.beginPath();
      if (i % 5 === 0) {
        ctx.fillStyle = '#000';
      } else {
        ctx.fillStyle = '#ccc';
      }
      ctx.arc(x, y, 2 * rem, 0, 2 * Math.PI, false);
      ctx.fill();
    }
  }

  drawHour(hour, minute) {
    const ctx = this.ctx;
    const r = this.r;
    const rem = this.rem;

    ctx.save();
    ctx.beginPath();
    const rad = ((2 * Math.PI) / 12) * hour;
    const mrad = ((2 * Math.PI) / 12 / 60) * minute;
    ctx.rotate(rad + mrad);
    ctx.lineWidth = 6 * rem;
    ctx.lineCap = 'round';
    ctx.moveTo(0, 10 * rem);
    ctx.lineTo(0, -r / 2);
    ctx.stroke();
    ctx.restore();
  }

  drawMinute(minute) {
    const ctx = this.ctx;
    const r = this.r;
    const rem = this.rem;

    ctx.save();
    ctx.beginPath();
    const rad = ((2 * Math.PI) / 60) * minute;
    ctx.rotate(rad);
    ctx.lineWidth = 3 * rem;
    ctx.lineCap = 'round';
    ctx.moveTo(0, 10 * rem);
    ctx.lineTo(0, -r + 30 * rem);
    ctx.stroke();
    ctx.restore();
  }

  drawSecond(second) {
    const ctx = this.ctx;
    const r = this.r;
    const rem = this.rem;

    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = '#c14513';
    const rad = ((2 * Math.PI) / 60) * second;
    ctx.rotate(rad);
    ctx.moveTo(-2 * rem, 20 * rem);
    ctx.lineTo(2 * rem, 20 * rem);
    ctx.lineTo(1, -r + 18 * rem);
    ctx.lineTo(-1, -r + 18 * rem);
    ctx.fill();
    ctx.restore();
  }

  drawDot() {
    const ctx = this.ctx;
    const rem = this.rem;

    ctx.beginPath();
    ctx.fillStyle = '#fff';
    ctx.arc(0, 0, 3 * rem, 0, 2 * Math.PI, false);
    ctx.fill();
  }
}

export default Clock;
