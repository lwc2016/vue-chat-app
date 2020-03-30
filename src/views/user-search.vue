<template>
    <div>
        <div class="header">
            <c-input v-model='keyword' placeholder="昵称或用户名" />
            <c-button @click="handleSearch" class="search">搜索</c-button>
        </div>
        <div class="content">
            <c-title>搜索结果（<span class="red">{{total}}</span>条）</c-title>
            <c-session>
                <c-list-item
                  v-for="item in list"
                  :key="item.id"
                  :path="`/user/${item.id}`"
                  :imgUrl="item.avatar"
                >
                  <template v-slot:primary>{{item.nickName}}</template>
                  <template v-slot:secondary><span>用户名：</span>{{item.name}}</template>
                </c-list-item>
            </c-session>
        </div>
    </div>
</template>
<script>
import { userSearch } from '@/services/user'
export default {
  data () {
    return {
      keyword: '',
      list: []
    }
  },
  methods: {
    async handleSearch () {
      this.list = await userSearch({ keyword: this.keyword })
    }
  },
  computed: {
    total () {
      return this.list.length
    }
  }
}
</script>
<style lang="less" scoped>
.header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0 24/@r;
    height: 120/@r;
    background-color: @white;
    box-sizing: border-box;
    display: flex;
    align-items: center;
}
.search{
    width: 120/@r!important;
    margin-left: 10/@r;
}
.content{
    margin-top: 120/@r;
}
.red{
  color: @danger;
}
</style>
