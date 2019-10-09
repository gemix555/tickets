import http from '@/api/index';
import{ SHOW } from '@/api/routes';

export const fetchId = () => {
    return http.get(SHOW.SEARCHID)
}

export const fetchTickets = (id) => {
    return http.get(SHOW.TICKETS(id))
}