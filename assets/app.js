
window.onload = function() {
  var letters = document.querySelectorAll('.letter');
  var char = document.querySelectorAll('.char');
  var tl = gsap.timeline({defaults: {ease: 'power2.inOut'}, delay:7});  
  var tl2 = gsap.timeline({defaults: {ease: 'power2.inOut'}});
  
  tl.addLabel('start')
    .fromTo(letters[0],1, {y: -100, opacity:0},{y: 0, x:80, opacity: 1}, 'start') // p
    .fromTo(letters[1], 1, {x: 100, opacity: 0},{y: 0, x:40, opacity: 1}, 'start+=0.1') // i

    .fromTo(char[6],2, {y: 100, x:700, opacity: 0},{y: -150, x:400, opacity: 1,rotate:-45}, 'start+=4')//rocket
    .fromTo(char[2],1.5, {y: -150, x:-200, opacity: 1},{y: -150, x:-80, opacity: 1}, 'start+=0.9')//purple monster
    //.fromTo(char[2],2, {y: -150, x:-200, opacity: 1},{y: -150, x:-80, opacity: 1},1, 'start+=0.7')//purple monster
    .to(char[2],2,{y: -550, x:-80, opacity: 0},3, 'start+=0.13')//purple monster
  

    .from(letters[2], 1, {scale: 0.5, opacity: 0},1.2, 'start+=0.10') // x
    .from(letters[3], 1, {x: 100, opacity: 0},3.4, 'start+=0.10') // e
    .from(letters[4], 1, {rotation: 360, opacity: 0}, 'start+=0.4') // l
    .fromTo(letters[5],1, {y: -100, opacity: 0},{y: 0, x:-5, opacity: 1}, 'start+=0.5') // s
    .from(letters[6], 1, {opacity: 0}, 'start+=0.6') // space
    .fromTo(letters[7], 1, {x: -50, opacity: 0},{ x:0,opacity:1}, 'start+=0.7') // c
    .from(letters[7], 1, {rotation:360 }, 'start+=2') // c

.fromTo(letters[8], 1, {y: 100 ,opacity: 0 }, {x:170,y:0,opacity: 1},'start+=0.8') // r
.to(letters[8], 1.3, {x:0,y:0,opacity: 1},'start+=1.8') // r
.fromTo(letters[9],1.5, {scale: 1.5, opacity: 0},{x:-170,scale: 1, opacity: 1}, 'start+=0.9') // a
.to(letters[9],1.3,{x:0,scale: 1, opacity: 1}, 'start+=1.9') // a

    // .fromTo(letters[8], 1, {y: 50 ,opacity: 0 }, {x:200,y:0,opacity: 1},'start+=0.8') // r
    // .fromTo(letters[9],1, {scale: 1.5, opacity: 0},{x:-200,scale: 1, opacity: 1}, 'start+=0.9') // a
    // .fromTo(letters[8], 1, {y: 50,x:200,opacity: 1 }, {y: 50,x:0,opacity: 1 },2, 'start+=1') // r
    // .fromTo(letters[9],1, {x:-200,opacity: 1 }, {x:0,opacity: 1 }, 2,'start+=2') // a

    .from(letters[10], 1, {x: 50, opacity: 0}, 'start+=1.0') // f
    .fromTo(letters[11], 4, { opacity: 0,scale:-1},{y: 0, x:-5,scale:1, opacity: 1},1,'start+=1.1') // t
    .fromTo(letters[12], 1, {rotation: -360, opacity: 0},{y: 0, x:-10, opacity: 1}, 'start+=1.1') // e
    .fromTo(letters[13], 1, {rotation: -360, opacity: 0},{y: 0, x:-15, opacity: 1}, 'start+=1.1') // r
 


 
    tl2.addLabel('start')
    .fromTo(char[0],1, {y: -100, opacity:0},{y: -240, x:-600, opacity: 1}, 'start') //  blue monster
    .fromTo(char[1], 1, {x: 100, opacity: 0},{y: -80, x:-300, opacity: 1}, 'start+=0.1') //  green monster 1
    .fromTo(char[2], 1, {x: 100, opacity: 0},{y: -150, x:0, opacity: 1}, 'start+=0.2') // purple monster
    .fromTo(char[3], 1, {x: 100, opacity: 0},{y: -250, x:300, opacity: 1}, 'start+=0.3') // green monster 2
    .fromTo(char[4], 1, {x: 100, opacity: 0},{y: -100, x:500, opacity: 1}, 'start+=0.4') // pink monster

// 1
     .fromTo(char[6],1, {y: 250, x:0, opacity: 0},{y: 250, x:-600, opacity: 1}, 'start+=0.8')  //rocket//kill blue monster
    .fromTo(char[7],0.7, {y: 100, x:-600, opacity: 0},{y: -100, x:-600, opacity: 1}, 'start+=1.4') // shot//kill blue monster 
    .to(char[7],0, { opacity:0}, 'start+=1.8') //hide shot
    .to(char[0],0, { opacity:0}, 'start+=2') //monster// kill blue monster 
    .fromTo(char[5],0.1, {y: -240, x:-600, opacity: 0},{y:  -240, x:-600, opacity: 1}, 'start+=2.1') // explode// kill blue monster

// 2

    .to(char[6],0.7,{y: 250, x:-300, opacity: 1}, 'start+=2')  //rocket//kill green monster 1
    .fromTo(char[7],0.4, {y: 100, x:-300, opacity: 0},{y: 50, x:-300, opacity: 1}, 'start+=2.5') // shot//kill green monster 1
    .to(char[7],0, { opacity:0}, 'start+=2.9') //hide shot
    .to(char[1],0, { opacity:0}, 'start+=3') //monster// kill green monster 1
    .fromTo(char[5],0.3, {y: -80, x:-300, opacity: 1},{y: -80, x:-300, opacity: 1}, 'start+=3.1') // explode// kill green monster 1

// 3
    .to(char[6],0.7,{y: 250, x:0, opacity: 1}, 'start+=2.9')  //rocket//kill purple monster
    .fromTo(char[7], 0.4, {y: 100, x:0, opacity: 0}, {y: 0, x:0, opacity: 1, ease: 'power2.inOut'}, 'start+=3.7')// shot//kill purple monster
    .to(char[7],0, { opacity:0}, 'start+=3.8') //hide shot
    .to(char[2],0, { opacity:0}, 'start+=4') // monster//kill purple monster 
    .fromTo(char[5],1, {y: -150, x:0, opacity: 1},{y: -150, x:0, opacity: 1}, 'start+=4.1') // explode// kill purple monster 

// 4
    .to(char[6],0.7,{y: 250, x:300, opacity: 1}, 'start+=4')  //rocket//kill green monster 2
    .fromTo(char[7],0.7, {y: 100, x:300, opacity: 0},{y: -100, x:300, opacity: 1}, 'start+=4.7') // shot//kill green monster 2
    .to(char[7],0, { opacity:0}, 'start+=4.8') //hide shot
    .to(char[3],0, { opacity:0}, 'start+=5.1') //monster// kill green monster 2
    .fromTo(char[5],1, {y: -250, x:300, opacity: 1},{y: -250, x:300, opacity: 1}, 'start+=5.2') // explode// kill green monster 2

// 5
    .to(char[6],0.7,{y: 250, x:500, opacity: 1}, 'start+=5')  //rocket//kill pink monster
    .fromTo(char[7],0.4, {y: 150, x:500, opacity: 0},{y: 80, x:500, opacity: 1}, 'start+=5.7') // shot//kill pink monster
    .to(char[7],0.5, { opacity:0}, 'start+=5.9') //hide shot
    .to(char[4],0, { opacity:0}, 'start+=6') // kill pink monster 
    .fromTo(char[5],0.1,{y: -100, x:500, opacity: 0},{y: -100, x:500, opacity: 1}, 'start+=6.1') // explode// kill pink monster 
    .to(char[5],1, { opacity:0, ease: 'power2.inOut'}, 'start+=6.3') //explode hide
    .to(char[6],1, { opacity:0}, 'start+=6.3') //hide rocket (add a small delay)

  
};

