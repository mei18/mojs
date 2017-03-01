var color1 = '#0072bc',
    color2 = '#f26c4f',
    color3 = '#925390',
    pos = {
      row1: '25%',
      row2: '75%',
      row3: '50%',
      col1: '20%',
      col2: '40%',
      col3: '60%',
      col4: '80%',
      col5: '30%',
      col6: '70%',
    }

var zigzag = new mojs.Shape({
  shape: 'zigzag',
  points: 7,
  radius: 25,
  radiusY: 50,
  top: pos.row1,
  left: pos.col1,
  fill: 'none',
  stroke: color1,
  isShowStart: true
});

var cross = new mojs.Shape({
  shape: 'cross',
  radius: 20,
  radiusY: 30,
  top: pos.row1,
  left: pos.col2,
  stroke: color2, //no fill for this one
  isShowStart: true,
  y: -25
});

var equal = new mojs.Shape({
  shape: 'equal',
  radius: 25,
  radiusY: 15,
  top: pos.row1,
  left: pos.col3,
  stroke: color3, //no fill for this one
  isShowStart: true,
  y: -25
});

var curve = new mojs.Shape({
  shape: 'curve',
  radius: 25,
  radiusY: 50,
  top: pos.row1,
  left: pos.col4,
  fill: 'none',
  stroke: color2,
  isShowStart: true
});

// second row //

var rect = new mojs.Shape({
  shape: 'rect',
  radius: 10, //alto
  radiusX: 30, //largo
  left: pos.col1,
  top: pos.row2,
  fill: color3,
  isShowStart: true
});

//triangulo
var polygon1 = new mojs.Shape({
  shape: 'polygon',
  radius: 20,
  top: pos.row2,
  left: pos.col2,
  fill: '#0072bc',
  stroke: '#0072bc',
  isShowStart: true
});

var circle = new mojs.Shape({
  shape: 'circle',
  radius: 30,
  top: pos.row2,
  left: pos.col3,
  fill: color2,
  stroke: color2,
  isShowStart: true
});

//octagono
var polygon2 = new mojs.Shape({
  shape: 'polygon',
  points: 8, //explicit points
  radius: 25,
  left: '75%',
  top: pos.row2,
  left: pos.col4,
  fill: color3,
  isShowStart: true
});

//Shape motion
var polygon = new mojs.Shape({
  shape: 'polygon',
  points: 5,
  top: pos.row3,
  left: pos.col5,
  stroke: '#3cb878',
  scale: { 0: 1.5 }, //tamaño
  angle: { 0: 180 },
  fill: { '#662d91': '#82ca9c' },
  radius: 25,

  duration: 1000,
  delay: 100,
  isYoyo: true,
  repeat: 999
}).play();

//burst
var burst = new mojs.Burst({
  top: pos.row3,
  left: pos.col6,
});

document.addEventListener('click', function (e) {
  burst.replay();
});
