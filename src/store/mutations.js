export const TicketId = (state, ticketId) => {
console.log('Mutation', ticketId);

    state.ticketId = ticketId
}

export const Tickets = (state, tickets) => {
    state.tickets = tickets
}