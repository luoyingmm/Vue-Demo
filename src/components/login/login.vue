<template>
  <div class="background" >
    <transition name="el-fade-in-linear">
    <div class="login" v-show="show">
        <img/>
        <div class="login_right">
            <span>落樱后台管理系统</span>
            <div>
              <input type="text" placeholder="用户名" v-model="inputUsername" v-bind:class="{showError:showTag}">
            </div>
            <div>
              <input type="password" placeholder="密码" v-model="inputPassword" v-bind:class="{showError:showTag}">
            </div>
            <button @click="login">Login</button>
        </div>
      </div>
  </transition>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'login',
  data() {
    return {
      inputUsername: '',
      inputPassword: '',
      show:false,
      showTag:false
    }
  },
  mounted () {
    this.show = true
  },
  methods:{
    login(){
      if (this.inputUsername === ''){
        this.showTag = true
        return
      }

      if (this.inputPassword === ''){
        this.showTag = true
        return
      }
      let login = this

      axios.post('http://localhost:8887/login', {
        username: this.inputUsername,
        password: this.inputPassword
      })
        .then(function (response) {

          if (!response.data.success){
            login.$message.error(response.data.msg);
          }else {
            login.$message({
              message: '登录成功',
              type: 'success'
            });
            login.$router.push({ path:'/main'})
          }

        })
        .catch(function (error) {
          login.$message.error(error);
        });
    },


  }
}
</script>

<style scoped>

.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #409EFF;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}


  .background{
    height: 100%;
    display: flex;
    background-color: #D9AFD9;
    background-image: linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%);
    justify-content: center;
    align-items: center;
  }

  .login{
    height: 600px;
    width: 1000px;
    border-radius: 25px;
    background-color: #ddbfee;
    display: flex;

  }
  img{
    background: url("../../assets/images/login.jpg");
    width: 40%;
    position: relative;
    height: 100%;
    background-size: cover;
    border-radius: 25px 0;
  }
  .login_right{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  input{
    outline: none;
    width: 300px;
    height: 5rem;
    font-size: 1.1rem;

    padding: 1rem 0 0 1.6rem;
    border: none;
    border-bottom: 1px solid #de78e0;;

    background-color: rgba(0,0,0,0);
  }
  span{
    color: #de78e0;
    font-size: 2.3rem;
    font-weight: bold;
    margin-bottom: 20px;

  }

  button{
    width: 50%;
    height: 5rem;
    color: #f6f6f6;
    background-color: #A9C9FF;
    background-image: linear-gradient(270deg, #A9C9FF 1%, #FFBBEC 100%);
    font-size: 1.4rem;
    border: none;
    border-radius: 0.5rem;
    margin-top: 40px;

  }


  button:hover {
    box-shadow: 0 0 2rem -0.5rem rgb(0 0 0 / 15%);
  }

  button:active {
    box-shadow: 0 0 2rem -0.5rem #de78e0;
  }

    .showError::-webkit-input-placeholder{
      color: #ef0505;
    }
    .showError::-moz-placeholder{
      color: #ef0505;
}

    .showError:-ms-input-placeholder{
      color: #ef0505;
}





</style>
