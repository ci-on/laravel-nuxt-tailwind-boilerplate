import Vue from 'vue'
import numeral from 'numeral'

Vue.filter('moneyFormat', (number) => {
  if (number) {
    return numeral(number).format('$0,0.00')
  }
})
