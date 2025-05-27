"use client"

import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
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
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Package, Download, Star, Plus, Search, Filter, Settings, Play, Code2, Webhook } from "lucide-react"

const installedPlugins = [
  {
    id: "1",
    name: "Advanced Authentication",
    description: "Multi-factor authentication and SSO integration",
    version: "2.1.0",
    author: "Security Team",
    category: "Security",
    status: "Active",
    downloads: "1.2K",
    rating: 4.8,
    lastUpdated: "2024-01-10",
    apis: ["User Management API", "Payment API"],
  },
  {
    id: "2",
    name: "Custom Rate Limiter",
    description: "Advanced rate limiting with custom rules",
    version: "1.5.2",
    author: "Platform Team",
    category: "Performance",
    status: "Active",
    downloads: "856",
    rating: 4.6,
    lastUpdated: "2024-01-08",
    apis: ["All APIs"],
  },
  {
    id: "3",
    name: "Analytics Enhancer",
    description: "Extended analytics and custom metrics",
    version: "3.0.1",
    author: "Data Team",
    category: "Analytics",
    status: "Inactive",
    downloads: "634",
    rating: 4.4,
    lastUpdated: "2024-01-05",
    apis: ["Analytics API"],
  },
]

const availablePlugins = [
  {
    id: "4",
    name: "GraphQL Gateway",
    description: "Transform REST APIs to GraphQL endpoints",
    version: "1.8.0",
    author: "Community",
    category: "Integration",
    downloads: "2.3K",
    rating: 4.9,
    price: "Free",
    featured: true,
  },
  {
    id: "5",
    name: "API Versioning Manager",
    description: "Automated API versioning and deprecation",
    version: "2.2.1",
    author: "DevOps Team",
    category: "Management",
    downloads: "1.8K",
    rating: 4.7,
    price: "$29/month",
    featured: false,
  },
  {
    id: "6",
    name: "Real-time Notifications",
    description: "WebSocket and Server-Sent Events support",
    version: "1.4.3",
    author: "Community",
    category: "Communication",
    downloads: "1.1K",
    rating: 4.5,
    price: "Free",
    featured: true,
  },
]

const webhookEvents = [
  {
    id: "1",
    event: "api.created",
    description: "Triggered when a new API is created",
    subscribers: 5,
    lastTriggered: "2024-01-15 14:30",
  },
  {
    id: "2",
    event: "api.deprecated",
    description: "Triggered when an API is marked as deprecated",
    subscribers: 3,
    lastTriggered: "2024-01-14 09:15",
  },
  {
    id: "3",
    event: "security.violation",
    description: "Triggered when a security policy is violated",
    subscribers: 8,
    lastTriggered: "2024-01-15 16:45",
  },
]

export default function PluginsPage() {
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
              <BreadcrumbPage>Plugins & Extensions</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Plugins & Extensions</h1>
            <p className="text-muted-foreground">Extend your API platform with custom plugins and integrations</p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Create Plugin
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Create New Plugin</DialogTitle>
                <DialogDescription>Build a custom plugin for your API platform</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input id="name" placeholder="Plugin name" className="col-span-3" />
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
                      <SelectItem value="analytics">Analytics</SelectItem>
                      <SelectItem value="integration">Integration</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="description" className="text-right">
                    Description
                  </Label>
                  <Textarea id="description" placeholder="Plugin description" className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Create Plugin</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Overview Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Installed Plugins</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">3 active, 9 inactive</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Available Plugins</CardTitle>
              <Download className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">47</div>
              <p className="text-xs text-muted-foreground">15 featured plugins</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Webhook Events</CardTitle>
              <Webhook className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">16 active subscribers</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Custom Extensions</CardTitle>
              <Code2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">Built by your team</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="installed" className="space-y-4">
          <TabsList>
            <TabsTrigger value="installed">Installed</TabsTrigger>
            <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
            <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
            <TabsTrigger value="custom">Custom Extensions</TabsTrigger>
          </TabsList>

          <TabsContent value="installed" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Installed Plugins</CardTitle>
                <CardDescription>Manage your currently installed plugins and extensions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {installedPlugins.map((plugin) => (
                    <div key={plugin.id} className="border rounded-lg p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                            <Package className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="font-medium">{plugin.name}</h3>
                            <p className="text-sm text-muted-foreground">{plugin.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline">{plugin.category}</Badge>
                          <Badge variant={plugin.status === "Active" ? "default" : "secondary"}>{plugin.status}</Badge>
                        </div>
                      </div>
                      <div className="grid gap-2 md:grid-cols-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Version: </span>
                          <span className="font-medium">{plugin.version}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Author: </span>
                          <span className="font-medium">{plugin.author}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Downloads: </span>
                          <span className="font-medium">{plugin.downloads}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{plugin.rating}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-muted-foreground">Used by: {plugin.apis.join(", ")}</div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Settings className="mr-2 h-3 w-3" />
                            Configure
                          </Button>
                          <Button size="sm" variant="outline">
                            {plugin.status === "Active" ? "Disable" : "Enable"}
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="marketplace" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Plugin Marketplace</CardTitle>
                <CardDescription>Discover and install plugins from the community</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input placeholder="Search plugins..." className="pl-10" />
                  </div>
                  <Button variant="outline">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                  </Button>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {availablePlugins.map((plugin) => (
                    <Card key={plugin.id} className="cursor-pointer hover:shadow-md transition-shadow">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted">
                              <Package className="h-4 w-4" />
                            </div>
                            <div>
                              <CardTitle className="text-base">{plugin.name}</CardTitle>
                              {plugin.featured && (
                                <Badge variant="secondary" className="text-xs">
                                  Featured
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-sm text-muted-foreground mb-3">{plugin.description}</p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                          <span>by {plugin.author}</span>
                          <div className="flex items-center space-x-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span>{plugin.rating}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="text-sm">
                            <Badge variant="outline">{plugin.category}</Badge>
                            <span className="ml-2 text-muted-foreground">{plugin.downloads} downloads</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium">{plugin.price}</span>
                            <Button size="sm">Install</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="webhooks" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Webhook Events</CardTitle>
                <CardDescription>Configure webhook events for external integrations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {webhookEvents.map((webhook) => (
                    <div key={webhook.id} className="border rounded-lg p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                            <Webhook className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="font-medium font-mono">{webhook.event}</h3>
                            <p className="text-sm text-muted-foreground">{webhook.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline">{webhook.subscribers} subscribers</Badge>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-muted-foreground">Last triggered: {webhook.lastTriggered}</div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Play className="mr-2 h-3 w-3" />
                            Test
                          </Button>
                          <Button size="sm" variant="outline">
                            <Settings className="mr-2 h-3 w-3" />
                            Configure
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="custom" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Custom Extensions</CardTitle>
                <CardDescription>Build and manage custom extensions for your specific needs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] flex items-center justify-center text-muted-foreground">
                  Custom extension development tools and templates would be displayed here
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </SidebarInset>
  )
}
