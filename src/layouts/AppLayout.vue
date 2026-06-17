<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import AppSidebar from "@/components/common/AppSidebar.vue";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import SettingsDialog from "@/components/common/SettingsDialog.vue";

const route = useRoute();

const breadcrumbs = computed(() => {
  return route.matched
    .filter((r) => r.meta?.breadcrumb)
    .map((r) => ({
      label: r.meta.breadcrumb as string,
      path: r.path.startsWith("/") ? r.path : `/${r.path}`,
      fullPath: r.path,
    }));
});
</script>

<template>
  <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
      <header class="flex h-16 shrink-0 items-center gap-2 w-full">
        <div class="flex items-center justify-between gap-2 px-4 w-full">
          <div class="flex items-center gap-2 px-4">
            <SidebarTrigger class="-ml-1 animate-pulse" />
            <Separator orientation="vertical" class="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <template
                  v-for="(crumb, index) in breadcrumbs"
                  :key="crumb.path"
                >
                  <BreadcrumbItem v-if="index < breadcrumbs.length - 1">
                    <BreadcrumbLink :href="crumb.fullPath">{{
                      crumb.label
                    }}</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator v-if="index < breadcrumbs.length - 1" />
                  <BreadcrumbItem v-else>
                    <BreadcrumbPage>{{ crumb.label }}</BreadcrumbPage>
                  </BreadcrumbItem>
                </template>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <SettingsDialog />
        </div>
      </header>
      <div class="flex flex-1 flex-col gap-4 p-4 pt-0">
        <slot />
        <!-- <div class="grid auto-rows-min gap-4 md:grid-cols-3">
          <div class="aspect-video rounded-xl bg-muted/50" />
          <div class="aspect-video rounded-xl bg-muted/50" />
          <div class="aspect-video rounded-xl bg-muted/50" />
        </div>
        <div class="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" /> -->
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>
