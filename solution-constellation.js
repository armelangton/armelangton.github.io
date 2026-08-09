(() => {
  document.querySelectorAll('.assistant-hero').forEach(hero => {
    const canvas = hero.querySelector('.solution-network');
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const pointer = { x: -1000, y: -1000, active: false };
    let width = 0, height = 0, scale = 1, frame = null;
    let points = [];
    const palette = [
      'rgba(95,211,198,.95)',
      'rgba(168,200,240,.9)',
      'rgba(31,143,136,.9)',
      'rgba(216,154,106,.88)',
      'rgba(255,255,255,.9)'
    ];
    function makePoints(){
      const count = Math.max(30, Math.min(54, Math.round(width / 28)));
      points = Array.from({length:count},(_,i)=>({x:Math.random()*width,y:Math.random()*height,vx:(Math.random()-.5)*.24,vy:(Math.random()-.5)*.24,radius:1.2+Math.random()*2,color:palette[i%palette.length]}));
    }
    function resize(){
      const rect=hero.getBoundingClientRect(); width=rect.width; height=rect.height; scale=Math.min(window.devicePixelRatio||1,2);
      canvas.width=Math.round(width*scale); canvas.height=Math.round(height*scale); canvas.style.width=`${width}px`; canvas.style.height=`${height}px`;
      context.setTransform(scale,0,0,scale,0,0); makePoints();
    }
    function draw(){
      context.clearRect(0,0,width,height);
      for(let i=0;i<points.length;i+=1){
        const p=points[i]; if(!reduceMotion){p.x+=p.vx;p.y+=p.vy;} if(p.x<=0||p.x>=width)p.vx*=-1;if(p.y<=0||p.y>=height)p.vy*=-1;
        for(let j=i+1;j<points.length;j+=1){const q=points[j];const d=Math.hypot(p.x-q.x,p.y-q.y);if(d<120){context.strokeStyle=`rgba(168,200,240,${(1-d/120)*.18})`;context.lineWidth=1;context.beginPath();context.moveTo(p.x,p.y);context.lineTo(q.x,q.y);context.stroke();}}
        if(pointer.active){const d=Math.hypot(p.x-pointer.x,p.y-pointer.y);if(d<145){context.strokeStyle=`rgba(95,211,198,${(1-d/145)*.3})`;context.beginPath();context.moveTo(p.x,p.y);context.lineTo(pointer.x,pointer.y);context.stroke();}}
        context.fillStyle=p.color;context.beginPath();context.arc(p.x,p.y,p.radius,0,Math.PI*2);context.fill();
      }
      if(!reduceMotion) frame=requestAnimationFrame(draw);
    }
    hero.addEventListener('pointermove',e=>{const r=hero.getBoundingClientRect();pointer.x=e.clientX-r.left;pointer.y=e.clientY-r.top;pointer.active=true;});
    hero.addEventListener('pointerleave',()=>{pointer.active=false;});
    window.addEventListener('resize',resize); window.addEventListener('pagehide',()=>{if(frame)cancelAnimationFrame(frame);},{once:true});
    resize(); draw();
  });
})();