# PantaTech

Site institucional da PantaTech, separado em frontend e backend.

```
pantatech/
├── frontend/              # HTML, CSS e JS puros (sem build)
│   ├── index.html
│   ├── css/               # base, header, hero, sections, contact, footer, responsive
│   └── js/                # config, header, menu, reveal, year, form
├── backend/
│   └── functions/
│       └── contato.js     # API do formulário (Netlify Function)
└── netlify.toml           # publica /frontend e liga /api/contato à função
```

## Publicar no Netlify
1. Suba o repositório no GitHub.
2. No Netlify: **Add new site > Import an existing project** e escolha o repositório.
3. Deixe as configurações como vêm: o `netlify.toml` já define a pasta publicada e a função.

As mensagens do formulário aparecem em **Logs > Functions** do painel do Netlify.

## Rodar localmente
- Só o visual: abra `frontend/index.html` (o formulário abre o app de e-mail).
- Com a função: `npx netlify dev` e acesse o endereço mostrado.

## GitHub Pages
Hospeda só o frontend, sem o backend. O formulário abre o app de e-mail.
