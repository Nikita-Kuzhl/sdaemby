const { News } = require('../db')
const moment = require('moment')
class NewsController {
  async getAll(req, res) {
    const { page } = req.query
    const totalItems = await News.count()
    const offset = (page - 1) * 9
    const news = await News.findAll({ limit: 9, offset })
    setTimeout(
      () =>
        res
          .send({
            totalItems: totalItems,
            news,
            totalPages: Math.ceil(totalItems / 9),
            currentPage: Number(page),
          })
          .status(200),
      2000
    )
  }
  async add(req, res) {
    const { name, text } = req.body
    const date = moment(Date.now()).locale('ru').format('LL').toString()
    await News.create({
      name,
      text,
      img: '/apartments/1.png',
      date: date,
    })
    res.send({ message: 'ok' }).status(200)
  }
  async getById(req, res) {
    const id = req.params.id
    const news = await News.findOne({ where: { id } })
    setTimeout(() => res.send(news).status(200), 2000)
    // res.send(news).status(200);
  }
  async getThree(req, res) {
    const news = await News.findAll({ limit: 3 })
    setTimeout(() => res.send(news).status(200), 2000)
    // res.send(news).status(200);
  }
}
module.exports = new NewsController()
