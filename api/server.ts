import http from 'http'
import app from './app.ts'

const PORT = process.env.PORT || 33333
const server = http.createServer(app)

server.listen(8080, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}/`)
})