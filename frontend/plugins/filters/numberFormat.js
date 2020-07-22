import Vue from 'vue'
import numeral from 'numeral'

Vue.filter('numberFormat', (number) => {
  if (number) {
    return numeral(number).format('0,0')
  }
})
