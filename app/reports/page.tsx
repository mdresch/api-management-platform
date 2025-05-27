"use client"

import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { FileText, Download, Calendar, TrendingUp, Clock, Plus, Eye, Share, Filter } from "lucide-react"

const reportTemplates = [
  {
    id: "1",
    name: "API Usage Report",
    description: "Comprehensive API usage statistics and trends",
    category: "Analytics",
    frequency: "Weekly",
    lastGenerated: "2024-01-15",
    recipients: 12,
    format: "PDF",
  },
  {
    id: "2",
    name: "Security Compliance Report",
    description: "Security posture and compliance status overview",
    category: "Security",
    frequency: "Monthly",
    lastGenerated: "2024-01-10",
    recipients: 8,
    format: "PDF",
  },
  {
    id: "3",
    name: "Performance Dashboard",
    description: "API performance metrics and SLA compliance",
    category: "Performance",
    frequency: "Daily",
    lastGenerated: "2024-01-15",
    recipients: 15,
    format: "HTML",
  },
  {
    id: "4",
    name: "Revenue Analytics",
    description: "API monetization and revenue tracking",
    category: "Business",
    frequency: "Monthly",
    lastGenerated: "2024-01-12",
    recipients: 6,
    format: "Excel",
  },
]

const recentReports = [
  {
    id: "1",
    name: "Q4 2024 API Performance Summary",
    type: "Performance",
    generatedBy: "System",
    generatedAt: "2024-01-15 09:00",
    size: "2.4 MB",
    downloads: 23,
    status: "Ready",
  },
  {
    id: "2",
    name: "Security Audit Report - January 2024",
    type: "Security",
    generatedBy: "Sarah Chen",
    generatedAt: "2024-01-14 16:30",
    size: "1.8 MB",
    downloads: 15,
    status: "Ready",
  },
  {
    id: "3",
    name: "API Usage Trends - Week 2",
    type: "Analytics",
    generatedBy: "System",
    generatedAt: "2024-01-14 08:00",
    size: "956 KB",
    downloads: 8,
    status: "Ready",
  },
  {
    id: "4",
    name: "Compliance Report - December 2023",
    type: "Compliance",
    generatedBy: "Mike Johnson",
    generatedAt: "2024-01-13 14:15",
    size: "3.2 MB",
    downloads: 31,
    status: "Ready",
  },
]

const reportMetrics = [
  {
    title: "Total Reports",
    value: "1,247",
    change: "+23",
    trend: "up",
    icon: FileText,
    description: "Generated this month",
  },
  {
    title: "Scheduled Reports",
    value: "45",
    change: "+5",
    trend: "up",
    icon: Calendar,
    description: "Active schedules",
  },
  {
    title: "Report Downloads",
    value: "3,892",
    change: "+12%",
    trend: "up",
    icon: Download,
    description: "This month",
  },
  {
    title: "Avg Generation Time",
    value: "2.3s",
    change: "-0.5s",
    trend: "down",
    icon: Clock,
    description: "Performance improvement",
  },
]

const dashboardWidgets = [
  {
    title: "API Request Volume",
    type: "chart",
    description: "Total API requests over time",
    data: "2.4M requests today",
  },
  {
    title: "Response Time Trends",
    type: "chart",
    description: "Average response times by endpoint",
    data: "142ms average",
  },
  {
    title: "Error Rate Analysis",
    type: "chart",
    description: "Error rates and failure patterns",
    data: "0.12% error rate",
  },
  {
    title: "Top APIs by Usage",
    type: "table",
    description: "Most frequently accessed APIs",
    data: "127 active APIs",
  },
]

export default function ReportsPage() {
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
              <BreadcrumbPage>Reports</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Reports & Analytics</h1>
            <p className="text-muted-foreground">Generate, schedule, and manage comprehensive API reports</p>
          </div>
          <div className="flex items-center space-x-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Create Report
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Create New Report</DialogTitle>
                  <DialogDescription>Generate a custom report with specific metrics and filters</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="report-name" className="text-right">
                      Name
                    </Label>
                    <Input id="report-name" placeholder="Report name" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="report-type" className="text-right">
                      Type
                    </Label>
                    <Select>
                      <SelectTrigger className="col-span-3">
                        <SelectValue placeholder="Select report type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="analytics">Analytics</SelectItem>
                        <SelectItem value="performance">Performance</SelectItem>
                        <SelectItem value="security">Security</SelectItem>
                        <SelectItem value="business">Business</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="date-range" className="text-right">
                      Date Range
                    </Label>
                    <Select>
                      <SelectTrigger className="col-span-3">
                        <SelectValue placeholder="Select date range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="7d">Last 7 days</SelectItem>
                        <SelectItem value="30d">Last 30 days</SelectItem>
                        <SelectItem value="90d">Last 90 days</SelectItem>
                        <SelectItem value="custom">Custom range</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Generate Report</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Report Metrics */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {reportMetrics.map((metric) => (
            <Card key={metric.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                <metric.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  {metric.trend === "up" ? (
                    <TrendingUp className="mr-1 h-3 w-3 text-green-600" />
                  ) : (
                    <TrendingUp className="mr-1 h-3 w-3 text-green-600 rotate-180" />
                  )}
                  <span className="text-green-600">{metric.change}</span> {metric.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="templates" className="space-y-4">
          <TabsList>
            <TabsTrigger value="templates">Report Templates</TabsTrigger>
            <TabsTrigger value="recent">Recent Reports</TabsTrigger>
            <TabsTrigger value="scheduled">Scheduled Reports</TabsTrigger>
            <TabsTrigger value="dashboards">Custom Dashboards</TabsTrigger>
          </TabsList>

          <TabsContent value="templates" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Report Templates</CardTitle>
                <CardDescription>Pre-configured report templates for common use cases</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {reportTemplates.map((template) => (
                    <div key={template.id} className="border rounded-lg p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">{template.name}</h3>
                          <p className="text-sm text-muted-foreground">{template.description}</p>
                        </div>
                        <Badge variant="outline">{template.category}</Badge>
                      </div>
                      <div className="grid gap-2 md:grid-cols-2 text-sm">
                        <div>
                          <span className="text-muted-foreground">Frequency: </span>
                          <span className="font-medium">{template.frequency}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Format: </span>
                          <span className="font-medium">{template.format}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Recipients: </span>
                          <span className="font-medium">{template.recipients}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Last run: </span>
                          <span className="font-medium">{template.lastGenerated}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm">Generate Now</Button>
                        <Button size="sm" variant="outline">
                          <Eye className="mr-2 h-3 w-3" />
                          Preview
                        </Button>
                        <Button size="sm" variant="outline">
                          Edit Template
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="recent" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Reports</CardTitle>
                <CardDescription>Recently generated reports available for download</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 mb-4">
                  <Input placeholder="Search reports..." className="flex-1" />
                  <Button variant="outline">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                  </Button>
                </div>
                <div className="space-y-4">
                  {recentReports.map((report) => (
                    <div key={report.id} className="border rounded-lg p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">{report.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            Generated by {report.generatedBy} on {report.generatedAt}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline">{report.type}</Badge>
                          <Badge variant="default">{report.status}</Badge>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>Size: {report.size}</span>
                          <span>Downloads: {report.downloads}</span>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Download className="mr-2 h-3 w-3" />
                            Download
                          </Button>
                          <Button size="sm" variant="outline">
                            <Share className="mr-2 h-3 w-3" />
                            Share
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="scheduled" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Scheduled Reports</CardTitle>
                <CardDescription>Manage automated report generation schedules</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] flex items-center justify-center text-muted-foreground">
                  Scheduled reports management interface would be displayed here
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="dashboards" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Custom Dashboards</CardTitle>
                <CardDescription>Build and customize your own reporting dashboards</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {dashboardWidgets.map((widget, index) => (
                    <div key={index} className="border rounded-lg p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">{widget.title}</h3>
                        <Badge variant="outline">{widget.type}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{widget.description}</p>
                      <div className="text-lg font-semibold">{widget.data}</div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          Configure
                        </Button>
                        <Button size="sm" variant="outline">
                          Add to Dashboard
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </SidebarInset>
  )
}
