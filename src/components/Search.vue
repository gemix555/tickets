<template>
<div>
    <h4 class="up">Колличество пересадок</h4>
    <div>
        <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="all">
            <label class="custom-control-label" name="all" for="all">Все </label>
        </div>
    <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="notTransfer">
            <label class="custom-control-label" name="notTtransfer" for="notTransfer">Без пересадок</label>
        </div>
    <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="transfer1">
            <label class="custom-control-label" name="transfer1"  for="transfer1">1 пересадка</label>
        </div>
    <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="transfer2">
            <label class="custom-control-label" name="transfer2" for="transfer2">2 пересадки</label>
        </div>
    <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="transfer3">
            <label class="custom-control-label" name="transfer3" for="transfer3">3 пересадки</label>
        </div>
    </div>
    
</div>
    
</template>

<script>
export default {
    name: 'search'
}
</script>