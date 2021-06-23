/// <reference types="cypress" />

import { eq } from "cypress/types/lodash"

describe('Green Commute',()=>{
    it('find jobs',()=>{
        cy.visit('http://bc15-green-commute.dev-apps.io/')

        cy.get(`[id^="mui-"]`).click()
        cy.get('div[aria-controls^="mui-"]').type('Hyderabad{downarrow}{enter}')

        cy.get(':nth-child(1) > [data-testid=button]').click()

        cy.get(`[id^="mui-"]`).click()

        cy.get('div[aria-controls^="mui-"]').type('Hyderabad{downarrow}{enter}')

        cy.get(':nth-child(1) > [data-testid=button]').click()

        cy.get(`[id^="mui-"]`).click()

        cy.get('input[aria-controls^="mui-"]').type('Software Engineer{downarrow}{enter}')

        cy.get(`[id^="mui-"]`).click()

        cy.get('input[aria-controls^="mui-"]').type('Software{downarrow}{enter}')

        cy.get('[data-testid=button]').click()

        cy.get('#root > div > div > div.MuiGrid-root.jss49.MuiGrid-container.MuiGrid-item.MuiGrid-grid-xs-10 > div.MuiGrid-root.MuiGrid-container.MuiGrid-item.MuiGrid-grid-xs-12 > div > div > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-9.MuiGrid-item.MuiGrid-justify-xs-center')
          .children().first().click()
       
        cy.get('.MuiGrid-root > .MuiButton-outlined').click()

        cy.get(':nth-child(3) > .MuiListItemText-root > .MuiTypography-root').click()

        cy.get('#root > div > div > div.MuiGrid-root.jss128.MuiGrid-container.MuiGrid-item.MuiGrid-grid-xs-10 > div.MuiGrid-root.MuiGrid-container.MuiGrid-item.MuiGrid-grid-xs-12 > div > div > div')
          .children().first().click()

        cy.get('.MuiButton-outlined').click()
        
        cy.get(':nth-child(2) > .MuiListItemText-root > .MuiTypography-root').click()

        cy.get('[data-testid=filterButton]').click()

        cy.get(':nth-child(3) > [data-testid=filter-type] > :nth-child(2) > .jss189').click()

       

        cy.get(':nth-child(2) > [data-testid=button]').click()
        
    })
})