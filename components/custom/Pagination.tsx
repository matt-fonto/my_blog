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

type PaginationProps = {
  page: number;
  totalPages: number;
  sendToBlog?: boolean;
};

export function Pagination({ page, totalPages, sendToBlog }: PaginationProps) {
  const prev = page > 1 ? page - 1 : 1;
  const next = page < totalPages ? page + 1 : totalPages;

  return (
    <PaginationBase className="py-10">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={`?page=${prev}`}
            className={cn({
              "pointer-events-none opacity-50": page === 1,
            })}
          />
        </PaginationItem>

        {Array.from({ length: totalPages }).map((_, i) => {
          const current = i + 1;

          return (
            <PaginationItem key={current}>
              <PaginationLink
                href={`?page=${current}`}
                className={cn({
                  "bg-primary text-primary-foreground": current === page,
                })}
              >
                {current}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>

        <PaginationItem>
          <PaginationNext
            href={sendToBlog ? "blog/posts" : `?page=${next}`}
            className={cn({
              "pointer-events-none opacity-50":
                page === totalPages && !sendToBlog,
            })}
          />
        </PaginationItem>
      </PaginationContent>
    </PaginationBase>
  );
}
