const { Op } = require('sequelize')
const { Area, City, Metro, Aparttment, User } = require('../db')

class ApartmentController {
  async get(req, res) {
    console.log(req.query)
    const {
      page,
      limit,
      city,
      area,
      metro,
      sleep,
      price_from,
      price_to,
      rooms,
      sort,
      gas_stove,
      oven,
      coffee_maker,
      microwave,
      tableware,
      dishwasher,
    } = await req.query
    const offset = (page - 1) * limit
    let apartment = await Aparttment.findAndCountAll({
      limit,
      offset,
      attributes: [
        'id',
        'outside',
        'price',
        'rooms',
        'square',
        'description',
        'sleepingPlaces',
        'img',
        'status',
        'gas_stove',
        'oven',
        'coffee_maker',
        'microwave',
        'tableware',
        'dishwasher',
      ],
      include: [
        { model: User, attributes: ['name', 'email', 'telephone', 'avatar'] },
        { model: City, attributes: ['id', 'name'] },
        { model: Metro, attributes: ['id', 'name'] },
        { model: Area, attributes: ['id', 'name'] },
      ],
      where: {
        [Op.and]: [
          rooms && { rooms: rooms },
          city && { cityId: city },
          area && { areaId: area },
          metro && { metroId: metro },
          sleep && { sleepingPlaces: sleep.replace(/ /g, '+') },
          price_to && { price: { [Op.lte]: price_to } },
          price_from && { price: { [Op.gte]: price_from } },
          gas_stove === '1' && { gas_stove: gas_stove },
          oven === '1' && { oven: oven },
          coffee_maker === '1' && { coffee_maker: coffee_maker },
          microwave === '1' && { microwave },
          tableware === '1' && { tableware },
          dishwasher === '1' && { dishwasher },
        ],
      },
      order: [
        (!sort && ['id', 'ASC']) ||
          (sort === '1' && ['price', 'ASC']) ||
          (sort === '2' && ['price', 'DESC']),
      ],
    })
    const totalItems = apartment.count
    delete apartment.count
    apartment = apartment.rows
    if (apartment.length) {
      apartment[0].img = [
        apartment[0].img,
        `/apartments/${Math.floor(Math.random() * 3) + 1}.png`,
        `/apartments/${Math.floor(Math.random() * 3) + 1}.png`,
      ]
    }
    setTimeout(
      () =>
        res.send({
          totalItems,
          totalPages: Math.ceil(totalItems / limit),
          currentPage: Number(page),
          apartment,
        }),
      2000,
    )
  }
  async getCity(req, res) {
    const citys = await City.findAll()
    citys.forEach(async (i, ind, arr) => {
      const apartment = await Aparttment.count({ where: { cityId: i.id } })
      return (arr[ind] += Object.assign(i, { count: apartment }))
    })
    citys[0].asd = 1
    res.send(citys)
  }
  async getMetro(req, res) {
    const metro = await Metro.findAll({ where: { cityId: req.params.city } })
    res.send(metro)
  }
  async getArea(req, res) {
    const area = await Area.findAll({ where: { cityId: req.params.city } })
    res.send(area)
  }
  async addPara(req, res) {
    ;[
      { name: 'Минск' },
      { name: 'Гомель' },
      { name: 'Брест' },
      { name: 'Витебск' },
      { name: 'Гродное' },
      { name: 'Могилев' },
    ].map(async (i) => {
      await City.create(i)
    })
    const citys = await City.findAll()
    citys.map((it) => {
      ;[
        { name: 'Заводской', cityId: it.id },
        { name: 'Ленинский', cityId: it.id },
        { name: 'Московский', cityId: it.id },
        { name: 'Октябрьский', cityId: it.id },
        { name: 'Партизанский', cityId: it.id },
        { name: 'Первомайский', cityId: it.id },
        { name: 'Советский', cityId: it.id },
        { name: 'Фрунзенский', cityId: it.id },
        { name: 'Центральный', cityId: it.id },
      ].map(async (i) => {
        await Area.create(i)
      })
      ;[
        { name: 'Московскаая', cityId: it.id },
        { name: 'Уручье', cityId: it.id },
        { name: 'Восток', cityId: it.id },
        { name: 'Пушкинская', cityId: it.id },
        { name: 'Молодежная', cityId: it.id },
        { name: 'Октябрьская', cityId: it.id },
        { name: 'Немига', cityId: it.id },
      ].map(async (i) => {
        await Metro.create(i)
      })
    })
    res.send({ message: 'Ok' })
  }
  async addApar(req, res) {
    const {
      outside,
      price,
      rooms,
      square,
      description,
      areaId,
      metroId,
      cityId,
      sleepingPlaces,
      status = 'Gold',
      gas_stove = '0',
      oven = '0',
      coffee_maker = '0',
      microwave = '0',
      tableware = '0',
      dishwasher = '0',
    } = req.body
    console.log(Aparttment)
    await Aparttment.create({
      outside,
      img: `/apartments/${Math.floor(Math.random() * 3) + 1}.png`,
      price,
      rooms,
      square,
      description,
      sleepingPlaces,
      areaId,
      metroId,
      userId: 1,
      cityId,
      status,
      gas_stove,
      oven,
      coffee_maker,
      microwave,
      tableware,
      dishwasher,
    })
    res.send({ message: 'Ok' })
  }
  async getCountCity(req, res) {
    const { id } = req.params
    const totalItem = await City.count({ where: { id } })
    res.send({ totalItem })
  }
  async addAuto(req, res) {
    const status = ['Standart', 'Gold']
    const sleepValue = ['1', '2', '2+1', '2+2']
    const outside = ['ул. Ленина, 75', 'въезд Славы, 90', 'въезд Чехова, 81', 'пр. Косиора, 69']
    const citys = await City.findAll()

    citys.map(async (ic) => {
      const areas = await Area.findAll({ where: { cityId: ic.id } })
      const metro = await Metro.findAll({ where: { cityId: ic.id } })
      areas.map(async (ia) => {
        metro.map(async (im) => {
          await Aparttment.create({
            outside: outside[Math.floor(Math.random() * outside.length)],
            img: `/apartments/${Math.floor(Math.random() * 3) + 1}.png`,
            price: Math.floor(Math.random() * 400) + 1,
            rooms: Math.floor(Math.random() * 4) + 1,
            square: Math.floor(Math.random() * 200) + 1,
            description:
              'Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры,',
            sleepingPlaces: sleepValue[Math.floor(Math.random() * sleepValue.length)],
            areaId: ia.id,
            metroId: im.id,
            userId: 1,
            cityId: ic.id,
            status: status[Math.floor(Math.random() * status.length)],
            gas_stove: String(Math.floor(Math.random() * 2)),
            oven: String(Math.floor(Math.random() * 2)),
            coffee_maker: String(Math.floor(Math.random() * 2)),
            microwave: String(Math.floor(Math.random() * 2)),
            tableware: String(Math.floor(Math.random() * 2)),
            dishwasher: String(Math.floor(Math.random() * 2)),
          })
        })
      })
    })
    res.send({ message: 'ok' })
  }
}
module.exports = new ApartmentController()
