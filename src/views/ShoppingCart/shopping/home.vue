<template>
  <div>
    <el-button @click="closeAll">关闭按钮</el-button>
    <el-button @click="openAll">打开按钮</el-button>

    <el-table
        :data="tableData"
        row-key="id"
        :expand-row-keys="expandRowKeys"
        style="width: 100%"
    >
      <el-table-column type="expand">
        <template v-slot="scope">
          <el-table :data="scope.row.ch"
                    row-key="id"
                    style="width: 100%"
                    :row-class-name="tableRowClassName"
          >
            <el-table-column label="商品 ID" prop="id" />
            <el-table-column label="商品名称" prop="name" />
            <el-table-column label="描述" prop="desc" />
          </el-table>
        </template>
      </el-table-column>
      <el-table-column label="商品 ID" prop="id" />
      <el-table-column label="商品名称" prop="name" />
      <el-table-column label="描述" prop="desc" />
      <el-table-column label="描述" prop="category" />
      <el-table-column label="描述" prop="shopId" />
    </el-table>
  </div>
</template>

<style>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.el-table .warning-row {
  --el-table-tr-bg-color: var(--el-color-warning-light-9);
}
.el-table .success-row {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}
</style>

<script setup lang="ts">
import {ref} from "vue";

const tableData = ref<Array<object>>([
  {
    id: '12987122',
    name: '好滋好味鸡蛋仔',
    category: '江浙小吃、小吃零食',
    desc: '荷兰优质淡奶，奶香浓而不腻',
    address: '上海市普陀区真北路',
    shop: '王小虎夫妻店',
    shopId: '10333',
    ch:[
      {
        id: '12987122',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333',
        color:1
      },{
        id: '12987122',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333',
      },{
        id: '12987122',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333',
      },{
        id: '12987122',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333',
      },{
        id: '12987122',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333',
      },{
        id: '12987122',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333',
      },{
        id: '12987122',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333',
      },{
        id: '12987122',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333',
        color:3
      },{
        id: '12987122',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333',
        color:1
      },
    ]
  },
  {
    id: '12987123',
    name: '好滋好味鸡蛋仔',
    category: '江浙小吃、小吃零食',
    desc: '荷兰优质淡奶，奶香浓而不腻',
    address: '上海市普陀区真北路',
    shop: '王小虎夫妻店',
    shopId: '10333'
  },
  {
    id: '12987125',
    name: '好滋好味鸡蛋仔',
    category: '江浙小吃、小吃零食',
    desc: '荷兰优质淡奶，奶香浓而不腻',
    address: '上海市普陀区真北路',
    shop: '王小虎夫妻店',
    shopId: '10333'
  },
  {
    id: '12987126',
    name: '好滋好味鸡蛋仔',
    category: '江浙小吃、小吃零食',
    desc: '荷兰优质淡奶，奶香浓而不腻',
    address: '上海市普陀区真北路',
    shop: '王小虎夫妻店',
    shopId: '10333',

  }
])
const expandRowKeys = ref<any>([])
// 全部关闭
const closeAll = ()=> {
  expandRowKeys.value = []
}
const openAll=() =>{
  expandRowKeys.value = tableData.value.map((item)=>{return item})
}
const tableRowClassName = ({
                             row,
                             rowIndex,
                           }: {
  row: any
  rowIndex: number
}) => {
  console.log(row.color)
  if (row.color === 1) {
    return 'warning-row'
  } else if (row.color === 3) {
    return 'success-row'
  }
  return ''
}

</script>

