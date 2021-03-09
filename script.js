for (let i=1; i<9; i++){
    for(let j=1; j<9;j++){
        //créer une case div avec la classe .case
        let cell = document.createElement("div")
        cell.classList.add("case")
        // une fois sur deux, ajouter la classe .caseNoire
        if(i%2 == 0 && j%2 == 1 || i%2 == 1 && j%2 == 0){
            cell.classList.add("caseGrise")
        }
        //l'ajouter dans la div #chess
        document.querySelector("div#chess").appendChild(cell)
    }
}

//définir une id par case pour implémenter les pièces sur les cases correspondantes
function setAnId(){
    let cells = document.getElementsByClassName("case")
    for(let n = 0; n<= cells.length; n++){
        let iD = "cell_"+(n+1)
        let cell = cells[n]
        cell.id = iD
        if(n < 16 || n > 47){
            cell.innerHTML = "<img src='img/"+pieces[iD]+".svg'>"
        }
    }
}

let pieces = { //dictionnaire des pièces à insérer en fonction de l'ID de la case
    cell_1 : "rook_b",
    cell_2 : "knight_b",
    cell_3 : "bishop_b",
    cell_4 : "queen_b",
    cell_5 : "king_b",
    cell_6 : "bishop_b",
    cell_7 : "knight_b",
    cell_8 : "rook_b",
    cell_9 : "pawn_b",
    cell_10 : "pawn_b",
    cell_11 : "pawn_b",
    cell_12 : "pawn_b",
    cell_13 : "pawn_b",
    cell_14 : "pawn_b",
    cell_15 : "pawn_b",
    cell_16 : "pawn_b",
    cell_49 : "pawn_w",
    cell_50 : "pawn_w",
    cell_51 : "pawn_w",
    cell_52 : "pawn_w",
    cell_53 : "pawn_w",
    cell_54 : "pawn_w",
    cell_55 : "pawn_w",
    cell_56 : "pawn_w",
    cell_57 : "rook_w",
    cell_58 : "knight_w",
    cell_59 : "bishop_w",
    cell_60 : "queen_w",
    cell_61 : "king_w",
    cell_62 : "bishop_w",
    cell_63 : "knight_w",
    cell_64 : "rook_w"
}

setAnId()
