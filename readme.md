<h1 align="center"> Neko </h1>
<img id="neko" src="images/Logos/new%20logo.png" alt="Neko - Logo" width='200px'>
<br>
<br>
<h2 align="left"> Sobre o Projeto</h2>

O projeto Neko é um sistema em desenvolvimento da equipe grupo 3 da disciplina de Engenharia do Conhecimento do primeiro e segundo período do curso bacharelado de Engenharia de Software da Faculdade Católica do Tocantins.

<br><br>
<h2>Introdução</h2>
Nossa proposta é desenvolver uma aplicação de agendamentos que tem como público alvo prestadores de serviços estéticos.
Tendo em vista nosso público algo, nós fizemos pesquisas, questionários e entrevistas com eles para termos a certeza de que atenderíamos todas as suas necessidades.
Nós fizemos uma pesquisa de campo com as aplicações já consolidadas no mercado para conseguir identificar as principais deficiências que possuem em seus sistemas e as principais funcionalidades que o mercado necessita.

<br><br>
<h2>Ferramentas utilizadas</h2>
<br>
<img class="logos" style="width:50px; height:50px;" src="Images/Logos%20Ferramentas/vscode.png" alt="Logo VS Code"> - Editor de código-fonte;
<br><br>
<img class="logos" style="width:50px; height:50px;" src="Images/Logos%20Ferramentas/github.png" alt="Logo Git Hub"> - Plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git;
<br><br>
<img class="logos" style="width:50px; height:50px;" src="Images/Logos%20Ferramentas/html.png" alt="Logo HTML5"> - Linguagem de marcação para desenvolvimento WEB;
<br><br>
<img class="logos" style="width:50px; height:50px;" src="Images/Logos%20Ferramentas/css.png" alt="Logo CSS3"> - Linguagem de desígner gráfico para estilizar páginas HTML;
<br><br>
<img class="logos" style="width:50px; height:50px;" src="Images/Logos%20Ferramentas/javascript.png" alt="Logo Java Script"> - Linguagem de Script usada para realizar funcionalidades dentro de um desenvolvimento WEB;
<br><br>
<img class="logos" style="width:50px; height:50px;" src="Images/Logos%20Ferramentas/postgresql.png" alt="Logo PostgreSql"> - PostgreSQL é um sistema gerenciador de banco de dados objeto relacional, desenvolvido como projeto de código aberto;
<br><br>
<img class="logos" style="width:50px; height:50px;" src="Images/Logos%20Ferramentas/figma.png" alt="Logo Figma"> - Figma é um editor gráfico de vetor e prototipagem de projetos de design tanto WEB quanto Mobile;
<br><br>
<img class="logos" style="width:50px; height:50px;" src="Images/Logos%20Ferramentas/drawio.png" alt="Logo Draw.io"> - O diagrams.net é um software de desenho gráfico multiplataforma gratuito e de código aberto;
<br><br>
<img class="logos" style="width:50px; height:50px;" src="Images/Logos%20Ferramentas/lucidchart.png" alt="Logo LucidChart"> - O Lucidchart é um aplicativo de diagramação baseado na web que permite aos usuários colaborar visualmente no desenho, revisão e compartilhamento de gráficos e diagramas e melhorar processos, sistemas e estruturas organizacionais;

<br>
<br>
<h2>Funcionalidades</h2>
<br>
<ul>
    <li>Selecionar serviços: 
o usuário “Cliente” poderá selecionar os serviços listados no estabelecimento.
</li>

<li>Selecionar horários:
O usuário “Cliente” poderá selecionar o horário que estiver disponível para criar o agendamento.
</li>

<li>Visualizar estabelecimentos:
O usuário “Cliente” poderá visualizar uma lista de estabelecimentos que oferecem serviços.
</li>

<li>Realizar agendamento:
O usuário “Cliente” após escolher os serviços e o horário, poderá realizar o agendamento.
</li>

<li>Visualizar agendamentos:
O usuário “Cliente” poderá visualizar o histórico de agendamentos e também como seu status (concluído, cancelado ou ativo).
</li>

<li>Cancelar agendamento:
Se o agendamento estiver com status “ativo”, o usuário “Cliente” poderá cancelar o agendamento
</li>

<li>Barra de pesquisa:
O usuário “Cliente” poderá buscar por um estabelecimento em específico se pesquisar o seu nome na barra de pesquisa.
</li>

<li>Filtro:
O usuário “Cliente” Poderá aplicar diferentes tipos de filtro para ordenar as visualizações dos estabelecimentos.
</li>

<li>Editar informações do estabelecimento:
O usuário “Prestador de serviços” poderá editar as informações do seu estabelecimento. Sendo obrigatório inserir todas as informações no primeiro acesso.
</li>

<li>Gerenciar agendamentos: O usuário “Prestador de serviços” poderá editar ou cancelar agendamentos realizados pelo usuário “Cliente”.
</li>

<li>Editar os horários:
O usuário “Prestador de serviços” poderá editar os horários que será disponível para o usuário “Cliente” realizar o agendamento.
</li>

<li>Gerenciar serviços:
O usuário “Prestador de serviços” poderá criar, editar e excluir serviços do estabelecimento
</li>

<li>Notificações:
Em cada alteração que compromete um agendamento realizada por alguma das partes envolvidas, acontecerá um envio de notificação para as partes afetadas.
</li>

</ul>
<br>

<h2> Database </h2>
<br>

<a href="https://github.com/Alves-Andre/NekoSite/blob/main/Database/Modelo%20Lógico.png"> Modelo Lógico </a>
<br>
<a href="https://github.com/Alves-Andre/NekoSite/blob/main/Database/database.sql"> Arquivo SQL </a>
=======
</ul>

<h2> 1.0 Instruções para conseguir rodar o projeto </h2>
<br>
1 - Instalar o node e as dependências npm
Acessando o link https://nodejs.org/en/download/ você pode fazer o download e realizar a instalação do node.

1.2 Habilitar o path do npm

1.2.1 No windows acesse o painel de "editar as variáveis de ambiente do sistema".
1.2.2 Acesse o painel de avançado
1.2.3 Acesse a opção "Variáveis de ambiente"
1.2.4 No painel de "Variáveis de usuário para teste" acesse a opção chamada "PATH" e clique em "Editar"
1.2.5 Agora clique em "Novo" e insira o caminho em que o node foi instalado. Normalmente fica no padrao "C:\Users\{nome_de_usuario}\AppData\Roaming\npm"
1.2.6 Clique em OK e confirme
<br>
2 - Instalar o PostgreSQL
O vídeo a seguir mostra passo a posso de como instalar o postgresql no Windows
link: https://www.youtube.com/watch?v=L_2l8XTCPAE&t=663s&ab_channel=HashtagProgramação
<br>
3 - instalar o nodemon 
digite no seu terminal o seguinte comando:
    npm install nodemon -g
<br>
4 - Instalar o pg
digite no seu terminal o seguinte comando:
    npm install pg -g
<br>
5 - Criar o banco de dados
5.1 - Abra o pgadmin 4 (SGBD do PostgreSQL)
5.2 - Crie um DataBase
5.3 - Rode o arquivo que está na pasta "/database/database.sql" para que o banco seja criado
<br>
6 - Configure a senha nos arquivos JavaScript

Nos arquivos: cadastrar.js | logar.js e verificar.js
existem a seguinte constante:

const cliente = new Client({
        user: "postgres",
        password: "#",
        host: "127.0.0.1",
        port: 5432,
        database: "Neko"});

No lugar do "#" você coloca a senha do seu banco de dados que foi configurada no momento da instalação.
<br>
7 - Instalar o express
7.1 - Intale o express com o seguinte comando: "npm install express -g"
7.2 - INstale o express sesssion com o seguinte comando: "npm install express-session"
<br>
8 - Rodar o sistema
8.1 - Para rodar o sistema acesse a pasta raiz que está o arquivo "main.js" pelo terminal
8.2 - Assim que acessar digite o seguinte comando: "nodemon main.js"

<h2> Vídeo mostrando o funcionamento parcial do projeto</h2>
<br>
Acesse o vídeo clicando <a href="https://github.com/Alves-Andre/NekoSite/blob/main/Video/TerceiroSplit.mp4"> aqui. </a>