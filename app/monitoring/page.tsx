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
import { useMemo } from 'react' // import useMemo

// Placeholder components to fix build errors
const SystemOverview = (_props: any) => <div />
const InfrastructureMetrics = (_props: any) => <div />
const ServiceStatus = (_props: any) => <div />
const RecentAlerts = (_props: any) => <div />
const SystemLogs = (_props: any) => <div />

// Dummy InfrastructureMetrics component for demonstration
function InfrastructureMetricsComponent({ infrastructureMetrics }: { infrastructureMetrics: Array<any> }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {infrastructureMetrics.map((metric, idx) => (
        <Card key={idx}>
          <CardHeader className="flex flex-row items-center gap-4">
            <metric.icon className="h-6 w-6 text-primary" />
            <div>
              <CardTitle>{metric.name}</CardTitle>
              <CardDescription>
                {metric.value}% used (Threshold: {metric.threshold}%)
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <Progress value={metric.value} className="h-2" />
            <div className="mt-2 flex items-center gap-2">
              <Badge variant={metric.status === "normal" ? "default" : "outline"}>
                {metric.status.charAt(0).toUpperCase() + metric.status.slice(1)}
              </Badge>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

// ServiceStatus component implementation
function ServiceStatusComponent({ serviceStatus }: { serviceStatus: Array<any> }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {serviceStatus.map((service, idx) => (
        <Card key={idx}>
          <CardHeader>
            <CardTitle>{service.name}</CardTitle>
            <CardDescription>
              Uptime: {service.uptime} | Response Time: {service.responseTime}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Badge variant={service.status === "operational" ? "default" : "destructive"}>
                {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
              </Badge>
              <span className="text-xs text-muted-foreground ml-2">
                Last Incident: {service.lastIncident}
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

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
            <InfrastructureMetricsComponent infrastructureMetrics={infrastructureMetrics} />
          </TabsContent>

          <TabsContent value="services" className="space-y-4">
            <ServiceStatusComponent serviceStatus={serviceStatus} />
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
