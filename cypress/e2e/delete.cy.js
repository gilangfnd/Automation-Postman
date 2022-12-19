describe('Delete user request', () => {
    let accessToken = '007526d9efdbc07e084ff7a6d4cfcc90588fbe20641c00faebf45a7f3b2eaf33'
       it.only('create user test', () => {
        
            cy.request({
                method: 'DELETE',
                url: 'https://gorest.co.in/public/v1/users/23',
                headers: {
                    'Authorization': 'Bearer ' + accessToken
                }
                }).then((res)=>{
                expect(res.status).to.eq(204)
            })
    })
                      
})