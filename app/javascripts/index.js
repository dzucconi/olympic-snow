import fps from 'frame-interval';
import imagesLoaded from 'imagesloaded';
import randomize from './lib/randomize';

const DOM = {
  app: document.getElementById('app'),
  stage: document.getElementById('stage'),
  rings: document.getElementById('rings'),
};

export default () => {
  const canvas = document.createElement('canvas');

  DOM.stage.appendChild(canvas);

  imagesLoaded(DOM.app, () => {
    const width = DOM.rings.width;
    const height = DOM.rings.height;

    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext('2d');
    const image = ctx.createImageData(width, height);


    fps(requestAnimationFrame)(60, () => {
      randomize(image.data);
      ctx.putImageData(image, 0, 0);
    })();
  });
};
