<template>
  <div></div>
</template>
<script>
import Formatter from '@/mixins/formatter'
// import Axios from '@/mixins/axios'
export default {
  components: {},
  mixins: [Formatter],
  data() {
    return {
      sampleData: ''
    }
  },
  setup() {},
  created() {
    console.log('Mixinview의 created')
  },
  mounted() {
    console.log('Mixinview의 created')
    console.log(this.$convertDateFormat('20220601', 'YYYY-MM-DD'))
    console.log(this.$convertDateFormat('20220601', 'MM.DD.YYYY'))
    console.log(this.$convertNumberFormat(2547500, '#,###'))
    console.log(this.$convertNumberFormat(-2547500, '#,###.#0'))
    console.log(this.$convertNumberFormat(2547500, '#,###.#0%'))
    console.log(this.$convertNumberFormat(125.5, '#,###원'))
  },
  unmounted() {},
  methods: {}
}
</script>
