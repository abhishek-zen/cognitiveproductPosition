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

// Enhanced mock data with more signals and varied names
const mockData = {
  signals: [
    {
      id: 'sig_001',
      name: 'MegaLife Annuity Rate Increased to 4.8%',
      type: 'rate_change',
      status: 'Active',
      confidence: 94,
      timestamp: '2025-05-15T09:30:00.000Z',
    },
    {
      id: 'sig_002',
      name: 'Prudential GLWB Rider with Inflation Protection',
      type: 'product_launch',
      status: 'Pending',
      confidence: 87,
      timestamp: '2025-05-15T08:45:00.000Z',
    },
    {
      id: 'sig_003',
      name: 'Northwestern TV Ad Campaign for Millennials',
      type: 'marketing_campaign',
      status: 'Active',
      confidence: 91,
      timestamp: '2025-05-15T07:15:00.000Z',
    },
    {
      id: 'sig_004',
      name: 'Lincoln Reduces Admin Fees by 0.15%',
      type: 'fee_change',
      status: 'Inactive',
      confidence: 76,
      timestamp: '2025-05-14T16:20:00.000Z',
    },
    {
      id: 'sig_005',
      name: 'AIG AI-Powered Risk Assessment Tool',
      type: 'technology_enhancement',
      status: 'Active',
      confidence: 89,
      timestamp: '2025-05-14T14:10:00.000Z',
    },
    {
      id: 'sig_006',
      name: 'MetLife Term Life Premium Adjustment',
      type: 'premium_change',
      status: 'Pending',
      confidence: 83,
      timestamp: '2025-05-14T11:25:00.000Z',
    },
    {
      id: 'sig_007',
      name: 'Transamerica Digital Portal for Advisors',
      type: 'technology_enhancement',
      status: 'Active',
      confidence: 92,
      timestamp: '2025-05-14T10:05:00.000Z',
    },
    {
      id: 'sig_008',
      name: 'Pacific Life Dividend Scale Increase of 0.25%',
      type: 'dividend_change',
      status: 'Active',
      confidence: 88,
      timestamp: '2025-05-13T16:40:00.000Z',
    },
    {
      id: 'sig_009',
      name: 'John Hancock No-Exam Policy Expansion',
      type: 'process_change',
      status: 'Pending',
      confidence: 79,
      timestamp: '2025-05-13T14:15:00.000Z',
    },
    {
      id: 'sig_010',
      name: 'Nationwide S&P 500 Index Universal Life',
      type: 'product_launch',
      status: 'Active',
      confidence: 95,
      timestamp: '2025-05-13T11:30:00.000Z',
    },
  ],
  totalPages: 8,
  currentPage: 1,
  totalSignals: 76,
};

// Updated function to generate mock data with more varied names
const generatePageData = (pageNumber: number) => {
  // First page is our default mockData.signals
  if (pageNumber === 1) return mockData.signals;
  
  // For other pages, generate unique data with adjusted timestamps
  const baseDate = new Date('2025-05-15T09:30:00.000Z');
  const pageOffset = (pageNumber - 1) * 10; // 10 items per page
  
  // Create a list of realistic signal names
  const signalNames = [
    'Guardian Life Adds Chronic Illness Rider',
    'TIAA-CREF Increases Target Date Fund Allocation',
    'New York Life Agent Recruiting Campaign',
    'Allianz Introduces Guaranteed Income Product',
    'Principal Financial Lowers Fee Structure',
    'Mutual of Omaha Medicare Supplement Rate Change',
    'Securian Launches Estate Planning Tool Suite',
    'Mass Mutual Simplifies Underwriting Requirements',
    'Penn Mutual Revises Investment Options',
    'Ohio National Marketing to Small Business Owners',
    'Equitable Adds ESG Investment Options',
    'Brighthouse Financial Adjusts Cap Rate',
    'State Farm Digital Claims Processing Update',
    'Unum Group Long Term Care Product Restructuring',
    'Voya Financial Advisor Platform Enhancement',
    'Lincoln National Fee Structure Revision',
    'Protective Life Policy Surrender Option Change',
    'Berkshire Life Disability Income Product Launch',
    'Global Atlantic Introduces Indexed Annuity',
    'American National Direct Mail Campaign',
    'Jackson National Living Benefit Enhancement',
    'Athene Retirement Income Calculator Tool',
    'Symetra Financial Dividend Declaration',
    'Midland National Fixed Index Annuity Promotion',
    'RiverSource Adds Social Security Planning Module',
    'Sammons Financial Group Term Conversion Update',
    'Western & Southern Financial Cap Rate Adjustment',
    'Talcott Resolution Legacy Block Transaction',
    'Great American Insurance Cash Value Enhancement',
    'Ameriprise Financial Planning Tool Upgrade',
    'Fidelity & Guaranty Life Product Restructuring',
    'Genworth Long-Term Care Rate Filing',
    'OneAmerica Whole Life Dividend Announcement',
    'Minnesota Life Variable UL Rate Adjustment',
    'National Life Group Index Crediting Strategy',
    'Aflac Digital Claim Process Optimization',
    'Colonial Life Enrollment Platform Update',
    'Manhattan Life Medicare Supplement Pricing',
    'Legal & General America Underwriting Algorithm',
    'Sun Life Critical Illness Rider Enhancement',
    'Sagicor Life USA Online Application Launch',
    'Delaware Life MYGA Rate Increase',
    'Bestow Term Life Digital Marketing Campaign',
    'Pacific Life Premium Finance Program',
    'Primerica Recruiting Initiative',
    'Cincinnati Financial Agent Training Program',
    'Hannover Re Risk Assessment Model Update',
    'Reinsurance Group of America Pricing Adjustment',
    'Integrity Marketing Group Agency Acquisition',
    'Swiss Re Mortality Table Revision',
    'AXA Equitable Retirement Planning Calculator',
    'Nationwide Investment Advisor Program Expansion',
    'Hartford Financial Enhanced Digital Experience',
    'Knights of Columbus New Catholic Values Fund',
    'MassMutual AI Underwriting Protocol',
    'Northwestern Mutual Dividend Strategy Shift',
    'Guardian Wealth Management Platform Launch',
    'Lincoln Benefit Life Portfolio Reorganization',
    'Pacific Guardian Life Rate Revision',
    'Foresters Financial Community Initiative',
    'AAA Life Direct-to-Consumer Portal Enhancement',
    'Sammons Financial Group Premium Adjustment',
    'Transamerica Retirement Solutions Update',
    'Prudential Income Protection Rider',
    'New York Life Estate Planning Tool Release'
  ];
  
  const types = ['rate_change', 'product_launch', 'marketing_campaign', 'fee_change', 
                'technology_enhancement', 'premium_change', 'dividend_change', 'process_change'];
  const statuses = ['Active', 'Pending', 'Inactive'];
  
  return Array.from({ length: 10 }, (_, i) => {
    const id = `sig_${(pageOffset + i + 1).toString().padStart(3, '0')}`;
    const date = new Date(baseDate);
    date.setDate(date.getDate() - Math.floor((pageOffset + i) / 5));
    date.setHours(date.getHours() - ((pageOffset + i) % 5));
    
    // Get a name from our list based on the offset
    const nameIndex = (pageOffset + i) % signalNames.length;
    
    return {
      id,
      name: signalNames[nameIndex],
      type: types[Math.floor(Math.random() * types.length)],
      status: statuses[Math.floor(Math.random() * statuses.length)],
      confidence: Math.floor(70 + Math.random() * 30),
      timestamp: date.toISOString(),
    };
  });
};

export function useMarketSignals(page: number) {
  const [data, setData] = useState<MarketSignal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState(mockData.totalPages);
  const [totalSignals, setTotalSignals] = useState(mockData.totalSignals);

  useEffect(() => {
    // Simulate loading
    setLoading(true);

    // Simulate API call with setTimeout
    const timer = setTimeout(() => {
      try {
        // Return mock data based on page number
        setData(generatePageData(page));
        setTotalPages(mockData.totalPages);
        setTotalSignals(mockData.totalSignals);
        setLoading(false);
      } catch (err) {
        setError('Error loading market signals data');
        setLoading(false);
      }
    }, 800); // Simulate network delay of 800ms

    // Cleanup timeout
    return () => clearTimeout(timer);
  }, [page]);

  return { data, loading, error, totalPages, totalSignals };
}
