async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos"); // requisição GET (se for outro tem que especificar como na linha 10), AWAIT para esperar a promise ser resolvida
    const conexaoConvertida = await conexao.json();
   
    return conexaoConvertida;
}

async function criaVideo(titulo, descricao, url, imagem){
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

export const conectaApi = {
    listaVideos,
    criaVideo
}