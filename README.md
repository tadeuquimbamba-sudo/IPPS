# IPPS — Instituto Politécnico Privado Sócrates

Aplicação web de consulta do **Instituto Politécnico Privado Sócrates (IPPS)**, em Malanje, Angola. O aluno pesquisa o seu curso e a sua turma e consulta cursos, horários, horários das provas, requerimentos, professores e regulamentos.

Desenvolvida pela **Casi Art Soluções**.

---

## 🌐 Site em produção

[ipps-me.netlify.app](https://ipps-me.netlify.app)

---

## 📁 Estrutura do repositório

A aplicação é uma página única (`index.html`, com estilos, scripts e imagens embutidos) e funciona como aplicação instalável (PWA), com cópia para uso sem internet.

| Ficheiro | Função |
|---|---|
| `index.html` | A aplicação (página inicial, obrigatória, com este nome exacto) |
| `sw.js` | Service worker: abre a versão mais recente quando há internet e a última guardada quando não há |
| `ads.txt` | Autorização do Google AdSense (tem de estar na raiz do site) |
| `privacidade.html` | Política de Privacidade |
| `termos.html` | Termos de Utilização |
| `manifest.webmanifest` | Dados da aplicação instalável |
| `icon-192.png` | Ícone da aplicação |
| `icon-512.png` | Ícone da aplicação (grande) |
| `icon-maskable-512.png` | Ícone da aplicação (adaptável ao ecrã) |

⚠️ **Importante:** todos estes ficheiros têm de estar juntos, na mesma pasta, com estes nomes exactos. O `sw.js` guarda a lista completa para uso sem internet, e se faltar algum ficheiro a instalação da aplicação falha. Os ficheiros `privacidade.html`, `termos.html`, `manifest.webmanifest` e os três ícones fazem parte do projecto original e têm de ser copiados para esta pasta antes de publicar.

---

## ✏️ Como actualizar o site

1. Editar o `index.html` (ou outro ficheiro necessário).
2. Em `sw.js`, aumentar o número da versão do cache (por exemplo, de `ipps-v3` para `ipps-v4`), para que os telemóveis guardem a cópia nova.
3. Fazer commit e push para este repositório (ou carregar a pasta completa no Netlify).
4. No Netlify, confirmar que o deploy incluiu **todos os ficheiros** da tabela acima.

Ao publicar à mão no Netlify, carregue sempre a **pasta inteira**. Carregar só um ficheiro apaga os restantes.

---

## 💰 Anúncios (Google AdSense)

O script do AdSense está no `<head>` do `index.html`, e o `ads.txt` está na raiz do site. O endereço `ipps-me.netlify.app` tem de estar adicionado e aprovado no painel do AdSense para os anúncios aparecerem.

---

## 📞 Desenvolvimento

**Casi Art Soluções** — Malanje, Angola
- **E-mail:** casiartsolucoes.ao@gmail.com
- **WhatsApp:** +244 950 077 447
- **Site:** [casiartsolucoes-ao.netlify.app](https://casiartsolucoes-ao.netlify.app)
