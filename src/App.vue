<template>
  <p>Counter: {{ counter }}</p>
  <p>Double: {{ double }}</p>
  <p>Double: {{ triple }}</p>
  <button @click="increment">+++</button>
  <button @click="store.commit('decrement', 25)">---</button>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()
const counter = computed(() => store.state.count)
const increment = () => {
  store.commit('increment', 50)
}
const double = computed(() => store.getters.double)
const triple = computed(() => store.getters.triple)
</script>

<style scoped lang="scss"></style>
