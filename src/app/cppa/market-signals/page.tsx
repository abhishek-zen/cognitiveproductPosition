'use client';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Skeleton } from '@/components/ui/skeleton';
import { useMarketSignals } from '@/hooks/use-market-signals';

function MarketSignalsLoading() {
  return (
    <div>
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
          {[...Array(10)].map((_, i) => (
            <TableRow key={i}>
              <TableCell><Skeleton className="h-5 w-full max-w-[250px]" /></TableCell>
              <TableCell><Skeleton className="h-5 w-28" /></TableCell>
              <TableCell><Skeleton className="h-5 w-20" /></TableCell>
              <TableCell><Skeleton className="h-5 w-16" /></TableCell>
              <TableCell><Skeleton className="h-5 w-32" /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-center mt-6">
        <Skeleton className="h-10 w-96 rounded" />
      </div>
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

// Custom Pagination Component
function CustomPagination({ 
  totalPages, 
  currentPage, 
  onPageChange 
}: { 
  totalPages: number, 
  currentPage: number, 
  onPageChange: (page: number) => void 
}) {
  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    // Logic to show current page in context with neighbors
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    // Adjust if we're near the end
    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    // First page button
    pages.push(
      <button
        key="first"
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        className={`px-3 py-1 mx-1 rounded ${
          currentPage === 1 
            ? 'text-gray-400 cursor-not-allowed' 
            : 'text-blue-600 hover:bg-blue-50'
        }`}
        aria-label="Go to first page"
      >
        «
      </button>
    );

    // Previous page button
    pages.push(
      <button
        key="prev"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-1 mx-1 rounded ${
          currentPage === 1 
            ? 'text-gray-400 cursor-not-allowed' 
            : 'text-blue-600 hover:bg-blue-50'
        }`}
        aria-label="Go to previous page"
      >
        ‹
      </button>
    );

    // Page number buttons
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`px-3 py-1 mx-1 rounded ${
            currentPage === i 
              ? 'bg-blue-600 text-white' 
              : 'hover:bg-blue-50'
          }`}
          aria-label={`Page ${i}`}
          aria-current={currentPage === i ? 'page' : undefined}
        >
          {i}
        </button>
      );
    }

    // Next page button
    pages.push(
      <button
        key="next"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 mx-1 rounded ${
          currentPage === totalPages 
            ? 'text-gray-400 cursor-not-allowed' 
            : 'text-blue-600 hover:bg-blue-50'
        }`}
        aria-label="Go to next page"
      >
        ›
      </button>
    );

    // Last page button
    pages.push(
      <button
        key="last"
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 mx-1 rounded ${
          currentPage === totalPages 
            ? 'text-gray-400 cursor-not-allowed' 
            : 'text-blue-600 hover:bg-blue-50'
        }`}
        aria-label="Go to last page"
      >
        »
      </button>
    );

    return pages;
  };

  return (
    <nav className="flex justify-center items-center" aria-label="Pagination">
      <div className="flex items-center">
        {renderPageNumbers()}
      </div>
      <div className="text-sm text-gray-500 ml-4">
        Page {currentPage} of {totalPages}
      </div>
    </nav>
  );
}

// ---- Client component ---

import React, { useState } from 'react';

function formatDateTime(timestamp: string): string {
  // Format the timestamp in a more readable way
  const date = new Date(timestamp);
  return date.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });
}

function MarketSignalsClient() {
  const [page, setPage] = useState(1);
  const { data, loading, error, totalPages, totalSignals } = useMarketSignals(page);

  if (loading) return <MarketSignalsLoading />;
  if (error) return <MarketSignalsError message={error} />;

  if (!data) return null;

  return (
    <div>
      <div className="mb-4 text-sm text-gray-500">
        Showing page {page} of {totalPages} ({totalSignals} total signals)
      </div>
      
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
              data.map((signal) => (
                <TableRow key={signal.id}>
                  <TableCell>
                    <span className="font-medium">{signal.name}</span>
                  </TableCell>
                  <TableCell>
                    <span className="capitalize">{signal.type.replace('_', ' ')}</span>
                  </TableCell>
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
                  <TableCell>{formatDateTime(signal.timestamp)}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex justify-center mt-6">
        <CustomPagination
          totalPages={totalPages}
          currentPage={page}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
}

export default function CPPAMarketSignalsPage() {
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