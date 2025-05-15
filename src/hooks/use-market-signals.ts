
'use client';

import { useState, useEffect } from 'react';

export interface MarketSignal {
  id: string;
  name: string;
  type: string;
  status: string;
  confidence: number;
  timestamp: string;
}

export function useMarketSignals(page: number) {
  const [data, setData] = useState<MarketSignal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/cppa/market-signals?page=${page}`)
      .then((response) => {
        if (!response.ok) throw new Error('Failed to fetch market signals');
        return response.json();
      })
      .then((res) => {
        setData(res.signals || []);
        setTotalPages(res.totalPages || 1);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [page]);

  return { data, loading, error, totalPages };
}
