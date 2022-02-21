<template>
<div>
  <textarea 
    name="english" 
    :value="enData"
    @en="$emit('english', $event.target.value)"
    :class="{isShow: active}"
    @change="enChange"
    ></textarea>
  <textarea 
    name="japanese"
    :value="jaData"
    @ja="$emit('japanese', $event.target.value)"
    :class="{isShow: active}"
    @change="jaChange"
    ></textarea>

  <button 
    @click="
      isActive(); 
      $emit('fetch');" >編集</button>
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
      enData: this.english,
      jaData: this.japanese,
    }
  },
  methods:{
    isActive(){
      this.active = !this.active;
    },
  }
}
</script>

<style>
.isShow{
  display: none;
}
</style>