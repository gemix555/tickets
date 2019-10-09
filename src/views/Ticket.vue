<template>
  <div class="about">
    {{oneId}}
    <div class="row">
        <div class="custom-control custom-radio">
          <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
          <label class="custom-control-label btn btn-info" for="customRadio1">Самый дешевый</label>
        </div>
        <div class="custom-control custom-radio">
          <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input">
          <label class="custom-control-label btn btn-warning" for="customRadio2">Самый быстрый</label>
        </div>
        <div class="row">
          <table class="table table-borderless">
                <thead>
                  <tr>
                    <th scope="col">13 400 Р</th>
                    <th scope="col"></th>
                    <th scope="col">S7 Logo</th>
                  </tr>
                </thead>
                <tbody>

                  <tr>
                    <td><span>MOW – HKT</span>10:45 – 08:00</td>
                    <td><span>В пути</span>21ч 15м</td>
                    <td><span>2 пересадки</span>HKG, JNB</td>
                  </tr>
                  <tr>
                    <td><span>MOW – HKT</span>11:20 – 00:50</td>
                    <td><span>В пути</span>13ч 30м</td>
                    <td><span>1 пересадка</span>HKG</td>
                  </tr>
                
                </tbody>
              </table>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ticket',
  created() {
    this.$store.dispatch('fetchId');
  },
  computed:{
    oneId() {
       return this.$store.getters.onticketId
    }
  }
}
</script>
