describe('post user request', () => {
    let accessToken = '007526d9efdbc07e084ff7a6d4cfcc90588fbe20641c00faebf45a7f3b2eaf33'
       it.only('create user test', () => {
   
               cy.request({
                   method: 'POST',
                   url: 'https://gorest.co.in/public/v2/posts/32/comments',
                   headers: {
                       'Authorization': 'Bearer ' + accessToken
                   },
                   body: {
                    "name": "create a post comments",
                    "email": "belajarcomment@gmail.com",
                    "body": "membuat creat a post comments"
                   }
                }).then((res)=>{
                   cy.log(JSON.stringify(res))
                   expect(res.status).to.eq(201)
                   expect(res.body).has.property('name', 'create a post comments')
                   expect(res.body).has.property('email', 'belajarcomment@gmail.com')
                   expect(res.body).has.property('body', 'membuat creat a post comments')
               })
       })
   })