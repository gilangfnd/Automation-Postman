describe('Get Retrieves user comments', () => {
    it('Verify the list users will display', () => {
      cy.request({
        method: 'GET',
        url: 'https://gorest.co.in/public/v2/posts/32/comments'
      }).as('users')
      cy.get('@users').its('status').should('equal', 200)
      cy.get('@users').its('headers').its('content-type')
        .should('include', 'application/json; charset=utf-8')
    })
})