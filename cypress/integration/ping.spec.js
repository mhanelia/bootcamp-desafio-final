/// <reference types="cypress" />
import req from '../support/api/requests'
import assertions from '../support/api/assertions'

describe('Ping', () => {
    it('Validar que a aplicação está no ar @healthcheck', () => {

        req.GetPing().then(getPingResponse =>{
            assertions.shouldHaveStatus(getPingResponse, 201)
        })
        
    });
});