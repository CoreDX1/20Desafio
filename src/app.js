import express from 'express'
import path from 'path'
import indexRouter from './routes/index.routes'

const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(indexRouter)

export default app;
