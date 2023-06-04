<template>
  <div>
    <apexchart
      width="500"
      height="400"
      type="bar"
      :options="options"
      :series="series"
    ></apexchart>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      options: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [
        {
          name: '매출',
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        },
        {
          name: '매입',
          data: [20, 40, 65, 80, 47, 50, 100, 81]
        }
      ]
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
