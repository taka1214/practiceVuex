<template>
<div>
  <textarea 
    name="english" 
    :value="newWord.foreign"
    @en="$emit('foreign', $event.target.value)"
    :class="{isShow: active}"
    @change="enChange"
    ></textarea>
  <textarea 
    name="japanese"
    :value="newWord.japanese"
    @ja="$emit('japanese', $event.target.value)"
    :class="{isShow: active}"
    @change="jaChange"
    ></textarea>

  <button 
    @click="
      isActive(); 
      $emit('fetch');
      reload()" >編集</button>
</div>

</template>

<script>
export default {
  props:{
    english:{
      type: String,
    },
    japanese:{
      type: String,
    },
    enChange:{
      type: Function
    },
    jaChange:{
      type: Function
    }
  },
  data(){
    return{
      active: true,
      newWord:{
        foreign: this.english,
        japanese: this.japanese,
      }
    }
  },
  methods:{
    isActive(){
      this.active = !this.active;
    },
    reload(){
      if(this.active){
        this.$router.go({path: this.$router.currentRoute.path, force: true})
      }
    }
  }
}
</script>

<style>
.isShow{
  display: none;
}
</style>