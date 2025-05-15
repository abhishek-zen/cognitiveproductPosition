"use client";
import React from 'react';
import { useState } from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer
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
  Filter,
  Plus,
  Edit,
  Trash2,
  Calendar,
  Search,
  PieChart as PieChartIcon,
  Globe,
  Cpu,
  Pause,
  Play,
  Eye,
  Settings,
  MessageCircle
} from 'lucide-react';

const CampaignManagement = () => {
  const [selectedTab, setSelectedTab] = useState<'active' | 'draft' | 'completed'>('active');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  
  // Mock data for campaigns
  const mockCampaigns = {
    active: [
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
        },
        owner: "Sarah Johnson",
        budget: 75000,
        remainingBudget: 42300,
        assetCount: 14,
        completedTasks: 12,
        totalTasks: 18
      },
      {
        id: "camp_002",
        name: "Prudential VA Counter-Campaign",
        status: "active",
        launchDate: "2025-05-15T10:00:00Z",
        endDate: "2025-06-15T17:00:00Z",
        channels: ["IMO", "Digital"],
        targetAudience: "Growth-Oriented Retirees",
        performance: {
          reach: 8900,
          engagement: 0.71,
          conversionRate: 0.09,
          roi: 1.9
        },
        owner: "Michael Chen",
        budget: 90000,
        remainingBudget: 72500,
        assetCount: 8,
        completedTasks: 7,
        totalTasks: 24
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
        },
        owner: "Emily Rodriguez",
        budget: 45000,
        remainingBudget: 18200,
        assetCount: 9,
        completedTasks: 8,
        totalTasks: 15
      },
      {
        id: "camp_004",
        name: "Guaranteed Income Benefit Promotion",
        status: "active",
        launchDate: "2025-05-08T09:00:00Z",
        endDate: "2025-06-10T17:00:00Z",
        channels: ["IMO", "Broker", "Digital"],
        targetAudience: "Near-Retirees",
        performance: {
          reach: 9800,
          engagement: 0.62,
          conversionRate: 0.11,
          roi: 2.3
        },
        owner: "Daniel Smith",
        budget: 85000,
        remainingBudget: 51200,
        assetCount: 12,
        completedTasks: 15,
        totalTasks: 22
      }
    ],
    draft: [
      {
        id: "camp_005",
        name: "Tax-Advantaged Annuity Launch",
        status: "draft",
        targetAudience: "High-Net-Worth Individuals",
        channels: ["IMO", "Financial Advisor"],
        owner: "Jessica Williams",
        budget: 120000,
        completedTasks: 6,
        totalTasks: 21,
        lastEdited: "2025-05-14T14:23:00Z"
      },
      {
        id: "camp_006",
        name: "Northwestern Product Response",
        status: "draft",
        targetAudience: "Conservative Retirees",
        channels: ["IMO", "Direct"],
        owner: "Robert Garcia",
        budget: 65000,
        completedTasks: 3,
        totalTasks: 17,
        lastEdited: "2025-05-13T16:45:00Z"
      }
    ],
    completed: [
      {
        id: "camp_007",
        name: "Q1 Annuity Promotion",
        status: "completed",
        launchDate: "2025-02-01T09:00:00Z",
        endDate: "2025-03-31T17:00:00Z",
        channels: ["IMO", "Bank", "Direct", "Digital"],
        targetAudience: "Pre-Retirees",
        performance: {
          reach: 24650,
          engagement: 0.72,
          conversionRate: 0.15,
          roi: 3.2
        },
        owner: "Sarah Johnson",
        budget: 150000,
        actualSpend: 147800,
        assetCount: 24
      },
      {
        id: "camp_008",
        name: "Fixed Index Launch Campaign",
        status: "completed",
        launchDate: "2025-03-15T09:00:00Z",
        endDate: "2025-04-30T17:00:00Z",
        channels: ["IMO", "Broker"],
        targetAudience: "Affluent Investors",
        performance: {
          reach: 15850,
          engagement: 0.68,
          conversionRate: 0.13,
          roi: 2.7
        },
        owner: "Michael Chen",
        budget: 110000,
        actualSpend: 108200,
        assetCount: 18
      }
    ]
  };

  // Helper functions
  const formatNumber = (num: number) => {
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

  const formatDate = (dateStr: string | number | Date) => {
    return new Date(dateStr).toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const getStatusColor = (status: any) => {
    switch (status) {
      case 'active':
        return 'text-green-600 bg-green-100';
      case 'paused':
        return 'text-yellow-600 bg-yellow-100';
      case 'draft':
        return 'text-blue-600 bg-blue-100';
      case 'completed':
        return 'text-purple-600 bg-purple-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getProgressColor = (completed: number, total: number) => {
    const percentage = (completed / total) * 100;
    if (percentage < 30) return 'bg-red-500';
    if (percentage < 70) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  // Interface components
  interface TabProps {
    id: string;
    label: string;
    count?: number;
    active: boolean;
    onClick: (id: string) => void;
  }

  const Tab = ({ id, label, count, active, onClick }: TabProps) => (
    <button
      onClick={() => onClick(id)}
      className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
        active 
          ? 'bg-blue-600 text-white shadow-md' 
          : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      <span>{label}</span>
      {count !== undefined && (
        <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${active ? 'bg-white text-blue-600' : 'bg-gray-200 text-gray-700'}`}>
          {count}
        </span>
      )}
    </button>
  );

  // Filter campaigns based on search and status
  const filterCampaigns = (campaigns: any[]) => {
    if (!campaigns) return [];
    
    return campaigns.filter(campaign => {
      const matchesSearch = searchQuery === '' || 
        campaign.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        campaign.targetAudience.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (campaign.owner && campaign.owner.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesStatus = filterStatus === 'all' || campaign.status === filterStatus;
      
      return matchesSearch && matchesStatus;
    });
  };

  // Get campaigns for the current tab
  const currentCampaigns = filterCampaigns(mockCampaigns[selectedTab]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Campaign Management</h1>
              <p className="text-sm text-gray-500 mt-1">Manage and optimize your marketing campaigns</p>
            </div>
            <div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Campaign Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <p className="text-sm font-medium text-gray-600">Active Campaigns</p>
                <p className="text-2xl font-bold text-gray-900">{mockCampaigns.active.filter(c => c.status === 'active').length}</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <Activity className="w-8 h-8 text-green-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <p className="text-sm font-medium text-gray-600">Paused Campaigns</p>
                <p className="text-2xl font-bold text-gray-900">{mockCampaigns.active.filter(c => c.status === 'paused').length}</p>
              </div>
              <div className="p-3 bg-yellow-50 rounded-lg">
                <Pause className="w-8 h-8 text-yellow-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <p className="text-sm font-medium text-gray-600">Draft Campaigns</p>
                <p className="text-2xl font-bold text-gray-900">{mockCampaigns.draft.length}</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <Edit className="w-8 h-8 text-blue-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <p className="text-sm font-medium text-gray-600">Completed Campaigns</p>
                <p className="text-2xl font-bold text-gray-900">{mockCampaigns.completed.length}</p>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg">
                <CheckCircle className="w-8 h-8 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Campaign Filters and Tabs */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Tab 
                id="active" 
                label="Active Campaigns" 
                count={mockCampaigns.active.length}
                active={selectedTab === 'active'} 
                onClick={(id) => setSelectedTab(id as 'active' | 'draft' | 'completed')} 
              />
              <Tab 
                id="draft" 
                label="Drafts" 
                count={mockCampaigns.draft.length}
                active={selectedTab === 'draft'} 
                onClick={(id) => setSelectedTab(id as 'active' | 'draft' | 'completed')} 
              />
              <Tab 
                id="completed" 
                label="Completed" 
                count={mockCampaigns.completed.length}
                active={selectedTab === 'completed'} 
                onClick={(id) => setSelectedTab(id as 'active' | 'draft' | 'completed')}  
              />
            </div>
            
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search campaigns..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <select
                className="pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="all">All Statuses</option>
                <option value="active">Active</option>
                <option value="paused">Paused</option>
                <option value="draft">Draft</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>

          {/* Campaigns List */}
          <div className="space-y-6">
            {currentCampaigns.length === 0 ? (
              <div className="text-center py-12">
                <AlertTriangle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900">No campaigns found</h3>
                <p className="text-gray-500 mt-2">Try adjusting your filters or create a new campaign.</p>
              </div>
            ) : (
              currentCampaigns.map((campaign) => (
                <div key={campaign.id} className="border border-gray-200 rounded-lg p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between">
                    <div className="flex-1 mb-4 lg:mb-0">
                      <div className="flex items-center mb-3">
                        <h3 className="text-xl font-semibold text-gray-900 mr-3">{campaign.name}</h3>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(campaign.status)}`}>
                          {campaign.status === 'paused' ? <Pause className="w-3 h-3 mr-1" /> : 
                           campaign.status === 'active' ? <Play className="w-3 h-3 mr-1" /> :
                           campaign.status === 'draft' ? <Edit className="w-3 h-3 mr-1" /> :
                           <CheckCircle className="w-3 h-3 mr-1" />}
                          {campaign.status.toUpperCase()}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-500">Target Audience</p>
                          <p className="text-sm font-medium">{campaign.targetAudience}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Owner</p>
                          <p className="text-sm font-medium">{campaign.owner}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Channels</p>
                          <p className="text-sm font-medium">{campaign.channels.join(', ')}</p>
                        </div>
                      </div>
                      
                      {selectedTab !== 'draft' && (
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                          {selectedTab === 'active' && (
                            <>
                              <div>
                                <p className="text-sm text-gray-500">Budget Spent</p>
                                <div className="flex items-center">
                                  <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${Math.round((1 - campaign.remainingBudget/campaign.budget) * 100)}%` }}></div>
                                  </div>
                                  <span className="text-sm font-medium">{Math.round((1 - campaign.remainingBudget/campaign.budget) * 100)}%</span>
                                </div>
                              </div>
                              <div>
                                <p className="text-sm text-gray-500">Timeline</p>
                                <p className="text-sm font-medium">{formatDate(campaign.launchDate)} - {formatDate(campaign.endDate)}</p>
                              </div>
                              <div>
                                <p className="text-sm text-gray-500">Tasks</p>
                                <div className="flex items-center">
                                  <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                                    <div className={`${getProgressColor(campaign.completedTasks, campaign.totalTasks)} h-2.5 rounded-full`} style={{ width: `${(campaign.completedTasks/campaign.totalTasks)*100}%` }}></div>
                                  </div>
                                  <span className="text-sm font-medium">{campaign.completedTasks}/{campaign.totalTasks}</span>
                                </div>
                              </div>
                              <div>
                                <p className="text-sm text-gray-500">ROI</p>
                                <p className="text-sm font-medium">{campaign.performance.roi.toFixed(1)}x</p>
                              </div>
                            </>
                          )}
                          
                          {selectedTab === 'completed' && (
                            <>
                              <div>
                                <p className="text-sm text-gray-500">Budget Used</p>
                                <p className="text-sm font-medium">{formatNumber(campaign.actualSpend)} / {formatNumber(campaign.budget)}</p>
                              </div>
                              <div>
                                <p className="text-sm text-gray-500">Duration</p>
                                <p className="text-sm font-medium">{formatDate(campaign.launchDate)} - {formatDate(campaign.endDate)}</p>
                              </div>
                              <div>
                                <p className="text-sm text-gray-500">Conversion Rate</p>
                                <p className="text-sm font-medium">{formatPercent(campaign.performance.conversionRate)}</p>
                              </div>
                              <div>
                                <p className="text-sm text-gray-500">ROI</p>
                                <p className="text-sm font-medium text-green-600">{campaign.performance.roi.toFixed(1)}x</p>
                              </div>
                            </>
                          )}
                        </div>
                      )}
                      
                      {selectedTab === 'draft' && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <p className="text-sm text-gray-500">Budget (Planned)</p>
                            <p className="text-sm font-medium">{formatNumber(campaign.budget)}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Setup Progress</p>
                            <div className="flex items-center">
                              <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                                <div className={`${getProgressColor(campaign.completedTasks, campaign.totalTasks)} h-2.5 rounded-full`} style={{ width: `${(campaign.completedTasks/campaign.totalTasks)*100}%` }}></div>
                              </div>
                              <span className="text-sm font-medium">{campaign.completedTasks}/{campaign.totalTasks}</span>
                            </div>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Last Edited</p>
                            <p className="text-sm font-medium">{new Date(campaign.lastEdited).toLocaleString()}</p>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex flex-row lg:flex-col items-center lg:items-end space-x-4 lg:space-x-0 lg:space-y-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <Eye className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                        <Edit className="w-5 h-5" />
                      </button>
                      {selectedTab === 'active' && campaign.status === 'active' && (
                        <button className="p-2 text-yellow-600 hover:bg-yellow-50 rounded-lg transition-colors">
                          <Pause className="w-5 h-5" />
                        </button>
                      )}
                      {selectedTab === 'active' && campaign.status === 'paused' && (
                        <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                          <Play className="w-5 h-5" />
                        </button>
                      )}
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Performance metrics for active/completed campaigns */}
                  {selectedTab !== 'draft' && campaign.performance && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <h4 className="text-sm font-medium text-gray-900 mb-4">Performance Metrics</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div>
                          <p className="text-sm text-gray-500">Reach</p>
                          <p className="text-lg font-bold text-gray-900">{campaign.performance.reach.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Engagement</p>
                          <p className="text-lg font-bold text-blue-600">{formatPercent(campaign.performance.engagement)}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Conversion</p>
                          <p className="text-lg font-bold text-green-600">{formatPercent(campaign.performance.conversionRate)}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">ROI</p>
                          <p className="text-lg font-bold text-purple-600">{campaign.performance.roi.toFixed(1)}x</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>

        {/* Action Center */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Campaign Action Center</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="flex items-center mb-2">
                <div className="p-2 bg-green-100 rounded-lg mr-3">
                  <Plus className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="font-medium">Create Campaign</h3>
              </div>
              <p className="text-sm text-gray-600">Set up a new marketing campaign with templates and guides</p>
            </div>
            
            <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="flex items-center mb-2">
                <div className="p-2 bg-blue-100 rounded-lg mr-3">
                  <MessageCircle className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-medium">Campaign Hub</h3>
              </div>
              <p className="text-sm text-gray-600">Centralized location for campaign assets and communications</p>
            </div>
            
            <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="flex items-center mb-2">
                <div className="p-2 bg-purple-100 rounded-lg mr-3">
                  <Settings className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="font-medium">Campaign Settings</h3>
              </div>
              <p className="text-sm text-gray-600">Configure default settings, templates and approval flows</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CampaignManagement;
