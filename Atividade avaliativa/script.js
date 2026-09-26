
const hero = document.querySelector('.hero');
const img = document.getElementById('heroImg');
hero.addEventListener('mousemove', (e)=>{
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;
  img.style.transform = `translate(${x}px, ${y}px)`;
});


const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.style.opacity=1; e.target.style.transform='translateY(0)'; }
  });
});
document.querySelectorAll('.card').forEach(c=>{
  c.style.opacity=0; c.style.transform='translateY(30px)'; c.style.transition='0.8s';
  observer.observe(c);
});




/*parte do estoque*/



document.addEventListener("DOMContentLoaded", function () {
    const nome = document.getElementById("nome");
    const preco = document.getElementById("preço");
    const data = document.getElementById("data");
    const btn = document.getElementById("btn");
    const tabelaAlunos = document.getElementById("tabelaAlunos");
    const qnt = document.getElementById("qnt");


    if (btn) {
        btn.addEventListener("click", cadastrar);
    }

    function cadastrar() {
        const nomeValor = nome.value.trim();
        const precoValor = preco.value.trim();
        const dataValor = data.value;

        
        if (nomeValor === "" || precoValor === "" || dataValor === "") {
            alert("Por favor, preencha todos os campos!");
            return;
        }

  
        const linha = document.createElement("tr");
        const colunaNome = document.createElement("td");
        const colunaPreco = document.createElement("td");
        const colunaData = document.createElement("td");
        const colunaAcao = document.createElement("td");
        const btnex = document.createElement("button");

      
        colunaNome.textContent = nomeValor;
        colunaPreco.textContent = `R$ ${Number(precoValor).toFixed(2)}`;
        
        
        const dataFormatada = dataValor.split("-").reverse().join("/");
        colunaData.textContent = dataFormatada;

        btnex.textContent = "Excluir";
        btnex.classList.add("btnex");

    
        linha.appendChild(colunaNome);
        linha.appendChild(colunaPreco);
        linha.appendChild(colunaData);
        linha.appendChild(colunaAcao);
        colunaAcao.appendChild(btnex);

     
        tabelaAlunos.appendChild(linha);

  
        nome.value = "";
        preco.value = "";
        data.value = "";
        nome.focus();


        atualizarQuantidade();

      
        btnex.addEventListener("click", function () {
            linha.remove();
            atualizarQuantidade();
        });
    }

    function atualizarQuantidade() {
    
        const totalLinhas = tabelaAlunos.querySelectorAll("tr").length - 1;
        qnt.textContent = totalLinhas >= 0 ? totalLinhas : 0;
    }
});


