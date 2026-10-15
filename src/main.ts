import Konva from 'konva';

// first we need to create a stage
const stage = new Konva.Stage({
  container: 'container',
  width: window.innerWidth,
  height: window.innerHeight
});

// then create layer
const layer = new Konva.Layer();

// lemon sits in the middle of the stage
const lemon = new Konva.Group({
    x: stage.width() / 2,
    y: stage.height() / 2,
    rotation: -20
  });
  
  // oval body
  const body = new Konva.Ellipse({
    radiusX: 90,
    radiusY: 55,
    fill: 'yellow',
    stroke: 'black',
    strokeWidth: 4
  });
  
  // bump on the left end
  const circle1 = new Konva.Circle({
    x: -90,
    y: 0,
    radius: 12,
    fill: 'yellow',
    stroke: 'black',
    strokeWidth: 4
  });
  
  // bump on the right end
  const circle2 = new Konva.Circle({
    x: 90,
    y: 0,
    radius: 10,
    fill: 'yellow',
    stroke: 'black',
    strokeWidth: 4
  });
  
  // body last so it covers the inner half of each bump
  lemon.add(circle1);
  lemon.add(circle2);
  lemon.add(body);
  
  layer.add(lemon);
  // pointer cursor while hovering the lemon
lemon.on('mouseover', () => {
    document.body.style.cursor = 'pointer';
  });
  
  lemon.on('mouseout', () => {
    document.body.style.cursor = 'default';
  });
  
  // click and drag the whole group
  lemon.draggable(true);
  
  // grow while the mouse button is held down
  lemon.on('mousedown', () => {
    lemon.to({
      scaleX: 1.2,
      scaleY: 1.2,
      duration: 0.1
    });
  });
  
  lemon.on('mouseup', () => {
    lemon.to({
      scaleX: 1,
      scaleY: 1,
      duration: 0.1
    });
  });
// add the layer to the stage
stage.add(layer);