<template>
  <form method="post" action="/api/italian/post">
    <input class="italian" v-model="italian">
    <input class="japanese" v-model="japanese">
    <button class="button" @click="add">追加</button>
  </form>
</template>

<script>
export default {
  data(){
    return {
      italian: "",
      japanese: "",
    }
  },
  methods:{
    async add(){
      await this.$axios.post('/italian/post',{
        italian: this.italian,
        japanese: this.japanese
      })
      this.italian = "";
      this.japanese = "";
    }
  }
}
</script>

<style>

</style>