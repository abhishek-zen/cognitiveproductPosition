"use client";
import React from 'react';
import { useState } from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Area,
  AreaChart
} from 'recharts';
import { 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Users, 
  Target,
  Activity,
  Zap,
  Award,
  BarChart3,
  PieChart as PieChartIcon,
  Globe,
  Cpu,
  Pause,
  Play
} from 'lucide-react';

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState('overview');

  // Mock data from the provided JSON
  const mockData = {
    kpiMetrics: {
      signalDetection: {
        totalSignals: 15420,
        signalsToday: 287,
        changeFromYesterday: 12.5,
        alertsGenerated: 892,
        alertConversionRate: 0.058,
        avgConfidenceScore: 0.87
      },
      competitiveIntelligence: {
        activeCompetitors: 23,
        rateChanges: 47,
        productLaunches: 12,
        marketShareImpact: {
          value: -0.02,
          trend: "declining"
        }
      },
      positioningEffectiveness: {
        campaignsLaunched: 18,
        messagingUpdates: 156,
        repEngagement: 0.73,
        avgCampaignROI: 2.4
      },
      systemPerformance: {
        modelAccuracy: 0.92,
        falsePositiveRate: 0.08,
        avgResponseTime: 245,
        systemUptime: 0.9998
      }
    },
    recentAlerts: [
      {
        id: "alert_001",
        type: "rate_change",
        competitor: "MegaLife Insurance",
        title: "Fixed Annuity Rate Increased to 4.8%",
        confidence: 0.94,
        timestamp: "2025-05-15T09:30:00Z",
        priority: "high",
        status: "under_review",
        potentialImpact: {
          score: 8.5,
          affectedProducts: ["SecureRetire Plus", "LifeIncome Pro"],
          estimatedRevenueLoss: 125000
        }
      },
      {
        id: "alert_002",
        type: "product_launch",
        competitor: "Prudential Financial",
        title: "New Variable Annuity with Enhanced Death Benefit",
        confidence: 0.89,
        timestamp: "2025-05-15T08:45:00Z",
        priority: "medium",
        status: "in_comparison",
        potentialImpact: {
          score: 7.2,
          affectedProducts: ["VIP Annuity", "FlexiRetire"],
          estimatedRevenueLoss: 89000
        }
      },
      {
        id: "alert_003",
        type: "marketing_campaign",
        competitor: "Northwestern Mutual",
        title: "Aggressive Guaranteed Income Rider Promotion",
        confidence: 0.91,
        timestamp: "2025-05-15T07:15:00Z",
        priority: "medium",
        status: "positioning_approved",
        potentialImpact: {
          score: 6.8,
          affectedProducts: ["IncomePlus Rider", "GuardianLife Pro"],
          estimatedRevenueLoss: 67000
        }
      }
    ],
    trendData: {
      signalVolume: [
        {date: "2025-04-15", count: 312},
        {date: "2025-04-16", count: 298},
        {date: "2025-04-17", count: 445},
        {date: "2025-04-18", count: 378},
        {date: "2025-04-19", count: 356},
        {date: "2025-04-20", count: 289},
        {date: "2025-04-21", count: 198},
        {date: "2025-04-22", count: 412},
        {date: "2025-04-23", count: 389},
        {date: "2025-04-24", count: 445},
        {date: "2025-04-25", count: 367},
        {date: "2025-04-26", count: 298},
        {date: "2025-04-27", count: 234},
        {date: "2025-04-28", count: 189},
        {date: "2025-04-29", count: 423},
        {date: "2025-04-30", count: 398},
        {date: "2025-05-01", count: 456},
        {date: "2025-05-02", count: 389},
        {date: "2025-05-03", count: 367},
        {date: "2025-05-04", count: 298},
        {date: "2025-05-05", count: 234},
        {date: "2025-05-06", count: 445},
        {date: "2025-05-07", count: 389},
        {date: "2025-05-08", count: 367},
        {date: "2025-05-09", count: 445},
        {date: "2025-05-10", count: 398},
        {date: "2025-05-11", count: 356},
        {date: "2025-05-12", count: 289},
        {date: "2025-05-13", count: 423},
        {date: "2025-05-14", count: 398},
        {date: "2025-05-15", count: 287}
      ],
      competitorActivity: [
        {category: "rate_changes", count: 47, percentage: 35.6},
        {category: "product_launches", count: 32, percentage: 24.2},
        {category: "marketing_campaigns", count: 28, percentage: 21.2},
        {category: "regulatory_filings", count: 15, percentage: 11.4},
        {category: "personnel_changes", count: 10, percentage: 7.6}
      ],
      positioningSuccess: [
        {month: "2024-06", successRate: 68.2, campaignCount: 12},
        {month: "2024-07", successRate: 71.5, campaignCount: 15},
        {month: "2024-08", successRate: 69.8, campaignCount: 18},
        {month: "2024-09", successRate: 73.4, campaignCount: 14},
        {month: "2024-10", successRate: 75.2, campaignCount: 16},
        {month: "2024-11", successRate: 77.8, campaignCount: 19},
        {month: "2024-12", successRate: 76.3, campaignCount: 22},
        {month: "2025-01", successRate: 78.9, campaignCount: 20},
        {month: "2025-02", successRate: 80.1, campaignCount: 17},
        {month: "2025-03", successRate: 79.5, campaignCount: 21},
        {month: "2025-04", successRate: 81.2, campaignCount: 18},
        {month: "2025-05", successRate: 82.7, campaignCount: 15}
      ]
    },
    topCompetitors: [
      {
        name: "MegaLife Insurance",
        marketShare: 18.5,
        changeFromLastMonth: 0.8,
        activeSignals: 89,
        threatLevel: "high",
        recentActivity: [
          {type: "rate_increase", date: "2025-05-15"},
          {type: "new_rider", date: "2025-05-10"},
          {type: "marketing_push", date: "2025-05-08"}
        ]
      },
      {
        name: "Prudential Financial",
        marketShare: 15.2,
        changeFromLastMonth: 0.3,
        activeSignals: 67,
        threatLevel: "medium-high",
        recentActivity: [
          {type: "product_launch", date: "2025-05-15"},
          {type: "rate_adjustment", date: "2025-05-12"},
          {type: "partnership", date: "2025-05-05"}
        ]
      },
      {
        name: "Northwestern Mutual",
        marketShare: 12.8,
        changeFromLastMonth: -0.2,
        activeSignals: 43,
        threatLevel: "medium",
        recentActivity: [
          {type: "campaign_launch", date: "2025-05-15"},
          {type: "product_update", date: "2025-05-09"},
          {type: "rate_change", date: "2025-05-03"}
        ]
      },
      {
        name: "Lincoln Financial",
        marketShare: 11.4,
        changeFromLastMonth: 0.5,
        activeSignals: 38,
        threatLevel: "medium",
        recentActivity: [
          {type: "rider_enhancement", date: "2025-05-13"},
          {type: "fee_adjustment", date: "2025-05-07"},
          {type: "digital_platform", date: "2025-05-01"}
        ]
      },
      {
        name: "AIG Life & Retirement",
        marketShare: 9.7,
        changeFromLastMonth: -0.1,
        activeSignals: 29,
        threatLevel: "low-medium",
        recentActivity: [
          {type: "compliance_update", date: "2025-05-11"},
          {type: "rate_change", date: "2025-05-04"},
          {type: "system_upgrade", date: "2025-04-28"}
        ]
      }
    ],
    activeCampaigns: [
      {
        id: "camp_001",
        name: "Response to MegaLife Rate Increase",
        status: "active",
        launchDate: "2025-05-14T09:00:00Z",
        endDate: "2025-05-28T17:00:00Z",
        channels: ["IMO", "Bank", "Direct"],
        targetAudience: "Conservative Investors",
        performance: {
          reach: 12450,
          engagement: 0.68,
          conversionRate: 0.12,
          roi: 2.8
        }
      },
      {
        id: "camp_002",
        name: "Prudential VA Counter-Campaign",
        status: "launched",
        launchDate: "2025-05-15T10:00:00Z",
        endDate: "2025-06-15T17:00:00Z",
        channels: ["IMO", "Digital"],
        targetAudience: "Growth-Oriented Retirees",
        performance: {
          reach: 8900,
          engagement: 0.71,
          conversionRate: 0.09,
          roi: 1.9
        }
      },
      {
        id: "camp_003",
        name: "Income Rider Differentiation Push",
        status: "paused",
        launchDate: "2025-05-10T08:00:00Z",
        endDate: "2025-05-25T17:00:00Z",
        channels: ["Bank", "Direct"],
        targetAudience: "Pre-Retirees",
        performance: {
          reach: 6700,
          engagement: 0.59,
          conversionRate: 0.07,
          roi: 1.4
        }
      }
    ],
    salesPerformance: {
      repEngagement: {
        totalReps: 1247,
        activeReps: 1089,
        engagementRate: 0.87,
        avgContentUsage: 0.73,
        feedbackScore: 4.2
      },
      topPerformers: [
        {
          repId: "rep_001",
          name: "Sarah Johnson",
          region: "Northeast",
          winRate: 0.89,
          avgDealSize: 187500,
          contentUsageRate: 0.94
        },
        {
          repId: "rep_002",
          name: "Michael Chen",
          region: "West Coast",
          winRate: 0.85,
          avgDealSize: 165000,
          contentUsageRate: 0.91
        },
        {
          repId: "rep_003",
          name: "Emily Rodriguez",
          region: "Southwest",
          winRate: 0.82,
          avgDealSize: 145000,
          contentUsageRate: 0.88
        }
      ],
      regionalMetrics: [
        {
          region: "Northeast",
          repCount: 234,
          avgWinRate: 0.76,
          contentUsageRate: 0.82,
          totalRevenue: 15600000
        },
        {
          region: "Southeast",
          repCount: 198,
          avgWinRate: 0.71,
          contentUsageRate: 0.78,
          totalRevenue: 12300000
        },
        {
          region: "Midwest",
          repCount: 287,
          avgWinRate: 0.69,
          contentUsageRate: 0.75,
          totalRevenue: 18900000
        },
        {
          region: "West Coast",
          repCount: 312,
          avgWinRate: 0.74,
          contentUsageRate: 0.79,
          totalRevenue: 21500000
        },
        {
          region: "Southwest",
          repCount: 216,
          avgWinRate: 0.68,
          contentUsageRate: 0.71,
          totalRevenue: 14200000
        }
      ]
    }
  };

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return `$${(num / 1000000).toFixed(1)}M`;
    } else if (num >= 1000) {
      return `$${(num / 1000).toFixed(1)}K`;
    }
    return `$${num}`;
  };

  const formatPercent = (num: number) => {
    return `${(num * 100).toFixed(1)}%`;
  };

  const formatDate = (dateStr: string | number) => {
    return new Date(dateStr).toLocaleDateString();
  };

  const getStatusColor = (status:string) => {
    switch (status) {
      case 'active':
      case 'launched':
        return 'text-green-600 bg-green-100';
      case 'paused':
        return 'text-yellow-600 bg-yellow-100';
      case 'high':
        return 'text-red-600 bg-red-100';
      case 'medium':
      case 'medium-high':
        return 'text-orange-600 bg-orange-100';
      case 'low-medium':
        return 'text-blue-600 bg-blue-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getThreatColor = (level : string) => {
    switch (level) {
      case 'high':
        return 'border-red-500 text-red-700';
      case 'medium-high':
        return 'border-orange-500 text-orange-700';
      case 'medium':
        return 'border-yellow-500 text-yellow-700';
      case 'low-medium':
        return 'border-blue-500 text-blue-700';
      default:
        return 'border-gray-500 text-gray-700';
    }
  };

  interface TabProps {
    id: string;
    label: string;
    icon: React.ReactNode;
    active: boolean;
    onClick: (id: string) => void;
  }

  const Tab = ({ id, label, icon, active, onClick }: TabProps) => (
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

  interface StatCardProps {
    title: string;
    value: string | number;
    change?: number;
    icon: React.ReactNode;
    trend?: string;
  }

  const StatCard = ({ title, value, change, icon, trend }: StatCardProps) => (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">{value}</p>
          {change && (
            <div className={`flex items-center mt-1 ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {change >= 0 ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
              <span className="text-sm font-medium">{Math.abs(change)}%</span>
            </div>
          )}
        </div>
        <div className="p-3 bg-blue-50 rounded-lg">
          {icon}
        </div>
      </div>
    </div>
  );

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Competitive Dashboard</h1>
              <p className="text-sm text-gray-500 mt-1">Last updated: May 15, 2025 at 10:45 AM</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex space-x-2">
                <Tab 
                  id="overview" 
                  label="Overview" 
                  icon={<BarChart3 className="w-4 h-4" />}
                  active={selectedTab === 'overview'} 
                  onClick={setSelectedTab} 
                />
                <Tab 
                  id="competitors" 
                  label="Competitors" 
                  icon={<Target className="w-4 h-4" />}
                  active={selectedTab === 'competitors'} 
                  onClick={setSelectedTab} 
                />
                <Tab 
                  id="campaigns" 
                  label="Campaigns" 
                  icon={<Activity className="w-4 h-4" />}
                  active={selectedTab === 'campaigns'} 
                  onClick={setSelectedTab} 
                />
                <Tab 
                  id="sales" 
                  label="Sales" 
                  icon={<Users className="w-4 h-4" />}
                  active={selectedTab === 'sales'} 
                  onClick={setSelectedTab} 
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {selectedTab === 'overview' && (
          <>
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <StatCard 
                title="Total Signals" 
                value={mockData.kpiMetrics.signalDetection.totalSignals.toLocaleString()} 
                change={mockData.kpiMetrics.signalDetection.changeFromYesterday}
                icon={<Activity className="w-8 h-8 text-blue-600" />}
              />
              <StatCard 
                title="Alerts Generated" 
                value={mockData.kpiMetrics.signalDetection.alertsGenerated.toLocaleString()} 
                icon={<AlertTriangle className="w-8 h-8 text-orange-600" />}
              />
              <StatCard 
                title="Active Competitors" 
                value={mockData.kpiMetrics.competitiveIntelligence.activeCompetitors} 
                icon={<Target className="w-8 h-8 text-purple-600" />}
              />
              <StatCard 
                title="Campaign ROI" 
                value={`${mockData.kpiMetrics.positioningEffectiveness.avgCampaignROI.toFixed(1)}x`} 
                icon={<Award className="w-8 h-8 text-green-600" />}
              />
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* Signal Volume Chart */}
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Signal Volume (Last 30 Days)</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={mockData.trendData.signalVolume}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="date" 
                      tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    />
                    <YAxis />
                    <Tooltip 
                      labelFormatter={(value) => new Date(value).toLocaleDateString()}
                      formatter={(value) => [value, 'Signals']}
                    />
                    <Area type="monotone" dataKey="count" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Competitor Activity Pie Chart */}
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Competitor Activity Breakdown</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={mockData.trendData.competitorActivity}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ category, percentage }) => `${category.replace('_', ' ')}: ${percentage}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="count"
                    >
                      {mockData.trendData.competitorActivity.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Recent Alerts */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Alerts</h3>
              <div className="space-y-4">
                {mockData.recentAlerts.map((alert) => (
                  <div key={alert.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(alert.priority)}`}>
                            {alert.priority.toUpperCase()}
                          </span>
                          <span className="text-sm text-gray-500">{alert.competitor}</span>
                        </div>
                        <h4 className="text-md font-medium text-gray-900 mb-1">{alert.title}</h4>
                        <p className="text-sm text-gray-600">Confidence: {formatPercent(alert.confidence)}</p>
                        <p className="text-sm text-gray-600">Estimated Revenue Loss: {formatNumber(alert.potentialImpact.estimatedRevenueLoss)}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">{formatDate(alert.timestamp)}</p>
                        <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium mt-2 ${getStatusColor(alert.status)}`}>
                          {alert.status.replace('_', ' ')}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* System Performance */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">System Performance</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <p className="text-sm text-gray-600">Model Accuracy</p>
                  <p className="text-2xl font-bold text-green-600">{formatPercent(mockData.kpiMetrics.systemPerformance.modelAccuracy)}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">System Uptime</p>
                  <p className="text-2xl font-bold text-green-600">{formatPercent(mockData.kpiMetrics.systemPerformance.systemUptime)}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">Response Time</p>
                  <p className="text-2xl font-bold text-blue-600">{mockData.kpiMetrics.systemPerformance.avgResponseTime}ms</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">False Positive Rate</p>
                  <p className="text-2xl font-bold text-orange-600">{formatPercent(mockData.kpiMetrics.systemPerformance.falsePositiveRate)}</p>
                </div>
              </div>
            </div>
          </>
        )}

        {selectedTab === 'competitors' && (
          <>
            {/* Competitor Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {mockData.topCompetitors.map((competitor, index) => (
                <div key={index} className={`bg-white rounded-lg shadow-md p-6 border-l-4 ${getThreatColor(competitor.threatLevel)}`}>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{competitor.name}</h3>
                      <p className="text-sm text-gray-600">Market Share: {competitor.marketShare}%</p>
                    </div>
                    <div className="text-right">
                      <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(competitor.threatLevel)}`}>
                        {competitor.threatLevel.replace('-', ' ').toUpperCase()}
                      </span>
                      <div className={`flex items-center mt-1 ${competitor.changeFromLastMonth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {competitor.changeFromLastMonth >= 0 ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
                        <span className="text-sm font-medium">{Math.abs(competitor.changeFromLastMonth)}%</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">Active Signals: <span className="font-medium">{competitor.activeSignals}</span></p>
                    <div className="mt-4">
                      <p className="text-sm font-medium text-gray-700 mb-2">Recent Activity:</p>
                      <div className="space-y-1">
                        {competitor.recentActivity.map((activity, actIndex) => (
                          <div key={actIndex} className="flex justify-between text-sm">
                            <span className="text-gray-600">{activity.type.replace('_', ' ')}</span>
                            <span className="text-gray-500">{formatDate(activity.date)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {selectedTab === 'campaigns' && (
          <>
            {/* Positioning Success Chart */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Positioning Success Rate (Last 12 Months)</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={mockData.trendData.positioningSuccess}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip 
                    formatter={(value, name) => [
                      name === 'successRate' ? `${value}%` : value,
                      name === 'successRate' ? 'Success Rate' : 'Campaigns'
                    ]}
                  />
                  <Line type="monotone" dataKey="successRate" stroke="#8884d8" strokeWidth={2} />
                  <Line type="monotone" dataKey="campaignCount" stroke="#82ca9d" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Active Campaigns */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Active Campaigns</h3>
              <div className="space-y-4">
                {mockData.activeCampaigns.map((campaign) => (
                  <div key={campaign.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="text-lg font-medium text-gray-900">{campaign.name}</h4>
                          <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(campaign.status)}`}>
                            {campaign.status === 'paused' ? <Pause className="w-3 h-3 mr-1" /> : <Play className="w-3 h-3 mr-1" />}
                            {campaign.status.toUpperCase()}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">Target: {campaign.targetAudience}</p>
                        <p className="text-sm text-gray-600">Channels: {campaign.channels.join(', ')}</p>
                        <p className="text-sm text-gray-600">Duration: {formatDate(campaign.launchDate)} - {formatDate(campaign.endDate)}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <p className="text-sm text-gray-600">Reach</p>
                        <p className="text-lg font-bold text-gray-900">{campaign.performance.reach.toLocaleString()}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-600">Engagement</p>
                        <p className="text-lg font-bold text-blue-600">{formatPercent(campaign.performance.engagement)}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-600">Conversion</p>
                        <p className="text-lg font-bold text-green-600">{formatPercent(campaign.performance.conversionRate)}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-600">ROI</p>
                        <p className="text-lg font-bold text-purple-600">{campaign.performance.roi.toFixed(1)}x</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {selectedTab === 'sales' && (
          <>
            {/* Sales Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <StatCard 
                title="Total Reps" 
                value={mockData.salesPerformance.repEngagement.totalReps.toLocaleString()} 
                icon={<Users className="w-8 h-8 text-blue-600" />}
              />
              <StatCard 
                title="Active Reps" 
                value={mockData.salesPerformance.repEngagement.activeReps.toLocaleString()} 
                icon={<CheckCircle className="w-8 h-8 text-green-600" />}
              />
              <StatCard 
                title="Engagement Rate" 
                value={formatPercent(mockData.salesPerformance.repEngagement.engagementRate)} 
                icon={<Activity className="w-8 h-8 text-purple-600" />}
              />
              <StatCard 
                title="Feedback Score" 
                value={`${mockData.salesPerformance.repEngagement.feedbackScore}/5`} 
                icon={<Award className="w-8 h-8 text-orange-600" />}
              />
            </div>

            {/* Top Performers */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performers</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Region</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Win Rate</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg Deal Size</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Content Usage</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {mockData.salesPerformance.topPerformers.map((rep) => (
                      <tr key={rep.repId}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{rep.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{rep.region}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium">{formatPercent(rep.winRate)}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 font-medium">{formatNumber(rep.avgDealSize)}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-purple-600 font-medium">{formatPercent(rep.contentUsageRate)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Regional Performance */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Regional Performance</h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={mockData.salesPerformance.regionalMetrics}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="region" />
                  <YAxis />
                  <Tooltip 
                    formatter={(value, name) => {
                      if (name === 'totalRevenue') return [formatNumber(Number(value)), 'Revenue'];
                      if (name === 'avgWinRate') return [formatPercent(Number(value)), 'Win Rate'];
                      if (name === 'contentUsageRate') return [formatPercent(Number(value)), 'Content Usage'];
                      return [value, name];
                    }}
                  />
                  <Bar dataKey="totalRevenue" fill="#8884d8" name="totalRevenue" />
                  <Bar dataKey="avgWinRate" fill="#82ca9d" name="avgWinRate" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default Dashboard;