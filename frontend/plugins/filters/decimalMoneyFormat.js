import Vue from 'vue'
import numeral from 'numeral'

Vue.filter('decimalMoneyFormat', (number) => {
  if (number) {
    const num = String(number).split('.')
    if (num.length === 2) {
      const decimal = num[1]
      if (decimal.length > 5) {
        return numeral(`${Number(number).toFixed(5)}`).format('$0,0.00000')
      }
      switch (decimal.length) {
        case 5:
          return numeral(`${Number(number).toFixed(5)}`).format('$0,0.00000')
        case 4:
          return numeral(`${Number(number).toFixed(4)}`).format('$0,0.0000')
        case 3:
          return numeral(`${Number(number).toFixed(3)}`).format('$0,0.000')
        default:
          return numeral(`${Number(number).toFixed(2)}`).format('$0,0.00')
      }
    }
    return numeral(`${Number(number).toFixed(2)}`).format('$0,0.00')
  }
})
