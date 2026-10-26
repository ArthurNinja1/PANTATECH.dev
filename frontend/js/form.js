// Formulário de contato
(() => {
    const form = document.getElementById('contactForm');
    const status = document.getElementById('formStatus');
    const apiUrl = (window.PANTATECH_CONFIG || {}).API_URL;
    const EMAIL = 'contato@pantatech.dev';

    function setStatus(msg, tipo = '') {
        status.textContent = msg;
        status.className = 'form-status ' + tipo;
    }

    function enviarPorEmail(d) {
        const assunto = encodeURIComponent(`Novo projeto: ${d.servico} — ${d.nome}`);
        const corpo = encodeURIComponent(`Nome: ${d.nome}\nE-mail: ${d.email}\nTipo: ${d.servico}\n\n${d.mensagem || ''}`);
        window.location.href = `mailto:${EMAIL}?subject=${assunto}&body=${corpo}`;
        setStatus('Abrindo seu aplicativo de e-mail...', 'ok');
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const dados = Object.fromEntries(new FormData(form));

        if (apiUrl === null) return enviarPorEmail(dados);

        const btn = form.querySelector('button[type="submit"]');
        btn.disabled = true;
        setStatus('Enviando...');
        try {
            const res = await fetch(`${apiUrl}/api/contato`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dados)
            });
            const json = await res.json().catch(() => ({}));
            if (!res.ok) throw new Error(json.erro || 'Erro ao enviar.');
            form.reset();
            setStatus('Solicitação enviada! Respondemos em até 1 dia útil.', 'ok');
        } catch (err) {
            const offline = err instanceof TypeError;
            setStatus(offline ? 'Não foi possível enviar agora. Fale conosco pelo WhatsApp ou e-mail.' : err.message, 'erro');
        } finally {
            btn.disabled = false;
        }
    });
})();
