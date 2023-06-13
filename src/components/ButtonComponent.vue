<template>
    <button class="button" @click="$emit('click')">
      <slot></slot>
    </button>
  </template>
  
  <style>
  .button {
    height: 50px;
    background-color: #eee;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
  }
  </style>