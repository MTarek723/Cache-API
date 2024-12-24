const express = require('express')
const redis = require('redis')
const axios = require('axios')
const redisClient = redis.createClient()
redisClient.connect()
redisClient.on('connect', ()=>console.log('open'))

const API_URL = 'https://jsonplaceholder.typicode.com/posts'

const app = express()
app.use(express.json())

app.get('/', async (req,res)=> {
    const posts = await redisClient.get('posts')
    if (posts != null) {
        console.log('from cache')
        
        return res.json(JSON.parse(posts))
    }
    const { data } = await axios.get(API_URL)

    redisClient.setEx('posts', 360, JSON.stringify(data))
    console.log('from api')
    res.send(data)
})

app.get('/:id', async(req, res) => {
    const post = await redisClient.get(`posts:${req.params.id}`)
    if (post != null) {
        console.log('from cache')
        
        return res.send(JSON.parse(post))
    }
    const { data } = await axios.get(API_URL+'/'+req.params.id)

    redisClient.setEx(`posts:${req.params.id}`, 360, JSON.stringify(data))
    console.log('from api')
    res.json(data)
})

app.listen(3000)