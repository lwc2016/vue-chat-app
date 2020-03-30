<template>
    <div class="wrapper">
        <div class="header">
            <div class="avatar">
                <img :src="form.avatar" />
                <div class="upload-mask">上传图片</div>
                <input @change="handleUpload" class="upload" ref="file" type="file" />
            </div>
        </div>
        <c-form class="form">
            <c-form-item>
                <c-input v-model="form.nickName" placeholder="昵称" />
            </c-form-item>
            <c-form-item>
                <c-textarea v-model="form.remarks" placeholder="个性签名" />
            </c-form-item>
            <c-form-item>
                <c-button @click="handleSubmit" type="primary">保存</c-button>
            </c-form-item>
        </c-form>
    </div>
</template>
<script>
import { userUpdate } from '@/services/user'
import { fileUpload } from '@/services/file'

export default {
  data () {
    return {
      form: {
        nickName: '',
        remarks: '',
        avatar: ''
      }
    }
  },
  mounted () {
    const { nickName, avatar, remarks } = this.$store.state.user.info
    this.form.nickName = nickName
    this.form.remarks = remarks
    this.form.avatar = avatar
  },
  methods: {
    async handleSubmit () {
      await userUpdate(this.form)
      await this.$store.dispatch('user/fetchDetail')
      this.$message.success('修改成功！')
      this.$router.go(-1)
    },
    async handleUpload () {
      const file = this.$refs.file.files[0]
      const formData = new FormData()
      formData.append('file', file)
      this.form.avatar = await fileUpload(formData)
      this.$message.success('图片上传成功')
    }
  },
  watch: {
    '$store.state.user.info': {
      deep: true,
      handler (newValue) {
        const { nickName, avatar, remarks } = newValue
        this.form.nickName = nickName
        this.form.remarks = remarks
        this.form.avatar = avatar
      }
    }
  }
}
</script>
<style lang="less" scoped>
.wrapper{
    background-color: @white;
    width: 100vw;
    height: 100vh;
}
.header{
    text-align: center;
}
.avatar{
    width: 200/@r;
    height: 200/@r;
    border-radius: 100%;
    overflow: hidden;
    margin: 0 auto;
    display: inline-block;
    margin-top: 120/@r;
    position: relative;
    img{
        width: 100%;
    }
    .upload-mask{
        position: absolute;
        left: 0;
        top: 60/@r;
        width: 100%;
        height: 80/@r;
        z-index: 5;
        background-color: rgba(0, 0, 0, 0.45);
        font-size: 28/@r;
        text-align: center;
        line-height: 80/@r;
        color: #f5f5f5;
    }
    .upload{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10;
        opacity: 0;
    }
}
.form{
    margin-top: 60/@r;
}
</style>
