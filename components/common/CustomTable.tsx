"use client";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  getKeyValue,
} from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";

interface CustomTableProps {
  items: any[];
  columns: { key: string; label: string; render?: any }[];
  perPage?: number;
  total: number;
}

export default function CustomTable({
  items,
  columns,
  perPage = 5,
  total,
}: CustomTableProps) {
  const [page, setPage] = React.useState(1);

  const router = useRouter();
  const pathname = usePathname();

  React.useEffect(() => {
    // change the query param
    let path = pathname + "?" + new URLSearchParams({ skip: page.toString() });
    router.replace(path);
  }, [page]);

  return (
    <Table
      aria-label="Example table with client side pagination"
      bottomContent={
        <div className="flex w-full justify-center">
          <Pagination
            isCompact
            showControls
            showShadow
            color="secondary"
            page={page}
            total={total}
            onChange={(page) => setPage(page)}
          />
        </div>
      }
      classNames={{
        wrapper: "min-h-[222px]",
      }}
    >
      <TableHeader>
        {columns.map((column) => (
          <TableColumn key={column.key}>{column.label}</TableColumn>
        ))}
      </TableHeader>
      <TableBody items={items}>
        {(item) => (
          <TableRow key={item?.name}>
            {(columnKey) => (
              <TableCell>
                {columns.find((col) => col.key === columnKey)?.render
                  ? columns.find((col) => col.key === columnKey)?.render(item)
                  : getKeyValue(item, columnKey)}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
