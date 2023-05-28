<template>
  <div>
    {{ isLogin }}
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      sampleData: ''
    }
  },
  computed: {
    isLogin() {
      return this.$store.getters['user/isKakaoLogin']
    }
  },
  setup() {},
  created() {
    // 로그인 하지 않았는데 main 경로로 이동할 경우 로그인 하도록 화면 이동시키기
    // if (!window.Kakao.Auth.getAccessToken()) {
    //   this.$router.push({ path: '/login/kakao' })
    // }
  },
  mounted() {
    console.log('access token', window.Kakao.Auth.getAccessToken())
  },
  unmounted() {},
  methods: {}
}
</script>
