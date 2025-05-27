import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
import { Activity, ArrowDown, ArrowUp, BarChart3, Download, Globe, Users, Zap } from "lucide-react"

const metrics = [
  {
    title: "Total Requests",
    value: "1,234,567",
    change: "+12.5%",
    trend: "up",
    icon: Activity,
  },
  {
    title: "Unique Consumers",
    value: "2,847",
    change: "+8.2%",
    trend: "up",
    icon: Users,
  },
  {
    title: "Avg Response Time",
    value: "142ms",
    change: "-5.1%",
    trend: "down",
    icon: Zap,
  },
  {
    title: "Error Rate",
    value: "0.12%",
    change: "-2.3%",
    trend: "down",
    icon: BarChart3,
  },
]

const topAPIs = [
  {
    name: "User Management API",
    requests: "456,789",
    percentage: 37,
    responseTime: "98ms",
    errorRate: "0.05%",
  },
  {
    name: "Payment Processing API",
    requests: "321,456",
    percentage: 26,
    responseTime: "156ms",
    errorRate: "0.08%",
  },
  {
    name: "Notification Service API",
    requests: "234,567",
    percentage: 19,
    responseTime: "203ms",
    errorRate: "0.15%",
  },
  {
    name: "Inventory Management API",
    requests: "123,456",
    percentage: 10,
    responseTime: "134ms",
    errorRate: "0.03%",
  },
  {
    name: "Analytics API",
    requests: "98,765",
    percentage: 8,
    responseTime: "267ms",
    errorRate: "0.22%",
  },
]

const recentActivity = [
  {
    api: "User Management API",
    event: "High traffic spike detected",
    time: "2 minutes ago",
    type: "warning",
  },
  {
    api: "Payment Processing API",
    event: "New version v1.8.4 deployed",
    time: "15 minutes ago",
    type: "success",
  },
  {
    api: "Notification Service API",
    event: "Rate limit threshold reached",
    time: "1 hour ago",
    type: "error",
  },
  {
    api: "Analytics API",
    event: "Performance optimization completed",
    time: "3 hours ago",
    type: "info",
  },
]

export default function AnalyticsPage() {
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
              <BreadcrumbLink href="/monitoring">Monitoring</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Analytics</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">API Analytics</h1>
            <p className="text-muted-foreground">Monitor API performance, usage patterns, and system health</p>
          </div>
          <div className="flex items-center space-x-2">
            <Select defaultValue="24h">
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1h">Last Hour</SelectItem>
                <SelectItem value="24h">Last 24 Hours</SelectItem>
                <SelectItem value="7d">Last 7 Days</SelectItem>
                <SelectItem value="30d">Last 30 Days</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <Card key={metric.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                <metric.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  {metric.trend === "up" ? (
                    <ArrowUp className="mr-1 h-3 w-3 text-green-600" />
                  ) : (
                    <ArrowDown className="mr-1 h-3 w-3 text-green-600" />
                  )}
                  <span className="text-green-600">{metric.change}</span> from last period
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="errors">Errors</TabsTrigger>
            <TabsTrigger value="consumers">Consumers</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              {/* Top APIs */}
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Top APIs by Usage</CardTitle>
                  <CardDescription>Most requested APIs in the last 24 hours</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topAPIs.map((api) => (
                      <div key={api.name} className="flex items-center justify-between space-x-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                            <Globe className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-sm font-medium leading-none">{api.name}</p>
                            <p className="text-sm text-muted-foreground">{api.requests} requests</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="text-right">
                            <Progress value={api.percentage} className="w-16" />
                            <p className="text-xs text-muted-foreground">{api.percentage}%</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium">{api.responseTime}</p>
                            <p className="text-xs text-muted-foreground">avg time</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium">{api.errorRate}</p>
                            <p className="text-xs text-muted-foreground">error rate</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Latest events and system notifications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full">
                          <div
                            className={`h-2 w-2 rounded-full ${
                              activity.type === "success"
                                ? "bg-green-500"
                                : activity.type === "warning"
                                  ? "bg-yellow-500"
                                  : activity.type === "error"
                                    ? "bg-red-500"
                                    : "bg-blue-500"
                            }`}
                          />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">{activity.api}</p>
                          <p className="text-sm text-muted-foreground">{activity.event}</p>
                          <p className="text-xs text-muted-foreground">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="performance" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Performance Metrics</CardTitle>
                <CardDescription>Response times, throughput, and system performance indicators</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] flex items-center justify-center text-muted-foreground">
                  Performance charts and metrics would be displayed here
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="errors" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Error Analysis</CardTitle>
                <CardDescription>Error rates, types, and troubleshooting information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] flex items-center justify-center text-muted-foreground">
                  Error analysis and debugging tools would be displayed here
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="consumers" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Consumer Analytics</CardTitle>
                <CardDescription>API consumer behavior, usage patterns, and demographics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] flex items-center justify-center text-muted-foreground">
                  Consumer analytics and usage patterns would be displayed here
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </SidebarInset>
  )
}
