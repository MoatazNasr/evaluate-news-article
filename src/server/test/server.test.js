const req = require('supertest')
const app = require('../index')

it('GET / route,it checks that get sending HTML ', () => {

    return req(app).get('/').send('html')

        .then(response => {

            expect(response.statusCode).toEqual(200)

        })
})


