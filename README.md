<h1 align="center">
 Instruções para execução
</h1>

## Passo a passo para rodar a aplicação.

```bash
# 1º Clone este repositório
$ git clone git@github.com:Pjota94/desafio-sharenergy-2023-01.git

# 2º Acesse a branch
$ git checkout paulo-roberto-rangel-paiva

# 3º Abra o terminal e vá para a pasta back-end
$ cd back-end

# 4º Execute os comandos para instalar e rodar o servidor.
$ yarn install

# 5º Adicione a sua string de conexão do mongoDB Atlas no .env e logo após poderá iniciar o servidor.
#Ex: mongodb+srv://<username>:<password>@cluster0.cwmempk.mongodb.net/?retryWrites=true&w=majority (Lembre-se de substituir o <password> pela sua senha de usuário do Mongo Atlas)
$ yarn dev

# 5º Abra um novo terminal e vá para a pasta front-end
$ cd front-end

# 6º Execute os comandos para instalar e iniciar a aplicação
$ yarn install
$ yarn start

# por ultimo pressione y para iniciar na porta 3001.
$ y
```

#### Só é possível entrar na aplicação com o usuário padrão.

### Usuário padrão é:

```
username: desafiosharenergy
password: sh@r3n3rgy
```

## 🛠 Tecnologias Utilizadas

| Front-End         | Back-End |
| ----------------- | -------- |
| React             | Node.js  |
| TypeScript        | Express  |
| Styled-Components | MongoDB  |
| ContextApi        | Mongoose |

## Link do Vídeo

https://youtu.be/NYC8E3POD1s


## Figma

https://www.figma.com/file/o1xy5CAJoPUdJ0kNUcI7Ni/Untitled?node-id=9%3A175&t=L06t6ma84DQ2zNpg-1

