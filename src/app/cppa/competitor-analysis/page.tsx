"use client"
import React, { useState } from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  BarChart,
  Bar,
  ComposedChart,
  Area,
  ReferenceLine,
  ScatterChart,
  Scatter
} from 'recharts';
import { 
  TrendingUp, 
  TrendingDown, 
  Target, 
  CheckCircle, 
  XCircle,
  AlertCircle,
  Eye,
  DollarSign,
  Star,
  Users,
  Building,
  MessageSquare,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  Globe,
  Shield,
  Award,
  Zap,
  PieChart,
  BarChart3
} from 'lucide-react';

type CompetitorName = 'MegaLife Insurance' | 'Prudential Financial';

const CompetitorAnalysis = () => {
  const [selectedCompetitor, setSelectedCompetitor] = useState<CompetitorName>('MegaLife Insurance');
  const [selectedView, setSelectedView] = useState('overview');
  const [timeRange, setTimeRange] = useState('3M');

  // Mock data
  const competitorData: Record<CompetitorName, any> = {
    'MegaLife Insurance': {
      basicInfo: {
        logo: '/api/placeholder/64/64',
        marketShare: 18.5,
        employees: 45000,
        headquarters: 'New York, NY',
        founded: 1974,
        ceo: 'Robert Thompson',
        revenue: '28.5B',
        rating: 4.2,
        threatLevel: 'high',
        lastUpdate: '2025-05-15T09:30:00Z'
      },
      marketMetrics: {
        marketShare: {
          current: 18.5,
          change: 0.8,
          trend: 'increasing',
          history: [
            { month: '2024-11', value: 17.2 },
            { month: '2024-12', value: 17.5 },
            { month: '2025-01', value: 17.8 },
            { month: '2025-02', value: 18.1 },
            { month: '2025-03', value: 18.3 },
            { month: '2025-04', value: 18.2 },
            { month: '2025-05', value: 18.5 }
          ]
        },
        customerBase: 2.3,
        growthRate: 12.5,
        customerAcquisitionCost: 450,
        customerLifetimeValue: 8500,
        churnRate: 8.2
      },
      products: [
        {
          name: 'FlexGuard Annuity',
          category: 'Fixed Annuity',
          rate: 4.8,
          marketShare: 22.1,
          trend: 'up',
          features: ['Guaranteed rate', 'Flexible withdrawals', 'Death benefit'],
          recentChanges: 'Rate increased from 4.5% to 4.8%'
        },
        {
          name: 'GrowthMax Variable',
          category: 'Variable Annuity',
          rate: null,
          marketShare: 18.7,
          trend: 'stable',
          features: ['Investment options', 'Living benefit rider', 'Tax deferral'],
          recentChanges: 'New fund options added'
        },
        {
          name: 'SimpleStart IRA',
          category: 'IRA Products',
          rate: 3.9,
          marketShare: 15.3,
          trend: 'down',
          features: ['No minimum balance', 'Online management', 'Free transfers'],
          recentChanges: 'Reduced fees by 0.1%'
        }
      ],
      pricing: {
        competitiveness: 72,
        strategies: [
          { type: 'Rate Leadership', strength: 85, description: 'Consistently offers top-tier rates' },
          { type: 'Fee Structure', strength: 60, description: 'Moderate fees, premium for some features' },
          { type: 'Promotional Offers', strength: 90, description: 'Aggressive promotional campaigns' },
          { type: 'Bundle Discounts', strength: 45, description: 'Limited bundling options' }
        ],
        recentChanges: [
          { date: '2025-05-15', change: 'Increased fixed annuity rates by 0.3%' },
          { date: '2025-05-10', change: 'Launched cashback promotion for new customers' },
          { date: '2025-05-08', change: 'Reduced management fees on flagship fund' }
        ]
      },
      sales: {
        channels: [
          { name: 'Independent Agents', percentage: 45, growth: 8.2 },
          { name: 'Bank Partnerships', percentage: 28, growth: 15.1 },
          { name: 'Direct Sales', percentage: 18, growth: 22.5 },
          { name: 'Online Platform', percentage: 9, growth: 35.7 }
        ],
        performance: {
          conversionRate: 12.8,
          avgDealSize: 95000,
          salesCycleDays: 45,
          customerSatisfaction: 4.1
        },
        strengths: [
          'Strong agent network and training',
          'Established bank partnerships',
          'Digital transformation initiatives'
        ],
        weaknesses: [
          'Limited online presence',
          'Slower digital adoption',
          'Higher customer churn in digital channel'
        ]
      },
      marketing: {
        spend: '485M',
        channels: [
          { name: 'Digital Advertising', spend: 185, roi: 2.8 },
          { name: 'Print Media', spend: 95, roi: 1.9 },
          { name: 'TV/Radio', spend: 125, roi: 2.1 },
          { name: 'Events/Sponsorship', spend: 80, roi: 3.2 }
        ],
        campaigns: [
          {
            name: 'Secure Your Future',
            status: 'active',
            budget: '125M',
            channels: ['TV', 'Digital', 'Print'],
            performance: { reach: 2.1, engagement: 4.5, conversion: 2.8 }
          },
          {
            name: 'Rate Leader Campaign',
            status: 'active',
            budget: '85M',
            channels: ['Digital', 'Radio'],
            performance: { reach: 1.8, engagement: 6.2, conversion: 3.4 }
          }
        ],
        brandMetrics: {
          awareness: 82,
          consideration: 48,
          preference: 23,
          satisfaction: 74
        }
      },
      financials: {
        revenue: {
          current: 28.5,
          growth: 8.2,
          forecast: 30.8,
          history: [
            { year: 2020, value: 22.1 },
            { year: 2021, value: 24.2 },
            { year: 2022, value: 25.8 },
            { year: 2023, value: 26.9 },
            { year: 2024, value: 28.5 }
          ]
        },
        profitability: {
          netMargin: 15.2,
          operatingMargin: 22.1,
          grossMargin: 38.7,
          roa: 1.8,
          roe: 12.5
        },
        expenses: {
          claims: 18.2,
          operations: 8.5,
          marketing: 4.2,
          technology: 2.1
        }
      },
      swot: {
        strengths: [
          'Market-leading interest rates',
          'Strong brand recognition',
          'Established distribution network',
          'Robust financial backing',
          'Competitive product portfolio'
        ],
        weaknesses: [
          'Limited digital innovation',
          'Higher operational costs',
          'Aging customer base',
          'Complex product structures',
          'Slow to market with new features'
        ],
        opportunities: [
          'Digital transformation potential',
          'Growing retirement market',
          'Untapped younger demographics',
          'Geographic expansion',
          'New product categories'
        ],
        threats: [
          'Rising interest rate environment',
          'Increasing regulatory requirements',
          'Digital-first competitors',
          'Economic downturn risks',
          'Changing customer expectations'
        ]
      },
      competitive: {
        radar: [
          { subject: 'Product Quality', A: 85, B: 92, fullMark: 100 },
          { subject: 'Pricing', A: 78, B: 88, fullMark: 100 },
          { subject: 'Customer Service', A: 82, B: 75, fullMark: 100 },
          { subject: 'Innovation', A: 65, B: 85, fullMark: 100 },
          { subject: 'Marketing', A: 90, B: 78, fullMark: 100 },
          { subject: 'Distribution', A: 88, B: 82, fullMark: 100 }
        ],
        benchmark: {
          ourCompany: 'B',
          competitor: 'A'
        }
      }
    },
    'Prudential Financial': {
      basicInfo: {
        logo: '/api/placeholder/64/64',
        marketShare: 15.2,
        employees: 52000,
        headquarters: 'Newark, NJ',
        founded: 1875,
        ceo: 'Charles Lowrey',
        revenue: '32.1B',
        rating: 4.5,
        threatLevel: 'medium-high',
        lastUpdate: '2025-05-15T08:45:00Z'
      },
      // ... similar structure for other competitors
    }
    // Add more competitors...
  };

  const currentCompetitor = competitorData[selectedCompetitor];

  const formatCurrency = (value: number) => {
    if (value >= 1000) return `$${value / 1000}B`;
    return `$${value}M`;
  };

  const formatPercent = (value: any) => `${value}%`;

  const getThreatColor = (level: any) => {
    switch (level) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium-high': return 'text-orange-600 bg-orange-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low-medium': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getProductTrendIcon = (trend: any) => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-4 h-4 text-green-600" />;
      case 'down': return <TrendingDown className="w-4 h-4 text-red-600" />;
      default: return <div className="w-4 h-4" />;
    }
  };

  const ViewTab = ({ 
    id, 
    label, 
    icon, 
    active, 
    onClick 
  }: { 
    id: string; 
    label: string; 
    icon: React.ReactNode; 
    active: boolean; 
    onClick: (id: string) => void; 
  }) => (
    <button
      onClick={() => onClick(id)}
      className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
        active 
          ? 'bg-blue-600 text-white shadow-lg' 
          : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      {icon}
      <span className="ml-2">{label}</span>
    </button>
  );

  const CompetitorTile = ({ 
    name, 
    active, 
    // onClick 
  }: { 
    name: CompetitorName; 
    active: boolean; 
    // onClick: (name: CompetitorName) => void; 
  }) => {
    const competitor = competitorData[name];
    if (!competitor) return null;
    
    return (
      <button
        // onClick={() => onClick(name)}
        className={`p-4 rounded-lg border-2 transition-all duration-200 ${
          active 
            ? 'border-blue-500 bg-blue-50' 
            : 'border-gray-200 hover:border-gray-300 bg-white'
        }`}
      >
        <div className="flex items-center space-x-3">
          <img 
            src={competitor.basicInfo.logo} 
            alt={name}
            className="w-12 h-12 rounded-lg"
          />
          <div className="flex-1 text-left">
            <h3 className="font-semibold text-gray-900">{name}</h3>
            <p className="text-sm text-gray-600">{competitor.basicInfo.marketShare}% market share</p>
            <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium mt-1 ${getThreatColor(competitor.basicInfo.threatLevel)}`}>
              {competitor.basicInfo.threatLevel.replace('-', ' ').toUpperCase()}
            </span>
          </div>
          <div className="text-right">
            <div className={`flex items-center ${
              competitor?.marketMetrics?.marketShare?.change >= 0 ? 'text-green-600' : 'text-red-600'
            }`}>
              {competitor?.marketMetrics?.marketShare?.change >= 0 ? 
                <TrendingUp className="w-4 h-4 mr-1" /> : 
                <TrendingDown className="w-4 h-4 mr-1" />
              }
              <span className="text-sm font-medium">
                {Math.abs(competitor?.marketMetrics?.marketShare?.change)}%
              </span>
            </div>
          </div>
        </div>
      </button>
    );
  };

  interface MetricCardProps {
    title: string;
    value: string | number;
    subtitle?: string;
    icon: React.ReactNode;
    trend?: number;
    color?: string;
  }

  const MetricCard = ({ title, value, subtitle, icon, trend, color = 'blue' }: MetricCardProps) => (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">{value}</p>
          {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
        </div>
        <div className={`p-3 rounded-lg bg-${color}-50`}>
          {icon}
        </div>
      </div>
      {trend !== undefined && (
        <div className={`flex items-center mt-3 ${trend >= 0 ? 'text-green-600' : 'text-red-600'}`}>
          {trend >= 0 ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
          <span className="text-sm font-medium">{Math.abs(trend)}% vs last month</span>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Competitor Analysis</h1>
              <p className="text-sm text-gray-500 mt-1">Deep dive into competitor intelligence and market positioning</p>
            </div>
            <div className="flex items-center space-x-4">
              <select 
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md text-sm"
              >
                <option value="1M">Last Month</option>
                <option value="3M">Last 3 Months</option>
                <option value="6M">Last 6 Months</option>
                <option value="1Y">Last Year</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      {/* Competitor Selection */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {Object.keys(competitorData).map((name) => (
            <CompetitorTile 
              key={name}
              name={name as CompetitorName}
              active={selectedCompetitor === name}
            //   onClick={setSelectedCompetitor}
            />
          ))}
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-4 mb-6 overflow-x-auto">
          <ViewTab
            id="overview"
            label="Overview"
            icon={<Eye className="w-4 h-4" />}
            active={selectedView === 'overview'}
            onClick={setSelectedView}
          />
          <ViewTab
            id="products"
            label="Products"
            icon={<Target className="w-4 h-4" />}
            active={selectedView === 'products'}
            onClick={setSelectedView}
          />
          <ViewTab
            id="pricing"
            label="Pricing"
            icon={<DollarSign className="w-4 h-4" />}
            active={selectedView === 'pricing'}
            onClick={setSelectedView}
          />
          <ViewTab
            id="marketing"
            label="Marketing"
            icon={<MessageSquare className="w-4 h-4" />}
            active={selectedView === 'marketing'}
            onClick={setSelectedView}
          />
          <ViewTab
            id="financials"
            label="Financials"
            icon={<BarChart3 className="w-4 h-4" />}
            active={selectedView === 'financials'}
            onClick={setSelectedView}
          />
          <ViewTab
            id="competitive"
            label="Competitive"
            icon={<Award className="w-4 h-4" />}
            active={selectedView === 'competitive'}
            onClick={setSelectedView}
          />
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        {/* Overview Tab */}
        {selectedView === 'overview' && (
          <>
            {/* Basic Info Card */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 mb-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <img 
                    src={currentCompetitor.basicInfo.logo} 
                    alt={selectedCompetitor}
                    className="w-16 h-16 rounded-lg"
                  />
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">{selectedCompetitor}</h2>
                    <p className="text-gray-600">Founded in {currentCompetitor.basicInfo.founded}</p>
                    <p className="text-gray-600">CEO: {currentCompetitor.basicInfo.ceo}</p>
                    <div className="flex items-center mt-2">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      <span className="text-sm">{currentCompetitor.basicInfo.rating}/5</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${getThreatColor(currentCompetitor.basicInfo.threatLevel)}`}>
                    {currentCompetitor.basicInfo.threatLevel.replace('-', ' ').toUpperCase()} THREAT
                  </span>
                  <p className="text-sm text-gray-500 mt-2">
                    Last updated: {new Date(currentCompetitor.basicInfo.lastUpdate).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <MetricCard
                title="Market Share"
                value={`${currentCompetitor.basicInfo.marketShare}%`}
                icon={<PieChart className="w-8 h-8 text-blue-600" />}
                trend={currentCompetitor?.marketMetrics?.marketShare?.change}
              />
              <MetricCard
                title="Revenue"
                value={formatCurrency(parseFloat(currentCompetitor.basicInfo.revenue.replace('B', '').replace('$', '')))}
                subtitle="Annual"
                icon={<DollarSign className="w-8 h-8 text-green-600" />}
                trend={currentCompetitor?.marketMetrics?.growthRate}
              />
              <MetricCard
                title="Employees"
                value={currentCompetitor.basicInfo.employees.toLocaleString()}
                icon={<Users className="w-8 h-8 text-purple-600" />}
              />
              <MetricCard
                title="Customer Base"
                value={`${currentCompetitor?.marketMetrics?.customerBase}M`}
                icon={<Building className="w-8 h-8 text-orange-600" />}
              />
            </div>

            {/* Market Share Trend */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Market Share Trend</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={currentCompetitor?.marketMetrics?.marketShare?.history}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis domain={['dataMin - 0.5', 'dataMax + 0.5']} />
                  <Tooltip formatter={(value) => [`${value}%`, 'Market Share']} />
                  <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* SWOT Analysis */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Strengths & Opportunities</h3>
                <div className="mb-4">
                  <h4 className="text-md font-medium text-green-700 mb-2 flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Strengths
                  </h4>
                  <ul className="space-y-2">
                    {currentCompetitor?.swot?.strengths?.map((strength: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, index: number) => (
                      <li key={index} className="text-sm text-gray-600 flex items-start">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-md font-medium text-blue-700 mb-2 flex items-center">
                    <Target className="w-4 h-4 mr-2" />
                    Opportunities
                  </h4>
                  <ul className="space-y-2">
                    {currentCompetitor?.swot?.opportunities.map((opportunity: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, index: React.Key | null | undefined) => (
                      <li key={index} className="text-sm text-gray-600 flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {opportunity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Weaknesses & Threats</h3>
                <div className="mb-4">
                  <h4 className="text-md font-medium text-orange-700 mb-2 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-2" />
                    Weaknesses
                  </h4>
                  <ul className="space-y-2">
                    {currentCompetitor?.swot?.weaknesses.map((weakness: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, index: React.Key | null | undefined) => (
                      <li key={index} className="text-sm text-gray-600 flex items-start">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {weakness}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-md font-medium text-red-700 mb-2 flex items-center">
                    <XCircle className="w-4 h-4 mr-2" />
                    Threats
                  </h4>
                  <ul className="space-y-2">
                    {currentCompetitor?.swot?.threats.map((threat: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, index: React.Key | null | undefined) => (
                      <li key={index} className="text-sm text-gray-600 flex items-start">
                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {threat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Products Tab */}
        {selectedView === 'products' && (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {currentCompetitor?.products?.map((product: { name: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; category: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; trend: any; marketShare: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; rate: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; features: any[]; recentChanges: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }, index: React.Key | null | undefined) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                      <p className="text-sm text-gray-600">{product.category}</p>
                    </div>
                    <div className="text-right">
                      {getProductTrendIcon(product.trend)}
                      <p className="text-sm text-gray-500 mt-1">{product.marketShare}% share</p>
                    </div>
                  </div>
                  
                  {product.rate && (
                    <div className="bg-blue-50 rounded-lg p-3 mb-4">
                      <p className="text-sm text-gray-600">Current Rate</p>
                      <p className="text-xl font-bold text-blue-600">{product.rate}%</p>
                    </div>
                  )}
                  
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Key Features</p>
                    <ul className="space-y-1">
                      {product.features.map((feature, fIndex) => (
                        <li key={fIndex} className="text-sm text-gray-600 flex items-center">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {product.recentChanges && (
                    <div className="border-t pt-4">
                      <p className="text-sm font-medium text-gray-700 mb-1">Recent Changes</p>
                      <p className="text-sm text-gray-600">{product.recentChanges}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        )}

        {/* Pricing Tab */}
        {selectedView === 'pricing' && (
          <>
            {/* Pricing Competitiveness */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Pricing Strategy Overview</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {currentCompetitor?.pricing?.strategies?.map((strategy: { type: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; strength: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; description: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }, index: React.Key | null | undefined) => (
                  <div key={index} className="text-center">
                    <p className="text-sm text-gray-600 mb-2">{strategy.type}</p>
                    <div className={`relative w-20 h-20 mx-auto rounded-full ${
                      Number(strategy.strength ?? 0) >= 80 ? 'bg-green-500' :
                      Number(strategy.strength ?? 0) >= 60 ? 'bg-yellow-500' :
                      'bg-red-500'
                    } p-1`}>
                      <div className="w-full h-full flex items-center justify-center text-white font-bold">
                        {strategy.strength}
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">{strategy.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Pricing Changes */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Pricing Changes</h3>
              <div className="space-y-4">
                {currentCompetitor.pricing.recentChanges.map((change: { change: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; date: string | number | Date; }, index: React.Key | null | undefined) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                    <Calendar className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{change.change}</p>
                      <p className="text-xs text-gray-500">{new Date(change.date).toLocaleDateString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Marketing Tab */}
        {selectedView === 'marketing' && (
          <>
            {/* Marketing Spend Breakdown */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Marketing Channel Performance</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={currentCompetitor?.marketing?.channels}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
                    <YAxis />
                    <Tooltip 
                      formatter={(value, name) => [
                        name === 'spend' ? `${value}M` : `${value}x`,
                        name === 'spend' ? 'Spend' : 'ROI'
                      ]}
                    />
                    <Bar dataKey="spend" fill="#8884d8" />
                    <Bar dataKey="roi" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Brand Metrics</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600">Brand Awareness</span>
                      <span className="text-sm font-medium">{currentCompetitor.marketing.brandMetrics.awareness}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{width: `${currentCompetitor.marketing.brandMetrics.awareness}%`}}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600">Consideration</span>
                      <span className="text-sm font-medium">{currentCompetitor.marketing.brandMetrics.consideration}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-600 h-2 rounded-full" 
                        style={{width: `${currentCompetitor.marketing.brandMetrics.consideration}%`}}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600">Preference</span>
                      <span className="text-sm font-medium">{currentCompetitor.marketing.brandMetrics.preference}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-purple-600 h-2 rounded-full" 
                        style={{width: `${currentCompetitor.marketing.brandMetrics.preference}%`}}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600">Satisfaction</span>
                      <span className="text-sm font-medium">{currentCompetitor.marketing.brandMetrics.satisfaction}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-orange-600 h-2 rounded-full" 
                        style={{width: `${currentCompetitor.marketing.brandMetrics.satisfaction}%`}}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Active Campaigns */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Active Marketing Campaigns</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {currentCompetitor.marketing.campaigns.map((campaign: { name: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; status: string; budget: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; channels: any[]; performance: { reach: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; engagement: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; conversion: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }; }, index: React.Key | null | undefined) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-md font-semibold text-gray-900">{campaign.name}</h4>
                      <span className="inline-flex px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                        {campaign.status.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">Budget: {campaign.budget}</p>
                    <p className="text-sm text-gray-600 mb-3">Channels: {campaign.channels.join(', ')}</p>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-sm text-gray-600">Reach</p>
                        <p className="text-lg font-bold text-blue-600">{campaign.performance.reach}M</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Engagement</p>
                        <p className="text-lg font-bold text-green-600">{campaign.performance.engagement}%</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">ROI</p>
                        <p className="text-lg font-bold text-purple-600">{campaign.performance.conversion}x</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Financials Tab */}
        {selectedView === 'financials' && (
          <>
            {/* Revenue History */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue History</h3>
              <ResponsiveContainer width="100%" height={300}>
                <ComposedChart data={currentCompetitor.financials.revenue.history}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`${value}B`, 'Revenue']} />
                  <Bar dataKey="value" fill="#8884d8" />
                  <Line type="monotone" dataKey="value" stroke="#ff7300" strokeWidth={2} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>

            {/* Financial Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              <MetricCard
                title="Net Margin"
                value={`${currentCompetitor.financials.profitability.netMargin}%`}
                icon={<TrendingUp className="w-8 h-8 text-green-600" />}
              />
              <MetricCard
                title="Operating Margin"
                value={`${currentCompetitor.financials.profitability.operatingMargin}%`}
                icon={<BarChart3 className="w-8 h-8 text-blue-600" />}
              />
              <MetricCard
                title="ROE"
                value={`${currentCompetitor.financials.profitability.roe}%`}
                icon={<Award className="w-8 h-8 text-purple-600" />}
              />
            </div>

            {/* Expense Breakdown */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Expense Breakdown</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <p className="text-sm text-gray-600">Claims</p>
                  <p className="text-2xl font-bold text-red-600">{currentCompetitor.financials.expenses.claims}%</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">Operations</p>
                  <p className="text-2xl font-bold text-blue-600">{currentCompetitor.financials.expenses.operations}%</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">Marketing</p>
                  <p className="text-2xl font-bold text-green-600">{currentCompetitor.financials.expenses.marketing}%</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">Technology</p>
                  <p className="text-2xl font-bold text-purple-600">{currentCompetitor.financials.expenses.technology}%</p>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Competitive Tab */}
        {selectedView === 'competitive' && (
          <>
            {/* Competitive Radar Chart */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Competitive Positioning Radar</h3>
              <ResponsiveContainer width="100%" height={400}>
                <RadarChart data={currentCompetitor?.competitive?.radar}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis domain={[0, 100]} />
                  <Radar
                    name="Our Company"
                    dataKey="B"
                    stroke="#8884d8"
                    fill="#8884d8"
                    fillOpacity={0.3}
                  />
                  <Radar
                    name={selectedCompetitor}
                    dataKey="A"
                    stroke="#82ca9d"
                    fill="#82ca9d"
                    fillOpacity={0.3}
                  />
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            {/* Sales Channel Comparison */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Sales Channel Performance</h3>
              <div className="space-y-4">
                {currentCompetitor?.sales?.channels.map((channel: { name: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; growth: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; percentage: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }, index: React.Key | null | undefined) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-md font-medium text-gray-900">{channel.name}</h4>
                      <span className={`text-sm font-medium ${
                        Number(channel.growth ?? 0) >= 0 ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {Number(channel.growth ?? 0) ? '+' : ''}{channel.growth}%
                      </span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>{channel.percentage}% of total sales</span>
                      <span>Growth rate</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{width: `${channel.percentage}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Strengths & Weaknesses Summary */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  Sales Strengths
                </h3>
                <ul className="space-y-2">
                  {currentCompetitor?.sales?.strengths.map((strength: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, index: React.Key | null | undefined) => (
                    <li key={index} className="text-sm text-gray-600 flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      {strength}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <XCircle className="w-5 h-5 text-red-600 mr-2" />
                  Sales Weaknesses
                </h3>
                <ul className="space-y-2">
                  {currentCompetitor?.sales?.weaknesses.map((weakness: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, index: React.Key | null | undefined) => (
                    <li key={index} className="text-sm text-gray-600 flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      {weakness}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default CompetitorAnalysis;