<script setup lang="ts">
import type { LucideIcon } from "lucide-vue-next";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

defineProps<{
  items: {
    title: string;
    url: string;
    icon: LucideIcon;
  }[];
}>();
</script>

<template>
  <SidebarGroup>
    <SidebarGroupContent>
      <SidebarMenu>
        <SidebarMenuItem v-for="item in items" :key="item.title">
          <SidebarMenuButton as-child size="sm">
            <a :href="item.url">
              <div class="relative flex items-center gap-x-1">
                <component :is="item.icon" class="w-5 h-5" />
                <div
                  class="bg-green-500 w-1.5 h-1.5 rounded-full absolute -top-0.5 right-0.5"
                ></div>
              </div>
              <span class="text-sm">{{ item.title }}</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroupContent>
  </SidebarGroup>
</template>
