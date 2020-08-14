document.addEventListener("DOMContentLoaded", function (event) {
      botao = 0
      console.log(botao)
});
//clona schedule-item
function cloneRow() {
      var itenToClone = document.getElementById('addr00'); // itenToClone = o elemento a ser clonado
      var table = document.getElementById("schedule-items"); // table =  ao elemento onde vai ser clonado
      var clone = itenToClone.cloneNode(true); // faz a copia para dentro da var "clone"

      // aqui vai zerar os valores de input antes de incluir o novo element clonado
      var fields = clone.querySelectorAll('input') //seleciona os campos "input"
      fields.forEach(element => { //ai, faz um laço para ir em cada campo "input"

            element.value = ""  //zera o valor do campo input

      });
      clone.classList.add("cloned"); //adiciona a class="cloned" ao elemento a ser clonado
      botao = botao + 1


      // ADICIONA UM BOTÃO PARA REMOVER HORÁRIO NO ESPAÇO DO HORARIO EM QUESTÃO
      // FALTA: COLOCAR UMA CLASSE ESPECÍFICA PARA ISSO E CHAMADA DE FUNÇÃO COM NOME DA CLASSE
      var btn = document.createElement("BUTTON");  // cria o botão de retirar um horário específico
      var div = document.createElement("div") //divisão para o botão, apenas para css
      div.classList.add("btRemove") // classe da div
      btn.innerHTML = "-"; // o que tem dentro do botão, um charactere "-""
      className = "cloned" + botao // variável temporária apenas para colocar o nome da classe do botão + um numero crescente
      clone.classList.add(className) // adiciona essa classe (acima) ao item clonado
      btn.setAttribute('onclick', 'removeItem("'+className+'");'); // cria a chamada para remover o botão específico
      btn.setAttribute('type', 'button') // especifica o tipo do botão como type="button" isso serve apenas para o botão não tentar enviar o formulário
      btn.classList.add('btRemove')  //adiciona a classe btRemove ao botão (depois rever, estou colocando classe no botão e na div)
      div.appendChild(btn) // adiciona o botão criado dentro da div
      clone.appendChild(div); // adiciona a div dentro do item clonado. // ufaaa !!! rs
      // FIM




      table.appendChild(clone)      //adiciona o elemento clonado no final do elemento "table"

}

//Remove último(last) schedule-item, caso tenha a classe="cloned"
function removeRow() {
      var table = document.getElementById("schedule-items"); //seleciona todo elemento schedule
      let last = table.lastElementChild;
      console.log(last)

      if (last.classList.contains("cloned")) {              //verifica se o último elemento tem a class="cloned"
            last.remove();                                  // tem? então remove
      } else {
            alert('Pelo menos um horário é obrigatório')    //não tem? alerta para incluir ao menos 1 horario
      }
}

function removeItem(i) {
      var table = document.getElementsByClassName(i); //seleciona todo elemento schedule
      table[0].remove();
      document.querySelectorAll(i).forEach(el => el.remove());
}

