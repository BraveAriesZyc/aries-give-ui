<template>
  <el-radio-group v-model="size" label="size control">
    <el-radio-button label="large">large</el-radio-button>
    <el-radio-button label="default">default</el-radio-button>
  </el-radio-group>
  <el-card>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="Approved by">
        <el-input v-model="formInline.user" placeholder="Approved by" clearable />
      </el-form-item>
      <el-form-item label="Activity zone">
        <el-select
            v-model="formInline.region"
            placeholder="Activity zone"
            clearable
        >
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="Activity time">
        <el-date-picker
            v-model="formInline.date"
            type="date"
            placeholder="Pick a date"
            clearable
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Query</el-button>
      </el-form-item>
    </el-form>
  </el-card>
<ddd :is-table="size"></ddd>
</template>
<script lang="ts" setup>
import {ref,reactive} from 'vue'
import ddd from './ddd.vue'
const size = ref<'default' | 'large' | 'small'>('default')
const formInline = reactive({
  user: '',
  region: '',
  date: '',
})

const onSubmit = () => {
  console.log('submit!')
}
</script>

<style lang="scss" scoped></style>
