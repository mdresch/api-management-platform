"use client"

import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
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
import { Shield, AlertTriangle, CheckCircle, Eye, FileText, Settings, Scan } from "lucide-react"

const securityMetrics = [
  {
    title: "Security Score",
    value: "94/100",
    status: "excellent",
    icon: Shield,
    description: "Overall security posture",
  },
  {
    title: "Active Threats",
    value: "0",
    status: "good",
    icon: AlertTriangle,
    description: "No active security threats",
  },
  {
    title: "Compliance Status",
    value: "98%",
    status: "good",
    icon: CheckCircle,
    description: "Regulatory compliance",
  },
  {
    title: "Vulnerability Scan",
    value: "Clean",
    status: "good",
    icon: Scan,
    description: "Last scan: 2 hours ago",
  },
]

const complianceStandards = [
  {
    name: "GDPR",
    status: "Compliant",
    score: 98,
    lastAudit: "2024-01-10",
    nextAudit: "2024-04-10",
  },
  {
    name: "SOC 2 Type II",
    status: "Compliant",
    score: 96,
    lastAudit: "2024-01-05",
    nextAudit: "2024-07-05",
  },
  {
    name: "ISO 27001",
    status: "Compliant",
    score: 94,
    lastAudit: "2023-12-15",
    nextAudit: "2024-06-15",
  },
  {
    name: "PCI DSS",
    status: "In Progress",
    score: 87,
    lastAudit: "2024-01-12",
    nextAudit: "2024-03-12",
  },
]

const securityPolicies = [
  {
    id: "1",
    name: "Password Policy",
    description: "Minimum 12 characters, complexity requirements",
    status: "Active",
    compliance: 100,
    lastUpdated: "2024-01-10",
  },
  {
    id: "2",
    name: "API Access Control",
    description: "Role-based access control for all API endpoints",
    status: "Active",
    compliance: 98,
    lastUpdated: "2024-01-08",
  },
  {
    id: "3",
    name: "Data Encryption",
    description: "AES-256 encryption for data at rest and in transit",
    status: "Active",
    compliance: 100,
    lastUpdated: "2024-01-05",
  },
  {
    id: "4",
    name: "Audit Logging",
    description: "Comprehensive logging of all security events",
    status: "Active",
    compliance: 95,
    lastUpdated: "2024-01-12",
  },
]

const securityEvents = [
  {
    id: "1",
    type: "info",
    title: "Successful MFA setup",
    description: "User john.doe@company.com enabled two-factor authentication",
    timestamp: "2024-01-15 14:30",
    severity: "Low",
  },
  {
    id: "2",
    type: "warning",
    title: "Multiple failed login attempts",
    description: "5 failed login attempts from IP 192.168.1.100",
    timestamp: "2024-01-15 13:45",
    severity: "Medium",
  },
  {
    id: "3",
    type: "success",
    title: "Security scan completed",
    description: "Automated vulnerability scan completed with no issues",
    timestamp: "2024-01-15 12:00",
    severity: "Low",
  },
]

const accessControls = [
  {
    category: "Authentication",
    controls: [
      { name: "Multi-Factor Authentication", status: "Enabled", coverage: "100%" },
      { name: "Single Sign-On (SSO)", status: "Enabled", coverage: "95%" },
      { name: "Password Complexity", status: "Enforced", coverage: "100%" },
      { name: "Session Management", status: "Active", coverage: "100%" },
    ],
  },
  {
    category: "Authorization",
    controls: [
      { name: "Role-Based Access Control", status: "Active", coverage: "100%" },
      { name: "API Key Management", status: "Active", coverage: "100%" },
      { name: "Resource Permissions", status: "Configured", coverage: "98%" },
      { name: "Principle of Least Privilege", status: "Enforced", coverage: "95%" },
    ],
  },
  {
    category: "Data Protection",
    controls: [
      { name: "Encryption at Rest", status: "Enabled", coverage: "100%" },
      { name: "Encryption in Transit", status: "Enabled", coverage: "100%" },
      { name: "Data Masking", status: "Active", coverage: "90%" },
      { name: "Backup Encryption", status: "Enabled", coverage: "100%" },
    ],
  },
]

export default function SecurityPage() {
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
              <BreadcrumbPage>Security</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Security Center</h1>
            <p className="text-muted-foreground">Comprehensive security monitoring and compliance management</p>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline">
              <Scan className="mr-2 h-4 w-4" />
              Run Security Scan
            </Button>
            <Button variant="outline">
              <Settings className="mr-2 h-4 w-4" />
              Security Settings
            </Button>
          </div>
        </div>

        {/* Security Overview */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {securityMetrics.map((metric) => (
            <Card key={metric.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                <metric.icon
                  className={`h-4 w-4 ${
                    metric.status === "excellent" || metric.status === "good"
                      ? "text-green-600"
                      : metric.status === "warning"
                        ? "text-yellow-600"
                        : "text-red-600"
                  }`}
                />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <p className="text-xs text-muted-foreground mt-1">{metric.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Security Overview</TabsTrigger>
            <TabsTrigger value="compliance">Compliance</TabsTrigger>
            <TabsTrigger value="policies">Policies</TabsTrigger>
            <TabsTrigger value="events">Security Events</TabsTrigger>
            <TabsTrigger value="access">Access Controls</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="h-5 w-5" />
                    <span>Security Posture</span>
                  </CardTitle>
                  <CardDescription>Current security status and recommendations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Overall Security Score</span>
                      <span className="text-2xl font-bold text-green-600">94/100</span>
                    </div>
                    <Progress value={94} className="h-2" />
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span>Authentication & Authorization</span>
                        <Badge variant="default">Excellent</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Data Protection</span>
                        <Badge variant="default">Excellent</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Network Security</span>
                        <Badge variant="secondary">Good</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Monitoring & Logging</span>
                        <Badge variant="default">Excellent</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <AlertTriangle className="h-5 w-5" />
                    <span>Security Recommendations</span>
                  </CardTitle>
                  <CardDescription>Actions to improve your security posture</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-sm">Enable API Rate Limiting</span>
                        <Badge variant="secondary">Medium Priority</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Implement rate limiting on public APIs to prevent abuse
                      </p>
                    </div>
                    <div className="border rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-sm">Update SSL Certificates</span>
                        <Badge variant="destructive">High Priority</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">3 SSL certificates expire within 30 days</p>
                    </div>
                    <div className="border rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-sm">Review User Permissions</span>
                        <Badge variant="secondary">Low Priority</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">Quarterly review of user access permissions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="compliance" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Compliance Standards</CardTitle>
                <CardDescription>Regulatory compliance status and audit information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {complianceStandards.map((standard) => (
                    <div key={standard.name} className="border rounded-lg p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                            <FileText className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-medium">{standard.name}</h3>
                            <p className="text-sm text-muted-foreground">Last audit: {standard.lastAudit}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge variant={standard.status === "Compliant" ? "default" : "secondary"}>
                            {standard.status}
                          </Badge>
                          <div className="text-sm font-medium mt-1">{standard.score}%</div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Compliance Score</span>
                          <span>{standard.score}%</span>
                        </div>
                        <Progress value={standard.score} />
                        <div className="text-xs text-muted-foreground">Next audit: {standard.nextAudit}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="policies" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Security Policies</CardTitle>
                <CardDescription>Active security policies and their compliance status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {securityPolicies.map((policy) => (
                    <div key={policy.id} className="border rounded-lg p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">{policy.name}</h3>
                          <p className="text-sm text-muted-foreground">{policy.description}</p>
                        </div>
                        <div className="text-right">
                          <Badge variant="default">{policy.status}</Badge>
                          <div className="text-sm font-medium mt-1">{policy.compliance}%</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>Last updated: {policy.lastUpdated}</span>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="mr-2 h-3 w-3" />
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            <Settings className="mr-2 h-3 w-3" />
                            Edit
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="events" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Security Events</CardTitle>
                <CardDescription>Recent security events and audit logs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {securityEvents.map((event) => (
                    <div key={event.id} className="flex items-start space-x-4 p-4 border rounded-lg">
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-full ${
                          event.type === "warning"
                            ? "bg-yellow-100 text-yellow-600"
                            : event.type === "success"
                              ? "bg-green-100 text-green-600"
                              : "bg-blue-100 text-blue-600"
                        }`}
                      >
                        {event.type === "warning" ? (
                          <AlertTriangle className="h-4 w-4" />
                        ) : event.type === "success" ? (
                          <CheckCircle className="h-4 w-4" />
                        ) : (
                          <Shield className="h-4 w-4" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">{event.title}</h4>
                          <div className="flex items-center space-x-2">
                            <Badge
                              variant={
                                event.severity === "High"
                                  ? "destructive"
                                  : event.severity === "Medium"
                                    ? "default"
                                    : "secondary"
                              }
                              className="text-xs"
                            >
                              {event.severity}
                            </Badge>
                            <span className="text-xs text-muted-foreground">{event.timestamp}</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="access" className="space-y-4">
            <div className="space-y-4">
              {accessControls.map((category) => (
                <Card key={category.category}>
                  <CardHeader>
                    <CardTitle>{category.category}</CardTitle>
                    <CardDescription>Security controls and their implementation status</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {category.controls.map((control) => (
                        <div key={control.name} className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <div className="font-medium">{control.name}</div>
                            <div className="text-sm text-muted-foreground">Coverage: {control.coverage}</div>
                          </div>
                          <Badge variant="default">{control.status}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SidebarInset>
  )
}
