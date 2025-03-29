import {
  Pagination as PaginationBase,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

export function Pagination({
  disablePrevious = false,
}: {
  disablePrevious?: boolean;
}) {
  return (
    <PaginationBase className="py-10">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className={cn({
              "pointer-events-none opacity-50": disablePrevious,
            })}
          />
        </PaginationItem>

        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>

        <PaginationItem>
          <PaginationNext href="/posts?page=1" />
        </PaginationItem>
      </PaginationContent>
    </PaginationBase>
  );
}
