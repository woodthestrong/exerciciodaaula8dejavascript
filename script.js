class Pessoa {
    constructor(nome, sobrenome, idade){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

}
class TodoMundo {
    constructor(){
        this.todoMundo = [];
    }

    adicionarUmaPessoa(pessoa) {
        this.todoMundo.push(pessoa);
    }
    
    maior() {
        let maior = [this.todoMundo[0]];
        for(let i of this.todoMundo.slice(1)){
            if (maior[0].idade < i.idade ) {
                maior = [i];
            } else if (maior[0].idade === i.idade) {
                maior.push[i];
            }    
        }
        return maior;
    }
}

function myFunction() {
        let a = "y";
        let todoMundo = new TodoMundo();
        
        while(a == "y"){

            let pessoa = new Pessoa();
            var n = prompt("Quantas pessoas você deseja registrar?");
            
            let maior = 0; 
            for(let i = 0; i < n.length; i++){
                var nome = prompt("Digite o seu nome");
                var sobrenome = prompt("Digite o seu sobrenome");
                var idade = prompt("Digite a sua idade");
                pessoa = new Pessoa(nome, sobrenome, idade);
                todoMundo.adicionarUmaPessoa(pessoa);        
            }
            a = prompt("Você deseja registrar mais de uma pessoa? y/n");
            
        } 
        console.log(todoMundo);
        console.log(todoMundo.maior());
        

        
        
       

    }
