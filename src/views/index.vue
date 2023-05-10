<script setup>
import { useHomeStore } from '../store';
const home = useHomeStore();
</script>
<template>
  <div>{{ home.name }}</div>
</template>
