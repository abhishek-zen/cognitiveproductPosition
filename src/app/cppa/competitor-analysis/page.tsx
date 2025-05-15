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
  Scatter,
  Pie,
  Cell
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
      marketMetrics: {
        marketShare: {
          current: 15.2,
          change: -0.3,
          trend: 'decreasing',
          history: [
            { month: '2024-11', value: 15.8 },
            { month: '2024-12', value: 15.7 },
            { month: '2025-01', value: 15.6 },
            { month: '2025-02', value: 15.5 },
            { month: '2025-03', value: 15.3 },
            { month: '2025-04', value: 15.2 },
            { month: '2025-05', value: 15.2 }
          ]
        },
        customerBase: 3.1,
        growthRate: 5.8,
        customerAcquisitionCost: 520,
        customerLifetimeValue: 9200,
        churnRate: 6.5
      },
      products: [
        {
          name: 'Premier Annuity',
          category: 'Fixed Annuity',
          rate: 4.2,
          marketShare: 18.5,
          trend: 'down',
          features: ['Guaranteed income', 'Death benefit', 'Tax-deferred growth'],
          recentChanges: 'Rate decreased from 4.5% to 4.2%'
        },
        {
          name: 'Prudential Variable',
          category: 'Variable Annuity',
          rate: null,
          marketShare: 22.3,
          trend: 'up',
          features: ['Multiple investment options', 'Living benefit riders', 'Flexible withdrawals'],
          recentChanges: 'Added new sustainable fund options'
        },
        {
          name: 'Retirement IRA',
          category: 'IRA Products',
          rate: 3.7,
          marketShare: 19.8,
          trend: 'stable',
          features: ['Low fees', 'Wide fund selection', 'Digital management'],
          recentChanges: 'Launched new mobile app features'
        }
      ],
      pricing: {
        competitiveness: 68,
        strategies: [
          { type: 'Rate Leadership', strength: 70, description: 'Competitive but not market-leading rates' },
          { type: 'Fee Structure', strength: 75, description: 'Transparent fee structure with good value' },
          { type: 'Promotional Offers', strength: 65, description: 'Moderate promotional activity' },
          { type: 'Bundle Discounts', strength: 80, description: 'Strong bundling incentives' }
        ],
        recentChanges: [
          { date: '2025-05-12', change: 'Decreased fixed annuity rates by 0.3%' },
          { date: '2025-05-01', change: 'Introduced new fee waiver for high-value clients' },
          { date: '2025-04-22', change: 'Launched bundle discount program for multiple products' }
        ]
      },
      sales: {
        channels: [
          { name: 'Independent Agents', percentage: 35, growth: 3.2 },
          { name: 'Bank Partnerships', percentage: 30, growth: 10.5 },
          { name: 'Direct Sales', percentage: 15, growth: 8.7 },
          { name: 'Online Platform', percentage: 20, growth: 28.3 }
        ],
        performance: {
          conversionRate: 14.2,
          avgDealSize: 105000,
          salesCycleDays: 38,
          customerSatisfaction: 4.3
        },
        strengths: [
          'Strong digital tools for advisors',
          'Comprehensive training program',
          'Effective cross-selling process'
        ],
        weaknesses: [
          'Smaller independent agent network',
          'Lower commission structure',
          'Complex approval process'
        ]
      },
      marketing: {
        spend: '520M',
        channels: [
          { name: 'Digital Advertising', spend: 220, roi: 3.1 },
          { name: 'Print Media', spend: 75, roi: 1.5 },
          { name: 'TV/Radio', spend: 150, roi: 2.2 },
          { name: 'Events/Sponsorship', spend: 75, roi: 2.8 }
        ],
        campaigns: [
          {
            name: 'Financial Strength',
            status: 'active',
            budget: '180M',
            channels: ['TV', 'Digital', 'Print', 'Outdoor'],
            performance: { reach: 2.8, engagement: 3.9, conversion: 2.5 }
          },
          {
            name: 'Digital Retirement',
            status: 'active',
            budget: '95M',
            channels: ['Digital', 'Social Media'],
            performance: { reach: 1.5, engagement: 7.8, conversion: 3.9 }
          }
        ],
        brandMetrics: {
          awareness: 89,
          consideration: 52,
          preference: 28,
          satisfaction: 81
        }
      },
      financials: {
        revenue: {
          current: 32.1,
          growth: 3.5,
          forecast: 33.4,
          history: [
            { year: 2020, value: 29.2 },
            { year: 2021, value: 30.1 },
            { year: 2022, value: 30.8 },
            { year: 2023, value: 31.5 },
            { year: 2024, value: 32.1 }
          ]
        },
        profitability: {
          netMargin: 16.5,
          operatingMargin: 24.8,
          grossMargin: 40.2,
          roa: 1.9,
          roe: 13.8
        },
        expenses: {
          claims: 17.5,
          operations: 7.8,
          marketing: 4.8,
          technology: 3.2
        }
      },
      swot: {
        strengths: [
          'Strong brand heritage and recognition',
          'Diversified product portfolio',
          'Advanced digital capabilities',
          'Global presence and resources',
          'Strong financial stability'
        ],
        weaknesses: [
          'Higher pricing in some categories',
          'Complex organizational structure',
          'Slower decision-making process',
          'Inconsistent customer experience',
          'Legacy system challenges'
        ],
        opportunities: [
          'Emerging market expansion',
          'ESG investment growth',
          'Digital-first customer segment',
          'Wealth management integration',
          'Retirement income solutions'
        ],
        threats: [
          'Low interest rate pressures',
          'Increased regulatory scrutiny',
          'Disruptive insurtechs',
          'Changing consumer preferences',
          'Cybersecurity concerns'
        ]
      },
      competitive: {
        radar: [
          { subject: 'Product Quality', A: 90, B: 92, fullMark: 100 },
          { subject: 'Pricing', A: 65, B: 88, fullMark: 100 },
          { subject: 'Customer Service', A: 78, B: 75, fullMark: 100 },
          { subject: 'Innovation', A: 82, B: 85, fullMark: 100 },
          { subject: 'Marketing', A: 85, B: 78, fullMark: 100 },
          { subject: 'Distribution', A: 80, B: 82, fullMark: 100 }
        ],
        benchmark: {
          ourCompany: 'B',
          competitor: 'A'
        }
      }
    }
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
    onClick 
  }: { 
    name: CompetitorName; 
    active: boolean; 
    onClick: (name: CompetitorName) => void; 
  }) => {
    const competitor = competitorData[name];
    if (!competitor) return null;
    
    return (
      <button
        onClick={() => onClick(name)}
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
              onClick={setSelectedCompetitor}
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
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis domain={[(dataMin: number) => Math.floor(dataMin * 0.95), (dataMax: number) => Math.ceil(dataMax * 1.05)]} />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#3B82F6" 
                    strokeWidth={3} 
                    dot={{ r: 4 }} 
                    activeDot={{ r: 6 }} 
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* SWOT Analysis */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">SWOT Analysis</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-medium text-green-700 flex items-center mb-3">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Strengths
                  </h4>
                  <ul className="space-y-2">
                    {currentCompetitor.swot.strengths.map((strength: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, index: React.Key | null | undefined) => (
                      <li key={index} className="text-green-800 flex items-start">
                        <div className="min-w-4 mt-1 mr-2">•</div>
                        <div>{strength}</div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h4 className="font-medium text-red-700 flex items-center mb-3">
                    <XCircle className="w-5 h-5 mr-2" />
                    Weaknesses
                  </h4>
                  <ul className="space-y-2">
                    {currentCompetitor.swot.weaknesses.map((weakness: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, index: React.Key | null | undefined) => (
                      <li key={index} className="text-red-800 flex items-start">
                        <div className="min-w-4 mt-1 mr-2">•</div>
                        <div>{weakness}</div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-medium text-blue-700 flex items-center mb-3">
                    <Target className="w-5 h-5 mr-2" />
                    Opportunities
                  </h4>
                  <ul className="space-y-2">
                    {currentCompetitor.swot.opportunities.map((opportunity: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, index: React.Key | null | undefined) => (
                      <li key={index} className="text-blue-800 flex items-start">
                        <div className="min-w-4 mt-1 mr-2">•</div>
                        <div>{opportunity}</div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h4 className="font-medium text-yellow-700 flex items-center mb-3">
                    <AlertCircle className="w-5 h-5 mr-2" />
                    Threats
                  </h4>
                  <ul className="space-y-2">
                    {currentCompetitor.swot.threats.map((threat: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, index: React.Key | null | undefined) => (
                      <li key={index} className="text-yellow-800 flex items-start">
                        <div className="min-w-4 mt-1 mr-2">•</div>
                        <div>{threat}</div>
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
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Portfolio</h3>
              <div className="space-y-6">
                {currentCompetitor.products.map((product: { name: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; trend: any; category: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; marketShare: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; rate: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; features: (string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | React.ReactPortal | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | React.ReactPortal | Iterable<React.ReactNode> | null | undefined> | null | undefined)[]; recentChanges: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }, index: React.Key | null | undefined) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center">
                          <h4 className="font-medium text-lg text-gray-900">{product.name}</h4>
                          {getProductTrendIcon(product.trend)}
                        </div>
                        <p className="text-sm text-gray-500">{product.category}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-blue-600 font-semibold">
                          {product.marketShare}% Market Share
                        </div>
                        {product.rate && (
                          <div className="text-sm text-gray-600">
                            Rate: {product.rate}%
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Key Features</p>
                        <ul className="mt-1 space-y-1">
                          {product.features.map((feature: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, fidx: React.Key | null | undefined) => (
                            <li key={fidx} className="text-sm text-gray-800 flex items-start">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-600">Recent Changes</p>
                        <p className="text-sm text-gray-800 mt-1">{product.recentChanges}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Market Share</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={currentCompetitor.products}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis domain={[0, 25]} />
                    <Tooltip />
                    <Bar dataKey="marketShare" fill="#3B82F6" name="Market Share %" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Rate Comparison</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={currentCompetitor.products.filter((p: { rate: null; }) => p.rate !== null)}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis domain={[0, 6]} />
                    <Tooltip />
                    <Bar dataKey="rate" fill="#10B981" name="Interest Rate %" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </>
        )}

        {/* Pricing Tab */}
        {selectedView === 'pricing' && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="md:col-span-2 bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Pricing Strategies</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <RadarChart data={currentCompetitor.pricing.strategies}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="type" />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} />
                    <Radar
                      name="Strength"
                      dataKey="strength"
                      stroke="#3B82F6"
                      fill="#3B82F6"
                      fillOpacity={0.6}
                    />
                    <Tooltip />
                    <Legend />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Pricing Competitiveness</h3>
                <div className="flex justify-center items-center h-48">
                  <div className="relative w-48 h-48">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-4xl font-bold text-blue-600">{currentCompetitor.pricing.competitiveness}</div>
                    </div>
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="#E5E7EB"
                        strokeWidth="10"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="#3B82F6"
                        strokeWidth="10"
                        strokeDasharray={`${currentCompetitor.pricing.competitiveness * 282.7 / 100} 282.7`}
                        strokeDashoffset="0"
                        strokeLinecap="round"
                        transform="rotate(-90 50 50)"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-center text-sm text-gray-600 mt-2">Out of 100</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Pricing Strategy Details</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Strategy
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Strength
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {currentCompetitor.pricing.strategies.map((strategy: { type: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; strength: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; description: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }, index: React.Key | null | undefined) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {strategy.type}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex items-center">
                            <span className="mr-2">{strategy.strength}</span>
                            <div className="w-24 h-2 bg-gray-200 rounded-full">
                              <div 
                                className="h-full bg-blue-600 rounded-full" 
                                style={{ width: `${strategy.strength}%` }}
                              />
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {strategy.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Pricing Changes</h3>
              <div className="flow-root">
                <ul className="-mb-8">
                  {currentCompetitor.pricing.recentChanges.map((change: { change: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; date: string | number | Date | undefined; }, index: React.Key | null | undefined) => (
                    <li key={index}>
                      <div className="relative pb-8">
                        {index !== currentCompetitor.pricing.recentChanges.length - 1 && (
                          <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                        )}
                        <div className="relative flex space-x-3">
                          <div>
                            <span className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white">
                              <Calendar className="h-5 w-5 text-white" aria-hidden="true" />
                            </span>
                          </div>
                          <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                            <div>
                              <p className="text-sm text-gray-500">{change.change}</p>
                            </div>
                            <div className="text-right text-sm whitespace-nowrap text-gray-500">
                              <time dateTime={typeof change.date === 'string' ? change.date : new Date(change.date || '').toISOString()}>{new Date(change.date || '').toLocaleDateString()}</time>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}

        {/* Marketing Tab */}
        {selectedView === 'marketing' && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Marketing Spend by Channel</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Tooltip formatter={(value) => `$${value}M`} />
                    <Legend layout="vertical" verticalAlign="middle" align="right" />
                    <Pie
                      data={currentCompetitor.marketing.channels}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="spend"
                      nameKey="name"
                    >
                      {currentCompetitor.marketing.channels.map((entry: any, index: number) => (
                        <Cell key={`cell-${index}`} fill={['#3B82F6', '#10B981', '#F59E0B', '#EF4444'][index % 4]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Channel ROI</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={currentCompetitor.marketing.channels}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis domain={[0, 4]} />
                    <Tooltip formatter={(value) => (typeof value === 'number' ? value.toFixed(1) : value)} />
                    <Bar dataKey="roi" fill="#10B981" name="ROI" />
                    <ReferenceLine y={2.5} stroke="red" strokeDasharray="3 3" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Active Marketing Campaigns</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentCompetitor.marketing.campaigns.map((campaign: { name: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; status: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; budget: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; channels: any[]; performance: { reach: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; engagement: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; conversion: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }; }, index: React.Key | null | undefined) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-gray-900">{campaign.name}</h4>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-green-100 text-green-800 mt-1">
                          {campaign.status}
                        </span>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-500 text-sm">Budget</p>
                        <p className="font-medium">{campaign.budget}</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm text-gray-600 mb-2">Channels:</p>
                      <div className="flex flex-wrap gap-2">
                        {campaign.channels.map((channel, cidx) => (
                          <span key={cidx} className="px-2 py-1 rounded-md text-xs bg-gray-100 text-gray-700">
                            {channel}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                      <div className="p-2 bg-blue-50 rounded-md">
                        <p className="text-xs text-gray-500">Reach</p>
                        <p className="font-medium text-blue-700">{campaign.performance.reach}M</p>
                      </div>
                      <div className="p-2 bg-green-50 rounded-md">
                        <p className="text-xs text-gray-500">Engagement</p>
                        <p className="font-medium text-green-700">{campaign.performance.engagement}%</p>
                      </div>
                      <div className="p-2 bg-purple-50 rounded-md">
                        <p className="text-xs text-gray-500">Conversion</p>
                        <p className="font-medium text-purple-700">{campaign.performance.conversion}%</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Brand Metrics</h3>
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart data={[
                  { metric: 'Awareness', value: currentCompetitor.marketing.brandMetrics.awareness },
                  { metric: 'Consideration', value: currentCompetitor.marketing.brandMetrics.consideration },
                  { metric: 'Preference', value: currentCompetitor.marketing.brandMetrics.preference },
                  { metric: 'Satisfaction', value: currentCompetitor.marketing.brandMetrics.satisfaction },
                ]}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="metric" />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} />
                  <Radar
                    name="Brand Value"
                    dataKey="value"
                    stroke="#8884d8"
                    fill="#8884d8"
                    fillOpacity={0.6}
                  />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </>
        )}

        {/* Financials Tab */}
        {selectedView === 'financials' && (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue Trend</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={currentCompetitor.financials.revenue.history}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis domain={[(dataMin: number) => Math.floor(dataMin * 0.9), (dataMax: number) => Math.ceil(dataMax * 1.1)]} />
                    <Tooltip formatter={(value) => `$${value}B`} />
                    <Line type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={3} />
                    <ReferenceLine
                      x={currentCompetitor.financials.revenue.history[currentCompetitor.financials.revenue.history.length - 1].year}
                      stroke="#10B981"
                      strokeDasharray="3 3"
                      label={{ value: 'Current', position: 'insideBottomRight', fill: '#10B981', fontSize: 12 }}
                    />
                    <ReferenceLine
                      y={currentCompetitor.financials.revenue.forecast}
                      stroke="#F59E0B"
                      strokeDasharray="3 3"
                      label={{ value: 'Forecast', position: 'insideRight', fill: '#F59E0B', fontSize: 12 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Expense Breakdown</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Tooltip formatter={(value) => `$${value}B (${((Number(value) / (
                      currentCompetitor.financials.expenses.claims +
                      currentCompetitor.financials.expenses.operations +
                      currentCompetitor.financials.expenses.marketing +
                      currentCompetitor.financials.expenses.technology
                    )) * 100).toFixed(1)}%)`} />
                    <Legend layout="vertical" verticalAlign="middle" align="right" />
                    <Pie
                      data={[
                        { name: 'Claims', value: currentCompetitor.financials.expenses.claims },
                        { name: 'Operations', value: currentCompetitor.financials.expenses.operations },
                        { name: 'Marketing', value: currentCompetitor.financials.expenses.marketing },
                        { name: 'Technology', value: currentCompetitor.financials.expenses.technology },
                      ]}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      <Cell fill="#3B82F6" />
                      <Cell fill="#10B981" />
                      <Cell fill="#F59E0B" />
                      <Cell fill="#EF4444" />
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Profitability Metrics</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {[
                  { key: 'netMargin', label: 'Net Margin', color: 'blue' },
                  { key: 'operatingMargin', label: 'Operating Margin', color: 'green' },
                  { key: 'grossMargin', label: 'Gross Margin', color: 'purple' },
                  { key: 'roa', label: 'ROA', color: 'yellow' },
                  { key: 'roe', label: 'ROE', color: 'red' }
                ].map((metric) => (
                  <div key={metric.key} className="p-4 rounded-lg border border-gray-200">
                    <p className="text-sm text-gray-500">{metric.label}</p>
                    <p className={`text-xl font-bold text-${metric.color}-600 mt-2`}>
                      {formatPercent(currentCompetitor.financials.profitability[metric.key])}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Financial Summary</h3>
              <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Current Revenue</dt>
                  <dd className="mt-1 text-lg font-semibold text-gray-900">${currentCompetitor.financials.revenue.current}B</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Revenue Growth</dt>
                  <dd className="mt-1 text-lg font-semibold text-green-600">+{currentCompetitor.financials.revenue.growth}%</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Forecast Revenue</dt>
                  <dd className="mt-1 text-lg font-semibold text-blue-600">${currentCompetitor.financials.revenue.forecast}B</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Total Expenses</dt>
                  <dd className="mt-1 text-lg font-semibold text-red-600">
                    ${(
                      currentCompetitor.financials.expenses.claims +
                      currentCompetitor.financials.expenses.operations +
                      currentCompetitor.financials.expenses.marketing +
                      currentCompetitor.financials.expenses.technology
                    ).toFixed(1)}B
                  </dd>
                </div>
              </dl>
            </div>
          </>
        )}

        {/* Competitive Tab */}
        {selectedView === 'competitive' && (
          <>
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Competitive Analysis</h3>
              <div className="text-sm text-gray-500 mb-4">
                <span className="inline-flex items-center mr-4">
                  <span className="w-3 h-3 rounded-full bg-blue-500 mr-1"></span>
                  {selectedCompetitor} ({currentCompetitor.competitive.benchmark.competitor})
                </span>
                <span className="inline-flex items-center">
                  <span className="w-3 h-3 rounded-full bg-green-500 mr-1"></span>
                  Our Company ({currentCompetitor.competitive.benchmark.ourCompany})
                </span>
              </div>
              <ResponsiveContainer width="100%" height={400}>
                <RadarChart data={currentCompetitor.competitive.radar}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} />
                  <Radar
                    name={selectedCompetitor}
                    dataKey="A"
                    stroke="#3B82F6"
                    fill="#3B82F6"
                    fillOpacity={0.6}
                  />
                  <Radar
                    name="Our Company"
                    dataKey="B"
                    stroke="#10B981"
                    fill="#10B981"
                    fillOpacity={0.6}
                  />
                  <Legend />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Head-to-Head Comparison</h3>
                <div className="space-y-6">
                  {[
                    { subject: 'Product Quality', icon: Star },
                    { subject: 'Pricing', icon: DollarSign },
                    { subject: 'Customer Service', icon: Users },
                    { subject: 'Innovation', icon: Zap },
                    { subject: 'Marketing', icon: MessageSquare },
                    { subject: 'Distribution', icon: Globe }
                  ].map((item, index) => {
                    const radarData = currentCompetitor.competitive.radar.find((d: { subject: string; }) => d.subject === item.subject);
                    return (
                      <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                        <div className="flex items-center mb-2">
                          <item.icon className="w-5 h-5 text-gray-500 mr-2" />
                          <h4 className="font-medium text-gray-900">{item.subject}</h4>
                        </div>
                        <div className="flex justify-between">
                          <div className="text-blue-600 font-medium">
                            {radarData?.A} ({currentCompetitor.competitive.benchmark.competitor})
                          </div>
                          <div className="text-green-600 font-medium">
                            {radarData?.B} ({currentCompetitor.competitive.benchmark.ourCompany})
                          </div>
                        </div>
                        <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
                          <div 
                            className="bg-blue-600 h-2.5 rounded-full" 
                            style={{ width: `${radarData?.A}%` }}
                          />
                          <div 
                            className="bg-green-600 h-2.5 rounded-full -mt-2.5" 
                            style={{ width: `${radarData?.B}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Competitive Position</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Market Share Comparison</h4>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-600">{selectedCompetitor}</span>
                      <span className="text-sm font-medium">{currentCompetitor.basicInfo.marketShare}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-blue-600 h-2.5 rounded-full" 
                        style={{ width: `${currentCompetitor.basicInfo.marketShare}%` }}
                      />
                    </div>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-sm text-gray-600">Our Company</span>
                      <span className="text-sm font-medium">22.4%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-green-600 h-2.5 rounded-full" 
                        style={{ width: '22.4%' }}
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Growth Rate</h4>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-600">{selectedCompetitor}</span>
                      <span className={`text-sm font-medium ${
                        currentCompetitor.marketMetrics.growthRate >= 0 ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {currentCompetitor.marketMetrics.growthRate >= 0 ? '+' : ''}
                        {currentCompetitor.marketMetrics.growthRate}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className={`h-2.5 rounded-full ${
                          currentCompetitor.marketMetrics.growthRate >= 0 ? 'bg-green-600' : 'bg-red-600'
                        }`} 
                        style={{ width: `${Math.abs(currentCompetitor.marketMetrics.growthRate)}%` }}
                      />
                    </div>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-sm text-gray-600">Our Company</span>
                      <span className="text-sm font-medium text-green-600">+15.2%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-green-600 h-2.5 rounded-full" 
                        style={{ width: '15.2%' }}
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Customer Satisfaction</h4>
                    <div className="flex items-center space-x-4">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-gray-600">{selectedCompetitor}</span>
                          <span className="text-sm font-medium">{currentCompetitor.sales.performance.customerSatisfaction}/5</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div 
                            className="bg-blue-600 h-2.5 rounded-full" 
                            style={{ width: `${(currentCompetitor.sales.performance.customerSatisfaction / 5) * 100}%` }}
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-gray-600">Our Company</span>
                          <span className="text-sm font-medium">4.5/5</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div 
                            className="bg-green-600 h-2.5 rounded-full" 
                            style={{ width: '90%' }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default CompetitorAnalysis;