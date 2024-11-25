
# Receitas Digitais

Este aplicativo foi desenvolvido para fornecer receitas médicas digitais e informações associadas ao paciente, médico e tratamentos. O objetivo é tornar mais fácil o acesso a receitas médicas, onde o paciente pode visualizar a receita, obter informações sobre o médico, os medicamentos prescritos e até mesmo encontrar a localização dos estabelecimentos onde os medicamentos podem ser adquiridos.

## Funcionalidades

1. **Exibição de Receita Digital**: O paciente pode visualizar a receita médica digital, com o número da receita e detalhes como o local da consulta.
2. **Informações do Médico**: Detalhes sobre o médico responsável pela prescrição, como nome, especialidade, e link para contato.
3. **Medicamentos**: Lista de medicamentos prescritos, com a opção de encontrar onde comprá-los.
4. **Exames**: Informações sobre exames recomendados pelo médico.
5. **Assinatura Digital**: Assinatura digital do médico no final da receita, validando a autenticidade do documento.
6. **Mapa**: O paciente pode visualizar um mapa com o local para comprar os medicamentos prescritos, facilitando a compra.

## Tecnologias Usadas

- **React Native**: Framework para construção de apps móveis utilizando JavaScript.
- **Expo**: Ferramenta para desenvolvimento de aplicativos React Native sem precisar de configuração nativa.
- **React Navigation**: Biblioteca para navegação entre telas no React Native.
- **react-native-maps**: Biblioteca para exibição de mapas no aplicativo.
- **JSX/React**: Utilização do JSX para estruturar componentes e páginas dinâmicas no app.

## Estrutura do Projeto

- **screens/DetailScreen.js**: Tela principal do aplicativo, onde o usuário pode ver os detalhes da receita, médico, medicamentos e exames.
- **screens/MapScreen.js**: Tela que exibe o mapa com o local para comprar os medicamentos.
- **assets/images**: Imagens usadas para ícones e logotipos no app (ex.: ícones de mapa, assinatura digital).
- **App.js**: Arquivo principal onde a navegação entre as telas é configurada.

## Como Rodar o Projeto

### Pré-requisitos

Certifique-se de ter o **Node.js** e o **Expo CLI** instalados em seu sistema. Caso ainda não tenha o Expo instalado, você pode fazer isso com o seguinte comando:

```bash
npm install -g expo-cli
```

### Rodando o Aplicativo Localmente

1. Clone este repositório para o seu computador:

```bash
git clone https://github.com/seu-usuario/receitas-digitais.git
cd receitas-digitais
```

2. Instale as dependências do projeto:

```bash
npm install
```

3. Inicie o aplicativo no seu emulador ou dispositivo físico com o Expo:

```bash
npm start
```

Isso abrirá uma janela no navegador com um QR code. Escaneie o QR code com o app **Expo Go** para testar no seu dispositivo móvel.

### Rodando no Snack

Caso você queira testar diretamente no **Expo Snack**, basta copiar o código para a plataforma Snack (https://snack.expo.dev/) e testar no ambiente online.

## Funcionalidade de Navegação

A navegação entre as telas é realizada utilizando **React Navigation**. O usuário pode navegar entre a tela de detalhes da receita e a tela do mapa, onde ele pode encontrar locais para comprar os medicamentos.

- **Tela de Detalhes da Receita**: Exibe as informações sobre a receita e o médico.
- **Tela do Mapa**: Exibe um mapa com o local para comprar os medicamentos.
