        //variables
        let ptheta = document.getElementById('iangle');
        let pu = document.getElementById('ivelocity');
        let pg = document.getElementById('ig');
        let pj = document.querySelector('.projectile');
        let time = document.getElementById('time');
        let height = document.getElementById('height');
        let range = document.getElementById('range');
        
        
        let flip = 1;

        window.addEventListener("load", () => {            ;
            //resizing
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            ctx.fillStyle = '#ff004c44';
            ctx.fillRect(0,innerHeight-50,50,50)
            ctx.clearRect(10,innerHeight-50,40,40)
            ctx.fill()
           
          });

        const canvas = document.querySelector("#canvas");
        const ctx = canvas.getContext("2d")
        

        function deploy() {
            let a = Math.PI * (ptheta.value/180);
            let u = pu.value;
            let g = pg.value;

            let T = Math.round((2*u*Math.sin(a))/g);
            let h = Math.round((u*u*Math.sin(a)*Math.sin(a))/(2*g));
            let r = Math.round((u*u*Math.sin(2*a)*Math.sin(2*a))/g);
            
            time.innerHTML= T+' s';
            height.innerHTML = h+' m';
            range.innerHTML = r+' m';
            
            ctx.strokeStyle = '#ff004c44';
            ctx.lineCap = 'round';
            ctx.lineWidth = '10';
            ctx.beginPath()            
            let x = 0;
            let y = innerHeight; 
                         
            animate(); 
            function animate() {
                ctx.clearRect(0,0,innerWidth,innerHeight)
                requestAnimationFrame(animate)
                ctx.lineTo(x,y)
                pj.style.left = x+'px';
                pj.style.top = y+'px';
                ctx.stroke();
                y = Math.round(innerHeight - (x*Math.tan(a)-((g*x*x)/(2*u*u*Math.cos(a)*Math.cos(a)))));
                x++;
                console.log(x,y);
                

            }

        }
        
// credits
document.write("<div class='credit'><h1>[ Credit ]</h1><h2>by: Manoj Joshi</h2></div>");
let cd = document.querySelector('.credit').style;
cd.position = 'absolute';
cd.right = '10px'
cd.bottom = '10px'
cd.color = '#7a7da177'
cd.fontFamily = 'arial'
cd.textAlign = 'right'
//credits
        
        
  function minimize() {
    var ctrl = document.querySelector('.controls').style
    var aftr = document.querySelector('.after').style
    if (flip == 1) {
        ctrl.right = '-200px';
        ctrl.visibility = 'hidden'
        aftr.height = '10px';
        flip = 0
    }else{
        ctrl.right = '0';
        ctrl.visibility = 'visible'
        aftr.height = '0px';
        flip = 1
    }
  }     