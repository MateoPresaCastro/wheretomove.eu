"use client";

import HeaderSortable from "@/components/tables/table-header-sortable";
import { getScore } from "@/lib/utils";
import type { ColumnDef } from "@tanstack/react-table";

type Result = ReturnType<typeof getScore>[number];

export const columns: ColumnDef<Result>[] = [
  {
    id: "position",
    accessorFn: (row) => row.position,
    header: () => <p className="text-xs">Position</p>,
    enableHiding: false,
  },
  {
    id: "country",
    accessorKey: "country",
    header: () => <p className="text-xs">Country</p>,
    enableHiding: false,
  },
  {
    accessorKey: "score",
    header: ({ column }) => (
      <HeaderSortable text="Overall score" column={column} />
    ),

    cell: ({ row }) => {
      const value = row.getValue("score") as string;
      if (!value) {
        return <div className="text-right">-</div>;
      }

      const amount = parseFloat(value);
      const formatted = new Intl.NumberFormat("es-ES", {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
      }).format(amount);

      return <div className="text-right">{formatted}</div>;
    },
  },
];
