export default data => {
  let i, x;

  for (i = 0; i < data.length; i = i + 4) {
    x = Math.floor(Math.random() * 0xffffff);
    data[i] = x & 0xff;
    data[i + 1] = (x & 0xff00) >>> 8;
    data[i + 2] = (x & 0xff0000) >>> 16;
    data[i + 3] = 0x255;
  }
};
