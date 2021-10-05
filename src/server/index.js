require('dotenv').config()
const mockAPIResponse = require('./mockAPI.js')
const key_API = process.env.KEY_API
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1'
const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const axios = require('axios')


app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(express.static('dist'))
app.use(cors())



app.get('/', function (req, res) {
    res.sendFile(path.resolve('src/client/views/index.html'))
})

app.post('/url-data', async (req, res) => {

    const url = req.body.url

    const url_key = `${baseURL}?key=${key_API}&url=${url}&lang=en`

    const { data: { sentence_list, score_tag, agreement, subjectivity, confidence, irony } } = await axios(url_key)

    res.send({

        text: sentence_list[0].text || '',
        score_tag: score_tag,
        agreement: agreement,
        subjectivity: subjectivity,
        confidence: confidence,
        irony: irony,
    })

})


app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.listen(8082, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${8082}!`)
})


module.exports= app
