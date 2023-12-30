// all the canvas shit is here =====================
                                                  //
const canvas = document.getElementById("canvas")  //
const ctx = canvas.getContext('2d');              //
                                                  // 
canvas.height = 600;                              //
canvas.width = 600;                               //
                                                  //
// ==================================================

let resolution = 10;
let grid;
let cols = canvas.width / resolution;
let rows = canvas.height / resolution;


function make2dArray(cols,rows){
    let arr = new Array(cols);
    for (let i=0; i<arr.length;i++){
        arr[i] = new Array(rows);
    }
    return arr;
}

grid = make2dArray(cols, rows);

for (let i = 0; i < cols; i++) {
    for(let j = 0; j<rows; j++){
        grid[i][j] = Math.floor(Math.random()*2);
    }
}

requestAnimationFrame(animate)

function animate(){
    grid = nextGen(grid);
    render(grid);
    requestAnimationFrame(animate)
}
function nextGen(grid){        
    let next = new make2dArray(cols,rows);    
    //heart of game:
    for (let i = 0; i < cols; i++) {
        for(let j = 0; j<rows; j++){

            let state = grid[i][j];  
            let neighbour = 0;

            for (let m = -1; m < 2; m++) {
                for (let n = -1; n < 2; n++) {
                  if (m === 0 && n === 0) {
                    continue;
                  }
                  const x_cell = i + m;
                  const y_cell = j + n;
        
                  if (x_cell >= 0 && y_cell >= 0 && x_cell < cols && y_cell < rows) {
                    const currentNeighbour = grid[i + m][j + n];
                    neighbour += currentNeighbour;
                  }
                }
              }

            // conditions 
            if (state ==0 && neighbour == 3){
                next[i][j] = 1;
            }else if(state == 1 && (neighbour < 2 || neighbour > 3)){
                next[i][j] = 0;
            }else{
                next[i][j] = grid[i][j]
            }
        }
    }
    return next;
}
function render(grid){
    let x = 0
    let y = 0
    for (let i = 0; i < cols; i++) {
        y = i*10;
        for(let j = 0; j<rows; j++){
            x = j*10;
            ctx.fillStyle = grid[i][j]?'white':"#202535";
            ctx.strokeStyle = "#202535"
            ctx.strokeWeight = 1
            ctx.fillRect(x,y,10,10);
            ctx.strokeRect(x,y,10,10);                        
            ctx.stroke()
        }
    }
}
