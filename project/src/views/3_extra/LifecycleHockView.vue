<template>
  <div>{{ selectData }}</div>
  <div>
    <label for="">태어난 도시는?</label>
    <select name="" id="">
      <option value="" :key="city.code" v-for="city in cities">
        {{ city.title }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      sampleData: '',
      cities: [],
      fnInterval: null
    }
  },
  props() {

  },
  // 제일 먼저 호출되는 곳
  setup() {},

  // 인스턴스가 초기화되면 props 설정을 처리한 후 data() 또는 computed 같은 다른 옵션을 처리 (= props는 data/computed하기 직전에 호출함)
  beforeCreate() {},

  // data(), watch, computed, methods 같은 정보를 모두 가지고 준비가 끝난 상태
  created() {
    this.getCityList()
    // created()를 가져오고 DOM을 렌더링하기 시작함.
  },

  // 반응 상태 설정을 완료했지만, 아직 DOM 노드가 생성되지 않은 상태
  beforeMount() {},

  // 실제 DOM의 렌더링이 끝난 상태
  mounted() {
    // this.getCityList()
    this.fnInterval = window.setInterval(() => {
      console.log('aaaa')
    }, 1000)
  },

  // data 변경으로 인해 DOM을 업데이트 하기 직전 상태
  beforeUpdate() {},

  // DOM이 업데이트 된 후에 호출
  update() {},

  // 현재 컴포넌트를 빠져 나가기 직전
  beforeUnmount() {},

  // 현재 컴포넌트를 빠져 나갈 때
  unmounted() {
    window.clearInterval(this.fnInterval)
    this.fnInterval = null
    this.cities = null
  },
  methods: {
    // 서버에 도시 목록을 요청하며, 가져오는데 시간이 소요됨
    getCityList() {
      this.cities = [{ code: '02', title: '서울' }]
    }
  }
}
</script>
