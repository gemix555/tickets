import * as TicketServices from '@/services/TicketServices';

export const fetchId = ({commit}) => {
    return TicketServices.fetchId()
    .then((response) => {
        console.log('Data', response);
        
        const ticketId = response;
        commit('TicketId', ticketId);
    })
}

export const fetchTickets = ({commit}, id) => {
    return TicketServices.fetchTickets(id)
    .then((response) => {
        console.log('Data Tikets', response.data);
        
        const tickets = response.data;
        commit('Tickets', tickets);
    })
}