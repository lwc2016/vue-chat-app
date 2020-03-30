<template>
    <div>
        <c-session>
            <c-session-item>添加好友</c-session-item>
        </c-session>
        <h3 class="title">我的朋友</h3>
        <c-session>
            <c-list-item
               v-for="item in $store.state.friend.list"
               :key="item.id"
               :path="`/friend/${item.id}`"
               :imgUrl="item.avatar"
            >
               <template v-slot:primary>{{item.remarkName || item.nickName}}</template>
               <template v-slot:secondary><span>用户名：</span>{{item.name}}</template>
            </c-list-item>
        </c-session>
    </div>
</template>
<style lang="less" scoped>
.title{
    padding: 0 24/@r;
    font-size: 30/@r;
    line-height: 60/@r;
    font-weight: 500;
    height: 60/@r;
    color: #333333;
}
.list{
    background-color: #ffffff;
    padding-left: 24/@r;
}
</style>
