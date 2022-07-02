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

    adicionarUmaPessoa() {
        this.todoMundo.push(pessoa);
    }
}
    function myFunction() { 
        var n = prompt("Quantas pessoas você deseja registrar?");
        let todoMundo = new TodoMundo();
        let maior = 0; 
        for(let i = 0; i < n.length; i++){
            var nome = prompt("Digite o seu nome");
            var sobrenome = prompt("Digite o seu sobrenome");
            var idade = prompt("Digite a sua idade");
            let pessoa = new Pessoa(nome, sobrenome, idade);
            todoMundo.adicionarUmaPessoa(pessoa);
            
        }
        console.log(todoMundo);
       

    }
