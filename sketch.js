
const board = document.getElementById("board")

let tiles = [
1,2,3,4,
5,6,7,8,
9,10,11,12,
13,14,15,0
]

function drawBoard(){

    board.innerHTML = ""

    tiles.forEach((num,index)=>{

        const tile = document.createElement("div")

        tile.classList.add("tile")

        if(num === 0){
            tile.classList.add("empty")
        }else{
            tile.innerText = num
        }

        tile.addEventListener("click",()=>moveTile(index))

        board.appendChild(tile)

    })
}

function moveTile(index){

    const emptyIndex = tiles.indexOf(0)

    const validMoves = [
        index-1,
        index+1,
        index-4,
        index+4
    ]

    if(validMoves.includes(emptyIndex)){

        [tiles[index],tiles[emptyIndex]] =
        [tiles[emptyIndex],tiles[index]]

        drawBoard()
        checkWin()

    }
}

function shuffle(){

    for(let i=0;i<1000;i++){

        const rand = Math.floor(Math.random()*16)

        moveTile(rand)

    }
}

function checkWin(){

    const win = [
    1,2,3,4,
    5,6,7,8,
    9,10,11,12,
    13,14,15,0
    ]

    if(JSON.stringify(tiles)===JSON.stringify(win)){
        setTimeout(()=>alert("Solved!"),100)
    }

}

drawBoard()