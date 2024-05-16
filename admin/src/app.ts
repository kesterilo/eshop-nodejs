import * as express from 'express'
import * as cors from 'cors'

const app = express()

app.use(cors({
    origin: ['http://localhost:3000']
}))

app.use(express.json())

app.listen(8000)? console.log(`Listening on port: 8000`) : console.log('failed to setup server')