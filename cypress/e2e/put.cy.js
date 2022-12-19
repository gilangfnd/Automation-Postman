describe('put user request', () => {
let accessToken = '007526d9efdbc07e084ff7a6d4cfcc90588fbe20641c00faebf45a7f3b2eaf33'
let randomText = ""
let testEmail = ""
    it.only('create user test', () => {
        var pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        for (var i = 0; i < 10; i++)
        randomText+=pattern.charAt(Math.floor(Math.random() * pattern.length));
        testEmail = randomText + '@gmail.com'

            cy.request({
                method: 'PUT',
                url: 'https://gorest.co.in/public/v1/users/2301',
                headers: {
                    'Authorization': 'Bearer ' + accessToken
                },
                body: {
                    "name": "gilang update",
                    "email": "gilangupdate78@gmail.com",
                    "gender": "male",
                    "status": "active"
                }
   
            }).then((res)=>{
                cy.log(JSON.stringify(res))
                expect(res.status).to.eq(200)
                expect(res.body.data).has.property('email', 'gilangupdate78@gmail.com')
                expect(res.body.data).has.property('name', 'gilang update')
                expect(res.body.data).has.property('status', 'active')
                expect(res.body.data).has.property('gender', 'male')
            })
    })
})