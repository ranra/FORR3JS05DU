...rest   
 //er leið til að senda inn óendanlega tölu af arguments.

rest.reduce(a,b) =>{return a + b}
//tekur listan af tölum og aðgreinir þær  og í þessu tilviki skilar summu þeirra

function* generator(i){ yield i; yield i +10;}
generator.next().value
//skapar generator sem skilar næsta "yield" í hvert sinn sem er kallað á hann

=>
//er það sama og að kalla á function 

Symbol.iterator
// er svipað og "for-of" fallið sem fer yfir öll stök

//literals eru tildæmis tölur og string ""

//value types skila true ef innihald er það sama reference types gera það ekki
//reference types eru t.d array og functions


(y) => x
// x variable er "free"  því það er ekki bundið neinu variable

//Functions containing no free variables are called pure functions.
//Functions containing one or more free variables are called closures.
// A pure function can contain a closure



//if is a block statement