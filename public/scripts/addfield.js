document.querySelector("#add-time")
.addEventListener('click', cloneField) //criar a função cloneField


function cloneField(){ //bora clonar
      var toClone = document.querySelector('.schedule-item').cloneNode(true) //primeiro encontra o que clonar (cloneNode pega tudo que estive dentro)
      var fields = toClone.querySelectorAll('input') //segundo separa os campos a serem clonados
      fields.forEach(element => { //ai, faz um laço
            element.value = ""  //zera os valores dos campos          
      });
      document.querySelector("#schedule-items").appendChild(toClone) //clonou !
}