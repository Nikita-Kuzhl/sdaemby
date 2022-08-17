const express = require('express')
const app = express()
const cors = require('cors')

const userRouter = require('./routes/User')
const newsRouter = require('./routes/News')
const apartmentRouter = require('./routes/Apartment')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use('/', express.static('./assets'))
app.use('/auth', userRouter)
app.use('/news', newsRouter)
app.use('/apart', apartmentRouter)

app.listen(8080, () => console.log('Server listen on port 8080'))
