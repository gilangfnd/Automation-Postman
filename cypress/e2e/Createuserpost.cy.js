describe('post user request', () => {
    let accessToken = '007526d9efdbc07e084ff7a6d4cfcc90588fbe20641c00faebf45a7f3b2eaf33'
       it.only('create user test', () => {
   
               cy.request({
                   method: 'POST',
                   url: 'https://gorest.co.in/public/v2/users/32/posts',
                   headers: {
                       'Authorization': 'Bearer ' + accessToken
                   },
                   body: {
                    "title": "Membuat User baru",
                    "body": "cara membuat user baru"
                    }
      
               }).then((res)=>{
                   cy.log(JSON.stringify(res))
                   expect(res.status).to.eq(201)
                   expect(res.body).has.property('title', 'Membuat User baru')
                   expect(res.body).has.property('body', 'cara membuat user baru')
               })
       })
   })