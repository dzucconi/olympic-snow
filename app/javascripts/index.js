import parameters from 'queryparams';

import randomize from './lib/randomize';

window.parameters = parameters;

const DOM = {
  app: document.getElementById('app'),
};

const { width, height } = parameters({
  width: 75,
  height: 75,
});

const canvas = document.createElement('canvas');

canvas.width = width;
canvas.height = height;

const ctx = canvas.getContext('2d');
const image = ctx.createImageData(height, width);

const tick = () => {
  randomize(image.data);
  ctx.putImageData(image, 0, 0);
  DOM.app.style.backgroundImage = `url(${canvas.toDataURL('image/png')})`;
};

export default () => {
  (function loop() {
    tick();
    requestAnimationFrame(loop);
  })();
};
