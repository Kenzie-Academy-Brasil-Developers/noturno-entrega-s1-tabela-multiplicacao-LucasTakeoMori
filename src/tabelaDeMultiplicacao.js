function multi(n) { 
    // Substitua "nomeDaSuaFuncao" por um nome mais apropriado
    // TODO: escrever dois loops aninhados para desenhar o array bidimensional e monstar o restante da tabela no console.
    let myArray = [];
    for (let indice = 0; indice <= n; indice++) {
        myArray[indice] = [];
        for(let contador = 0; contador <=n; contador++)
        {
            myArray[indice].push(indice*contador)
        }
    }
    console.table(myArray)
}
multi()