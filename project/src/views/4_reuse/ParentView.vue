<template>
  <div>
    <button @click="changeValue">변경</button>
    <child-component
      :str="strParent"
      :num="numParent"
      :isOk="isOkParent"
      :arr="arrParent"
      :obj="objParent"
      @change-num="getData"
      ref="child1" />
  </div>
</template>
<script>
import ChildComponent from '@/components/fragments/ChildComponent.vue'
export default {
  components: { ChildComponent },
  data() {
    return {
      sampleData: '',
      strParent: '개발자의 품격',
      numParent: 12,
      isOkParent: true,
      arrParent: [1, 2, 3],
      objParent: { name: 'jeremy' }
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    getData(data) {
      console.log('자식 컴포넌트에서 이벤트 호출 : ' + data)
    },
    changeValue() {
      this.$refs.child1.str2 = 'seoul'
      this.$refs.child1.printMessage()
    }
  }
}
</script>
