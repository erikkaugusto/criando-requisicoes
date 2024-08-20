async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos"); // requisição GET, AWAIT é esperar a promise ser resolvida
    const conexaoConvertida = await conexao.json();
   
    return conexaoConvertida;
}

export const conectaApi = {
    listaVideos
}