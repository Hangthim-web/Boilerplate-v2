import { config } from 'dotenv'
import cors from 'cors'
import express, { Request, Response } from 'express'
import crypto from 'crypto'
import usersRouter from '../routes/user.routes'

config()

const aVAr = express()

console.log('Hello this is me')

aVAr.use(express.json())
aVAr.use(express.urlencoded({ extended: true }))
aVAr.use(cors())

interface Todo {
    id: string
    name: string
    active: boolean
}

// interface TodoRequestBody {
//     name: string
//     active: boolean
// }

const users: Todo[] = [
    { id: crypto.randomUUID(), name: 'just a thing', active: true },
]

aVAr.get('/users', usersRouter)

export default aVAr
