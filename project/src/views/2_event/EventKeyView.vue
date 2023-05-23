<template>
  <div>
    <!-- <input type="serarch" name="" id="" @keyup="checkEnter($event)" v-model="searchText" />
    <button @click="doSearch">조회</button> -->
    <input type="serarch" name="" id="" @keyup.enter="doSearch" v-model="searchText" />
    <button @click="doSearch">조회</button>
    <button type="submit" @click.prevent="doSearch"></button>
  </div>
</template>
<script>
// key 이벤트
// .enter
// .tab
// .delete
// .esc
// .space
// .up
// .down
// .left
// .right
// .stop
// .prevent -event.preventDefault();
export default {
  components: {},
  data() {
    return {
      searchText: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    doSearch() {
      console.log(this.searchText)
    },
    checkEnter(event) {
      if (event.keyCode === 13) {
        this.doSearch()
      }
    }
  }
}
</script>
