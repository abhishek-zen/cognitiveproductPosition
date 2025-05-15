
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Pagination } from '@/components/ui/pagination';
import { Skeleton } from '@/components/ui/skeleton';
import { useMarketSignals } from '@/hooks/use-market-signals';

function MarketSignalsLoading() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {[...Array(6)].map((_, i) => (
          <Skeleton key={i} className="h-28 rounded-xl" />
        ))}
      </div>
      <Skeleton className="h-10 w-48 my-6" />
      <Skeleton className="h-96 w-full rounded-lg" />
    </div>
  );
}

function MarketSignalsError({ message }: { message: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-red-600">
      <span className="font-semibold text-lg">Failed to load market signals.</span>
      <span className="text-sm mt-2">{message}</span>
    </div>
  );
}

export default function CPPAMarketSignalsPage() {
  // This is a Client Component due to hook usage
  // "use client" directive is needed for hooks
  // So, move the interactive section to an inner Client Component.

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold tracking-tight mb-2">Market Signal Detection</h1>
      <p className="text-muted-foreground mb-6 max-w-2xl">
        Explore real-time and historical market signals detected by CPPA. Use the filters and pagination to navigate the dataset.
      </p>
      <MarketSignalsClient />
    </section>
  );
}

// ---- Client component ---
'use client';
import React, { useState } from 'react';

function MarketSignalsClient() {
  const [page, setPage] = useState(1);
  const { data, loading, error, totalPages } = useMarketSignals(page);

  if (loading) return <MarketSignalsLoading />;
  if (error) return <MarketSignalsError message={error} />;

  if (!data) return null;

  return (
    <div>
      <div className="mb-8">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Signal</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Confidence</TableHead>
              <TableHead>Timestamp</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-muted-foreground text-center py-6">
                  No signals detected.
                </TableCell>
              </TableRow>
            ) : (
              data.map((signal: any) => (
                <TableRow key={signal.id}>
                  <TableCell>
                    <span className="font-medium">{signal.name}</span>
                  </TableCell>
                  <TableCell>{signal.type}</TableCell>
                  <TableCell>
                    <span
                      className={
                        signal.status === 'Active'
                          ? 'text-green-600 font-medium'
                          : signal.status === 'Pending'
                          ? 'text-yellow-600 font-medium'
                          : 'text-red-600 font-medium'
                      }
                    >
                      {signal.status}
                    </span>
                  </TableCell>
                  <TableCell>{signal.confidence}%</TableCell>
                  <TableCell>{signal.timestamp}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex justify-center mt-6">
        <Pagination
          totalPages={totalPages}
          currentPage={page}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
}
