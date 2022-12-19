describe('Create post user todos', () => {
    let accessToken = '007526d9efdbc07e084ff7a6d4cfcc90588fbe20641c00faebf45a7f3b2eaf33'
       it.only('create user test', () => {
   
               cy.request({
                   method: 'POST',
                   url: 'https://gorest.co.in/public/v2/users/32/todos',
                   headers: {
                       'Authorization': 'Bearer ' + accessToken
                   },
                   body: {
                    "title": "create an new users",
                    "due_on": "2023-01-06T00:00:00.000+05:30",
                    "status": "pending"
                    }
                }).then((res)=>{
                   cy.log(JSON.stringify(res))
                   expect(res.status).to.eq(201)
                   expect(res.body).has.property('title', 'create an new users')
                   expect(res.body).has.property('due_on', '2023-01-06T00:00:00.000+05:30')
                   expect(res.body).has.property('status', 'pending')
               })
       })
})