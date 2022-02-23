const express = require('express')
const serveStatic = require('serve-static')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000

const englishModel = require('./model/english')
const italianModel = require('./model/italian')

if (process.env.NODE_ENV !== 'production') {
	app.use(cors())
}

app.use(serveStatic(__dirname + '/dist'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json());

app.use('/api/english', englishModel)
app.use('/api/italian', italianModel)


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))