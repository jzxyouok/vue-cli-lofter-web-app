<template>
  <div class="header">

      <img :src="user.backImg">
      
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'el-homeHead',
  mounted(){
  
  },
  data () {
    return {
      __root:'../../assets',
      chooseIndex : 0,
      headImg: require('../../../assets/user/head.png'),
      myImg: require('../../../assets/user/myImg.jpg'),
    }
  },
  computed : {
    ...mapState(['user'])
  },
  methods : {
    ...mapMutations(['GOTOHOME'])
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
@imgSrc:'./assets';
@centerColor : #a2a6a6;
@width: 20rem;
@list5 : 5rem;
@list0 : 4rem;
@list1 : 3rem;
@list2 : 2rem;
@imgHead : 2.5rem;
@1Font:1rem;
@lMainFont:.9rem;
@mainFont:.8rem;
@smallFont:.6rem;
@infA:#7d7d7d;
@lessColor:#999999;
@lesstColor:#d8d8d8;
@mainColor:rgb(51, 51, 51);
@green:rgb(154, 198, 0);
@bule:rgb(91, 159, 201);
@wordPadding:0 .5rem 0;
@paddingTb:.5rem;
@height3:3rem;
@split:1rem;
@headHeight:@height*3-1;
@height : 3rem;
.blodA{
  font-weight: bold;
  border-bottom: 1px solid black;
}
.transition{
  transition:1.5s;
}
.header{
  width: 100%;
  height: @headHeight;
  max-height: @height*6;
  overflow: hidden;
  display: flex;
  align-items:center;
  flex-warp:center;
}

.header img{
  width: 100%;
}


</style>
