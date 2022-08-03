const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User } = require('../db')
class UserController {
  async signup(req, res) {
    const { login, password, email } = req.body
    const hash_password = bcrypt.hashSync(password, 7)
    await User.create({
      login,
      password: hash_password,
      email,
      name: 'Владимир',
      telephone: '+375 (29) 291-14-44',
      avatar: '/avatar/boy.png',
    })
    return res.send('Succes').status(200)
  }
  async signin(req, res) {
    const { login, password } = req.body
    const user = await User.findOne({ where: { login } })
    if (!user) return res.send('Пользователь не найден').status(402)
    const confirmPass = bcrypt.compareSync(password, user.password)
    if (!confirmPass) return res.send('Неверный пароль').status(402)
    const token = jwt.sign({ id: user.id, login, email: user.email }, 'sdaem', {
      expiresIn: '24h',
    })
    res.status(200).send({ token })
  }
  async getInfo(req, res) {
    const token = req.headers.authorization
    if (!token) return res.send('Not Token').status(402)
    const decoded = jwt.verify(token, 'sdaem')
    const user = await User.findOne({ where: { id: decoded.id } })
    res.send(user).status(200)
  }
}
module.exports = new UserController()
