class Requests { 
    GetPing(){
        return cy.request({
            method: 'GET',
            url: 'ping',
            
        })

    }

    getBooking(){
        return cy.request({
            method: 'GET',
            url: 'booking/1',

        })
    }
    postBooking(){
        return cy.request({
            method: 'POST',
            url: 'booking',
            body: {
                "firstname" : "Jim",
                "lastname" : "Brown",
                "totalprice" : 111,
                "depositpaid" : true,
                "bookingdates" : {
                    "checkin" : "2020-01-01",
                    "checkout" : "2020-01-02"
                },
                "additionalneeds" : "Breakfast"
            }
        })
    }

    updateBookingWithoutToken(response){
        const id = response.body.bookingid

         return cy.request({
            method: 'PUT',
            url: `booking/${id}`,
            body: {
                "firstname": "Jim",
                "lastname": "James",
                "totalprice": 111,
                "depositpaid": false,
                "bookingdates": {
                  "checkin": "2020-01-01",
                  "checkout": "2020-01-02"
                },
                "additionalneeds": "Lunch"
              },
              failOnStatusCode: false

        })
    }

    updateBooking(response){
        const id = response.body.bookingid

         return cy.request({
            method: 'PUT',
            url: `booking/${id}`,
            headers: {
                cookie: `token=${Cypress.env('token')}` 
            },
            body: {
                "firstname": "Jim",
                "lastname": "James",
                "totalprice": 111,
                "depositpaid": false,
                "bookingdates": {
                  "checkin": "2020-01-01",
                  "checkout": "2020-01-02"
                },
                "additionalneeds": "Lunch"
              },
            failOnStatusCode: false
        })
    }

    updateInvalidBooking(){
        
         return cy.request({
            method: 'PUT',
            url: `booking/9999`,
            headers: {
                cookie: `token=${Cypress.env('token')}` 
            },
            body: {
                "firstname": "Jim",
                "lastname": "James",
                "totalprice": 111,
                "depositpaid": false,
                "bookingdates": {
                  "checkin": "2020-01-01",
                  "checkout": "2020-01-02"
                },
                "additionalneeds": "Lunch"
              },
            failOnStatusCode: false
        })
    }

    updateBookingWithInvalidToken(response){
        const id = response.body.bookingid

         return cy.request({
            method: 'PUT',
            url: `booking/${id}`,
            headers: {
                cookie: 'token=abc123'
            },
            body: {
                "firstname": "Jim",
                "lastname": "James",
                "totalprice": 111,
                "depositpaid": false,
                "bookingdates": {
                  "checkin": "2020-01-01",
                  "checkout": "2020-01-02"
                },
                "additionalneeds": "Lunch"
              },
            failOnStatusCode: false
        })
    }

    postAuth(){
        return cy.request({
            method: 'POST',
            url: 'auth',
            body: {
                "username" : "admin",
                "password" : "password123" 
            }
        })
    }
    doAuth(){
        this.postAuth().then(authResponse =>{
            const token = authResponse.body.token
            Cypress.env('token', token)
        })
    }

    deleteBooking(response){
        const id = response.body.bookingid

        return cy.request({
            method: 'DELETE',
            url: `booking/${id}`,
            headers: { 
                Cookie: `token=${Cypress.env('token')}`
            },
            failOnStatusCode: false
        });

    }
    
    deleteInvalidBooking(){
        return cy.request({
            method: 'DELETE',
            url: 'booking/99999',
            headers: { 
                Cookie: `token=${Cypress.env('token')}`
            },
            failOnStatusCode: false
        });

    }

    deleteBookingWithInvalidToken(response){
        const id = response.body.bookingid

        return cy.request({
            method: 'DELETE',
            url: `booking/${id}`,
            headers: { 
                Cookie: 'token=abc123'
            },
            failOnStatusCode: false
        });

    }

    deleteBookingWithoutToken(response){
        const id = response.body.bookingid

        return cy.request({
            method: 'DELETE',
            url: `booking/${id}`,
            failOnStatusCode: false
        });
    }
}

export default new Requests()