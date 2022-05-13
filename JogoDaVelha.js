// Colocar a imagem do jogo da velha vazio
//SEPARAR O JOGADOR 1 DO JOGADOR 2 ATRAVÉS DE PAR E IMPAR
//CRIAR 2 "FOR" PARA SEPARAR OS PLAYERS 

var Jogador1 = "X"
var Jogardor2 = "O"

var a = "A"
var b = "B"
var c = "C"
var d = "D"
var e = "E"
var f = "F"
var g = "G"
var h = "H"
var i = "I"

alert("EXEMPLO DO TABULEIRO DO JOGO:")

alert("|           |          |          |\n|     A     |     B     |     C     |\n|          |          |          |\n===================\n|           |          |          |\n|     D     |    E     |     F     |\n|           |           |           |\n===================\n|           |           |           |\n|     G     |     H     |     I     |\n|           |           |           |\n");

var RespostaJogador = prompt("Qual Jogador ira começar ? JOGADOR1(X) | JOGADOR2(O): ")

if (RespostaJogador == "X") {
    for (var contador = 1; contador <= 9; contador++) {
        var jogada = contador % 2
        alert("|          |          |          |\n|    " + a + "     |    " + b + "    |    " + c + "    |\n|          |          |          |\n===================\n|          |          |          |\n|    " + d + "    |    " + e + "    |    " + f + "    |\n|          |          |          |\n===================\n|          |          |          |\n|    " + g + "     |   " + h + "    |    " + i + "    |\n|          |          |          |\n");
        if (jogada == 0) {

            var j = prompt("Escolha uma posição J2(O): ")
            if (j == a && a == "A") {
                a = "O"
            }
            else if (j == b && b == "B") {
                b = "O"
            }
            else if (j == c && c == "C") {
                c = "O"
            }
            else if (j == d && d == "D") {
                d = "O"
            }
            else if (j == e && e == "E") {
                e = "O"
            }
            else if (j == f && c == "F") {
                f = "O"
            }
            else if (j == g && g == "G") {
                g = "O"
            }
            else if (j == h && h == "H") {
                h = "O"
            }
            else if (j == i && i == "I") {
                i = "O"
            }
        }
        else {
            var j = prompt("Escolha uma posição J1(X): ")
            if (j == a && a == "A") {
                a = "X"
            }
            else if (j == b && b == "B") {
                b = "X"
            }
            else if (j == c && c == "C") {
                c = "X"
            }
            else if (j == d && d == "D") {
                d = "X"
            }
            else if (j == e && e == "E") {
                e = "X"
            }
            else if (j == f && c == "F") {
                f = "X"
            }
            else if (j == g && g == "G") {
                g = "X"
            }
            else if (j == h && h == "H") {
                h = "X"
            }
            else if (j == i && i == "I") {
                i = "X"
            }


        }

    }

    if (a == "X" && b == "X" && c == "X") {
        alert("PARABENS O JOGADOR 1 VENCEU!")
    } else if (d == "X" && e == "X" && f == "X") {
        alert("PARABENS O JOGADOR 1 VENCEU!")
    } else if (g == "X" && h == "X" && i == "X") {
        alert("PARABENS O JOGADOR 1 VENCEU!")
    } else if (a == "O" && b == "O" && c == "O") {
        alert("PARABENS O JOGADOR 2 VENCEU!")
    } else if (d == "O" && e == "O" && f == "O") {
        alert("PARABENS O JOGADOR 2 VENCEU!")
    } else if (g == "O" && h == "O" && i == "O") {
        alert("PARABENS O JOGADOR 2 VENCEU!")
    }

    else if (a == "X" && e == "X" && i == "X") {
        alert("PARABÉNS O JOGADOR 1 VENCEU!")
    } else if (c == "X" && e == "X" && g == "X") {
        alert("PARABÉNS O JOGADOR 1 VENCEU!")
    } else if (a == "O" && e == "O" && i == "O") {
        alert("PARABÉNS O JOGADOR 2 VENCEU!")
    } else if (c == "O" && e == "O" && g == "O") {
        alert("PARABÉNS O JOGADOR 2 VENCEU!")
    }

    else if (c == "X" && f == "X" && i == "X") {
        alert("PARABÉNS O JOGADOR 1 VENCEU!")
    } else if (b == "X" && e == "X" && h == "X") {
        alert("PARABÉNS O JOGADOR 1 VENCEU!")
    } else if (a == "X" && d == "X" && g == "X") {
        alert("PARABÉNS O JOGADOR 1 VENCEU!")
    } else if (c == "O" && f == "O" && i == "O") {
        alert("PARABÉNS O JOGADOR 2 VENCEU!")
    } else if (b == "O" && e == "O" && h == "O") {
        alert("PARABÉNS O JOGADOR 2 VENCEU!")
    } else if (a == "O" && d == "O" && g == "O") {
        alert("PARABÉNS O JOGADOR 2 VENCEU!")
    } else {
        alert("DEU VELHA :(")
    }
}
