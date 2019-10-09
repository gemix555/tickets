<template>
  <div class="row">
    <div class="col-4"><Search/></div>
    <div class="col-8"><Ticket/></div>
  </div>
</template>

<script>
import Ticket from '@/views/Ticket.vue'
import Search from '@/components/Search.vue'

export default {
  name: 'tikets',
  components: {
    Ticket, Search
    
  }
}
</script>
