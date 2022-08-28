const { News } = require('../db')
const moment = require('moment')
const { Op } = require('sequelize')
class NewsController {
  async getAll(req, res) {
    const { page, search } = req.query
    const totalItems = await News.count()
    const offset = (page - 1) * 9
    const news = await News.findAll({
      limit: 9,
      offset,
      where: search && { name: { [Op.like]: '%' + search + '%' } },
    })
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
      2000,
    )
  }
  async add(req, res) {
    const name = [
      'Линия Сталина: суровый отдых в усадьбах  на сутки',
      'Аренда квартиры посуточно',
      'Дворцово-парковый комплекс Чапских',
    ]
    const date = moment(Date.now()).locale('ru').format('LL').toString()
    await News.create({
      name: name[Math.floor(Math.random() * 3)],
      text: 'Итак, утром вы выезжаете в путь по Молодеченской трассе. Если автомобиля у вас нет - садитесь на маршрутку в сторону Молодечно от железнодорожного вокзала. Остановка называется «Линия Сталина» - да-да, именно здесь вы и проведёте ближайшие несколько часов, а вероятнее всего – останетесь до самого вечера.\n \n«Линия Сталина» - это уникальный музейный комплекс, располагающийся под открытым небом. Поэтому желательно приезжать сюда в хорошую погоду. Его территория поистине огромна: целых 26 га. Такое название дано музею неспроста: «Линией Сталина» в 20е-30е гг. XX века именовали цепь укреплений, созданную для защиты государственной границы СССР. Комплекс же построен лишь в 2005 году – к шестидесятой годовщине Победы в Великой Отечественной войне.\n \nЕсли вы заранее позаботились о том, чтобы снять усадьбу на сутки в направлении Молодечно, то можете провести в музейном комплексе хоть целый день. Здесь действительно есть на что посмотреть: ДОТы, испещрённые следами немецких снарядов, окопы, противотанковые заграждения, зенитные пушки, бронетехника… Вы встретите даже элементы ракетных войск – и всё это не муляжи, а настоящие боевые орудия! За отдельную плату вам предложат пострелять из винтовки и пулемёта, а также прокатиться на танке. Проголодались? Загляните в кафе и насладитесь сытным домашним обедом.\n \nПосетить «Линию Сталина» будет интересно как взрослым, так и детям. Особенно мальчишкам! Уставшие от впечатлений, они будут рады вместо долгой дороги домой остановиться на ночь в уютном современном коттедже. На сайте можно выбрать и снять посуточно наиболее удобный для вас вариант. Проведите незабываемые выходные за городом – приезжайте в «Линию Сталина»!\n \nОтличная усадьба в 10 км от Линии Сталина.',
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
  async getFive(req, res) {
    const news = await News.findAll({ limit: 5 })
    setTimeout(() => res.send(news).status(200), 2000)
    // res.send(news).status(200);
  }
}
module.exports = new NewsController()
