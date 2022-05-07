function calcular() {
    var valorA = document.querySelector('#valorA').value;
    var valorB = document.querySelector('#valorB').value;
    var valorC = document.querySelector('#valorC').value;
    var res    = document.querySelector('#res');
    
    a = Number(valorA);
    b = Number(valorB);
    c = Number(valorC);
    
    var delta     = b ** 2 - (4 * a * c);
    var r1        = (-b + Math.sqrt(delta)) / (2 * a);
    var r2        = (-b - Math.sqrt(delta)) / (2 * a);
    var r         = (-b) / (2 * a);
    var raizdelta = Math.sqrt(delta);
    console.log(r1, r2)
    

    
    if (delta < 0) {
        res.innerHTML = 'Não há raízes reais (Delta menor que zero).';
    } else if (delta > 0) {
        res.innerHTML =  'Calculando o delta... &#128516<br>';
        res.innerHTML +=  'Δ = b² - 4.a.c <br>';
        res.innerHTML +=  `Δ = ${b}² - 4.${a}.${c} <br>`;
        res.innerHTML += `Δ = ${b}² - 4.${a * c} <br>`;
        res.innerHTML += `Δ = ${b ** 2} - ${4 * a * c} <br>`;
        res.innerHTML += `Δ = ${delta} <br><br><hr><br>`;
        


        // Se B for menor que zero...
        if (b < 0) {
            b = b * -1;
            if (Number.isInteger(raizdelta)) {
                res.innerHTML += `x = -b ± √Δ ÷ 2·a<br>`
                res.innerHTML += `x = -(-${b}) ± √${delta} ÷ 2·${a}<br>`
                res.innerHTML += `x = ${b} ± ${raizdelta} ÷ ${2 * a}<br><br>`

                res.innerHTML += `x1 e x2 encontrados!&#128513;<br>`
               
                res.innerHTML += `x1 = ${b} + ${raizdelta} ÷ ${2 * a}<br>`
                res.innerHTML += `x1 = ${b + raizdelta} ÷ ${2 * a}<br>`
                res.innerHTML += `x1 = ${r1}<br><br>`
                
                res.innerHTML += `x2 = ${b} - ${raizdelta} ÷ ${2 * a}<br>`
                res.innerHTML += `x2 = ${b - raizdelta} ÷ ${2 * a}<br>`
                res.innerHTML += `x2 = ${r2}<br>`
            } else {
                res.innerHTML += `Informação: O delta não possui raiz quadrada<br>`
                res.innerHTML += `x = –b ± √Δ ÷ 2·a<br>`
                res.innerHTML += `x = -(-${b}) ± √${delta} ÷ 2·${a}<br>`
                res.innerHTML += `x = ${b/(2*a)} ± √${delta} ÷ ${2 * a}<br><br>`

                res.innerHTML += `x1 e x2 encontrados!&#128513;<br>`
                res.innerHTML += `x1 = ${b/(2*a)} + √${delta}<br>`
                res.innerHTML += `x2 = ${b/(2*a)} - √${delta}<br>`
            }



        // Se B for maior que zero...
        } else if (b > 0){
            b = b * -1;
            if (Number.isInteger(raizdelta)) {
                res.innerHTML += `x = –b ± √Δ ÷ 2·a<br>`
                res.innerHTML += `x = ${b} ± √${delta} ÷ 2·${a}<br>`
                res.innerHTML += `x = ${b} ± √${raizdelta} ÷ ${2 * a}<br><br><hr><br>`

                res.innerHTML += `x1 e x2 encontrados!&#128513;<br>`
                res.innerHTML += `x1 = ${b} + ${raizdelta} ÷ ${2 * a}<br>`
                res.innerHTML += `x1 = ${b + raizdelta} ÷ ${2 * a}<br>`
                res.innerHTML += `x1 = ${r1}<br><br>`

                res.innerHTML += `x2 = ${b} - ${raizdelta} ÷ ${2 * a}<br>`
                res.innerHTML += `x2 = ${b - raizdelta} ÷ ${2 * a}<br>`
                res.innerHTML += `x2 = ${r2}<br><br>`
            } else {
                res.innerHTML += `Informação: O delta não possui raiz quadrada<br>`
                res.innerHTML += `x = –b ± √Δ ÷ 2·a<br>`
                res.innerHTML += `x = ${b} ± √${delta} ÷ 2·${a}<br>`
                res.innerHTML += `x = ${b} ± √${delta} ÷ ${2 * a}<br><br>`

                res.innerHTML += `x1 e x2 encontrados!&#128513;<br>`
                res.innerHTML += `x1 = ${b/(2*a)} + √${delta}<br>`
                res.innerHTML += `x2 = ${b/(2*a)} - √${delta}<br>`



            }
        }
    } else if (delta == 0) {
        res.innerHTML =  'Calculando o delta... &#128516<br>'
        res.innerHTML +=  'Δ = b² - 4.a.c <br>'
        res.innerHTML +=  `Δ = ${b}² - 4.${a}.${c} <br>`
        res.innerHTML += `Δ = ${b}² - 4.${a * c} <br>`
        res.innerHTML += `Δ = ${b ** 2} - ${4 * a * c} <br>`
        res.innerHTML += `Δ = ${delta} <br><br><hr><br>`
        
        b = b * -1
        if (b > 0) {
            res.innerHTML += `Raíz encontrada!&#128513;<br>`
            res.innerHTML += `x = –b ± √Δ ÷ 2·a<br>`
    
            res.innerHTML += `x = ${b} ± √0 ÷ 2·${a}<br>`
            res.innerHTML += `x = ${b} ± 0 ÷ ${2*a}<br>`
            res.innerHTML += `x1 = ${b} + 0 ÷ ${2*a}<br>`
            res.innerHTML += `A raíz da equação é: ${r}`
        } else if (b < 0) {
            res.innerHTML += `Raíz encontrada!&#128513;<br>`
            res.innerHTML += `x = –b ± √Δ ÷ 2·a<br>`
    
            res.innerHTML += `x = -(${b}) ± √0 ÷ 2·${a}<br>`
            res.innerHTML += `x = ${b} ± 0 ÷ ${2*a}<br>`
            res.innerHTML += `x1 = ${b} + 0 ÷ ${2*a}<br>`
            res.innerHTML += `A raíz da equação é: ${r}`
        }
    }
    
}
