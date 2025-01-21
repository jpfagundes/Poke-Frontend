# <h1 align="center">  Poke-Frontend </h1>


Uma aplicação web interativa para explorar Pokémons, pesquisar por nome, ID ou tipo, e montar seu próprio time de Pokémons. Desenvolvida com React e consumindo dados de uma API externa.

## Índice 📚
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Executar](#como-executar)
- [Estrutura de Arquivos](#estrutura-de-arquivos)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Funcionalidades ⚡
- **Pesquisa** 🔍:
  - Pesquise Pokémons por nome ou ID.
  - Filtre Pokémons por tipo selecionando no dropdown.
- **Navegação** 🧭:
  - Paginação para explorar a lista de Pokémons.
- **Detalhes do Pokémon** 🐾:
  - Visualize informações detalhadas de cada Pokémon, incluindo tipos, habilidades, altura, peso e status.
  - Evoluções com navegação para outros Pokémons na cadeia evolutiva.
- **Gerenciamento de Time** 🛡️:
  - Adicione até 5 Pokémons ao seu time.
  - Remova Pokémons do time a qualquer momento.
  - Time persistido no local storage.

## Tecnologias Utilizadas 🛠️
- **Frontend** 🌐:
  - React.js
  - CSS Modules
- **Serviços** 🔗:
  - Consumo de API para dados de Pokémons.

## Como Executar 🚀

### Pré-requisitos ✅
- Node.js instalado
- Gerenciador de pacotes npm ou yarn

### Passos 📝
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git

2. Acesse o diretório do projeto:
   
bash
   cd pokemon-explorer


3. Instale as dependências:
   
bash
   npm install
   # ou
   yarn install


4. Inicie o servidor de desenvolvimento:
   
bash
   npm start
   # ou
   yarn start


5. Abra o navegador e acesse:
   
http://localhost:3000


## Estrutura de Arquivos 📂

src/
├── assets/          # Imagens e ícones
├── components/      # Componentes reutilizáveis
│   ├── Header/      # Cabeçalho da aplicação
│   ├── Loading/     # Indicador de carregamento
│   ├── PokemonList/ # Lista de Pokémons
│   ├── SearchBar/   # Barra de pesquisa
│   └── AddButton/   # Botão de adicionar ao time
├── pages/
│   ├── Home/        # Página inicial
│   └── PokemonDetails/ # Página de detalhes do Pokémon
├── services/        # Chamadas à API
├── styles/          # Estilos globais e específicos
└── utils/           # Funções utilitárias



## Contribuição 🤝
Contribuições são bem-vindas! Para contribuir:
1. Faça um fork do repositório.
2. Crie uma nova branch:
   
bash
   git checkout -b minha-feature

3. Faça suas alterações e commit:
   
bash
   git commit -m "Minha nova feature"

4. Envie para sua branch remota:
   
bash
   git push origin minha-feature

5. Abra um Pull Request.

## Licença 📜
Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para mais detalhes.
