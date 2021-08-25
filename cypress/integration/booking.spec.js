/// <reference types="cypress" />

import req from '../support/api/requests'
import schemas from '../support/api/schemas'
import assertions from '../support/api/assertions'

describe('Booking', () => {
    before(() => {
        req.doAuth()
    });
    it('Validar contrato do GET Booking @contract', () => {

       req.getBooking().then(getBookingResponse =>{
        assertions.validateContractOf(getBookingResponse, schemas.getBookingSchemas())
        })
        
    });
    it('Criar reserva com sucesso @functional', () => {
        req.postBooking().then(postBookingResponse =>{
            assertions.shouldHaveStatus(postBookingResponse,200)
            assertions.shouldBookingIdBePresent(postBookingResponse)
            assertions.shouldHaveDefaultHeaders(postBookingResponse)
            assertions.shouldHaveContentTypeAppJson(postBookingResponse)
            assertions.shouldDurationBeFast(postBookingResponse)
        })
    });

    it('Tentar alterar uma reserva sem token @functional', () => { 
        req.postBooking().then(postBookingResponse =>{
            
            req.updateBookingWithoutToken(postBookingResponse).then(putBookingResponse => {
                assertions.shouldHaveStatus(putBookingResponse, 403)
            })
        })
    });

    it('Tentar alterar uma reserva inexistente @functional', () => { 
        req.updateInvalidBooking().then(putBookingResponse => {
            assertions.shouldHaveStatus(putBookingResponse, 405)
        })
    })

    it('Tentar alterar uma reserva com token inválido @functional', () => { 
        req.postBooking().then(postBookingResponse =>{  
            req.updateBookingWithInvalidToken(postBookingResponse).then(putBookingResponse => {
                assertions.shouldHaveStatus(putBookingResponse, 403)
            })
        })
    })

    it('Alterar uma reserva com sucesso @functional', () => {
        req.postBooking().then(postBookingResponse =>{
            req.updateBooking(postBookingResponse).then(putBookingResponse => {
                assertions.shouldHaveStatus(putBookingResponse, 200)
            })
        })

    });

    it('Excluir uma reserva com sucesso @functional', () => {
        req.postBooking().then(postBookingResponse =>{
            req.deleteBooking(postBookingResponse).then(deleteBookingResponse =>{
                assertions.shouldHaveStatus(deleteBookingResponse, 201)
            })
        })
    });

    it('Tentar excluir uma reserva inexistente @functional', () => {
        req.deleteInvalidBooking().then(deleteBookingResponse =>{
            assertions.shouldHaveStatus(deleteBookingResponse, 405)
        })
    })

    it('Tentar excluir uma reserva sem token @functional', () => {
        req.postBooking().then(postBookingResponse =>{
            req.deleteBookingWithoutToken(postBookingResponse).then(deleteBookingResponse =>{
                assertions.shouldHaveStatus(deleteBookingResponse, 403)
            })
        })
    });

    it('Tentar excluir uma reserva com token inválido @functional', () => {
        req.postBooking().then(postBookingResponse =>{
            req.deleteBookingWithInvalidToken(postBookingResponse).then(deleteBookingResponse =>{
                assertions.shouldHaveStatus(deleteBookingResponse, 403)
            })
        })
    });

});