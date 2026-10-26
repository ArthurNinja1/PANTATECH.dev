// Configuração do frontend.
// API_URL:
//   ""    -> usa o backend no mesmo endereço do site (Netlify)
//   "https://sua-api.com" -> backend hospedado em outro endereço
//   null  -> sem backend: o formulário abre o app de e-mail (mailto)
// Abrindo o index.html direto no navegador (file://) ou no GitHub Pages não há backend.
window.PANTATECH_CONFIG = {
    API_URL: (location.protocol === 'file:' || location.hostname.endsWith('github.io')) ? null : ''
};
