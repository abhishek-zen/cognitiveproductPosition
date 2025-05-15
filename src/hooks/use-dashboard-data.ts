'use client';

import { useState, useEffect } from 'react';

// Mock data
const mockDashboardData = {
  "dashboard": {
    "metadata": {
      "lastUpdated": "2025-05-15T10:45:00Z",
      "timeRange": "last_30_days",
      "refreshRate": 300
    },
    "kpiMetrics": {
      "signalDetection": {
        "totalSignals": 15420,
        "signalsToday": 287,
        "changeFromYesterday": 12.5,
        "alertsGenerated": 892,
        "alertConversionRate": 0.058,
        "avgConfidenceScore": 0.87
      },
      "competitiveIntelligence": {
        "activeCompetitors": 23,
        "rateChanges": 47,
        "productLaunches": 12,
        "marketShareImpact": {
          "value": -0.02,
          "trend": "declining"
        }
      },
      "positioningEffectiveness": {
        "campaignsLaunched": 18,
        "messagingUpdates": 156,
        "repEngagement": 0.73,
        "avgCampaignROI": 2.4
      },
      "systemPerformance": {
        "modelAccuracy": 0.92,
        "falsePositiveRate": 0.08,
        "avgResponseTime": 245,
        "systemUptime": 0.9998
      }
    },
    "recentAlerts": [
      {
        "id": "alert_001",
        "type": "rate_change",
        "competitor": "MegaLife Insurance",
        "title": "Fixed Annuity Rate Increased to 4.8%",
        "confidence": 0.94,
        "timestamp": "2025-05-15T09:30:00Z",
        "priority": "high",
        "status": "under_review",
        "potentialImpact": {
          "score": 8.5,
          "affectedProducts": ["SecureRetire Plus", "LifeIncome Pro"],
          "estimatedRevenueLoss": 125000
        }
      },
      {
        "id": "alert_002",
        "type": "product_launch",
        "competitor": "Prudential Financial",
        "title": "New Variable Annuity with Enhanced Death Benefit",
        "confidence": 0.89,
        "timestamp": "2025-05-15T08:45:00Z",
        "priority": "medium",
        "status": "in_comparison",
        "potentialImpact": {
          "score": 7.2,
          "affectedProducts": ["VIP Annuity", "FlexiRetire"],
          "estimatedRevenueLoss": 89000
        }
      },
      {
        "id": "alert_003",
        "type": "marketing_campaign",
        "competitor": "Northwestern Mutual",
        "title": "Aggressive Guaranteed Income Rider Promotion",
        "confidence": 0.91,
        "timestamp": "2025-05-15T07:15:00Z",
        "priority": "medium",
        "status": "positioning_approved",
        "potentialImpact": {
          "score": 6.8,
          "affectedProducts": ["IncomePlus Rider", "GuardianLife Pro"],
          "estimatedRevenueLoss": 67000
        }
      }
    ],
    "trendData": {
      "signalVolume": {
        "last30Days": [
          {"date": "2025-04-15", "count": 312},
          {"date": "2025-04-16", "count": 298},
          {"date": "2025-04-17", "count": 445},
          {"date": "2025-04-18", "count": 378},
          {"date": "2025-04-19", "count": 356},
          {"date": "2025-04-20", "count": 289},
          {"date": "2025-04-21", "count": 198},
          {"date": "2025-04-22", "count": 412},
          {"date": "2025-04-23", "count": 389},
          {"date": "2025-04-24", "count": 445},
          {"date": "2025-04-25", "count": 367},
          {"date": "2025-04-26", "count": 298},
          {"date": "2025-04-27", "count": 234},
          {"date": "2025-04-28", "count": 189},
          {"date": "2025-04-29", "count": 423},
          {"date": "2025-04-30", "count": 398},
          {"date": "2025-05-01", "count": 456},
          {"date": "2025-05-02", "count": 389},
          {"date": "2025-05-03", "count": 367},
          {"date": "2025-05-04", "count": 298},
          {"date": "2025-05-05", "count": 234},
          {"date": "2025-05-06", "count": 445},
          {"date": "2025-05-07", "count": 389},
          {"date": "2025-05-08", "count": 367},
          {"date": "2025-05-09", "count": 445},
          {"date": "2025-05-10", "count": 398},
          {"date": "2025-05-11", "count": 356},
          {"date": "2025-05-12", "count": 289},
          {"date": "2025-05-13", "count": 423},
          {"date": "2025-05-14", "count": 398},
          {"date": "2025-05-15", "count": 287}
        ]
      },
      "competitorActivity": {
        "byType": [
          {"category": "rate_changes", "count": 47, "percentage": 35.6},
          {"category": "product_launches", "count": 32, "percentage": 24.2},
          {"category": "marketing_campaigns", "count": 28, "percentage": 21.2},
          {"category": "regulatory_filings", "count": 15, "percentage": 11.4},
          {"category": "personnel_changes", "count": 10, "percentage": 7.6}
        ]
      },
      "positioningSuccess": {
        "last12Months": [
          {"month": "2024-06", "successRate": 68.2, "campaignCount": 12},
          {"month": "2024-07", "successRate": 71.5, "campaignCount": 15},
          {"month": "2024-08", "successRate": 69.8, "campaignCount": 18},
          {"month": "2024-09", "successRate": 73.4, "campaignCount": 14},
          {"month": "2024-10", "successRate": 75.2, "campaignCount": 16},
          {"month": "2024-11", "successRate": 77.8, "campaignCount": 19},
          {"month": "2024-12", "successRate": 76.3, "campaignCount": 22},
          {"month": "2025-01", "successRate": 78.9, "campaignCount": 20},
          {"month": "2025-02", "successRate": 80.1, "campaignCount": 17},
          {"month": "2025-03", "successRate": 79.5, "campaignCount": 21},
          {"month": "2025-04", "successRate": 81.2, "campaignCount": 18},
          {"month": "2025-05", "successRate": 82.7, "campaignCount": 15}
        ]
      }
    },
    "topCompetitors": [
      {
        "name": "MegaLife Insurance",
        "marketShare": 18.5,
        "changeFromLastMonth": 0.8,
        "activeSignals": 89,
        "threatLevel": "high",
        "recentActivity": [
          {"type": "rate_increase", "date": "2025-05-15"},
          {"type": "new_rider", "date": "2025-05-10"},
          {"type": "marketing_push", "date": "2025-05-08"}
        ]
      },
      {
        "name": "Prudential Financial",
        "marketShare": 15.2,
        "changeFromLastMonth": 0.3,
        "activeSignals": 67,
        "threatLevel": "medium-high",
        "recentActivity": [
          {"type": "product_launch", "date": "2025-05-15"},
          {"type": "rate_adjustment", "date": "2025-05-12"},
          {"type": "partnership", "date": "2025-05-05"}
        ]
      },
      {
        "name": "Northwestern Mutual",
        "marketShare": 12.8,
        "changeFromLastMonth": -0.2,
        "activeSignals": 43,
        "threatLevel": "medium",
        "recentActivity": [
          {"type": "campaign_launch", "date": "2025-05-15"},
          {"type": "product_update", "date": "2025-05-09"},
          {"type": "rate_change", "date": "2025-05-03"}
        ]
      },
      {
        "name": "Lincoln Financial",
        "marketShare": 11.4,
        "changeFromLastMonth": 0.5,
        "activeSignals": 38,
        "threatLevel": "medium",
        "recentActivity": [
          {"type": "rider_enhancement", "date": "2025-05-13"},
          {"type": "fee_adjustment", "date": "2025-05-07"},
          {"type": "digital_platform", "date": "2025-05-01"}
        ]
      },
      {
        "name": "AIG Life & Retirement",
        "marketShare": 9.7,
        "changeFromLastMonth": -0.1,
        "activeSignals": 29,
        "threatLevel": "low-medium",
        "recentActivity": [
          {"type": "compliance_update", "date": "2025-05-11"},
          {"type": "rate_change", "date": "2025-05-04"},
          {"type": "system_upgrade", "date": "2025-04-28"}
        ]
      }
    ],
    "activeCampaigns": [
      {
        "id": "camp_001",
        "name": "Response to MegaLife Rate Increase",
        "status": "active",
        "launchDate": "2025-05-14T09:00:00Z",
        "endDate": "2025-05-28T17:00:00Z",
        "channels": ["IMO", "Bank", "Direct"],
        "targetAudience": "Conservative Investors",
        "performance": {
          "reach": 12450,
          "engagement": 0.68,
          "conversionRate": 0.12,
          "roi": 2.8
        }
      },
      {
        "id": "camp_002",
        "name": "Prudential VA Counter-Campaign",
        "status": "launched",
        "launchDate": "2025-05-15T10:00:00Z",
        "endDate": "2025-06-15T17:00:00Z",
        "channels": ["IMO", "Digital"],
        "targetAudience": "Growth-Oriented Retirees",
        "performance": {
          "reach": 8900,
          "engagement": 0.71,
          "conversionRate": 0.09,
          "roi": 1.9
        }
      },
      {
        "id": "camp_003",
        "name": "Income Rider Differentiation Push",
        "status": "paused",
        "launchDate": "2025-05-10T08:00:00Z",
        "endDate": "2025-05-25T17:00:00Z",
        "channels": ["Bank", "Direct"],
        "targetAudience": "Pre-Retirees",
        "performance": {
          "reach": 6700,
          "engagement": 0.59,
          "conversionRate": 0.07,
          "roi": 1.4
        }
      }
    ],
    "salesPerformance": {
      "repEngagement": {
        "totalReps": 1247,
        "activeReps": 1089,
        "engagementRate": 0.87,
        "avgContentUsage": 0.73,
        "feedbackScore": 4.2
      },
      "topPerformers": [
        {
          "repId": "rep_001",
          "name": "Sarah Johnson",
          "region": "Northeast",
          "winRate": 0.89,
          "avgDealSize": 187500,
          "contentUsageRate": 0.94
        },
        {
          "repId": "rep_002",
          "name": "Michael Chen",
          "region": "West Coast",
          "winRate": 0.85,
          "avgDealSize": 165000,
          "contentUsageRate": 0.91
        },
        {
          "repId": "rep_003",
          "name": "Emily Rodriguez",
          "region": "Southwest",
          "winRate": 0.82,
          "avgDealSize": 145000,
          "contentUsageRate": 0.88
        }
      ],
      "regionalMetrics": [
        {
          "region": "Northeast",
          "repCount": 234,
          "avgWinRate": 0.76,
          "contentUsageRate": 0.82,
          "totalRevenue": 15600000
        },
        {
          "region": "Southeast",
          "repCount": 198,
          "avgWinRate": 0.71,
          "contentUsageRate": 0.78,
          "totalRevenue": 12300000
        },
        {
          "region": "Midwest",
          "repCount": 287,
          "avgWinRate": 0.69,
          "contentUsageRate": 0.75,
          "totalRevenue": 18900000
        },
        {
          "region": "West Coast",
          "repCount": 312,
          "avgWinRate": 0.74,
          "contentUsageRate": 0.79,
          "totalRevenue": 21500000
        },
        {
          "region": "Southwest",
          "repCount": 216,
          "avgWinRate": 0.68,
          "contentUsageRate": 0.71,
          "totalRevenue": 14200000
        }
      ]
    },
    "systemHealth": {
      "dataIngestion": {
        "sourceUptime": 0.998,
        "avgLatency": 1.2,
        "errorRate": 0.002,
        "throughput": 15420
      },
      "modelPerformance": {
        "signalAccuracy": 0.94,
        "alertPrecision": 0.89,
        "comparisonRelevance": 0.91,
        "positioningEffectiveness": 0.86
      },
      "infrastructure": {
        "cpuUtilization": 0.68,
        "memoryUsage": 0.72,
        "diskSpace": 0.55,
        "networkLatency": 45,
        "activeConnections": 1247
      }
    },
    "recentUpdates": [
      {
        "id": "update_001",
        "type": "system_enhancement",
        "title": "Enhanced Sentiment Analysis Model Deployed",
        "description": "Improved accuracy in detecting competitor sentiment changes by 12%",
        "timestamp": "2025-05-14T15:30:00Z",
        "impact": "positive"
      },
      {
        "id": "update_002",
        "type": "integration",
        "title": "New Data Source Added: RegTech Insights",
        "description": "Integrated regulatory filing analysis from RegTech provider",
        "timestamp": "2025-05-13T11:45:00Z",
        "impact": "enhancement"
      },
      {
        "id": "update_003",
        "type": "feature_release",
        "title": "Multi-Language Positioning Support",
        "description": "Added Spanish and French language support for positioning messages",
        "timestamp": "2025-05-12T09:20:00Z",
        "impact": "expansion"
      }
    ],
    "upcomingEvents": [
      {
        "id": "event_001",
        "type": "maintenance",
        "title": "Scheduled System Maintenance",
        "description": "ML model retraining and database optimization",
        "scheduledDate": "2025-05-18T02:00:00Z",
        "duration": 4,
        "impact": "minimal"
      },
      {
        "id": "event_002",
        "type": "training",
        "title": "Sales Team Workshop",
        "description": "Training on new competitive positioning tools",
        "scheduledDate": "2025-05-20T10:00:00Z",
        "duration": 6,
        "impact": "engagement"
      },
      {
        "id": "event_003",
        "type": "review",
        "title": "Q2 Strategy Review Meeting",
        "description": "Review competitive positioning strategy effectiveness",
        "scheduledDate": "2025-05-25T14:00:00Z",
        "duration": 3,
        "impact": "strategic"
      }
    ]
  }
};

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
    // Simulate API loading delay
    const timer = setTimeout(() => {
      try {
        // Transform mock data into the expected format
        const transformedData: DashboardData = {
          userRole: "Product Manager",
          cards: [
            {
              title: "Total Signals",
              value: mockDashboardData.dashboard.kpiMetrics.signalDetection.totalSignals.toLocaleString(),
              icon: "📊"
            },
            {
              title: "Active Competitors",
              value: mockDashboardData.dashboard.kpiMetrics.competitiveIntelligence.activeCompetitors,
              icon: "🏢"
            },
            {
              title: "Campaigns Launched",
              value: mockDashboardData.dashboard.kpiMetrics.positioningEffectiveness.campaignsLaunched,
              icon: "🚀"
            },
            {
              title: "Model Accuracy",
              value: `${(mockDashboardData.dashboard.kpiMetrics.systemPerformance.modelAccuracy * 100).toFixed(1)}%`,
              icon: "🎯"
            }
          ],
          tableRows: mockDashboardData.dashboard.recentAlerts.map(alert => ({
            id: alert.id,
            name: alert.title,
            status: alert.status === "under_review" ? "Pending" : 
                  alert.status === "positioning_approved" ? "Approved" : "In Review",
            updatedAt: new Date(alert.timestamp).toLocaleDateString()
          }))
        };
        
        setData(transformedData);
        setLoading(false);
      } catch (err) {
        setError("Error processing dashboard data");
        setLoading(false);
      }
    }, 800); // Simulate API call with 800ms delay

    return () => clearTimeout(timer);
  }, []);

  return { data, loading, error };
}
