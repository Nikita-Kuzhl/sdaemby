const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db.sqlite',
})

const User = sequelize.define('user', {
  login: DataTypes.STRING,
  email: DataTypes.STRING,
  name: DataTypes.STRING,
  password: DataTypes.STRING,
  telephone: DataTypes.STRING,
  avatar: DataTypes.STRING,
})
const City = sequelize.define('city', {
  name: DataTypes.STRING,
})
const Area = sequelize.define('area', {
  name: DataTypes.STRING,
})
Area.belongsTo(City)
const Metro = sequelize.define('metro', {
  name: DataTypes.STRING,
})
Metro.belongsTo(City)
const Aparttment = sequelize.define('apartment', {
  outside: DataTypes.STRING,
  img: DataTypes.STRING,
  price: DataTypes.INTEGER,
  rooms: DataTypes.INTEGER,
  square: DataTypes.INTEGER,
  sleepingPlaces: DataTypes.STRING,
  description: DataTypes.STRING,
  status: { type: DataTypes.ENUM('Standart', 'Gold'), defaultValue: 'Gold' },
  gas_stove: { type: DataTypes.ENUM('0', '1'), defaultValue: '0' },
  oven: { type: DataTypes.ENUM('0', '1'), defaultValue: '0' },
  coffee_maker: { type: DataTypes.ENUM('0', '1'), defaultValue: '0' },
  microwave: { type: DataTypes.ENUM('0', '1'), defaultValue: '0' },
  tableware: { type: DataTypes.ENUM('0', '1'), defaultValue: '0' },
  dishwasher: { type: DataTypes.ENUM('0', '1'), defaultValue: '0' },
})
Aparttment.belongsTo(User)
Aparttment.belongsTo(City)
Aparttment.belongsTo(Area)
Aparttment.belongsTo(Metro)
const Cottage = sequelize.define('cottage', {
  outside: DataTypes.STRING,
  price: DataTypes.INTEGER,
  rooms: DataTypes.INTEGER,
  square: DataTypes.INTEGER,
  description: DataTypes.STRING,
})
Cottage.belongsTo(User)
Cottage.belongsTo(City)
Cottage.belongsTo(Area)
Cottage.belongsTo(Metro)

const News = sequelize.define('news', {
  name: DataTypes.STRING,
  text: DataTypes.TEXT,
  date: DataTypes.STRING,
  img: DataTypes.STRING,
})
sequelize
  .sync()
  .then(() => console.log('Success con db'))
  .catch((err) => console.log(`Error connection - ${err}`))

module.exports = { User, City, Area, Metro, Aparttment, News }
