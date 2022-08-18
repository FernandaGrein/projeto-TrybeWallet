# projeto-TrybeWallet
Este repositório é uma cópia do projeto TrybeWallet que realizei com a trybe

O Projeto TrybeWallet é parte dos projetos do módulo de Front-end da trybe.
Este projeto foi realizado utilizando JavaScript, Html e Css, feito utilizando as Bibliotecas: do React e do Redux, 
complementando com React-Redux e o Redux-thunk.

É possível acessar o repositório clonando-o com o comando git@github.com:FernandaGrein/projeto-TrybeWallet.git
entre na pasta com o comando cd trybewallet, 
instale as dependências com o npm install 
e é possível rodar o projeto no navegador com o comando npm start.

Foram seguidos os seguintes requisitos nesse projeto:
- Criado uma página de Login, que recebe o email e a senha do usuário e possibilita logar na página da carteira
- Na página da carteira foi criado com cabeçalho contendo o email do usuário, o valor total das despesas adicionadas na carteira
e a moeda/cambio que está sendo utilizado na conversão dos valores.
- Foi criado um formulário pelo qual é possível adicionar uma despesa.
- O formulário possuí inputs para a adição do valor da despesa e sua descrição, e possíbilita selecionar, em qual moeda foi feita a despesa, 
qual a forma de pagamento, e qual a categoria desta.
- Ao salvar a despesa, esta aparece na tela contendo além das informações do formulário, o valor gasto já convertido em real, bem como esse valor 
é acrescido no gasto total que existe no cabeçalho.
- Foi criado também uma tabela de gastos que organiza e salva todas as despesas adicionadas. A tabela possui como colunas a descrição, a categoria,
a forma de pagamento, o valor, a moeda, o câmbio utilizado, o valor convertido, a moeda de conversão e por fim uam coluna que recebe os botões de editar
e excluir cada despesa.
- Foi criado um botão que possíbilita excluir cada uma das despesas, e com a exclusão desta o seu valor é subtraído do valor total presente no cabeçalho.
- Por fim, foi criado um botão que possibilita a edição de cada despesa.
