describe('Get Users List', () => {
    it('Verify the list users will display', () => {
      cy.request({
        method: 'GET',
        url: 'https://gorest.co.in/public/v1/users'
      }).as('users')
      cy.get('@users').its('status').should('equal', 200)
      cy.get('@users').its('headers').its('content-type')
        .should('include', 'application/json; charset=utf-8')
    })
})