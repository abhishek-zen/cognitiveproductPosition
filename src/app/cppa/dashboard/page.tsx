'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Skeleton } from '@/components/ui/skeleton';
import { useDashboardData } from '@/hooks/use-dashboard-data';

function DashboardLoading() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <Skeleton key={i} className="h-32 rounded-xl" />
        ))}
      </div>
      <div className="mt-8">
        <Skeleton className="h-8 w-64 mb-4" />
        <Skeleton className="h-64 w-full rounded-lg" />
      </div>
    </div>
  );
}

function DashboardError({ message }: { message: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-red-600">
      <span className="font-semibold text-lg">Failed to load dashboard.</span>
      <span className="text-sm mt-2">{message}</span>
    </div>
  );
}

function DashboardClient() {
  const { data, loading, error } = useDashboardData();

  if (loading) return <DashboardLoading />;
  if (error) return <DashboardError message={error} />;

  if (!data || !data.cards || !data.tableRows) {
    return <DashboardError message="No dashboard data available" />;
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {data.cards.map((card, i) => (
          <Card key={i} className="shadow-md border border-border rounded-xl transition-transform hover:scale-[1.025] hover:shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-semibold">{card.title}</CardTitle>
              {card.icon && <span className="text-2xl">{card.icon}</span>}
            </CardHeader>
            <CardContent>
              <span className="text-3xl font-bold">{card.value}</span>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mb-6">
        <Card className="shadow border rounded-xl">
          <CardHeader>
            <CardTitle className="text-xl">Recent Activity</CardTitle>
            <CardDescription>
              Latest changes and activity tailored to your workflow role.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Updated</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.tableRows.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={3} className="text-muted-foreground text-center py-6">
                      No activity found.
                    </TableCell>
                  </TableRow>
                ) : (
                  data.tableRows.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>
                        <span
                          className={
                            row.status === 'Approved'
                              ? 'text-green-600 font-medium'
                              : row.status === 'Pending'
                              ? 'text-yellow-600 font-medium'
                              : 'text-red-600 font-medium'
                          }
                        >
                          {row.status}
                        </span>
                      </TableCell>
                      <TableCell>{row.updatedAt}</TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default function CPPADashboardPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold tracking-tight mb-2">Dashboard</h1>
      <p className="text-muted-foreground mb-6 max-w-2xl">
        Welcome to your CPPA dashboard. View your tailored insights, activity, and quick actions based on your current access level.
      </p>
      <DashboardClient />
    </section>
  );
}