/*
43. Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência
sobre as do obj1 em caso de conflitos.
*/

let obj1 = {madeIn: "China", type:"Fiat", engine: "V8", model:"500", color:"white"};
let obj2 = {type:"Chevrolet", year: 2000, model:"LT", tires: "VBrake", color:"Black"};

mergeObj(obj1, obj2);

function mergeObj(obj1, obj2){
    obj1_keys = Object.keys(obj1);
    obj2_keys = Object.keys(obj2);

    obj3 = obj2;

    for(let i=0; i < obj1_keys.length; i++){
        for(let j=0; j < obj1_keys.length; j++){
            if(obj1_keys[i] == obj2_keys[j]) // Comparar as chaves dos dois objetos. Se não existir a chave 1 no obj3, adicioná-la. Se já existir, não adicionar
        }
    }
}