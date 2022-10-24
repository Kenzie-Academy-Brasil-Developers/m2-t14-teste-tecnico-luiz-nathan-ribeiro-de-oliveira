## Introdução

Temos um codigo parcialmente pronto, porém está cheio de erros, sua função será concertar todos os erros da aplicação.

> Temos cerca de 2 erros por funções 

## Funcionalidades

* **consumirApi** - Faz um fetch do tipo GET em uma API de receitas e retorna um array de elementos - Não tem erro na URL

* **filtrarApiPorNome** - Recebe os dados da função **consumirApi** e filtra por todos aqueles que tenham o nome "Mioge" e retorna um array de elementos. 

* **adicionarDadoAoLocalStorage** - Recebe dados da função **filtrarApiPorNome** e armazena esse dado no localStorage com a chave "@kenzie:recipe", função sem retorno

* **buscarDadosDoLocalStorage** - Não recebe dados de nenhuma função, apenas captura os dados armazenados no localStorage pela chave "@kenzie:recipe" e retornar esses valores.

* **renderizarNaTela** - Recebe dados da função **buscarDadosDoLocalStorage**, seleciona o container do html e adiciona uma li para cada item retornado da função **buscarDadosDoLocalStorage** adicionado no container.

> Não será necessário acionar nenhuma função no escopo global, fora as que já estão acionadas

### Qualquer duvida procure o aplicador!