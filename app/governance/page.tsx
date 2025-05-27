"use client"

import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
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
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Shield,
  CheckCircle,
  XCircle,
  Clock,
  AlertTriangle,
  Settings,
  Plus,
  Eye,
  Edit,
  Trash2,
  MoreHorizontal,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const policies = [
  {
    id: "1",
    name: "API Naming Convention",
    description: "Enforce consistent naming patterns for API endpoints",
    category: "Standards",
    status: "Active",
    compliance: 87,
    violations: 12,
    lastUpdated: "2024-01-10",
    severity: "Medium",
  },
  {
    id: "2",
    name: "Security Headers Required",
    description: "All APIs must include proper security headers",
    category: "Security",
    status: "Active",
    compliance: 94,
    violations: 3,
    lastUpdated: "2024-01-08",
    severity: "High",
  },
  {
    id: "3",
    name: "Rate Limiting Policy",
    description: "Implement rate limiting on all public APIs",
    category: "Performance",
    status: "Active",
    compliance: 76,
    violations: 18,
    lastUpdated: "2024-01-05",
    severity: "High",
  },
  {
    id: "4",
    name: "Documentation Standards",
    description: "APIs must have complete OpenAPI documentation",
    category: "Documentation",
    status: "Draft",
    compliance: 65,
    violations: 25,
    lastUpdated: "2024-01-12",
    severity: "Medium",
  },
]

const approvalWorkflows = [
  {
    id: "1",
    api: "Customer Data API v2.0",
    requestedBy: "Sarah Chen",
    team: "Customer Success",
    status: "Pending Review",
    stage: "Security Review",
    submittedDate: "2024-01-14",
    reviewers: ["Security Team", "Architecture Team"],
    priority: "High",
  },
  {
    id: "2",
    api: "Analytics API v1.3",
    requestedBy: "Mike Johnson",
    team: "Data Team",
    status: "Approved",
    stage: "Deployment",
    submittedDate: "2024-01-12",
    reviewers: ["Architecture Team"],
    priority: "Medium",
  },
  {
    id: "3",
    api: "Payment Gateway API v3.0",
    requestedBy: "Alex Rodriguez",
    team: "Payments",
    status: "Changes Requested",
    stage: "Architecture Review",
    submittedDate: "2024-01-10",
    reviewers: ["Security Team", "Architecture Team", "Compliance Team"],
    priority: "High",
  },
]

const complianceChecks = [
  {
    category: "GDPR Compliance",
    status: "Compliant",
    score: 92,
    issues: 2,
    lastCheck: "2024-01-15",
  },
  {
    category: "ISO 27001",
    status: "Compliant",
    score: 88,
    issues: 5,
    lastCheck: "2024-01-14",
  },
  {
    category: "SOC 2 Type II",
    status: "Non-Compliant",
    score: 67,
    issues: 12,
    lastCheck: "2024-01-13",
  },
  {
    category: "PCI DSS",
    status: "Compliant",
    score: 95,
    issues: 1,
    lastCheck: "2024-01-15",
  },
]

export default function GovernancePage() {
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
              <BreadcrumbPage>Governance</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">API Governance</h1>
            <p className="text-muted-foreground">Policy enforcement, compliance monitoring, and approval workflows</p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Create Policy
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Create New Policy</DialogTitle>
                <DialogDescription>Define a new governance policy for your APIs</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input id="name" placeholder="Policy name" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="category" className="text-right">
                    Category
                  </Label>
                  <Select>
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="security">Security</SelectItem>
                      <SelectItem value="performance">Performance</SelectItem>
                      <SelectItem value="standards">Standards</SelectItem>
                      <SelectItem value="documentation">Documentation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="description" className="text-right">
                    Description
                  </Label>
                  <Textarea id="description" placeholder="Policy description" className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Create Policy</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Overview Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Policies</CardTitle>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">+3 new this month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Compliance Score</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">87%</div>
              <p className="text-xs text-muted-foreground">+5% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Approvals</CardTitle>
              <Clock className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7</div>
              <p className="text-xs text-muted-foreground">2 high priority</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Policy Violations</CardTitle>
              <AlertTriangle className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">58</div>
              <p className="text-xs text-muted-foreground">-12 from last week</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="policies" className="space-y-4">
          <TabsList>
            <TabsTrigger value="policies">Policies</TabsTrigger>
            <TabsTrigger value="approvals">Approval Workflows</TabsTrigger>
            <TabsTrigger value="compliance">Compliance</TabsTrigger>
            <TabsTrigger value="standards">Standards</TabsTrigger>
          </TabsList>

          <TabsContent value="policies" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Policy Management</CardTitle>
                <CardDescription>Define and enforce governance policies across your API ecosystem</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Policy Name</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Compliance</TableHead>
                      <TableHead>Violations</TableHead>
                      <TableHead>Severity</TableHead>
                      <TableHead>Last Updated</TableHead>
                      <TableHead className="w-[50px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {policies.map((policy) => (
                      <TableRow key={policy.id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{policy.name}</div>
                            <div className="text-sm text-muted-foreground">{policy.description}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{policy.category}</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant={policy.status === "Active" ? "default" : "secondary"}>{policy.status}</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Progress value={policy.compliance} className="w-16" />
                            <span className="text-sm">{policy.compliance}%</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="destructive" className="text-xs">
                            {policy.violations}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              policy.severity === "High"
                                ? "destructive"
                                : policy.severity === "Medium"
                                  ? "default"
                                  : "secondary"
                            }
                          >
                            {policy.severity}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-sm">{policy.lastUpdated}</TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <Eye className="mr-2 h-4 w-4" />
                                View Details
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Edit className="mr-2 h-4 w-4" />
                                Edit Policy
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Settings className="mr-2 h-4 w-4" />
                                Configure
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-red-600">
                                <Trash2 className="mr-2 h-4 w-4" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="approvals" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Approval Workflows</CardTitle>
                <CardDescription>Manage API approval processes and review stages</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>API</TableHead>
                      <TableHead>Requested By</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Current Stage</TableHead>
                      <TableHead>Priority</TableHead>
                      <TableHead>Reviewers</TableHead>
                      <TableHead>Submitted</TableHead>
                      <TableHead className="w-[50px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {approvalWorkflows.map((workflow) => (
                      <TableRow key={workflow.id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{workflow.api}</div>
                            <div className="text-sm text-muted-foreground">{workflow.team}</div>
                          </div>
                        </TableCell>
                        <TableCell>{workflow.requestedBy}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              workflow.status === "Approved"
                                ? "default"
                                : workflow.status === "Pending Review"
                                  ? "secondary"
                                  : "destructive"
                            }
                          >
                            {workflow.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{workflow.stage}</TableCell>
                        <TableCell>
                          <Badge variant={workflow.priority === "High" ? "destructive" : "default"}>
                            {workflow.priority}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">
                            {workflow.reviewers.slice(0, 2).join(", ")}
                            {workflow.reviewers.length > 2 && ` +${workflow.reviewers.length - 2}`}
                          </div>
                        </TableCell>
                        <TableCell className="text-sm">{workflow.submittedDate}</TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <Eye className="mr-2 h-4 w-4" />
                                View Details
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <CheckCircle className="mr-2 h-4 w-4" />
                                Approve
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <XCircle className="mr-2 h-4 w-4" />
                                Request Changes
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="compliance" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Compliance Dashboard</CardTitle>
                <CardDescription>Monitor compliance with industry standards and regulations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {complianceChecks.map((check, index) => (
                    <div key={index} className="border rounded-lg p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{check.category}</span>
                        <Badge variant={check.status === "Compliant" ? "default" : "destructive"}>{check.status}</Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Compliance Score</span>
                          <span>{check.score}%</span>
                        </div>
                        <Progress value={check.score} />
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Issues: </span>
                          <span className="font-medium">{check.issues}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Last Check: </span>
                          <span className="font-medium">{check.lastCheck}</span>
                        </div>
                      </div>
                      <Button size="sm" variant="outline" className="w-full">
                        View Details
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="standards" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>API Standards</CardTitle>
                <CardDescription>Define and enforce organizational API standards</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] flex items-center justify-center text-muted-foreground">
                  API standards configuration and enforcement tools would be displayed here
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </SidebarInset>
  )
}
