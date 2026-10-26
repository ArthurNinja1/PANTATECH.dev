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


## Rodar localmente
- Só o visual: abra `frontend/index.html` (o formulário abre o app de e-mail).
- Com a função: `npx netlify dev` e acesse o endereço mostrado.
