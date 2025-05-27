"use client"

import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Play, Save, Copy, Download, Upload, Clock, Zap, Code2, FileText, Settings } from "lucide-react"
import { useState } from "react"

const testSuites = [
  {
    id: "1",
    name: "User Management API Tests",
    description: "Comprehensive test suite for user authentication and profile management",
    status: "Passing",
    tests: 24,
    passed: 24,
    failed: 0,
    lastRun: "2024-01-15 14:30",
    duration: "2.3s",
    coverage: 94,
  },
  {
    id: "2",
    name: "Payment Processing Tests",
    description: "End-to-end testing for payment workflows and transaction handling",
    status: "Failed",
    tests: 18,
    passed: 16,
    failed: 2,
    lastRun: "2024-01-15 14:25",
    duration: "4.1s",
    coverage: 87,
  },
  {
    id: "3",
    name: "Notification Service Tests",
    description: "Multi-channel notification delivery and webhook testing",
    status: "Running",
    tests: 15,
    passed: 12,
    failed: 0,
    lastRun: "2024-01-15 14:35",
    duration: "1.8s",
    coverage: 91,
  },
]

const mockResponses = [
  {
    id: "1",
    name: "Success Response",
    status: 200,
    body: `{
  "id": "user_123",
  "name": "John Doe",
  "email": "john@example.com",
  "created_at": "2024-01-15T14:30:00Z"
}`,
  },
  {
    id: "2",
    name: "Validation Error",
    status: 400,
    body: `{
  "error": "validation_failed",
  "message": "Invalid email format",
  "details": {
    "field": "email",
    "code": "INVALID_FORMAT"
  }
}`,
  },
  {
    id: "3",
    name: "Unauthorized",
    status: 401,
    body: `{
  "error": "unauthorized",
  "message": "Invalid or expired API key"
}`,
  },
]

export default function TestingPage() {
  const [selectedMethod, setSelectedMethod] = useState("GET")
  const [selectedEndpoint, setSelectedEndpoint] = useState("/api/v1/users")
  const [requestBody, setRequestBody] = useState("")
  const [responseData, setResponseData] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const executeTest = async () => {
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setResponseData(`{
  "status": 200,
  "data": {
    "users": [
      {
        "id": "user_123",
        "name": "John Doe",
        "email": "john@example.com",
        "status": "active"
      },
      {
        "id": "user_456",
        "name": "Jane Smith",
        "email": "jane@example.com",
        "status": "active"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 2
    }
  },
  "timestamp": "${new Date().toISOString()}"
}`)
      setIsLoading(false)
    }, 1500)
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
              <BreadcrumbPage>API Testing</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">API Testing Playground</h1>
            <p className="text-muted-foreground">Interactive testing environment for API development and validation</p>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline">
              <Upload className="mr-2 h-4 w-4" />
              Import Collection
            </Button>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export Tests
            </Button>
          </div>
        </div>

        <Tabs defaultValue="playground" className="space-y-4">
          <TabsList>
            <TabsTrigger value="playground">API Playground</TabsTrigger>
            <TabsTrigger value="test-suites">Test Suites</TabsTrigger>
            <TabsTrigger value="mock-server">Mock Server</TabsTrigger>
            <TabsTrigger value="load-testing">Load Testing</TabsTrigger>
          </TabsList>

          <TabsContent value="playground" className="space-y-4">
            <div className="grid gap-4 lg:grid-cols-2">
              {/* Request Panel */}
              <Card>
                <CardHeader>
                  <CardTitle>API Request</CardTitle>
                  <CardDescription>Configure and send API requests for testing</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex space-x-2">
                    <Select value={selectedMethod} onValueChange={setSelectedMethod}>
                      <SelectTrigger className="w-24">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="GET">GET</SelectItem>
                        <SelectItem value="POST">POST</SelectItem>
                        <SelectItem value="PUT">PUT</SelectItem>
                        <SelectItem value="DELETE">DELETE</SelectItem>
                        <SelectItem value="PATCH">PATCH</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input
                      placeholder="Enter API endpoint"
                      value={selectedEndpoint}
                      onChange={(e) => setSelectedEndpoint(e.target.value)}
                      className="flex-1"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Headers</Label>
                    <div className="space-y-2">
                      <div className="flex space-x-2">
                        <Input placeholder="Header name" className="flex-1" />
                        <Input placeholder="Header value" className="flex-1" />
                        <Button size="sm" variant="outline">
                          Add
                        </Button>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Common headers: Authorization, Content-Type, Accept
                      </div>
                    </div>
                  </div>

                  {(selectedMethod === "POST" || selectedMethod === "PUT" || selectedMethod === "PATCH") && (
                    <div className="space-y-2">
                      <Label>Request Body</Label>
                      <Textarea
                        placeholder="Enter JSON request body"
                        value={requestBody}
                        onChange={(e) => setRequestBody(e.target.value)}
                        rows={6}
                        className="font-mono text-sm"
                      />
                    </div>
                  )}

                  <div className="flex space-x-2">
                    <Button onClick={executeTest} disabled={isLoading} className="flex-1">
                      {isLoading ? (
                        <>
                          <Clock className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Play className="mr-2 h-4 w-4" />
                          Send Request
                        </>
                      )}
                    </Button>
                    <Button variant="outline">
                      <Save className="mr-2 h-4 w-4" />
                      Save
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Response Panel */}
              <Card>
                <CardHeader>
                  <CardTitle>API Response</CardTitle>
                  <CardDescription>View response data, headers, and performance metrics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {responseData ? (
                    <>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Badge variant="default">200 OK</Badge>
                          <span className="text-sm text-muted-foreground">142ms</span>
                          <span className="text-sm text-muted-foreground">1.2KB</span>
                        </div>
                        <Button size="sm" variant="outline">
                          <Copy className="mr-2 h-3 w-3" />
                          Copy
                        </Button>
                      </div>
                      <ScrollArea className="h-[300px] w-full rounded-md border p-4">
                        <pre className="text-sm font-mono">{responseData}</pre>
                      </ScrollArea>
                      <div className="grid gap-2 md:grid-cols-3 text-sm">
                        <div>
                          <span className="text-muted-foreground">Status: </span>
                          <span className="font-medium text-green-600">200 OK</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Time: </span>
                          <span className="font-medium">142ms</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Size: </span>
                          <span className="font-medium">1.2KB</span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="h-[300px] flex items-center justify-center text-muted-foreground border rounded-md">
                      Send a request to see the response here
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common testing scenarios and pre-configured requests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-4">
                  <Button variant="outline" className="justify-start">
                    <Code2 className="mr-2 h-4 w-4" />
                    Test Authentication
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <Zap className="mr-2 h-4 w-4" />
                    Performance Test
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <FileText className="mr-2 h-4 w-4" />
                    Validate Schema
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <Settings className="mr-2 h-4 w-4" />
                    Error Scenarios
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="test-suites" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Automated Test Suites</CardTitle>
                <CardDescription>Manage and execute comprehensive API test suites</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {testSuites.map((suite) => (
                    <div key={suite.id} className="border rounded-lg p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">{suite.name}</h3>
                          <p className="text-sm text-muted-foreground">{suite.description}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge
                            variant={
                              suite.status === "Passing"
                                ? "default"
                                : suite.status === "Failed"
                                  ? "destructive"
                                  : "secondary"
                            }
                          >
                            {suite.status}
                          </Badge>
                        </div>
                      </div>
                      <div className="grid gap-2 md:grid-cols-5 text-sm">
                        <div>
                          <span className="text-muted-foreground">Tests: </span>
                          <span className="font-medium">{suite.tests}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Passed: </span>
                          <span className="font-medium text-green-600">{suite.passed}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Failed: </span>
                          <span className="font-medium text-red-600">{suite.failed}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Duration: </span>
                          <span className="font-medium">{suite.duration}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Coverage: </span>
                          <span className="font-medium">{suite.coverage}%</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm">
                          <Play className="mr-2 h-3 w-3" />
                          Run Tests
                        </Button>
                        <Button size="sm" variant="outline">
                          View Results
                        </Button>
                        <Button size="sm" variant="outline">
                          Edit Suite
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="mock-server" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Mock Server</CardTitle>
                <CardDescription>Create mock responses for testing and development</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockResponses.map((mock) => (
                    <div key={mock.id} className="border rounded-lg p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">{mock.name}</h3>
                        <Badge variant={mock.status === 200 ? "default" : "destructive"}>{mock.status}</Badge>
                      </div>
                      <ScrollArea className="h-32 w-full rounded-md border p-3">
                        <pre className="text-xs font-mono">{mock.body}</pre>
                      </ScrollArea>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          Edit
                        </Button>
                        <Button size="sm" variant="outline">
                          <Copy className="mr-2 h-3 w-3" />
                          Copy
                        </Button>
                        <Button size="sm" variant="outline">
                          Test
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="load-testing" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Load Testing</CardTitle>
                <CardDescription>Performance and stress testing for your APIs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] flex items-center justify-center text-muted-foreground">
                  Load testing configuration and results would be displayed here
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </SidebarInset>
  )
}
