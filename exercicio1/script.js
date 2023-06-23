const escolhaNumero = Number(prompt(`Digite um número:`))


    if(escolhaNumero % 2 === 0){
        if(escolhaNumero % 3 === 0){
            console.log(`O número ${escolhaNumero} é divisível por 2 e por 3.`)

        } else {
            console.log(`O número ${escolhaNumero} é  não é divisível por 2 e por 3.`)
        }
    } else {
        console.log(`O número ${escolhaNumero} é  não é divisível por 2 e por 3.`)
    }



    if (escolhaNumero % 2 === 0 && escolhaNumero % 3 === 0) {
        console.log(`O número ${escolhaNumero} é divisivel por 2 e por 3.`)
        
    }
    if (escolhaNumero % 2 === 0 || escolhaNumero % 3 === 0) {
        console.log(`O número ${escolhaNumero} é divisivel por 2 e por 3.`)
    }
