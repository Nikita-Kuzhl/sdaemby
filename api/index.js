const express = require('express')
const app = express()
const cors = require('cors')

const userRouter = require('./routes/User')
const newsRouter = require('./routes/News')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use('/', express.static('./assets'))
app.use('/user', userRouter)
app.use('/news', newsRouter)

app.listen(8080, () => console.log('Server listen on port 8080'))
