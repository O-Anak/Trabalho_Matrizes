//Declaração de variaveis
var operacao;
var linhaA, colunaA, linhaB, colunaB;
var matrizA = []; 
var matrizB = [];
var matrizC = [];
var recebe_passa = 0;
operacao = prompt(
"Digite o número referente a operação que você que que seja feita:          " +
"1 = Adição" + "     " + "||" + "     " + "2 = Subtração" + "     " + "||" + "     " + "3 = Multiplicação")

switch(operacao){
    case "1":

        //Entrada de dados
        alert("Esta é uma adição de matrizes, portanto: o número de linhas para linhas" +
        " e colunas para colunas, de ambas as matrizes devem ser iguais")
        linhaA = prompt("Informe a quntidade de linhas da matriz A : ");
        colunaA = prompt("Informe a quantidade de colunas da matriz A : ");
        linhaB = prompt("Informe a quntidade de linhas da matriz B : ");
        colunaB = prompt("Informe a quantidade de colunas da matriz B : ");

        //Início do laço
        if(linhaA == linhaB & colunaA == colunaB) {
        document.write("<h1>Adição entre duas matrizes</h1>")

        //Criação da matriz 1;
        for (var i = 0; i < linhaA; i++) {
            matrizA.push([]);
        }
        for(i = 0; i < linhaA; i++) {
            for(j = 0; j < colunaA; j++) {
                matrizA[i][j] = Math.round((Math.random()*10)-2);
            }
        }

        //Exibçao da matriz 1;
        document.write("<div id = div1>");
        document.write("<table border=1>");
        document.write ("<caption>" + "Primeira Matriz" + "</caption>");
        for (i = 0; i < matrizA.length; i++) {
            var linha = "<tr>";
            for (j = 0; j < matrizA[i].length; j++) {
                linha = linha + "<td>" + matrizA[i][j] + "</td>";
            }
            linha = linha + "</tr>"
            document.write(linha);
        }
        document.write("</table>");

        //Criação da matriz 2;
        for (var i = 0; i < linhaB; i++) {
            matrizB.push([]);
        }
        for(i = 0; i < linhaB; i++) {        
            for(j = 0; j < colunaB; j++) {
                matrizB[i][j] = Math.round((Math.random()*10)-2);
            }
        }

        //Exibção da matriz 2;
        document.write("<table border=1>");
        document.write ("<caption>" + "Segunda Matriz" + "</caption>");
        for (i = 0; i < matrizB.length; i++) {
            var linha = "<tr>";
            for (j = 0; j < matrizB[i].length; j++) {
                linha = linha + "<td>" + matrizB[i][j] + "</td>";
            }
            linha = linha + "</tr>"
            document.write(linha);
        }
        document.write("</table>");
        document.write("</div>");

        //Criação da matriz 3 (somada);
        for (var i = 0; i < linhaA; i++) {
            matrizC.push([]);
        }
        for(i = 0; i < linhaA; i++) {
            for(j = 0; j < colunaB; j++) {
                matrizC[i][j] = matrizA[i][j] + matrizB[i][j];;
            }
        }

        //Exibição da matriz 3 (somada);
        document.write("<table border=1>");
        document.write ("<caption>" + "Matriz Resultado" + "</caption>");
        for (i = 0; i < matrizC.length; i++) {
            var linha = "<tr>";
            for (j = 0; j < matrizC[i].length; j++) {
                linha = linha + "<td>" + matrizC[i][j] + "</td>";
            }
            linha = linha + "</tr>"
            document.write(linha);
        }
        document.write("</table>");
    } else {
        document.write("<p id = erro> Impossível somar, pois o número de linhas e colunas da" +
    " primeira matriz deve ser iguais/referentes as linhas e colunas da segunda matriz</p>");
    }
        break;
    case "2":

        //Entrada de dados
        alert("Essa é uma operação de subtração de matrizes, portanto, o número de linhas" +
        " e colunas da primeira matriz deve ser equivalente as linhas e colunas da segunda")
        linhaA = prompt("Informe a quntidade de linhas da matriz A : ");
        colunaA = prompt("Informe a quantidade de colunas da matriz A : ");
        linhaB = prompt("Informe a quntidade de linhas da matriz B : ");
        colunaB = prompt("Informe a quantidade de colunas da matriz B : ");
        
        //Início do laço
        if(linhaA == linhaB & colunaA == colunaB) {
            document.write("<h1>Subtração entre duas matrizes</h1>")

            //Criação da matriz 1;
            for (var i = 0; i < linhaA; i++) {
                matrizA.push([]);
            }
            for(i = 0; i < linhaA; i++) {
                for(j = 0; j < colunaA; j++) {
                    matrizA[i][j] = Math.round((Math.random()*10)-2);
                }
            }

            //Exibçao da matriz 1;
            document.write("<div id = div1>");
            document.write("<table border=1>");
            document.write ("<caption>" + "Primeira Matriz" + "</caption>");
            for (i = 0; i < matrizA.length; i++) {
                var linha = '<tr>';
                for (j = 0; j < matrizA[i].length; j++) {
                    linha = linha + "<td>" + matrizA[i][j] + "</td>";
                }
                linha = linha + "</tr>"
                document.write(linha);
            }
            document.write("</table>");

            //Criação da matriz 2;
            for (var i = 0; i < linhaB; i++) {
                matrizB.push([]);
            }
            for(i = 0; i < linhaB; i++) {        
                for(j = 0; j < colunaB; j++) {
                    matrizB[i][j] = Math.round((Math.random()*10)-2);
                }
            }

            //Exibçao da matriz 2;
            document.write("<table border=1>");
            document.write ("<caption>" + "Segunda Matriz" + "</caption>");
            for (i = 0; i < matrizB.length; i++) {
                var linha = "<tr>";
                for (j = 0; j < matrizB[i].length; j++) {
                    linha = linha + "<td>" + matrizB[i][j] + "</td>";
                }
                linha = linha + "</tr>"
                document.write(linha);
            }
            document.write("</table>");
            document.write("</div>");
            
            //Criação da matriz 3 (subtraida);
            for (var i = 0; i < linhaA; i++) {
                matrizC.push([]);
            }
            for(i = 0; i < linhaA; i++) {
                for(j = 0; j < colunaB; j++) {
                    matrizC[i][j] = matrizA[i][j] - matrizB[i][j];;
                }
            }
            
            //Exibição da matriz 3 (subtraida);
            document.write("<table border=1>");
            document.write ("<caption>" + "Matriz Resultado" + "</caption>");
            for (i = 0; i < matrizC.length; i++) {
                var linha = "<tr>";
                for (j = 0; j < matrizC[i].length; j++) {
                    linha = linha + "<td>" + matrizC[i][j] + "</td>";
                }
                linha = linha + "</tr>"
                document.write(linha);
            }
            document.write("</table>");
        } else {
            document.write("<p id = erro>Impossível subtrair, pois o número de linhas e colunas da" +
            " primeira matriz deve ser iguais/referentes as linhas e colunas da segunda matriz</p>");
        }
        break;
    case "3":

        //Entrada de dados
        alert("Essa é uma operação de multiplicação de matrizes, portanto" + 
        " o número de colunas da primeira matriz deve ser equivalente ao número de linhas da segunda")
        linhaA = prompt("Informe a quntidade de linhas da matriz A : ");
        colunaA = prompt("Informe a quantidade de colunas da matriz A : ");
        linhaB = prompt("Informe a quntidade de linhas da matriz B : ");
        colunaB = prompt("Informe a quantidade de colunas da matriz B : ");

        //Início do laço
        if(colunaA == linhaB) {
            document.write("<h1>Multiplicação entre duas matrizes</h1>")

            //Criação da matriz 1;
            for (var i = 0; i < linhaA; i++) {
                matrizA.push([]);
            }
            for(i = 0; i < linhaA; i++) {
                for(j = 0; j < colunaA; j++) {
                    matrizA[i][j] = Math.round((Math.random()*10)-2);
                }
            }

            //Exibçao da matriz 1;
            document.write("<div id = div1>");
            document.write("<table border=1>");
            document.write ("<caption>" + "Primeira Matriz" + "</caption>");
            for (i = 0; i < matrizA.length; i++) {
                var linha = "<tr>";
                for (j = 0; j < matrizA[i].length; j++) {
                    linha = linha + "<td>" + matrizA[i][j] + "</td>";
                }
                linha = linha + "</tr>"
                document.write(linha);
            }
            document.write("</table>");

            //Criação da matriz 2;
            for (var i = 0; i < linhaB; i++) {
                matrizB.push([]);
            }
            for(i = 0; i < linhaB; i++) {        
                for(j = 0; j < colunaB; j++) {
                    matrizB[i][j] = Math.round((Math.random()*10)-2);
                }
            }

            //Exibção da matriz 2;
            document.write("<table border=1>");
            document.write ("<caption>" + "Segunda Matriz" + "</caption>");
            for (i = 0; i < matrizB.length; i++) {
                var linha = "<tr>";
                for (j = 0; j < matrizB[i].length; j++) {
                    linha = linha + "<td>" + matrizB[i][j] + "</td>";
                }
                linha = linha + "</tr>"
                document.write(linha);
            }
            document.write("</table>");
            document.write("</div>");

            //Criação da matriz 3 (multiplicada);
            for (var i = 0; i < linhaA; i++) {
                matrizC.push([]);
            }
            for(i = 0; i < linhaA; i++) {
                for(j = 0; j < colunaB; j++) {
                    matrizC[i][j] = 0;
                    for(x = 0; x < linhaB; x++) {
                        recebe_passa +=  matrizA[i][x] * matrizB[x][j];
                    }
                    matrizC[i][j] = recebe_passa;
                    recebe_passa = 0;
                }
            }

            //Exibição da matriz 3 (multiplicada);
            document.write("<table border=1>");
            document.write ("<caption>" + "Matriz Resultado" + "</caption>");
            for (i = 0; i < matrizC.length; i++) {
                var linha = "<tr>";
                for (j = 0; j < matrizC[i].length; j++) {
                    linha = linha + "<td>" + matrizC[i][j] + "</td>";
                }
                linha = linha + "</tr>"
                document.write(linha);
            }
            document.write( "</table>");
        } else {
            document.write("<p id = erro>Impossível multiplicar, pois o número de colunas da" + 
            " primeira matriz deve ser ao de linhas da terceira matriz<p>");
        }
        break;
    default:
            alert("Opção inválida (digite 1, 2 ou 3)");
}