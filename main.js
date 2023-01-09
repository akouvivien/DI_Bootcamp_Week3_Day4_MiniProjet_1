//création des des blocs
const block = document.querySelector('#corps')
const grid = document.querySelector('#grid')

//déclaration liste de couleur
const colors = ["#FF0000","#FF4500","#FFA500","#FFFF00","#9ACD32","#90EE90","#008000","#40E0D0","#00FFFF","#87CEFA",
                 "#1E90FF","#00008B","#4B0082","#8B008B","#EE82EE","#FFB6C1","#A9A9A9","#808080","#000000","#FFFFFF","#A9A9B7"]


for (const color of colors) {
    const blockColor = document.createElement('div')
    blockColor.id = "box"// ajoute l'identifiant box a chaque nouvelle div creer
    block.appendChild(blockColor)// ajoute la div a la grande div comportant l'id #corps
    blockColor.style.backgroundColor =color//

}

//création des grids pour la section droite
for (let i = 0; i < 1200; i++) {
    const square = document.createElement('div')
    square.classList.add('square')// ajoute l'identifiant box a chaque nouvelle div creer
    grid.appendChild(square)// ajoute la div a la grande div comportant l'id #corps
    
}

//récupere les div 
const squareGrid = document.querySelectorAll('.square')

//initialiser les grids
const clear = document.querySelector('#clear')

//ajout d'un ecouteur d'evenement permettant de reinitialiser la couleur des differentes grilles
clear.addEventListener('click', () =>{
    for ( const element of squareGrid)
    element.style.backgroundColor = 'white'
})


const color = document.querySelectorAll('#box')
//selection des couleurs
    for (const element of color) {
        element.addEventListener('click',()=>{
            const currentColor= element.style.backgroundColor;
            console.log(currentColor) 
        }) 
    }
        
    
    

// a faire configurer les actions
// let isDrawing = false
// let currentColor = ''



// squareGrid.forEach(squares => {
//     squares.addEventListener('mousedown',()=>{
//         isDrawing= true
//         squares.style.backgroundColor = currentColor
//     });


//     squares.addEventListener('mouseup',()=>{
//         isDrawing = false
//         console.log("mouseup")
        
//     });

//     squares.addEventListener('mouseover',()=>{
//         if (isDrawing) {
//             squares.style.backgroundColor = currentColor
//         } 
//         console.log("mouseover")
        
//     });
    
// });


   
    
