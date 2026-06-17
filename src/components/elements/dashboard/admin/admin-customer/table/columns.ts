import type { ColumnDef } from "@tanstack/vue-table";
import { ArrowUpDown, Pencil, Trash2, Eye, CircleArrowOutUpRight } from "lucide-vue-next";
import { h } from "vue";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export interface ComplianceEntry {
  customer_name: string;
  date_created: string;
  compliance_status: "Compliant" | "Non-Compliant" | "Pending" | "In Review";
  auditors: string[];
  actions: string[];
}

export const columns: ColumnDef<ComplianceEntry>[] = [
  // {
  //   id: "select",
  //   header: ({ table }) =>
  //     h(Checkbox, {
  //       modelValue:
  //         table.getIsAllPageRowsSelected() ||
  //         (table.getIsSomePageRowsSelected() && "indeterminate"),
  //       "onUpdate:modelValue": (value) =>
  //         table.toggleAllPageRowsSelected(value === true),
  //       ariaLabel: "Select all",
  //     }),
  //   cell: ({ row }) =>
  //     h(Checkbox, {
  //       modelValue: row.getIsSelected(),
  //       "onUpdate:modelValue": (value) => row.toggleSelected(value === true),
  //       ariaLabel: "Select row",
  //     }),
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  {
    accessorKey: "customer_name",
    size: 300,
    header: ({ column }) =>
      h(
        Button,
        {
          variant: "ghost",
          // class: "-ml-3",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
        },
        () => ["Customer Name", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      ),
    cell: ({ row }) => {
      const name = row.getValue("customer_name") as string;
      const initials = name
        .split(" ")
        .slice(0, 2)
        .map((n) => n[0]?.toUpperCase())
        .join("");

      const colors = [
        "bg-pink-100 text-pink-800",
        "bg-red-100 text-red-800",
        "bg-green-100 text-green-800",
        "bg-blue-100 text-blue-800",
        "bg-yellow-100 text-yellow-800",
        "bg-purple-100 text-purple-800",
        "bg-teal-100 text-teal-800",
      ];

      // Simple hash to pick a color based on name
      const hash = Array.from(name).reduce(
        (acc, char) => acc + char.charCodeAt(0),
        0
      );
      const colorClass = colors[hash % colors.length];

      return h("div", { class: "flex items-center gap-2 pl-2" }, [
        h(
          "div",
          {
            class: `flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-semibold uppercase ${colorClass}`,
          },
          initials
        ),
        h("span", name),
      ]);
    },
  },
  {
    accessorKey: "date_created",
    size: 150,
    header: "Date Created",
    cell: ({ row }) => h("div", row.getValue("date_created")),
  },
  {
    accessorKey: "compliance_status",
    size: 250,
    header: "Compliance Status",
    cell: ({ row }) =>
      h("span", { class: "capitalize" }, row.getValue("compliance_status")),
  },
  {
    accessorKey: "auditors",
    size: 150,
    header: "Auditor(s)",
    cell: ({ row }) => {
      const auditors: string[] = row.getValue("auditors") || [];
      const displayed = auditors.slice(0, 3);
      const remaining = auditors.length - displayed.length;

      const colors = [
        "bg-pink-100 text-pink-800",
        "bg-red-100 text-red-800",
        "bg-green-100 text-green-800",
        "bg-blue-100 text-blue-800",
        "bg-yellow-100 text-yellow-800",
        "bg-purple-100 text-purple-800",
        "bg-teal-100 text-teal-800",
      ];

      const getColor = (name: string) => {
        const hash = Array.from(name).reduce(
          (acc, char) => acc + char.charCodeAt(0),
          0
        );
        return colors[hash % colors.length];
      };

      return h("div", { class: "flex items-center gap-1" }, [
        ...displayed.map((name) =>
          h(
            "div",
            {
              class: `flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-semibold uppercase -ml-2 ${getColor(
                name
              )}`,
              title: name,
            },
            name
              .split(" ")
              .slice(0, 2)
              .map((n) => n[0]?.toUpperCase())
              .join("")
          )
        ),
        remaining > 0 &&
          h(
            "div",
            {
              class:
                "flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 text-gray-700 text-[10px] font-semibold -ml-2",
            },
            `+${remaining}`
          ),
      ]);
    },
  },
  {
    id: "actions",
    size: 150,
    enableHiding: false,
    header: "Actions",
    cell: ({ row }) => {
      return h("div", { class: "flex gap-2" }, [
        h(Button, { variant: "ghost", size: "xs", title: "View" }, () =>
          h(Eye, { class: "w-4 h-4", "stroke-width": "1.5" })
        ),
        h(Button, { variant: "ghost", size: "xs", title: "View" }, () =>
          h(CircleArrowOutUpRight, { class: "w-4 h-4", "stroke-width": "1.5" })
        ),
        h(Button, { variant: "ghost", size: "xs", title: "Edit" }, () =>
          h(Pencil, { class: "w-4 h-4 stroke", "stroke-width": "1.5" })
        ),
        h(Button, { variant: "ghost", size: "xs", title: "Delete" }, () =>
          h(Trash2, { class: "w-4 h-4", "stroke-width": "1.5" })
        ),
      ]);
    },
  },
];
