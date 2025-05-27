"use client"

import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Plus,
  Save,
  Download,
  Upload,
  Eye,
  Code2,
  FileText,
  Settings,
  Trash2,
  Copy,
  Play,
  CheckCircle,
  AlertTriangle,
  Zap,
} from "lucide-react"
import { useState } from "react"

const httpMethods = ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD", "OPTIONS"]

const sampleEndpoints = [
  {
    id: "1",
    method: "GET",
    path: "/api/v1/users",
    summary: "Get all users",
    description: "Retrieve a list of all users with pagination support",
    parameters: ["limit", "offset", "search"],
    responses: ["200", "400", "401", "500"],
    tags: ["Users"],
  },
  {
    id: "2",
    method: "POST",
    path: "/api/v1/users",
    summary: "Create user",
    description: "Create a new user account",
    parameters: [],
    responses: ["201", "400", "409", "500"],
    tags: ["Users"],
  },
  {
    id: "3",
    method: "GET",
    path: "/api/v1/users/{id}",
    summary: "Get user by ID",
    description: "Retrieve a specific user by their unique identifier",
    parameters: ["id"],
    responses: ["200", "404", "500"],
    tags: ["Users"],
  },
]

const validationIssues = [
  {
    type: "error",
    message: "Missing required field 'description' in POST /api/v1/users",
    line: 45,
  },
  {
    type: "warning",
    message: "Response schema for 400 error is not defined",
    line: 67,
  },
  {
    type: "info",
    message: "Consider adding rate limiting headers to responses",
    line: 23,
  },
]

export default function DesignStudioPage() {
  const [selectedEndpoint, setSelectedEndpoint] = useState(sampleEndpoints[0])
  const [apiInfo, setApiInfo] = useState({
    title: "User Management API",
    version: "1.0.0",
    description: "Comprehensive user management and authentication API",
    baseUrl: "https://api.example.com",
  })

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
              <BreadcrumbPage>API Design Studio</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">API Design Studio</h1>
            <p className="text-muted-foreground">Visual API builder with OpenAPI/Swagger integration</p>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline">
              <Upload className="mr-2 h-4 w-4" />
              Import OpenAPI
            </Button>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button variant="outline">
              <Eye className="mr-2 h-4 w-4" />
              Preview
            </Button>
            <Button>
              <Save className="mr-2 h-4 w-4" />
              Save API
            </Button>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-12">
          {/* Left Panel - API Structure */}
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle className="text-lg">API Structure</CardTitle>
              <CardDescription>Organize your endpoints and schemas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* API Info */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium">API Information</Label>
                  <div className="space-y-2">
                    <Input
                      placeholder="API Title"
                      value={apiInfo.title}
                      onChange={(e) => setApiInfo({ ...apiInfo, title: e.target.value })}
                    />
                    <Input
                      placeholder="Version"
                      value={apiInfo.version}
                      onChange={(e) => setApiInfo({ ...apiInfo, version: e.target.value })}
                    />
                    <Input
                      placeholder="Base URL"
                      value={apiInfo.baseUrl}
                      onChange={(e) => setApiInfo({ ...apiInfo, baseUrl: e.target.value })}
                    />
                  </div>
                </div>

                <Separator />

                {/* Endpoints */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label className="text-sm font-medium">Endpoints</Label>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="sm" variant="outline">
                          <Plus className="h-3 w-3" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Add New Endpoint</DialogTitle>
                          <DialogDescription>Create a new API endpoint with method and path</DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="method" className="text-right">
                              Method
                            </Label>
                            <Select>
                              <SelectTrigger className="col-span-3">
                                <SelectValue placeholder="Select method" />
                              </SelectTrigger>
                              <SelectContent>
                                {httpMethods.map((method) => (
                                  <SelectItem key={method} value={method}>
                                    {method}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="path" className="text-right">
                              Path
                            </Label>
                            <Input id="path" placeholder="/api/v1/resource" className="col-span-3" />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button type="submit">Add Endpoint</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-1">
                      {sampleEndpoints.map((endpoint) => (
                        <div
                          key={endpoint.id}
                          className={`flex items-center space-x-2 p-2 rounded-md cursor-pointer hover:bg-muted ${
                            selectedEndpoint.id === endpoint.id ? "bg-muted" : ""
                          }`}
                          onClick={() => setSelectedEndpoint(endpoint)}
                        >
                          <Badge
                            variant={
                              endpoint.method === "GET"
                                ? "default"
                                : endpoint.method === "POST"
                                  ? "secondary"
                                  : "outline"
                            }
                            className="text-xs"
                          >
                            {endpoint.method}
                          </Badge>
                          <span className="text-sm font-mono truncate">{endpoint.path}</span>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Center Panel - Endpoint Editor */}
          <Card className="lg:col-span-6">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">Endpoint Editor</CardTitle>
                  <CardDescription>Configure endpoint details and specifications</CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">{selectedEndpoint.method}</Badge>
                  <code className="text-sm">{selectedEndpoint.path}</code>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="general" className="space-y-4">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="general">General</TabsTrigger>
                  <TabsTrigger value="parameters">Parameters</TabsTrigger>
                  <TabsTrigger value="responses">Responses</TabsTrigger>
                  <TabsTrigger value="security">Security</TabsTrigger>
                </TabsList>

                <TabsContent value="general" className="space-y-4">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="summary">Summary</Label>
                      <Input
                        id="summary"
                        placeholder="Brief description of the endpoint"
                        defaultValue={selectedEndpoint.summary}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        placeholder="Detailed description of the endpoint functionality"
                        defaultValue={selectedEndpoint.description}
                        rows={3}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="tags">Tags</Label>
                      <Input
                        id="tags"
                        placeholder="Comma-separated tags"
                        defaultValue={selectedEndpoint.tags.join(", ")}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="operationId">Operation ID</Label>
                      <Input id="operationId" placeholder="Unique operation identifier" />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="parameters" className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label className="text-sm font-medium">Parameters</Label>
                    <Button size="sm" variant="outline">
                      <Plus className="mr-2 h-3 w-3" />
                      Add Parameter
                    </Button>
                  </div>
                  <div className="space-y-2">
                    {selectedEndpoint.parameters.map((param, index) => (
                      <div key={index} className="flex items-center space-x-2 p-2 border rounded-md">
                        <Badge variant="outline" className="text-xs">
                          path
                        </Badge>
                        <span className="text-sm font-mono">{param}</span>
                        <span className="text-sm text-muted-foreground">string</span>
                        <div className="ml-auto">
                          <Button size="sm" variant="ghost">
                            <Settings className="h-3 w-3" />
                          </Button>
                          <Button size="sm" variant="ghost">
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="responses" className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label className="text-sm font-medium">Responses</Label>
                    <Button size="sm" variant="outline">
                      <Plus className="mr-2 h-3 w-3" />
                      Add Response
                    </Button>
                  </div>
                  <div className="space-y-2">
                    {selectedEndpoint.responses.map((response, index) => (
                      <div key={index} className="flex items-center space-x-2 p-2 border rounded-md">
                        <Badge
                          variant={response === "200" || response === "201" ? "default" : "destructive"}
                          className="text-xs"
                        >
                          {response}
                        </Badge>
                        <span className="text-sm">
                          {response === "200"
                            ? "Success"
                            : response === "201"
                              ? "Created"
                              : response === "400"
                                ? "Bad Request"
                                : response === "401"
                                  ? "Unauthorized"
                                  : response === "404"
                                    ? "Not Found"
                                    : "Server Error"}
                        </span>
                        <div className="ml-auto">
                          <Button size="sm" variant="ghost">
                            <Settings className="h-3 w-3" />
                          </Button>
                          <Button size="sm" variant="ghost">
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="security" className="space-y-4">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Authentication</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select authentication method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">None</SelectItem>
                          <SelectItem value="apikey">API Key</SelectItem>
                          <SelectItem value="bearer">Bearer Token</SelectItem>
                          <SelectItem value="oauth2">OAuth 2.0</SelectItem>
                          <SelectItem value="basic">Basic Auth</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Rate Limiting</Label>
                      <div className="grid grid-cols-2 gap-2">
                        <Input placeholder="Requests per minute" />
                        <Input placeholder="Burst limit" />
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Right Panel - Validation & Preview */}
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle className="text-lg">Validation & Tools</CardTitle>
              <CardDescription>Real-time validation and testing tools</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="validation" className="space-y-4">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="validation">Validation</TabsTrigger>
                  <TabsTrigger value="test">Test</TabsTrigger>
                </TabsList>

                <TabsContent value="validation" className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Schema Validation</Label>
                    <div className="space-y-2">
                      {validationIssues.map((issue, index) => (
                        <div
                          key={index}
                          className={`flex items-start space-x-2 p-2 rounded-md text-sm ${
                            issue.type === "error"
                              ? "bg-red-50 text-red-700 border border-red-200"
                              : issue.type === "warning"
                                ? "bg-yellow-50 text-yellow-700 border border-yellow-200"
                                : "bg-blue-50 text-blue-700 border border-blue-200"
                          }`}
                        >
                          {issue.type === "error" && <AlertTriangle className="h-4 w-4 mt-0.5" />}
                          {issue.type === "warning" && <AlertTriangle className="h-4 w-4 mt-0.5" />}
                          {issue.type === "info" && <CheckCircle className="h-4 w-4 mt-0.5" />}
                          <div className="flex-1">
                            <p>{issue.message}</p>
                            <p className="text-xs opacity-70">Line {issue.line}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">AI Suggestions</Label>
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2 p-2 rounded-md text-sm bg-purple-50 text-purple-700 border border-purple-200">
                        <Zap className="h-4 w-4 mt-0.5" />
                        <div className="flex-1">
                          <p>Consider adding pagination parameters to GET endpoints</p>
                          <Button size="sm" variant="outline" className="mt-1 h-6 text-xs">
                            Apply
                          </Button>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2 p-2 rounded-md text-sm bg-purple-50 text-purple-700 border border-purple-200">
                        <Zap className="h-4 w-4 mt-0.5" />
                        <div className="flex-1">
                          <p>Add request/response examples for better documentation</p>
                          <Button size="sm" variant="outline" className="mt-1 h-6 text-xs">
                            Apply
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="test" className="space-y-4">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Quick Test</Label>
                      <Button className="w-full">
                        <Play className="mr-2 h-4 w-4" />
                        Test Endpoint
                      </Button>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Code Generation</Label>
                      <div className="space-y-2">
                        <Button variant="outline" className="w-full justify-start">
                          <Code2 className="mr-2 h-4 w-4" />
                          Generate cURL
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <FileText className="mr-2 h-4 w-4" />
                          Generate SDK
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <Copy className="mr-2 h-4 w-4" />
                          Copy OpenAPI Spec
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </SidebarInset>
  )
}
