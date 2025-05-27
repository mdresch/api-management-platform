"use client"

import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Users,
  Shield,
  Clock,
  AlertTriangle,
  CheckCircle,
  Download,
  Calendar,
} from "lucide-react"

const executiveMetrics = [
  {
    title: "API ROI",
    value: "$2.4M",
    change: "+34%",
    trend: "up",
    icon: DollarSign,
    description: "Annual return on API investments",
    target: "$3M",
    targetProgress: 80,
  },
  {
    title: "Developer Adoption",
    value: "2,847",
    change: "+23%",
    trend: "up",
    icon: Users,
    description: "Active developers using APIs",
    target: "3,500",
    targetProgress: 81,
  },
  {
    title: "API Uptime",
    value: "99.97%",
    change: "+0.02%",
    trend: "up",
    icon: Shield,
    description: "Platform availability SLA",
    target: "99.95%",
    targetProgress: 100,
  },
  {
    title: "Time to Market",
    value: "12 days",
    change: "-45%",
    trend: "down",
    icon: Clock,
    description: "Average API development cycle",
    target: "10 days",
    targetProgress: 83,
  },
]

const businessImpact = [
  {
    category: "Revenue Generation",
    metrics: [
      { name: "API-driven Revenue", value: "$8.2M", growth: "+28%" },
      { name: "Partner Integrations", value: "156", growth: "+42%" },
      { name: "New Business Channels", value: "23", growth: "+15%" },
    ],
  },
  {
    category: "Operational Efficiency",
    metrics: [
      { name: "Development Cost Reduction", value: "35%", growth: "+12%" },
      { name: "Support Ticket Reduction", value: "58%", growth: "+23%" },
      { name: "Deployment Frequency", value: "3.2x", growth: "+67%" },
    ],
  },
  {
    category: "Risk Management",
    metrics: [
      { name: "Security Incidents", value: "0", growth: "-100%" },
      { name: "Compliance Score", value: "94%", growth: "+8%" },
      { name: "Data Breach Risk", value: "Low", growth: "Stable" },
    ],
  },
]

const strategicInitiatives = [
  {
    name: "Digital Transformation",
    status: "On Track",
    progress: 78,
    budget: "$1.2M",
    spent: "$936K",
    timeline: "Q2 2024",
    owner: "CTO Office",
    kpis: ["API Coverage: 85%", "Legacy System Migration: 60%", "Partner Onboarding: 120%"],
  },
  {
    name: "API-First Strategy",
    status: "Ahead",
    progress: 92,
    budget: "$800K",
    spent: "$624K",
    timeline: "Q1 2024",
    owner: "Product Team",
    kpis: ["New API Adoption: 145%", "Developer Satisfaction: 4.8/5", "API Quality Score: 94%"],
  },
  {
    name: "Security & Compliance",
    status: "At Risk",
    progress: 65,
    budget: "$600K",
    spent: "$420K",
    timeline: "Q3 2024",
    owner: "Security Team",
    kpis: ["SOC 2 Compliance: 88%", "GDPR Readiness: 92%", "Audit Findings: 3"],
  },
]

const competitiveAnalysis = [
  {
    metric: "API Response Time",
    ourValue: "142ms",
    industry: "280ms",
    status: "leading",
    improvement: "49% faster",
  },
  {
    metric: "Developer Onboarding",
    ourValue: "23 min",
    industry: "2.5 hours",
    status: "leading",
    improvement: "85% faster",
  },
  {
    metric: "API Uptime",
    ourValue: "99.97%",
    industry: "99.5%",
    status: "leading",
    improvement: "0.47% higher",
  },
  {
    metric: "Security Score",
    ourValue: "94/100",
    industry: "78/100",
    status: "leading",
    improvement: "21% higher",
  },
]

export default function ExecutiveDashboardPage() {
  return (
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Executive Dashboard</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Executive Dashboard</h1>
            <p className="text-muted-foreground">Strategic insights and business impact metrics</p>
          </div>
          <div className="flex items-center space-x-2">
            <Select defaultValue="q4-2024">
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="q4-2024">Q4 2024</SelectItem>
                <SelectItem value="q3-2024">Q3 2024</SelectItem>
                <SelectItem value="q2-2024">Q2 2024</SelectItem>
                <SelectItem value="ytd">Year to Date</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export Report
            </Button>
            <Button variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              Schedule Report
            </Button>
          </div>
        </div>

        {/* Key Performance Indicators */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {executiveMetrics.map((metric) => (
            <Card key={metric.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                <metric.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                  {metric.trend === "up" ? (
                    <TrendingUp className="h-3 w-3 text-green-600" />
                  ) : (
                    <TrendingDown className="h-3 w-3 text-green-600" />
                  )}
                  <span className="text-green-600">{metric.change}</span>
                  <span>vs last quarter</span>
                </div>
                <div className="mt-2">
                  <div className="flex items-center justify-between text-xs">
                    <span>Target: {metric.target}</span>
                    <span>{metric.targetProgress}%</span>
                  </div>
                  <Progress value={metric.targetProgress} className="mt-1" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="business-impact" className="space-y-4">
          <TabsList>
            <TabsTrigger value="business-impact">Business Impact</TabsTrigger>
            <TabsTrigger value="strategic-initiatives">Strategic Initiatives</TabsTrigger>
            <TabsTrigger value="competitive-analysis">Competitive Analysis</TabsTrigger>
            <TabsTrigger value="risk-assessment">Risk Assessment</TabsTrigger>
          </TabsList>

          <TabsContent value="business-impact" className="space-y-4">
            <div className="grid gap-4 lg:grid-cols-3">
              {businessImpact.map((category) => (
                <Card key={category.category}>
                  <CardHeader>
                    <CardTitle className="text-lg">{category.category}</CardTitle>
                    <CardDescription>Key performance indicators and business outcomes</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.metrics.map((metric) => (
                        <div key={metric.name} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">{metric.name}</span>
                            <div className="flex items-center space-x-2">
                              <span className="text-lg font-bold">{metric.value}</span>
                              <Badge variant="outline" className="text-xs text-green-600">
                                {metric.growth}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>API Portfolio Performance</CardTitle>
                <CardDescription>Revenue and usage metrics across your API portfolio</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">$2.4M</div>
                    <div className="text-sm text-muted-foreground">Total API Revenue</div>
                    <div className="text-xs text-green-600 mt-1">+34% YoY</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">127</div>
                    <div className="text-sm text-muted-foreground">Active APIs</div>
                    <div className="text-xs text-green-600 mt-1">+12 this quarter</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">1.2B</div>
                    <div className="text-sm text-muted-foreground">Monthly Requests</div>
                    <div className="text-xs text-green-600 mt-1">+28% growth</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-green-600">156</div>
                    <div className="text-sm text-muted-foreground">Partner Integrations</div>
                    <div className="text-xs text-green-600 mt-1">+42% increase</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="strategic-initiatives" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Strategic Initiative Tracking</CardTitle>
                <CardDescription>Monitor progress on key organizational initiatives</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {strategicInitiatives.map((initiative) => (
                    <div key={initiative.name} className="border rounded-lg p-4 space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold">{initiative.name}</h3>
                          <p className="text-sm text-muted-foreground">Owner: {initiative.owner}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge
                            variant={
                              initiative.status === "On Track"
                                ? "default"
                                : initiative.status === "Ahead"
                                  ? "secondary"
                                  : "destructive"
                            }
                          >
                            {initiative.status}
                          </Badge>
                          <span className="text-sm text-muted-foreground">Due: {initiative.timeline}</span>
                        </div>
                      </div>

                      <div className="grid gap-4 md:grid-cols-3">
                        <div>
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span>Progress</span>
                            <span>{initiative.progress}%</span>
                          </div>
                          <Progress value={initiative.progress} />
                        </div>
                        <div>
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span>Budget Utilization</span>
                            <span>
                              {Math.round(
                                (Number.parseInt(initiative.spent.replace(/[$K]/g, "")) /
                                  Number.parseInt(initiative.budget.replace(/[$M]/g, ""))) *
                                  1000 *
                                  100,
                              )}
                              %
                            </span>
                          </div>
                          <Progress
                            value={Math.round(
                              (Number.parseInt(initiative.spent.replace(/[$K]/g, "")) /
                                Number.parseInt(initiative.budget.replace(/[$M]/g, ""))) *
                                1000 *
                                100,
                            )}
                          />
                          <div className="text-xs text-muted-foreground mt-1">
                            {initiative.spent} of {initiative.budget}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm font-medium mb-1">Key Performance Indicators</div>
                          <div className="space-y-1">
                            {initiative.kpis.map((kpi, index) => (
                              <div key={index} className="text-xs text-muted-foreground">
                                • {kpi}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="competitive-analysis" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Competitive Benchmarking</CardTitle>
                <CardDescription>How we compare against industry standards and competitors</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {competitiveAnalysis.map((item) => (
                    <div key={item.metric} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{item.metric}</h4>
                        <Badge variant="default" className="bg-green-100 text-green-800">
                          Industry Leading
                        </Badge>
                      </div>
                      <div className="grid gap-4 md:grid-cols-3">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">{item.ourValue}</div>
                          <div className="text-sm text-muted-foreground">Our Performance</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-gray-600">{item.industry}</div>
                          <div className="text-sm text-muted-foreground">Industry Average</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">{item.improvement}</div>
                          <div className="text-sm text-muted-foreground">Our Advantage</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="risk-assessment" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Risk Matrix</CardTitle>
                  <CardDescription>Current risk assessment across key areas</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <div>
                          <div className="font-medium">Security Posture</div>
                          <div className="text-sm text-muted-foreground">All systems secure</div>
                        </div>
                      </div>
                      <Badge variant="secondary">Low Risk</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <div>
                          <div className="font-medium">Compliance Status</div>
                          <div className="text-sm text-muted-foreground">94% compliance score</div>
                        </div>
                      </div>
                      <Badge variant="secondary">Low Risk</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <AlertTriangle className="h-5 w-5 text-yellow-500" />
                        <div>
                          <div className="font-medium">Capacity Planning</div>
                          <div className="text-sm text-muted-foreground">Traffic growth monitoring</div>
                        </div>
                      </div>
                      <Badge variant="default">Medium Risk</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <div>
                          <div className="font-medium">Business Continuity</div>
                          <div className="text-sm text-muted-foreground">99.97% uptime achieved</div>
                        </div>
                      </div>
                      <Badge variant="secondary">Low Risk</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Mitigation Actions</CardTitle>
                  <CardDescription>Proactive measures and recommendations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <div className="font-medium text-blue-900">Capacity Scaling</div>
                      <div className="text-sm text-blue-800 mt-1">
                        Implement auto-scaling policies for anticipated Q1 traffic growth
                      </div>
                      <div className="text-xs text-blue-600 mt-2">Priority: High • Due: Jan 31</div>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <div className="font-medium text-green-900">Security Audit</div>
                      <div className="text-sm text-green-800 mt-1">
                        Quarterly security assessment completed with no critical findings
                      </div>
                      <div className="text-xs text-green-600 mt-2">Status: Completed • Next: Apr 2024</div>
                    </div>
                    <div className="p-3 bg-yellow-50 rounded-lg">
                      <div className="font-medium text-yellow-900">Compliance Review</div>
                      <div className="text-sm text-yellow-800 mt-1">
                        Address remaining SOC 2 compliance gaps before audit
                      </div>
                      <div className="text-xs text-yellow-600 mt-2">Priority: Medium • Due: Mar 15</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SidebarInset>
  )
}
