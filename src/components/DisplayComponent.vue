<template>
    <div class="display">
      {{ result }}
    </div>
  </template>
  
  <script lang="ts">
  export default {
    props: {
      result: {
        type: String,
        required: true
      }
    }
  };
  </script>
  
  <style>
  .display {
    height: 50px;
    background-color: #f8f8f8;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 10px;
    font-size: 20px;
  }
  </style>