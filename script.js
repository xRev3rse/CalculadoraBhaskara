function calcular() {
    var valorA = document.querySelector('#valorA').value;
    var valorB = document.querySelector('#valorB').value;
    var valorC = document.querySelector('#valorC').value;
    var res    = document.querySelector('#res');
    
    valorA = Number(valorA)
    valorB = Number(valorB)
    valorC = Number(valorC)

    AxC        = valorA * valorC 
    Bneg       = -valorB
    BmA        = valorA + Bneg
    DxA        = 2 * valorA
    BmenosA    = Bneg - valorA
    BmenosA_div= BmenosA / DxA
    four_axc   = 4 * AxC
    bvalue     = valorB * valorB
    deltavalue = bvalue - four_axc
    BmA_div    = BmA / DxA
    raiz_delta = Math.sqrt(deltavalue)
    
    res.innerHTML =  'Δ = b² - 4.a.c <br>'
    res.innerHTML += `Δ = ${valorB}² - 4.${valorA}.${valorC} <br>`
    res.innerHTML += `Δ = ${valorB}² - 4.${AxC} <br>`
    res.innerHTML += `Δ = ${valorB}² - ${four_axc}<br>`
    res.innerHTML += `Δ = ${bvalue} - ${four_axc}<br>`
    res.innerHTML += `Δ = ${deltavalue} <br><br><hr><br>`

    res.innerHTML += `x = -B ± √Δ ÷ 2.a<br>`
    res.innerHTML += `x = -${valorB} ± √${deltavalue} ÷ 2.${valorA}<br>`
    res.innerHTML += `x = -${valorB} ± ${raiz_delta} ÷ 2.${valorA}<br>`
    res.innerHTML += `x = -${valorB} ± ${raiz_delta} ÷ ${DxA}<br><br><hr><br>`

    res.innerHTML += `XI = -${valorB} + ${valorA} ÷ ${DxA}<br>`
    res.innerHTML += `XI = ${BmA} ÷ ${DxA}<br>`
    res.innerHTML += `XI = ${BmA_div}<br><br>&<br><br>`

    res.innerHTML += `XII = -${valorB} - ${valorA} ÷ ${DxA}<br>`
    res.innerHTML += `XII = ${BmenosA} ÷ ${DxA}<br>`
    res.innerHTML += `XII = ${BmenosA_div}`
}