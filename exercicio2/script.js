const nacionalidade = () => {
const nacionalidade = prompt("Digite aqui a nacionalidade").toLowerCase()
/*
if(nacionalidade === "brasileira"){
    console.log("a pessoa é do Brasil!")
} else if(nacionalidade === "argentina"){
    console.log("a pessoa é da Argentina!")
} else if(nacionalidade === "uruguaia"){
    console.log("a pessoa é do Uruguai!")
} else if(nacionalidade === "chilena"){
    console.log("a pessoa é do Chile!")
} else if(nacionalidade === "colombiana"){
    console.log("a pessoa é da Colômbia!")
} else{
    console.log("nacionalidade não encontrada")
}
*/
 switch (nacionalidade) {
 case `brasileira`, `brasileiro`:
 console.log(`A sua nacionalidade é do Brasil`)
 break
 case `argentina`, `argentino`:
 console.log(`A sua nacionalidade é da Argentina`)
 break
 case `uruguaia`, `uruguaio`:
 console.log(`A sua nacionalidade é do Uruguai`)
 break
 case `chilena`, `chileno`:
 console.log(`A sua nacionalidade é do Chile`)
 break
 case `colombiana`, `colombiano`:
 console.log(`A sua nacionalidade é da Colômbia`)
 break
 default:
 console.log(`Nacionalidade não encontrada`)
 break
 }
}
nacionalidade()