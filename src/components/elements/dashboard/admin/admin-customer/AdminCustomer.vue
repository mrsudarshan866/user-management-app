<script setup lang="ts">
import { GlobalTable } from "@/components/common/table";
import { data } from "./table/data";
import { columns } from "./table/columns";
</script>

<template>
  <div class="h-full" >
    <GlobalTable :data="data" :columns="columns" show-tooltip-for="customer_name" />
  </div>
</template>
