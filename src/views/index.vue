<template>
  <div class="layout">
    <el-container>
      <el-aside style="display: flex;">
        <el-menu :router="true" :default-active="$route.path" class="el-menu-vertical-demo" text-color="#f390df"
          active-text-color="#d74646" background-color="#efdade" :collapse="isCollapse" @open="handleOpen"
          @close="handleClose">
          <el-menu-item index="/">
            <el-icon><icon-menu /></el-icon>
            <span>首页</span>
          </el-menu-item>
          <el-sub-menu index="/ShoppingCart">
            <template #title>
              <el-icon>
                <location />
              </el-icon>
              <span>购物车实例</span>
            </template>
            <el-menu-item index="/Shopping/cart">首页</el-menu-item>
            <el-menu-item index="/Shopping/message">消息</el-menu-item>
            <el-menu-item index="/Shopping/myapp">我的</el-menu-item>
          </el-sub-menu>
          <el-menu-item index="2">
            <el-icon><icon-menu /></el-icon>
            <span>Navigator Two</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <el-icon>
              <document />
            </el-icon>
            <span>Navigator Three</span>
          </el-menu-item>
          <el-menu-item index="4">
            <el-icon>
              <setting />
            </el-icon>
            <span>Navigator Four</span>
          </el-menu-item>
        </el-menu>

      </el-aside>
      <el-container>
        <el-header>
          <div class="header_box" style="width: 50px;">
            <img v-if="isCollapse" style="height: 50px;" src="../assets//icons/left.png" @click="isCollapse = false"
              alt="" srcset="">
            <img v-else style="height: 50px;" src="../assets//icons/right.png" @click="isCollapse = true" alt=""
              srcset="">
          </div>
          <div class="header_box">
            <h1 style="margin: 0;">个人博客</h1>
          </div>
          <div class="header_box">用户信息</div>
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
//
import { ref } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

//
const isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style lang="scss" scoped>
//字体
$txt: #f390df;

.layout {
  width: 100%;
  height: 100%;
  display: flex;

  .el-aside {
    width: var(--el-aside-width);

    .el-menu {
      height: 100vh;
      border-right: 1px solid #f899af;
    }
  }

  .el-header {
    padding: 0;
    background-color: #efdade;
    color: $txt;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .header_box {

      width: 120px;
      max-height: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  //字体渐变

  // .box_txt {
  //   height: 60px;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   font-weight: 900;
  //   background: -webkit-linear-gradient(#d74646, #efdade, #f390df);
  //   -webkit-background-clip: text;
  //   -webkit-text-fill-color: transparent;
  // }



}</style>