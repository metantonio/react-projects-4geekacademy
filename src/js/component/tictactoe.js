import React, { useState } from "react";

//Estados
player =[{
    name: "Antonio",
    suit: "x",
},
{
    name: "Andrea",
    suit: "o",
}];

//Estado inicial del juego
status = {
    estado: "init", //podría cambiar a "playing" y a "over"
    winner: null
}

//función que al hacer click en inicial aparezca el tablero
setStatus("playing")

//definir el estado del tablero tal que:
/*board = [
    ["o",null,"x"],
    ["x","o,"null],
    [null,"x","o"]
];*/
const[board, setBoard] = useState(
    [
        ["o",null,"x"],
        ["x","o,"null],
        [null,"x","o"]
    ]
)

<div className="row justify-content-center">
    <div className="board d-flex flex-wrap">
        {board.map((row, indexRow)=>
            {
                return 
                (
                <React.Fragment key={indexRow}>
                {row.map((column,indexColumn)=>{
                    return (
                        <div key={`${indexRow}-${indexColoumn}`} className="cell d-flex justify-content-center align-items-center">
                           <span className="d-flex">
                               {(cell=="x")? "❌":
                                    (cell=="o")? "⭕":""}
                           </span>
                            
                        </div>
                    )
                })}
                )
                </React.Fragment>
                )
            })}
        <div className="cell" />
        <div className="cell" />
        <div className="cell" />
        <div className="cell" />
        <div className="cell" />
        <div className="cell" />
        <div className="cell" />
        <div className="cell" />
        <div className="cell" /> 
    </div>
</div>

//define el estado sobre a quién le toca el turno de juego
turn = // "x", "o"

//definir una función tal que, cuando se haga click en una celda 
//del tablero, cambie el valor correspondiente de null a X ó O

//después de renderizado el estado setTurn hay que renderizar el tablero setBoard()

//Luego de cada renderizado hay que revisar si hubo ganador, si quedan turnos, o si no hay ganador
//usando useEffect

//se actualiza el estado final del juego a setStatus("over")

//se agrega un botón que lleve al inicio del juego
