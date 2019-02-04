<template>
  <div class="hello">
    <!-- {{ offsetPage }} -->
    <ul>
      <li v-for="i in data" :key="i.name">{{ i }}</li>
    </ul>
    <button id="endPage">end page</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  created () {
    this.$store.dispatch('hanhDong')
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      if (window.pageYOffset + window.innerHeight >= document.body.scrollHeight) {
        console.log('done!')
      }
      // console.log('height body' + document.body.scrollHeight)
      console.log(window.pageYOffset)
    }
  },
  computed: {
    data () {
      return this.$store.state.kq.data
    }
  },
  updated () {
    // console.log('button : ' + document.querySelector('#endPage').offsetTop)
    // console.log('chieu cao ' + window.innerHeight)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
