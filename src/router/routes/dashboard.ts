export default [
  {
    path: "/dashboard",
    component: () => import("@/pages/dashboard.vue"),
    children: [
      {
        path: "",
        name: "dashboard-home",
        component: () => import("@/pages/dashboard/index.vue"),
        meta: { breadcrumb: "Dashboard" },
      },
      {
        path: "admin",
        name: "admin",
        component: () => import("@/pages/dashboard/admin/index.vue"),
        meta: { breadcrumb: "Admin" },
        children: [
          {
            path: "dashboard",
            name: "admin-dashboard",
            component: () =>
              import("@/pages/dashboard/admin/admin-dashboard/index.vue"),
            meta: { breadcrumb: "Dashboard" },
          },
          {
            path: "customer",
            name: "admin-customer",
            component: () =>
              import("@/pages/dashboard/admin/admin-customer/index.vue"),
            meta: { breadcrumb: "Customers" },
          },
          {
            path: "settings",
            name: "admin-settings",
            component: () =>
              import("@/pages/dashboard/admin/admin-settings/index.vue"),
            meta: { breadcrumb: "Settings" },
            children: [
              {
                path: "audit-logs",
                name: "admin-settings-audit-logs",
                component: () =>
                  import("@/pages/dashboard/admin/admin-settings/audit-logs/index.vue"),
                meta: { breadcrumb: "Audit Logs" },
              },
              {
                path: "email-configuration",
                name: "admin-settings-email-configuration",
                component: () =>
                  import("@/pages/dashboard/admin/admin-settings/email-configuration/index.vue"),
                meta: { breadcrumb: "Email Configuration" },
              },
              {
                path: "license-configuration",
                name: "admin-settings-license-configuration",
                component: () =>
                  import("@/pages/dashboard/admin/admin-settings/license-and-billing/index.vue"),
                meta: { breadcrumb: "License & Billing" },
              },
              {
                path: "users",
                name: "admin-settings-users",
                component: () =>
                  import("@/pages/dashboard/admin/admin-settings/users/index.vue"),
                meta: { breadcrumb: "Users" },
              },
            ],
          },
        ],
      },
      {
        path: "customer",
        name: "customer",
        component: () => import("@/pages/dashboard/customer/index.vue"),
        meta: { breadcrumb: "Customer" },
        children: [
          {
            path: "dashboard",
            name: "customer-dashboard",
            component: () =>
              import("@/pages/dashboard/customer/customer-dashboard/index.vue"),
            meta: { breadcrumb: "Dashboard" },
          },
          {
            path: "management",
            name: "customer-management",
            component: () =>
              import("@/pages/dashboard/customer/customer-management/index.vue"),
            meta: { breadcrumb: "Management" },
          },
          {
            path: "settings",
            name: "customer-settings",
            component: () =>
              import("@/pages/dashboard/customer/customer-settings/index.vue"),
            meta: { breadcrumb: "Settings" },
            children: [
              {
                path: "audit-logs",
                name: "customer-settings-audit-logs",
                component: () =>
                  import("@/pages/dashboard/customer/customer-settings/audit-logs/index.vue"),
                meta: { breadcrumb: "Audit Logs" },
              },
              {
                path: "business-functions",
                name: "customer-settings-business-functions",
                component: () =>
                  import("@/pages/dashboard/customer/customer-settings/business-functions/index.vue"),
                meta: { breadcrumb: "Business Functions" },
              },
              {
                path: "compensatory-controls",
                name: "customer-settings-compensatory-controls",
                component: () =>
                  import("@/pages/dashboard/customer/customer-settings/compensatory-controls/index.vue"),
                meta: { breadcrumb: "Compensatory Controls" },
              },
              {
                path: "control-domains",
                name: "customer-settings-control-domains",
                component: () =>
                  import("@/pages/dashboard/customer/customer-settings/control-domains/index.vue"),
                meta: { breadcrumb: "Control Domains" },
              },
              {
                path: "controls",
                name: "customer-settings-controls",
                component: () =>
                  import("@/pages/dashboard/customer/customer-settings/controls/index.vue"),
                meta: { breadcrumb: "Controls" },
              },
              {
                path: "email-configuration",
                name: "customer-settings-email-configuration",
                component: () =>
                  import("@/pages/dashboard/customer/customer-settings/email-configuration/index.vue"),
                meta: { breadcrumb: "Email Configuration" },
              },
              {
                path: "frameworks",
                name: "customer-settings-frameworks",
                component: () =>
                  import("@/pages/dashboard/customer/customer-settings/frameworks/index.vue"),
                meta: { breadcrumb: "Frameworks" },
              },
              {
                path: "integrations",
                name: "customer-settings-integrations",
                component: () =>
                  import("@/pages/dashboard/customer/customer-settings/integrations/index.vue"),
                meta: { breadcrumb: "Integrations" },
              },
              {
                path: "policy-documents",
                name: "customer-settings-policy-documents",
                component: () =>
                  import("@/pages/dashboard/customer/customer-settings/policy-documents/index.vue"),
                meta: { breadcrumb: "Policy Documents" },
              },
              {
                path: "risk-categories",
                name: "customer-settings-risk-categories",
                component: () =>
                  import("@/pages/dashboard/customer/customer-settings/risk-categories/index.vue"),
                meta: { breadcrumb: "Risk Categories" },
              },
              {
                path: "risk-exception-workflows",
                name: "customer-settings-risk-exception-workflows",
                component: () =>
                  import("@/pages/dashboard/customer/customer-settings/risk-exception-workflows/index.vue"),
                meta: { breadcrumb: "Risk Exception Workflows" },
              },
              {
                path: "risk-mitigation-library",
                name: "customer-settings-risk-mitigation-library",
                component: () =>
                  import("@/pages/dashboard/customer/customer-settings/risk-mitigation-library/index.vue"),
                meta: { breadcrumb: "Risk Mitigation Library" },
              },
              {
                path: "roles",
                name: "customer-settings-roles",
                component: () =>
                  import("@/pages/dashboard/customer/customer-settings/roles/index.vue"),
                meta: { breadcrumb: "Roles" },
              },
              {
                path: "scoring",
                name: "customer-settings-scoring",
                component: () =>
                  import("@/pages/dashboard/customer/customer-settings/scoring/index.vue"),
                meta: { breadcrumb: "Scoring" },
              },
              {
                path: "users",
                name: "customer-settings-users",
                component: () =>
                  import("@/pages/dashboard/customer/customer-settings/users/index.vue"),
                meta: { breadcrumb: "Users" },
              },
            ],
          },
        ],
      },
    ],
  },
];
