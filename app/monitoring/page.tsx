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
  Activity,
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  TrendingDown,
  Zap,
  Globe,
  Database,
  Cpu,
  HardDrive,
  Network,
  Settings,
} from "lucide-react"

Network,
  Settings,
} from "lucide-react"
import { useMemo } from 'react' // import useMemo

export default function MonitoringPage() {
  const systemMetrics = useMemo(() => [
    {
      title: "System Health",
      value: "Healthy",
      status: "good",
      icon: CheckCircle,
      description: "All systems operational",
    },
    {
      title: "Active APIs",
      value: "127",
      change: "+3",
      trend: "up",
      icon: Globe,
      description: "APIs currently running",
    },
    {
      title: "Total Requests",
      value: "2.4M",
      change: "+12%",
      trend: "up",
      icon: Activity,
      description: "Requests in last 24h",
    },
    {
      title: "Avg Response Time",
      value: "142ms",
      change: "-8ms",
      trend: "down",
      icon: Zap,
      description: "Average across all APIs",
    },
  ], [])

  const infrastructureMetrics = useMemo(() => [
    {
      name: "CPU Usage",
      value: 68,
      status: "normal",
      threshold: 80,
      icon: Cpu,
    },
    {
      name: "Memory Usage",
      value: 72,
      status: "normal",
      threshold: 85,
      icon: HardDrive,
    },
    {
      name: "Network I/O",
      value: 45,
      status: "good",
      threshold: 70,
      icon: Network,
    },
    {
      name: "Database Load",
      value: 58,
      status: "good",
      threshold: 75,
      icon: Database,
    },
  ], [])

  const recentAlerts = useMemo(() => [
    {
      id: "1",
      type: "warning",
      title: "High CPU usage on API Gateway",
      description: "CPU usage exceeded 80% for 5 minutes",
      timestamp: "2024-01-15 14:30",
      status: "resolved",
    },
    {
      id: "2",
      type: "info",
      title: "New API deployment successful",
      description: "User Management API v2.1.0 deployed successfully",
      timestamp: "2024-01-15 13:45",
      status: "resolved",
    },
    {
      id: "3",
      type: "error",
      title: "Database connection timeout",
      description: "Connection pool exhausted on primary database",
      timestamp: "2024-01-15 12:15",
      status: "investigating",
    },
  ], [])

  const serviceStatus = useMemo(() => [
    {
      name: "API Gateway",
      status: "operational",
      uptime: "99.98%",
      responseTime: "89ms",
      lastIncident: "None",
    },
    {
      name: "Authentication Service",
      status: "operational",
      uptime: "99.99%",
      responseTime: "45ms",
      lastIncident: "None",
    },
    {
      name: "Database Cluster",
      status: "operational",
      uptime: "99.97%",
      responseTime: "12ms",
      lastIncident: "2 days ago",
    },
    {
      name: "Cache Layer",
      status: "degraded",
      uptime: "99.85%",
      responseTime: "156ms",
      lastIncident: "4 hours ago",
    },
  ], [])

  return (
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
  {
    title: "System Health",
    value: "Healthy",
    status: "good",
    icon: CheckCircle,
    description: "All systems operational",
  },
  {
    title: "Active APIs",
    value: "127",
    change: "+3",
    trend: "up",
    icon: Globe,
    description: "APIs currently running",
  },
  {
    title: "Total Requests",
    value: "2.4M",
    change: "+12%",
    trend: "up",
    icon: Activity,
    description: "Requests in last 24h",
  },
  {
    title: "Avg Response Time",
    value: "142ms",
    change: "-8ms",
    trend: "down",
    icon: Zap,
    description: "Average across all APIs",
  },
]

const infrastructureMetrics = [
  {
    name: "CPU Usage",
    value: 68,
    status: "normal",
    threshold: 80,
    icon: Cpu,
  },
  {
    name: "Memory Usage",
    value: 72,
    status: "normal",
    threshold: 85,
    icon: HardDrive,
  },
  {
    name: "Network I/O",
    value: 45,
    status: "good",
    threshold: 70,
    icon: Network,
  },
  {
    name: "Database Load",
    value: 58,
    status: "good",
    threshold: 75,
    icon: Database,
  },
]

const recentAlerts = [
  {
    id: "1",
    type: "warning",
    title: "High CPU usage on API Gateway",
    description: "CPU usage exceeded 80% for 5 minutes",
    timestamp: "2024-01-15 14:30",
    status: "resolved",
  },
  {
    id: "2",
    type: "info",
    title: "New API deployment successful",
    description: "User Management API v2.1.0 deployed successfully",
    timestamp: "2024-01-15 13:45",
    status: "resolved",
  },
  {
    id: "3",
    type: "error",
    title: "Database connection timeout",
    description: "Connection pool exhausted on primary database",
    timestamp: "2024-01-15 12:15",
    status: "investigating",
  },
]

const serviceStatus = [
  {
    name: "API Gateway",
    status: "operational",
    uptime: "99.98%",
    responseTime: "89ms",
    lastIncident: "None",
  },
  {
    name: "Authentication Service",
    status: "operational",
    uptime: "99.99%",
    responseTime: "45ms",
    lastIncident: "None",
  },
  {
    name: "Database Cluster",
    status: "operational",
    uptime: "99.97%",
    responseTime: "12ms",
    lastIncident: "2 days ago",
  },
  {
    name: "Cache Layer",
    status: "degraded",
    uptime: "99.85%",
    responseTime: "156ms",
    lastIncident: "4 hours ago",
  },
]

// Import statements for new components
import SystemOverview from '@/components/monitoring/SystemOverview'
import InfrastructureMetrics from '@/components/monitoring/InfrastructureMetrics'
import ServiceStatus from '@/components/monitoring/ServiceStatus'
import RecentAlerts from '@/components/monitoring/RecentAlerts'
import SystemLogs from '@/components/monitoring/SystemLogs'

export default function MonitoringPage() {
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
              <BreadcrumbPage>Monitoring</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">System Monitoring</h1>
            <p className="text-muted-foreground">Real-time monitoring and alerting for your API infrastructure</p>
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
              <Settings className="mr-2 h-4 w-4" />
              Configure Alerts
            </Button>
          </div>
        </div>

        <SystemOverview systemMetrics={systemMetrics} />

        <Tabs defaultValue="infrastructure" className="space-y-4">
          <TabsList>
            <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
            <TabsTrigger value="services">Service Status</TabsTrigger>
            <TabsTrigger value="alerts">Alerts & Incidents</TabsTrigger>
            <TabsTrigger value="logs">System Logs</TabsTrigger>
          </TabsList>

          <TabsContent value="infrastructure" className="space-y-4">
            <InfrastructureMetrics infrastructureMetrics={infrastructureMetrics} />
          </TabsContent>

          <TabsContent value="services" className="space-y-4">
            <ServiceStatus serviceStatus={serviceStatus} />
          </TabsContent>

          <TabsContent value="alerts" className="space-y-4">
            <RecentAlerts recentAlerts={recentAlerts} />
          </TabsContent>

          <TabsContent value="logs" className="space-y-4">
            <SystemLogs />
          </TabsContent>
        </Tabs>
      </div>
    </SidebarInset>
  )
}
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
              <BreadcrumbPage>Monitoring</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">System Monitoring</h1>
            <p className="text-muted-foreground">Real-time monitoring and alerting for your API infrastructure</p>
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
              <Settings className="mr-2 h-4 w-4" />
              Configure Alerts
            </Button>
          </div>
        </div>

        {/* System Overview */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {systemMetrics.map((metric) => (
            <Card key={metric.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                <metric.icon
                  className={`h-4 w-4 ${
                    metric.status === "good" || metric.trend === "up"
                      ? "text-green-600"
                      : metric.status === "warning"
                        ? "text-yellow-600"
                        : "text-muted-foreground"
                  }`}
                />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                {metric.change && (
                  <p className="text-xs text-muted-foreground flex items-center">
                    {metric.trend === "up" ? (
                      <TrendingUp className="mr-1 h-3 w-3 text-green-600" />
                    ) : (
                      <TrendingDown className="mr-1 h-3 w-3 text-green-600" />
                    )}
                    <span className="text-green-600">{metric.change}</span> from last period
                  </p>
                )}
                <p className="text-xs text-muted-foreground mt-1">{metric.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="infrastructure" className="space-y-4">
          <TabsList>
            <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
            <TabsTrigger value="services">Service Status</TabsTrigger>
            <TabsTrigger value="alerts">Alerts & Incidents</TabsTrigger>
            <TabsTrigger value="logs">System Logs</TabsTrigger>
          </TabsList>

          <TabsContent value="infrastructure" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Infrastructure Metrics</CardTitle>
                <CardDescription>Real-time system resource utilization</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  {infrastructureMetrics.map((metric) => (
                    <div key={metric.name} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <metric.icon className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">{metric.name}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-medium">{metric.value}%</span>
                          <Badge
                            variant={
                              metric.status === "good"
                                ? "secondary"
                                : metric.status === "normal"
                                  ? "default"
                                  : "destructive"
                            }
                          >
                            {metric.status}
                          </Badge>
                        </div>
                      </div>
                      <Progress value={metric.value} className="h-2" />
                      <div className="text-xs text-muted-foreground">Threshold: {metric.threshold}%</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="services" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Service Status</CardTitle>
                <CardDescription>Current status of all critical services</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {serviceStatus.map((service) => (
                    <div key={service.name} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`h-3 w-3 rounded-full ${
                            service.status === "operational"
                              ? "bg-green-500"
                              : service.status === "degraded"
                                ? "bg-yellow-500"
                                : "bg-red-500"
                          }`}
                        />
                        <div>
                          <div className="font-medium">{service.name}</div>
                          <div className="text-sm text-muted-foreground">
                            Uptime: {service.uptime} • Response: {service.responseTime}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge
                          variant={
                            service.status === "operational"
                              ? "default"
                              : service.status === "degraded"
                                ? "secondary"
                                : "destructive"
                          }
                        >
                          {service.status}
                        </Badge>
                        <div className="text-xs text-muted-foreground mt-1">Last incident: {service.lastIncident}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="alerts" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Alerts</CardTitle>
                <CardDescription>System alerts and incident notifications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentAlerts.map((alert) => (
                    <div key={alert.id} className="flex items-start space-x-4 p-4 border rounded-lg">
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-full ${
                          alert.type === "error"
                            ? "bg-red-100 text-red-600"
                            : alert.type === "warning"
                              ? "bg-yellow-100 text-yellow-600"
                              : "bg-blue-100 text-blue-600"
                        }`}
                      >
                        {alert.type === "error" ? (
                          <AlertTriangle className="h-4 w-4" />
                        ) : alert.type === "warning" ? (
                          <AlertTriangle className="h-4 w-4" />
                        ) : (
                          <CheckCircle className="h-4 w-4" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">{alert.title}</h4>
                          <div className="flex items-center space-x-2">
                            <Badge
                              variant={alert.status === "resolved" ? "secondary" : "destructive"}
                              className="text-xs"
                            >
                              {alert.status}
                            </Badge>
                            <span className="text-xs text-muted-foreground">{alert.timestamp}</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{alert.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="logs" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>System Logs</CardTitle>
                <CardDescription>Real-time system and application logs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] flex items-center justify-center text-muted-foreground border rounded-md">
                  Real-time log streaming interface would be displayed here
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </SidebarInset>
  )
}
