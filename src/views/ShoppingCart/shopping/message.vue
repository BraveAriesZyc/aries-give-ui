<template>
    <div class="shopping-cart">
      <h2>购物车</h2>
      <div v-if="cartItems.length === 0">购物车为空</div>
      <div v-else>
        <ul>
          <li v-for="item in cartItems" :key="item.id">
            <span>{{ item.name }}</span>
            <span>数量: {{ item.quantity }}</span>
            <span>价格: {{ item.price }}</span>
            <button @click="removeItem(item)">删除</button>
          </li>
        </ul>
        <div class="total-price">总价格: {{ getTotalPrice }}</div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, computed } from 'vue';
  

  

     const cartItems =ref([
          { id: 1, name: '商品1', price: 10, quantity: 2 },
          { id: 2, name: '商品2', price: 5, quantity: 3 },
          { id: 3, name: '商品3', price: 8, quantity: 1 }
        ]) 



     const removeItem = (item:any)=>{
        const index = cartItems.value.indexOf(item);
        if (index !== -1) {
          cartItems.value.splice(index, 1);
        }
      }

    const getTotalPrice = computed<Number>(() => {
      return cartItems.value.reduce((total, item) => {
          return total + item.price * item.quantity;
        }, 0);
    });
  </script>
  
  <style>
  .shopping-cart {
    padding: 20px;
  }
  
  .total-price {
    font-weight: bold;
    margin-top: 10px;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 10px;
  }
  
  button {
    margin-left: 10px;
  }
  </style>