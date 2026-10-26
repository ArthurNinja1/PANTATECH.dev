// Backend serverless (Netlify Function) - recebe o formulário de contato.
// Endereço público: POST /api/contato (redirecionado no netlify.toml)

const SERVICOS = ['site', 'sistema', 'ecommerce', 'lp', 'design', 'outro'];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const resposta = (statusCode, corpo) => ({
    statusCode,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(corpo)
});

function validar(body) {
    const nome = String(body.nome || '').trim();
    const email = String(body.email || '').trim();
    const servico = String(body.servico || '').trim();
    const mensagem = String(body.mensagem || '').trim();

    if (nome.length < 2 || nome.length > 100) return { erro: 'Informe um nome válido.' };
    if (!EMAIL_RE.test(email) || email.length > 150) return { erro: 'Informe um e-mail válido.' };
    if (!SERVICOS.includes(servico)) return { erro: 'Selecione o tipo de projeto.' };
    if (mensagem.length > 2000) return { erro: 'Mensagem muito longa (máx. 2000 caracteres).' };
    return { dados: { nome, email, servico, mensagem } };
}

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') return resposta(405, { erro: 'Método não permitido.' });

    let body;
    try {
        body = JSON.parse(event.body || '{}');
    } catch {
        return resposta(400, { erro: 'Requisição inválida.' });
    }

    const { erro, dados } = validar(body);
    if (erro) return resposta(400, { erro });

    // Por enquanto a mensagem aparece nos logs da função (painel do Netlify > Functions).
    // Para receber por e-mail ou salvar em banco, é só acrescentar o envio aqui.
    console.log('Nova solicitação de contato:', JSON.stringify(dados));

    return resposta(201, { ok: true });
};
