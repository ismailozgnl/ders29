<template>
    <div class="calculator">
      <Display :result="result" />
      <Keypad
        @append="appendToResult"
        @delete="deleteLastCharacter"
        @changeSign="changeSign"
        @calculate="calculateResult"
      />
    </div>
  </template>
  
  <script>
  import DisplayComponent from '/Users/ismail/OneDrive/Desktop/Yazılım/ders29odev/src/components/DisplayComponent.vue'
  import KeypadComponent from '/Users/ismail/OneDrive/Desktop/Yazılım/ders29odev/src/components/KeypadComponent.vue'
  import ButtonComponent from '/Users/ismail/OneDrive/Desktop/Yazılım/ders29odev/src/components/ButtonComponent.vue'
  
  export default {
    name:'App',
    components: {
      DisplayComponent,
      KeypadComponent,
      ButtonComponent,
    },
    data() {
      return {
        result: ""
      };
    },
    methods: {
      appendToResult(value) {
        this.result += value;
      },
      deleteLastCharacter() {
        this.result = this.result.slice(0, -1);
      },
      changeSign() {
        if (this.result.startsWith("-")) {
          this.result = this.result.slice(1);
        } else {
          this.result = "-" + this.result;
        }
      },
      calculateResult() {
        try {
          this.result = eval(this.result);
        } catch (error) {
          this.result = "Error";
        }
      }
    }
  };
  </script>
  
  <style>
  .calculator {
    width: 300px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
  }
  </style>