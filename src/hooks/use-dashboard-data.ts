
'use client';

import { useState, useEffect } from 'react';

export interface DashboardCardData {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
}

export interface DashboardTableRow {
  id: string;
  name: string;
  status: string;
  updatedAt: string;
}

export interface DashboardData {
  userRole: string;
  cards: DashboardCardData[];
  tableRows: DashboardTableRow[];
}

export function useDashboardData() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch('/api/cppa/dashboard')
      .then((response) => {
        if (!response.ok) throw new Error('Failed to fetch dashboard data');
        return response.json();
      })
      .then(setData)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
}
