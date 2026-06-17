<script setup lang="ts">
import {
  UserRoundCog,
  LayoutGrid,
  Vegan,
  Frame,
  Bell,
  Map,
  PieChart,
  Settings,
} from "lucide-vue-next";

import NavMain from "./NavMain.vue";
import NavProjects from "./NavProjects.vue";
import NavSecondary from "./NavSecondary.vue";
import NavUser from "./NavUser.vue";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  type SidebarProps,
} from "@/components/ui/sidebar";

const props = withDefaults(defineProps<SidebarProps>(), {
  variant: "inset",
  collapsible: "icon",
});

const data = {
  user: {
    name: "Mr. SUD",
    email: "mrsud@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard/admin/dashboard",
      icon: LayoutGrid,
      items: [],
    },
    {
      title: "Customers",
      url: "/dashboard/admin/customer",
      icon: UserRoundCog,
      items: [],
    },
    {
      title: "Settings",
      url: "/dashboard/admin/settings",
      icon: Settings,
      items: [
        {
          title: "Users",
          url: "/dashboard/admin/settings/users",
        },
        {
          title: "Email Configuration",
          url: "/dashboard/admin/settings/email-configuration",
        },
        {
          title: "License and Billing",
          url: "/dashboard/admin/settings/license-configuration",
        },
        {
          title: "Audit Logs",
          url: "/dashboard/admin/settings/audit-logs",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Notifications",
      url: "#",
      icon: Bell,
    },
  ],
  projects: [
    {
      name: "Add Customers",
      url: "#",
      icon: Frame,
    },
    {
      name: "Add Users",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Add Licenses",
      url: "#",
      icon: Map,
    },
  ],
};
</script>

<template>
  <Sidebar v-bind="props">
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton size="lg" as-child>
            <a
              href="#"
              class="relative overflow-hidden rounded-lg animate-glass-grow"
            >
              <!-- Glass Reflection Layer -->
              <div class="glass-reflection animate-reflect absolute z-0"></div>

              <!-- Icon Block -->
              <div
                class="relative z-10 flex aspect-square size-8 items-center justify-center rounded-lg bg-[var(--standard)] text-sidebar-primary-foreground animate-bounce"
              >
                <Vegan class="size-4" />
              </div>

              <!-- Text Block -->
              <div
                class="relative z-10 grid flex-1 text-left text-sm leading-tight"
              >
                <span class="truncate font-semibold">UM v1.0</span>
                <span class="truncate text-xs">Professional</span>
              </div>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
    <SidebarContent>
      <NavMain :items="data.navMain" />
      <NavProjects :projects="data.projects" />
      <NavSecondary :items="data.navSecondary" class="mt-auto" />
    </SidebarContent>
    <SidebarFooter>
      <NavUser :user="data.user" />
    </SidebarFooter>
  </Sidebar>
</template>
