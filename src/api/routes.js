export const SHOW = {
    /**
     * Request: https://front-test.beta.aviasales.ru/search
       Response: {"searchId":"4niyd"}
    */
     SEARCHID: '/search/',

    /** 
     * Request: https://front-test.beta.aviasales.ru/tickets?searchId=4niyd
         Response: {tickets: [], stop: false}
    */
      
     TICKETS: id => `/tickets?searchId=${id}`

}