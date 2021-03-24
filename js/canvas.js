// PARTICLE BACKGROUND
window.onload = function() {
    Particles.init({
      selector: '.particles-background',
      maxParticles: 90,
      sizeVariations: 4,
      speed: 0.5,
      color: '#32558C',
      minDistance: 50,
      connectParticles: true
    });
};

/*
const canvas = document.getElementById('text');
const ctx = canvas.getContext('2d');
ctx.font = '1.5rem Newsreader';
ctx.fillStyle = '#fffbee';
ctx.fillText('Home', canvas.width/2, canvas.height/2);
*/