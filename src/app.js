const utils = require('./utils')
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const currentDir = __dirname

const app = express();
const PORT = 3001; // ou a porta de sua escolha

app.use(cors()); // Adicione esta linha para permitir todas as origens
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Running at port ${PORT}`);
});

// GET
app.get('/api/finance', async (req, res) => {
  try {
    const response = await axios.get('https://api.hgbrasil.com/finance?key=4233ee20');
    console.log(response)
    res.json(response.data);
  } catch (error) {
    console.log('Erro')
    res.status(500).json({ error: 'Erro ao obter dados da API externa' });
  }
});

// POST
app.post('/register', (req, res) => {
  const { name, email, password } = req.body
  const usersFile = utils.read(`${currentDir}/users/users.json`)
  const existingUser = usersFile.find( user => user.email === email)

  if (!name) {
    res.status(400).send({ message: `Nome faltando.` })
  } else if (!email) {
    res.status(400).send({ message: `Email faltando.` })
  } else if (!password) {
    res.status(400).send({ message: `Senha faltando` })
  } else if (existingUser) {
    res
      .status(401)
      .send({
        message: `Email já cadastrado!`
      })
  } else {
    utils.write (`${currentDir}/users/users.json`, { name, email, password }, usersFile)
    res.status(200).send({ message: `Usuário criado com sucesso!` })
  }
})

app.post('/login', (req, res) => {
  const { email, password } = req.body
  const usersFile = utils.read(`${currentDir}/users/users.json`)
  const validEmail = usersFile.find( user => user.email === email)
  const validPassword = usersFile.find( user => user.password === password)

  if (!validEmail) {
    res.status(400).send({ message: 'Email incorreto!'})
  } else if (!validPassword) {
    res.status(400).send({ message: 'Senha incorreta!'})
  } else {
    res.status(200).send({ message: 'Logado!', ok: true })
  }
})