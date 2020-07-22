import Vue from 'vue'
import numeral from 'numeral'

Vue.filter('percentageFormat', (number) => {
  if (number) {
    return numeral(number * 100).format('0.00')
  }
})
