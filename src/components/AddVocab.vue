<template>
  <form method="post" action="/api/post">
    <input class="english" v-model="english">
    <input class="japanese" v-model="japanese">
    <button class="button" @click="add">追加</button>
  </form>
</template>

<script>
export default {
  data(){
    return {
      english: "",
      japanese: "",
    }
  },
  methods:{
    async add(){
      await this.$axios.post('/post',{
        english: this.english,
        japanese: this.japanese
      })
      this.english = "";
      this.japanese = "";
    }
  }
}
</script>

<style>

</style>