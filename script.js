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
    




    res.innerHTML =  'Coeficientes:<br>'
    if (a > 0) {
        res.innerHTML += `a = ${a} (Positivo)<br>`
    } else if (a < 0) {
        res.innerHTML += `a = ${a} (Negativo)<br>`
    } else if (a == 0) {
        res.innerHTML += `a = 0<br>`
    }

    if (b > 0) {
        res.innerHTML += `b = ${b} (Positivo)<br>`
    } else if (b < 0) {
        res.innerHTML += `b = ${b} (Negativo)<br>`
    } else if(b == 0) {
        res.innerHTML += `b = 0<br>`
    }

    if (c > 0) {
        res.innerHTML += `c = ${c} (Positivo)<br>`
    } else if (c < 0) {
        res.innerHTML += `c = ${c} (Negativo)<br>`
    } else if (c == 0) {
        res.innerHTML += `c = 0`
    }

    res.innerHTML += `<br><hr><br>`
    


    res.innerHTML +=  'Calculando o delta... &#128516<br>';
    res.innerHTML +=  'Δ = b² - 4.a.c <br>';
    res.innerHTML +=  `Δ = ${b}² - 4.${a}.${c} <br>`;
    res.innerHTML += `Δ = ${b}² - 4.${a * c} <br>`;
    res.innerHTML += `Δ = ${b ** 2} - ${4 * a * c} <br>`;
    res.innerHTML += `Δ = ${delta} <br><br><hr><br>`



    if (delta < 0) {
        res.innerHTML += 'Como o Δ é negativo, não temos raízes reais.';
    } else if (delta > 0) {



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
                res.innerHTML += `x2 = ${r2}`
                res.innerHTML += `<br><br><hr><br>S={${r1} ; ${r2}}`
            } else {
                res.innerHTML += `Informação: O delta não possui raiz quadrada<br>`
                res.innerHTML += `x = –b ± √Δ ÷ 2·a<br>`
                res.innerHTML += `x = -(-${b}) ± √${delta} ÷ 2·${a}<br>`
                
                let x1 = `${b} ± √${delta} ÷ 2·${2 * a}`
                let x2 = `${b/(2*a)} ± √${delta} ÷ ${2 * a}`

                res.innerHTML += `x1 e x2 encontrados!&#128513;<br>`
                res.innerHTML += `x1 = ${b/(2*a)} + √${delta}<br>`
                res.innerHTML += `x2 = ${b/(2*a)} - √${delta}`
                res.innerHTML += `<br><br><hr><br>S={${x1} ; ${x2}}`
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
                res.innerHTML += `x2 = ${r2}`

                res.innerHTML += `<br><br><hr><br>S={${r1} ; ${r2}}`
            } else {
                res.innerHTML += `Informação: O delta não possui raiz quadrada<br>`
                res.innerHTML += `x = –b ± √Δ ÷ 2·a<br>`
                res.innerHTML += `x = ${b} ± √${delta} ÷ 2·${a}<br>`
                res.innerHTML += `x = ${b} ± √${delta} ÷ ${2 * a}<br><br>`

                res.innerHTML += `x1 e x2 encontrados!&#128513;`
                let x1 = `${b/(2*a)} + √${delta}`
                let x2 = `${b/(2*a)} - √${delta}`
                res.innerHTML += `<br><br><hr><br>S={${x1} ; ${x2}}`
            }
        }



    } else if (delta == 0) {
        
        if (b > 0) {
        
        
            b = b * -1
            res.innerHTML += `Raíz encontrada!&#128513;<br>`
            res.innerHTML += `x = –b ± √Δ ÷ 2·a<br>`
            
            res.innerHTML += `x = ${b} ± √0 ÷ 2·${a}<br>`
            res.innerHTML += `x = ${b} ± 0 ÷ ${2*a}<br>`
            res.innerHTML += `x1 = ${b} ÷ ${2*a}<br>`
            res.innerHTML += `x1 = ${r}<br><br>`
            
            res.innerHTML += `A raíz da equação é: ${r}<br><br><hr><br>`
            res.innerHTML += `S={${r}}`
        
        
        } else if (b < 0) {
        
        
            b = b * -1
            res.innerHTML += `Raíz encontrada!&#128513;<br>`
            res.innerHTML += `x = –b ± √Δ ÷ 2·a<br>`
    
            res.innerHTML += `x = -(-${b}) ± √0 ÷ 2·${a}<br>`
            res.innerHTML += `x = ${b} ± 0 ÷ ${2*a}<br>`
            res.innerHTML += `x1 = ${b} ÷ ${2*a}<br>`
            res.innerHTML += `x1 = ${r}<br><br>`

            res.innerHTML += `A raíz da equação é: ${r}<br><br><hr><br>`
            res.innerHTML += `S={${r}}`
        }
    }
    
}
