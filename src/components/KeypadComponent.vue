<template>
    <div class="keypad">
      <div class="row">
        <div class="row">
          <Button @click="clearResult">C</Button>
          <Button @click="changeSign">±</Button>
          <Button @click="append('%')">%</Button>
          <Button @click="append('/')">÷</Button>
        </div>
        <Button @click="append('7')">7</Button>
        <Button @click="append('8')">8</Button>
        <Button @click="append('9')">9</Button>
        <Button @click="append('*')">X</Button>
      </div>
      <div class="row">
        <Button @click="append('4')">4</Button>
        <Button @click="append('5')">5</Button>
        <Button @click="append('6')">6</Button>
        <Button @click="append('-')">-</Button>
      </div>
      <div class="row">
        <Button @click="append('1')">1</Button>
        <Button @click="append('2')">2</Button>
        <Button @click="append('3')">3</Button>
        <Button @click="append('+')">+</Button>
      </div>
      <div class="row">
        <Button @click="deleteLastCharacter">DEL</Button>
        <Button @click="append('.')">.</Button>
        <Button @click="calculateResult">=</Button>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import Button from "./ButtonComponent.vue";
  
  export default {
    components: {
      Button
    },
    methods: {
      append(value) {
        this.$emit("append", value);
      },
      deleteLastCharacter() {
        this.$emit("delete");
      },
      changeSign() {
        this.$emit("changeSign");
      },
      calculateResult() {
        this.$emit("calculate");
      },
      clearResult() {
        this.$emit("append", "");
      }
    }
  };
  </script>
  
  <style>
  .keypad {
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-gap: 10px;
  }
  
  .row {
    display: flex;
    justify-content: space-between;
  }
  </style>