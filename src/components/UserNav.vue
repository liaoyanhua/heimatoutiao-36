<template>
  <div class="nav-wrap">
      <div class="user" @click="$emit('click',$event)">
          <span class="obj_name">{{nav_text}}</span>
          <span class="person">{{type==='password'?'******':text}}</span>
          <span class="iconfont iconjiantou1"></span>
      </div>
  </div>
</template>

<script>
export default {
    props:['nav_text','text','type'],
    
}
</script>

<style scoped lang="less">
    .nav-wrap{
        padding-left:20/360*100vw;
       
    .user{
         height:48/360*100vw;
        border-bottom:1px solid rgb(228, 228, 228);
        display: flex;
        justify-content: space-between;
        padding-right:20px;
        align-items: center;
        span{
            display: block;
        }
        .obj_name{
            font-size:16/360*100vw;
        }
        .person{
            flex:1;
            text-align: right;
            margin-right:10/360*100vw;
            color:rgb(161, 161, 161);
        }

    }
    }
</style>>

</style>