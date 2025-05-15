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
  ScatterChart,
  Scatter,
  ZAxis,
  Legend,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ComposedChart,
  Area
} from 'recharts';
import { 
  Compass, 
  Target, 
  TrendingUp, 
  Activity,
  Award,
  Users,
  ThumbsUp,
  Eye,
  Zap,
  Shield,
  BookOpen,
  Lightbulb,
  Crosshair,
  BarChart2,
  PieChartIcon,
  Layers,
  Sliders,
  MessageCircle,
  Heart,
  DollarSign
} from 'lucide-react';

// Type definitions
type SegmentName = 'Premium' | 'Mid-market' | 'Budget' | 'Specialized';
type AttributeName = 'Reliability' | 'Innovation' | 'Branding' | 'Customer Service' | 'Price';
type InitiativePriority = 'High' | 'Medium' | 'Low';
type InitiativeStatus = 'Completed' | 'In Progress' | 'Planned';

// Main component
const MarketPositioningPage = () => {
  const [selectedSegment, setSelectedSegment] = useState<SegmentName>('Premium');
  const [selectedView, setSelectedView] = useState('overview');
  const [timeRange, setTimeRange] = useState('1Y');
  const [showCompetitors, setShowCompetitors] = useState(true);

  // Mock data
  const positioningData = {
    company: {
      name: "Zenith Financial",
      tagline: "Building Wealth, Securing Futures",
      mission: "To provide innovative financial solutions that empower our clients to achieve their goals",
      vision: "To be the most trusted partner in financial growth and protection",
      brandColors: ["#4F46E5", "#10B981", "#F59E0B", "#EF4444"]
    },
    marketOverview: {
      totalMarketSize: 245.8, // in billions
      segmentSizes: [
        { name: 'Premium', value: 82.5, market_share: 33.6 },
        { name: 'Mid-market', value: 98.2, market_share: 40 },
        { name: 'Budget', value: 42.3, market_share: 17.2 },
        { name: 'Specialized', value: 22.8, market_share: 9.2 }
      ],
      growth: {
        overall: 5.8,
        premium: 7.2,
        midMarket: 4.9,
        budget: 2.1,
        specialized: 11.5
      },
      trends: [
        { year: 2020, premium: 65.2, midMarket: 85.4, budget: 38.7, specialized: 15.6 },
        { year: 2021, premium: 70.1, midMarket: 88.9, budget: 39.5, specialized: 17.2 },
        { year: 2022, premium: 74.8, midMarket: 92.1, budget: 40.6, specialized: 19.5 },
        { year: 2023, premium: 78.3, midMarket: 95.7, budget: 41.8, specialized: 21.3 },
        { year: 2024, premium: 82.5, midMarket: 98.2, budget: 42.3, specialized: 22.8 }
      ]
    },
    segments: {
      Premium: {
        description: "High-end financial products with comprehensive coverage and premium service",
        customerProfile: "Affluent individuals and businesses with complex financial needs",
        averageRevenue: 12500,
        growthRate: 7.2,
        ourShare: 15.8,
        trends: [
          { quarter: 'Q1 2023', share: 14.2 },
          { quarter: 'Q2 2023', share: 14.7 },
          { quarter: 'Q3 2023', share: 15.1 },
          { quarter: 'Q4 2023', share: 15.3 },
          { quarter: 'Q1 2024', share: 15.5 },
          { quarter: 'Q2 2024', share: 15.8 }
        ],
        competitors: [
          { name: "Elite Wealth", share: 24.5, perception: 92 },
          { name: "Legacy Financial", share: 18.7, perception: 87 },
          { name: "Pinnacle Group", share: 16.2, perception: 85 },
          { name: "Zenith Financial", share: 15.8, perception: 88 },
          { name: "Summit Partners", share: 12.6, perception: 82 },
          { name: "Others", share: 12.2, perception: 75 }
        ],
        keyAttributes: [
          { name: "Reliability", ourScore: 91, industryAvg: 85 },
          { name: "Innovation", ourScore: 86, industryAvg: 78 },
          { name: "Branding", ourScore: 84, industryAvg: 80 },
          { name: "Customer Service", ourScore: 92, industryAvg: 82 },
          { name: "Price", ourScore: 65, industryAvg: 68 }
        ]
      },
      "Mid-market": {
        description: "Balanced financial products with good coverage and service at competitive rates",
        customerProfile: "Middle-income individuals and medium-sized businesses",
        averageRevenue: 5200,
        growthRate: 4.9,
        ourShare: 22.3,
        trends: [
          { quarter: 'Q1 2023', share: 20.5 },
          { quarter: 'Q2 2023', share: 21.1 },
          { quarter: 'Q3 2023', share: 21.4 },
          { quarter: 'Q4 2023', share: 21.8 },
          { quarter: 'Q1 2024', share: 22.0 },
          { quarter: 'Q2 2024', share: 22.3 }
        ],
        competitors: [
          { name: "Zenith Financial", share: 22.3, perception: 85 },
          { name: "Equinox Insurance", share: 19.8, perception: 80 },
          { name: "ValueGuard", share: 18.2, perception: 78 },
          { name: "Meridian Group", share: 15.5, perception: 76 },
          { name: "Balance Capital", share: 12.4, perception: 79 },
          { name: "Others", share: 11.8, perception: 72 }
        ],
        keyAttributes: [
          { name: "Reliability", ourScore: 88, industryAvg: 80 },
          { name: "Innovation", ourScore: 82, industryAvg: 74 },
          { name: "Branding", ourScore: 81, industryAvg: 76 },
          { name: "Customer Service", ourScore: 86, industryAvg: 78 },
          { name: "Price", ourScore: 78, industryAvg: 75 }
        ]
      },
      Budget: {
        description: "Affordable financial products with essential coverage",
        customerProfile: "Cost-conscious individuals and small businesses",
        averageRevenue: 2800,
        growthRate: 2.1,
        ourShare: 9.7,
        trends: [
          { quarter: 'Q1 2023', share: 8.8 },
          { quarter: 'Q2 2023', share: 9.0 },
          { quarter: 'Q3 2023', share: 9.2 },
          { quarter: 'Q4 2023', share: 9.4 },
          { quarter: 'Q1 2024', share: 9.5 },
          { quarter: 'Q2 2024', share: 9.7 }
        ],
        competitors: [
          { name: "ValueFirst", share: 28.5, perception: 82 },
          { name: "EssentialCare", share: 24.6, perception: 78 },
          { name: "BasicGuard", share: 18.9, perception: 75 },
          { name: "Zenith Financial", share: 9.7, perception: 72 },
          { name: "ThriftyProtect", share: 9.3, perception: 71 },
          { name: "Others", share: 9.0, perception: 65 }
        ],
        keyAttributes: [
          { name: "Reliability", ourScore: 82, industryAvg: 75 },
          { name: "Innovation", ourScore: 68, industryAvg: 65 },
          { name: "Branding", ourScore: 72, industryAvg: 70 },
          { name: "Customer Service", ourScore: 75, industryAvg: 72 },
          { name: "Price", ourScore: 84, industryAvg: 85 }
        ]
      },
      Specialized: {
        description: "Tailored financial solutions for specific industries or needs",
        customerProfile: "Niche markets with unique financial requirements",
        averageRevenue: 8900,
        growthRate: 11.5,
        ourShare: 14.2,
        trends: [
          { quarter: 'Q1 2023', share: 12.5 },
          { quarter: 'Q2 2023', share: 12.9 },
          { quarter: 'Q3 2023', share: 13.4 },
          { quarter: 'Q4 2023', share: 13.7 },
          { quarter: 'Q1 2024', share: 13.9 },
          { quarter: 'Q2 2024', share: 14.2 }
        ],
        competitors: [
          { name: "NicheProtect", share: 22.4, perception: 86 },
          { name: "SpectrumFinance", share: 20.6, perception: 84 },
          { name: "Zenith Financial", share: 14.2, perception: 85 },
          { name: "IndustryShield", share: 13.8, perception: 83 },
          { name: "FocusGuard", share: 12.7, perception: 80 },
          { name: "Others", share: 16.3, perception: 75 }
        ],
        keyAttributes: [
          { name: "Reliability", ourScore: 87, industryAvg: 82 },
          { name: "Innovation", ourScore: 90, industryAvg: 80 },
          { name: "Branding", ourScore: 78, industryAvg: 75 },
          { name: "Customer Service", ourScore: 88, industryAvg: 81 },
          { name: "Price", ourScore: 71, industryAvg: 74 }
        ]
      }
    },
    perceptionMap: {
      axisX: { name: "Price", low: "Premium", high: "Affordable" },
      axisY: { name: "Quality", low: "Basic", high: "Superior" },
      companies: [
        { name: "Zenith Financial", x: 40, y: 85, z: 15 },
        { name: "Elite Wealth", x: 25, y: 95, z: 18 },
        { name: "ValueFirst", x: 85, y: 55, z: 12 },
        { name: "Legacy Financial", x: 30, y: 88, z: 16 },
        { name: "Equinox Insurance", x: 55, y: 75, z: 14 },
        { name: "NicheProtect", x: 45, y: 88, z: 10 },
        { name: "Balance Capital", x: 70, y: 65, z: 13 }
      ]
    },
    brandPerception: {
      attributes: [
        { attribute: "Trustworthy", score: 84 },
        { attribute: "Innovative", score: 78 },
        { attribute: "Customer-Focused", score: 82 },
        { attribute: "Value for Money", score: 76 },
        { attribute: "Modern", score: 80 },
        { attribute: "Expertise", score: 86 }
      ],
      trends: [
        { year: 2020, trustworthy: 75, innovative: 65, customerFocused: 72, valueForMoney: 70, modern: 68, expertise: 78 },
        { year: 2021, trustworthy: 78, innovative: 70, customerFocused: 75, valueForMoney: 71, modern: 72, expertise: 80 },
        { year: 2022, trustworthy: 80, innovative: 73, customerFocused: 78, valueForMoney: 73, modern: 75, expertise: 82 },
        { year: 2023, trustworthy: 82, innovative: 76, customerFocused: 80, valueForMoney: 75, modern: 78, expertise: 84 },
        { year: 2024, trustworthy: 84, innovative: 78, customerFocused: 82, valueForMoney: 76, modern: 80, expertise: 86 }
      ],
      customerSentiment: {
        positive: 72,
        neutral: 18,
        negative: 10,
        sources: [
          { source: "Social Media", positive: 68, neutral: 22, negative: 10 },
          { source: "Reviews", positive: 74, neutral: 16, negative: 10 },
          { source: "Surveys", positive: 76, neutral: 15, negative: 9 },
          { source: "Customer Service", positive: 70, neutral: 19, negative: 11 }
        ]
      }
    },
    positioningInitiatives: [
      { 
        id: 1,
        name: "Premium Service Excellence",
        segment: "Premium",
        status: "In Progress",
        priority: "High",
        completion: 65,
        description: "Enhance high-touch service model for premium clients",
        keyMetrics: [
          { name: "Client Satisfaction", current: 8.7, target: 9.2 },
          { name: "Retention Rate", current: 92, target: 95 }
        ],
        timeline: "Q3 2024 - Q1 2025"
      },
      { 
        id: 2,
        name: "Digital Transformation",
        segment: "Mid-market",
        status: "In Progress",
        priority: "High",
        completion: 40,
        description: "Modernize digital platforms for improved user experience",
        keyMetrics: [
          { name: "Online Engagement", current: 42, target: 60 },
          { name: "Self-Service Rate", current: 35, target: 55 }
        ],
        timeline: "Q1 2024 - Q4 2024"
      },
      { 
        id: 3,
        name: "Value Proposition Revamp",
        segment: "Budget",
        status: "Planned",
        priority: "Medium",
        completion: 10,
        description: "Refresh budget offerings to emphasize value beyond price",
        keyMetrics: [
          { name: "Market Share", current: 9.7, target: 12 },
          { name: "Conversion Rate", current: 18, target: 22 }
        ],
        timeline: "Q3 2024 - Q2 2025"
      },
      { 
        id: 4,
        name: "Industry Specialization",
        segment: "Specialized",
        status: "In Progress",
        priority: "Medium",
        completion: 55,
        description: "Develop deeper expertise in targeted industries",
        keyMetrics: [
          { name: "Specialist Perception", current: 78, target: 88 },
          { name: "Premium Pricing", current: 12, target: 18 }
        ],
        timeline: "Q2 2024 - Q1 2025"
      },
      { 
        id: 5,
        name: "Brand Refresh Campaign",
        segment: "All",
        status: "Completed",
        priority: "High",
        completion: 100,
        description: "Update brand messaging and visual identity",
        keyMetrics: [
          { name: "Brand Recognition", current: 72, target: 80 },
          { name: "Positive Perception", current: 75, target: 82 }
        ],
        timeline: "Q4 2023 - Q1 2024"
      },
      { 
        id: 6,
        name: "Customer Journey Mapping",
        segment: "All",
        status: "In Progress",
        priority: "Medium",
        completion: 70,
        description: "Identify and optimize key touchpoints in customer journey",
        keyMetrics: [
          { name: "Customer Effort Score", current: 6.8, target: 5.5 },
          { name: "NPS", current: 42, target: 50 }
        ],
        timeline: "Q1 2024 - Q3 2024"
      }
    ]
  };

  // Important fix: This function ensures we access segment data with proper key handling
  const getCurrentSegmentData = () => {
    // Make sure we're safely accessing the data
    return positioningData.segments[selectedSegment] || {};
  };

  const currentSegmentData = getCurrentSegmentData();

  // Utility functions
  const formatPercent = (value: number) => `${value}%`;
  const formatCurrency = (value: number) => {
    if (value >= 1000) return `$${value / 1000}B`;
    return `$${value}M`;
  };

  const getStatusColor = (status: InitiativeStatus) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Planned': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: InitiativePriority) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-orange-100 text-orange-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Scatter chart custom tooltip
  const CustomScatterTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 shadow rounded border border-gray-200">
          <p className="font-medium">{payload[0].payload.name}</p>
          <p className="text-sm text-gray-600">
            Price: {payload[0].value}
          </p>
          <p className="text-sm text-gray-600">
            Quality: {payload[1].value}
          </p>
          <p className="text-sm text-gray-600">
            Market Share: {payload[2].value}%
          </p>
        </div>
      );
    }
    return null;
  };

  // Navigation tab component
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
          ? 'bg-indigo-600 text-white shadow-md' 
          : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      {icon}
      <span className="ml-2">{label}</span>
    </button>
  );

  // Segment selector component
  const SegmentTile = ({ 
    name, 
    active, 
    onClick 
  }: { 
    name: SegmentName; 
    active: boolean; 
    onClick: (name: SegmentName) => void; 
  }) => {
    // Safely access segment data
    const segment = positioningData.segments[name] || {};
    
    return (
      <button
        onClick={() => onClick(name)}
        className={`p-4 rounded-lg border-2 transition-all duration-200 ${
          active 
            ? 'border-indigo-500 bg-indigo-50' 
            : 'border-gray-200 hover:border-gray-300 bg-white'
        }`}
      >
        <div className="flex items-center space-x-3">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
            name === 'Premium' ? 'bg-purple-100 text-purple-600' :
            name === 'Mid-market' ? 'bg-blue-100 text-blue-600' :
            name === 'Budget' ? 'bg-green-100 text-green-600' :
            'bg-orange-100 text-orange-600'
          }`}>
            {name === 'Premium' ? <Award className="w-6 h-6" /> :
             name === 'Mid-market' ? <Users className="w-6 h-6" /> :
             name === 'Budget' ? <Shield className="w-6 h-6" /> :
             <Target className="w-6 h-6" />}
          </div>
          <div className="flex-1 text-left">
            <h3 className="font-semibold text-gray-900">{name}</h3>
            <p className="text-sm text-gray-600">{formatPercent(segment.ourShare || 0)} market share</p>
            <div className="flex items-center mt-1">
              <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
              <span className="text-xs text-green-600">{formatPercent(segment.growthRate || 0)} growth</span>
            </div>
          </div>
        </div>
      </button>
    );
  };

  // Initiative card component
  const InitiativeCard = ({ initiative }: { initiative: any }) => (
    <div className="bg-white rounded-lg shadow-md p-5 border border-gray-200">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-gray-900">{initiative.name}</h3>
        <div className="flex space-x-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(initiative.status)}`}>
            {initiative.status}
          </span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(initiative.priority)}`}>
            {initiative.priority}
          </span>
        </div>
      </div>
      
      <p className="text-sm text-gray-600 mb-4">{initiative.description}</p>
      
      <div className="mb-4">
        <div className="flex justify-between text-sm mb-1">
          <span className="text-gray-600">Completion</span>
          <span className="font-medium">{initiative.completion}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className={`h-2 rounded-full ${
              initiative.status === 'Completed' ? 'bg-green-500' : 'bg-blue-500'
            }`} 
            style={{width: `${initiative.completion}%`}}
          ></div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-3">
        {initiative.keyMetrics.map((metric: any, index: number) => (
          <div key={index} className="bg-gray-50 rounded p-2">
            <p className="text-xs text-gray-600">{metric.name}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">{metric.current}</span>
              <span className="text-xs text-gray-500">Target: {metric.target}</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex items-center text-xs text-gray-500">
        <div>
          <Compass className="w-3 h-3 mr-1 inline" />
          {initiative.segment}
        </div>
        <div className="ml-4">
          <Clock className="w-3 h-3 mr-1 inline" />
          {initiative.timeline}
        </div>
      </div>
    </div>
  );

  const Clock = ({ className }: { className?: string }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  );

  // Define colors for charts
  const COLORS = ['#4F46E5', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#6B7280'];
  
  // Generate radar data
  const generateRadarData = (attributes: any[] = []) => {
    return attributes.map(attr => ({
      attribute: attr.name,
      ourScore: attr.ourScore,
      industryAvg: attr.industryAvg,
      fullMark: 100
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Market Positioning</h1>
              <p className="text-sm text-gray-500 mt-1">Strategic analysis of our positioning across market segments</p>
            </div>
            <div className="flex items-center space-x-4">
              <select 
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md text-sm"
              >
                <option value="3M">Last 3 Months</option>
                <option value="6M">Last 6 Months</option>
                <option value="1Y">Last Year</option>
                <option value="2Y">Last 2 Years</option>
              </select>
              <div className="flex items-center">
                <span className="text-sm text-gray-600 mr-2">Show Competitors</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer" 
                    checked={showCompetitors}
                    onChange={() => setShowCompetitors(!showCompetitors)}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Segment Selection */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
          {Object.keys(positioningData.segments).map((name) => (
            <SegmentTile 
              key={name}
              name={name as SegmentName}
              active={selectedSegment === name}
              onClick={setSelectedSegment}
            />
          ))}
        </div>
      </div>
        {/* Navigation Tabs */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
    <div className="flex space-x-2 overflow-x-auto pb-2">
      <ViewTab
        id="overview"
        label="Overview"
        icon={<Compass className="w-5 h-5" />}
        active={selectedView === 'overview'}
        onClick={setSelectedView}
      />
      <ViewTab
        id="performance"
        label="Performance"
        icon={<Activity className="w-5 h-5" />}
        active={selectedView === 'performance'}
        onClick={setSelectedView}
      />
      <ViewTab
        id="perception"
        label="Perception"
        icon={<Eye className="w-5 h-5" />}
        active={selectedView === 'perception'}
        onClick={setSelectedView}
      />
      <ViewTab
        id="initiatives"
        label="Initiatives"
        icon={<Target className="w-5 h-5" />}
        active={selectedView === 'initiatives'}
        onClick={setSelectedView}
      />
      <ViewTab
        id="competitors"
        label="Competitors"
        icon={<Users className="w-5 h-5" />}
        active={selectedView === 'competitors'}
        onClick={setSelectedView}
      />
    </div>
  </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Overview View */}
        {selectedView === 'overview' && (
          <div className="space-y-6">
            {/* Segment Info Card */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{selectedSegment} Segment</h2>
                  <p className="text-gray-600 mt-1">{currentSegmentData.description}</p>
                </div>
                <div className="bg-indigo-50 px-4 py-2 rounded-lg">
                  <p className="text-sm text-gray-600">Our Market Share</p>
                  <p className="text-3xl font-bold text-indigo-600">{formatPercent(currentSegmentData.ourShare)}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Users className="w-5 h-5 text-gray-700 mr-2" />
                    <h3 className="font-medium text-gray-900">Customer Profile</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{currentSegmentData.customerProfile}</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <TrendingUp className="w-5 h-5 text-gray-700 mr-2" />
                    <h3 className="font-medium text-gray-900">Growth Rate</h3>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl font-semibold text-green-600">{formatPercent(currentSegmentData.growthRate)}</span>
                    <span className="text-sm text-gray-500 ml-2">per year</span>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <DollarSign className="w-5 h-5 text-gray-700 mr-2" />
                    <h3 className="font-medium text-gray-900">Average Revenue</h3>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl font-semibold text-indigo-600">${currentSegmentData.averageRevenue}</span>
                    <span className="text-sm text-gray-500 ml-2">per customer</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Key Attributes and Share Trend */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Key Attributes Radar Chart */}
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Attributes</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart outerRadius={90} data={generateRadarData(currentSegmentData.keyAttributes)}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="attribute" />
                      <PolarRadiusAxis angle={30} domain={[0, 100]} />
                      <Radar
                        name="Our Score"
                        dataKey="ourScore"
                        stroke="#4F46E5"
                        fill="#4F46E5"
                        fillOpacity={0.5}
                      />
                      <Radar
                        name="Industry Average"
                        dataKey="industryAvg"
                        stroke="#F59E0B"
                        fill="#F59E0B"
                        fillOpacity={0.3}
                      />
                      <Legend />
                      <Tooltip />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              {/* Market Share Trend */}
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Market Share Trend</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={currentSegmentData.trends}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="quarter" />
                      <YAxis domain={['dataMin - 1', 'dataMax + 1']} />
                      <Tooltip formatter={(value) => [`${value}%`, 'Market Share']} />
                      <Line
                        type="monotone"
                        dataKey="share"
                        stroke="#4F46E5"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
            
            {/* Market Segmentation & Positioning Map */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Market Segmentation */}
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Market Segmentation</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={positioningData.marketOverview.segmentSizes}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        nameKey="name"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {positioningData.marketOverview.segmentSizes.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`$${value}B`, 'Market Size']} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              {/* Positioning Map */}
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Market Positioning Map</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <ScatterChart
                      margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis 
                        type="number" 
                        dataKey="x" 
                        name="Price"
                        domain={[0, 100]} 
                        label={{ 
                          value: positioningData.perceptionMap.axisX.name, 
                          position: 'bottom' 
                        }}
                      />
                      <YAxis 
                        type="number" 
                        dataKey="y" 
                        name="Quality"
                        domain={[0, 100]}
                        label={{ 
                          value: positioningData.perceptionMap.axisY.name, 
                          angle: -90, 
                          position: 'left' 
                        }}
                      />
                      <ZAxis 
                        type="number" 
                        dataKey="z" 
                        range={[50, 400]} 
                        name="Market Share" 
                      />
                      <Tooltip content={<CustomScatterTooltip />} />
                      <Scatter 
                        name="Companies" 
                        data={positioningData.perceptionMap.companies} 
                        fill="#8884d8"
                      >
                        {positioningData.perceptionMap.companies.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={entry.name === "Zenith Financial" ? "#4F46E5" : COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Scatter>
                    </ScatterChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-2 text-sm text-gray-500 flex justify-between">
                  <span>{positioningData.perceptionMap.axisX.low}</span>
                  <span>{positioningData.perceptionMap.axisX.high}</span>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Performance View */}
        {selectedView === 'performance' && (
          <div className="space-y-6">
            {/* Performance Overview */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Performance Metrics</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-indigo-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Market Share</p>
                      <p className="text-2xl font-bold text-indigo-600">{formatPercent(currentSegmentData.ourShare)}</p>
                    </div>
                    <div className="bg-indigo-100 p-3 rounded-full">
                      <PieChartIcon className="w-6 h-6 text-indigo-600" />
                    </div>
                  </div>
                  <div className="flex items-center mt-2 text-xs">
                    <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
                    <span className="text-green-600">+{(currentSegmentData.trends[currentSegmentData.trends.length - 1].share - currentSegmentData.trends[0].share).toFixed(1)}% growth</span>
                  </div>
                </div>
                
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Revenue</p>
                      <p className="text-2xl font-bold text-green-600">${currentSegmentData.averageRevenue}</p>
                    </div>
                    <div className="bg-green-100 p-3 rounded-full">
                      <DollarSign className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mt-2">Per customer average</p>
                </div>
                
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Growth Rate</p>
                      <p className="text-2xl font-bold text-purple-600">{formatPercent(currentSegmentData.growthRate)}</p>
                    </div>
                    <div className="bg-purple-100 p-3 rounded-full">
                      <TrendingUp className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mt-2">Annual growth</p>
                </div>
              </div>
              
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={positioningData.marketOverview.trends}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`$${value}B`, 'Market Size']} />
                    <Legend />
                    <Bar dataKey="premium" name="Premium" stackId="a" fill="#8B5CF6" />
                    <Bar dataKey="midMarket" name="Mid-market" stackId="a" fill="#3B82F6" />
                    <Bar dataKey="budget" name="Budget" stackId="a" fill="#10B981" />
                    <Bar dataKey="specialized" name="Specialized" stackId="a" fill="#F59E0B" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            {/* Performance Comparison */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Market Share Comparison</h3>
              
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart
                    data={currentSegmentData.competitors}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis yAxisId="left" orientation="left" label={{ value: 'Market Share (%)', angle: -90, position: 'insideLeft' }} />
                    <YAxis yAxisId="right" orientation="right" label={{ value: 'Brand Perception', angle: 90, position: 'insideRight' }} />
                    <Tooltip />
                    <Legend />
                    <Bar yAxisId="left" dataKey="share" name="Market Share" barSize={40} fill="#4F46E5">
                      {currentSegmentData.competitors.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.name === "Zenith Financial" ? "#4F46E5" : "#CBD5E1"} />
                      ))}
                    </Bar>
                    <Line yAxisId="right" type="monotone" dataKey="perception" name="Brand Perception" stroke="#F59E0B" />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}
        
        {/* Perception View */}
        {selectedView === 'perception' && (
          <div className="space-y-6">
            {/* Brand Attributes */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Brand Perception</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Brand Attributes</h3>
                  <div className="space-y-3">
                    {positioningData.brandPerception.attributes.map((attr, index) => (
                      <div key={index} className="bg-gray-50 p-3 rounded">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-gray-700">{attr.attribute}</span>
                          <span className="text-sm font-semibold">{attr.score}/100</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-indigo-600 h-2 rounded-full"
                            style={{ width: `${attr.score}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Customer Sentiment</h3>
                  <div className="h-60">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={[
                            { name: 'Positive', value: positioningData.brandPerception.customerSentiment.positive },
                            { name: 'Neutral', value: positioningData.brandPerception.customerSentiment.neutral },
                            { name: 'Negative', value: positioningData.brandPerception.customerSentiment.negative }
                          ]}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          fill="#8884d8"
                          paddingAngle={5}
                          dataKey="value"
                        >
                          <Cell fill="#10B981" />
                          <Cell fill="#6B7280" />
                          <Cell fill="#EF4444" />
                        </Pie>
                        <Tooltip formatter={(value) => [`${value}%`, 'Customer Sentiment']} />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    {positioningData.brandPerception.customerSentiment.sources.map((source, index) => (
                      <div key={index} className="bg-gray-50 p-3 rounded">
                        <p className="text-sm font-medium text-gray-700">{source.source}</p>
                        <div className="flex items-center mt-1">
                          <ThumbsUp className="w-4 h-4 text-green-500 mr-1" />
                          <span className="text-sm text-green-600">{source.positive}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Brand Perception Trend */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Brand Perception Trends</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={positioningData.brandPerception.trends}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis domain={[50, 100]} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="trustworthy" name="Trustworthy" stroke="#4F46E5" />
                    <Line type="monotone" dataKey="innovative" name="Innovative" stroke="#10B981" />
                    <Line type="monotone" dataKey="customerFocused" name="Customer-Focused" stroke="#F59E0B" />
                    <Line type="monotone" dataKey="expertise" name="Expertise" stroke="#8B5CF6" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}
        
        {/* Initiatives View */}
        {selectedView === 'initiatives' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Strategic Initiatives</h2>
                <div className="flex space-x-2">
                  <button className="px-3 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
                    <Zap className="w-4 h-4 inline mr-1" />
                    New Initiative
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {positioningData.positioningInitiatives
                  .filter((init) => init.segment === selectedSegment || init.segment === 'All')
                  .map((initiative) => (
                    <InitiativeCard key={initiative.id} initiative={initiative} />
                  ))}
              </div>
            </div>
          </div>
        )}
        
        {/* Competitors View */}
        {selectedView === 'competitors' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Competitive Analysis</h2>
              
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Market Share</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Brand Perception</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Strengths</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Positioning</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {currentSegmentData.competitors.map((competitor, index) => (
                      <tr key={index} className={competitor.name === "Zenith Financial" ? "bg-indigo-50" : ""}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium text-gray-900">{competitor.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{competitor.share}%</div>
                          <div className="w-24 bg-gray-200 rounded-full h-1 mt-1">
                            <div
                              className={`h-1 rounded-full ${competitor.name === "Zenith Financial" ? "bg-indigo-600" : "bg-gray-500"}`}
                              style={{ width: `${(competitor.share / 30) * 100}%` }}
                            ></div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{competitor.perception}/100</div>
                          <div className="w-24 bg-gray-200 rounded-full h-1 mt-1">
                            <div
                              className={`h-1 rounded-full ${competitor.name === "Zenith Financial" ? "bg-indigo-600" : "bg-gray-500"}`}
                              style={{ width: `${competitor.perception}%` }}
                            ></div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-900">
                            {index === 0 ? "Premium service, brand recognition" : 
                             index === 1 ? "Established reputation, wide offering" : 
                             index === 2 ? "Innovative products, digital experience" : 
                             index === 3 ? "Customer service, reliability" : 
                             "Pricing, regional presence"}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-900">
                            {index === 0 ? "Market leader focusing on high-end customers" : 
                             index === 1 ? "Traditional provider with broad appeal" : 
                             index === 2 ? "Tech-focused with digital-first approach" : 
                             index === 3 ? "Balanced offering with strong service focus" : 
                             "Value-oriented with competitive pricing"}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Competitive Positioning */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Market Share Distribution</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={currentSegmentData.competitors}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="share"
                        nameKey="name"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {currentSegmentData.competitors.map((entry, index) => (
                          <Cell 
                            key={`cell-${index}`} 
                            fill={entry.name === "Zenith Financial" ? "#4F46E5" : COLORS[index % COLORS.length]} 
                          />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value}%`, 'Market Share']} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Competitive Positioning</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <ScatterChart
                      margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis 
                        type="number" 
                        dataKey="share" 
                        name="Market Share"
                        domain={[0, 'dataMax + 5']} 
                        label={{ value: 'Market Share (%)', position: 'bottom' }}
                      />
                      <YAxis 
                        type="number" 
                        dataKey="perception" 
                        name="Brand Perception"
                        domain={[60, 100]}
                        label={{ value: 'Brand Perception', angle: -90, position: 'left' }}
                      />
                      <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                      <Scatter name="Companies" data={currentSegmentData.competitors} fill="#8884d8">
                        {currentSegmentData.competitors.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={entry.name === "Zenith Financial" ? "#4F46E5" : COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Scatter>
                    </ScatterChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MarketPositioningPage;