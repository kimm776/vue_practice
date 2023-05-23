import axios from 'axios'
export default {
  methods: {
    async $get(url) {
      return (
        await axios.get(url).catch((e) => {
          console.log(e)
        })
      ).data
    },
    async $post(url, data) {
      return await axios.post(url, data).catch((e) => {
        console.log(e)
      })
    },
    async $put(url, data) {
      return await axios.put(url, data).catch((e) => {
        console.log(e)
      })
    },
    async $delete(url) {
      return await axios.delete(url).catch((e) => {
        console.log(e)
      })
    },
    $convertDateFormat(d, f) {
      let year = ''
      let month = ''
      let day = ''
      if (typeof d === 'string' && d.length === 8) {
        year = d.substr(0, 4)
        month = d.substr(4, 2)
        day = d.substr(6, 2)
      } else if (typeof d === 'object') {
        year = d.getFullYear()
        month = (d.getMonth() + 1).toString().padStart(2, 0)
        day = (d.getDate() + 1).toString().padStart(2, 0)
      }
      // f - 'YYYY-MM-DD' 'MM-DD-YYYY'
      return f.replace('YYYY', year).replace('MM', month).replace('DD', day)
    },
    // #,###
    // #,###.## => 3400.1 => 3400.1
    // #,###.#0 => 3400.1 => 3400.10
    // #.###,##
    // $#,###.## => 3400.1 => $3400.1
    // #,###원 => 3400 => 3,400원
    $convertNumberFormat(amount, format) {
      let currencySymbol = ''
      let lastSymbol = ''

      if (format.substr(0, 1) !== '#') {
        currencySymbol = format.substr(0, 1)
      }
      if (format.slice(-1) !== '#' && format.slice(-1) !== '0') {
        lastSymbol = format.slice(-1)
        format = format.substring(0, format.length - 1)
      }

      let groupingSeparator = '' // 숫자 3자리마다 구분자 기호
      let decimalSeparator = '' // 소수점 구분자 기호
      let maxFractionDigits = 0 // 소수점 몇자리까지 표기할 것인지

      if (format.indexOf('.') === -1) {
        // .이 없는가 => #,###
        groupingSeparator = ','
      } else if (format.indexOf(',') === -1) {
        // ,이 없는가 => #.###
        groupingSeparator = '.'
      } else if (format.indexOf(',') < format.indexOf('.')) {
        // ,가 .보다 인덱스가 작은가 => #,###.## => , index = 1 / . index = 5
        groupingSeparator = ','
        decimalSeparator = '.'
        maxFractionDigits = format.length - format.indexOf('.') - 1
      } else {
        // #.###,##
        groupingSeparator = '.'
        decimalSeparator = ','
        maxFractionDigits = format.length - format.indexOf(',') - 1
      }

      let sign = '' // amount 가 음수일 때
      let dec = 1
      for (let i = 0; i < maxFractionDigits; i++) {
        dec = dec * 10
      }

      let v = String(Math.round(parseFloat(amount) * dec) / dec)

      if (v.startsWith('-')) {
        sign = '-'
        v = v.substring(1)
      }
      // 정수, 소수점 상관없이 무조건 소수점 이하 자리수 맞춰줌
      if (maxFractionDigits > 0 && format.slice(-1) === '0') {
        v = parseFloat(v).toFixed(maxFractionDigits)
      }

      let d = '' // 소수점이하만
      if (maxFractionDigits > 0 && v.indexOf('.') > -1) {
        d = v.substring(v.indexOf('.'))
        d = d.replace('.', decimalSeparator)
        v = v.substring(0, v.indexOf('.'))
      }

      const regexp = /(\d+)(\d{3})/

      // v = 3524500
      while (regexp.test(v)) {
        // while 첫번째
        // $1 = 3524
        // $2 = 500
        // 3524,500
        // while 두번째
        // $1 = 3
        // $2 = 524
        // 3,524,500
        v.replace(regexp, '$1' + groupingSeparator + '$2')
      }

      return sign + currencySymbol + v + d + lastSymbol
    }
  }
}
