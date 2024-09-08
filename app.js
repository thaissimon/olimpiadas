function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    // Verifica se a seção foi encontrada no DOM (para depuração)
  
    let campoPesquisa = document.getElementById("campoPesquisa").value

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar por algum atleta ou esporte<p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada elemento (dado) dentro do array 'dados'
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        //se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            // Concatena HTML para criar um novo elemento de resultado
        resultados += `
        <div class="item-resultado">
            <h2>
                <a href="#">${dado.titulo}</a> </h2>
            <p class="descricao-meta">${dado.descricao}</p> <a href=${dado.link}" target="_blank">Mais informações</a> </div>
    `;
        }

        
    }

    if (!resultado) {
        resultados = "Nada foi encontrado"
    }

    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
}