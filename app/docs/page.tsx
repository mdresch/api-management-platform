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
import { Code2, Download, ExternalLink, FileText, Globe, Play, Search, Star } from "lucide-react"

const apiDocs = [
  {
    id: "1",
    name: "User Management API",
    description: "Comprehensive user authentication and profile management endpoints",
    version: "v2.1.0",
    status: "Active",
    category: "Authentication",
    endpoints: 12,
    lastUpdated: "2024-01-15",
    rating: 4.8,
    downloads: "2.3K",
  },
  {
    id: "2",
    name: "Payment Processing API",
    description: "Secure payment processing and transaction management",
    version: "v1.8.3",
    status: "Active",
    category: "Payments",
    endpoints: 8,
    lastUpdated: "2024-01-12",
    rating: 4.9,
    downloads: "1.8K",
  },
  {
    id: "3",
    name: "Notification Service API",
    description: "Multi-channel notification delivery system",
    version: "v3.0.0",
    status: "Beta",
    category: "Communications",
    endpoints: 15,
    lastUpdated: "2024-01-10",
    rating: 4.6,
    downloads: "945",
  },
  {
    id: "4",
    name: "Analytics API",
    description: "Business intelligence and reporting endpoints",
    version: "v1.5.2",
    status: "Deprecated",
    category: "Analytics",
    endpoints: 6,
    lastUpdated: "2023-12-20",
    rating: 4.2,
    downloads: "567",
  },
]

const quickStart = [
  {
    title: "Authentication",
    description: "Learn how to authenticate with our APIs",
    icon: "🔐",
    time: "5 min read",
  },
  {
    title: "Making Your First Request",
    description: "Step-by-step guide to your first API call",
    icon: "🚀",
    time: "3 min read",
  },
  {
    title: "Error Handling",
    description: "Understanding API responses and error codes",
    icon: "⚠️",
    time: "4 min read",
  },
  {
    title: "Rate Limiting",
    description: "Best practices for API rate limits",
    icon: "⏱️",
    time: "3 min read",
  },
]

const sdks = [
  {
    name: "JavaScript SDK",
    description: "Official JavaScript/TypeScript SDK",
    language: "JavaScript",
    version: "v2.1.0",
    downloads: "15.2K",
  },
  {
    name: "Python SDK",
    description: "Official Python SDK with async support",
    language: "Python",
    version: "v1.8.0",
    downloads: "12.8K",
  },
  {
    name: "Go SDK",
    description: "Lightweight Go SDK for high performance",
    language: "Go",
    version: "v1.5.2",
    downloads: "8.9K",
  },
  {
    name: "Java SDK",
    description: "Enterprise-ready Java SDK",
    language: "Java",
    version: "v2.0.1",
    downloads: "6.7K",
  },
]

export default function DocsPage() {
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
              <BreadcrumbPage>Documentation</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">API Documentation</h1>
            <p className="text-muted-foreground">Comprehensive guides, references, and tools for developers</p>
          </div>
          <Button>
            <FileText className="mr-2 h-4 w-4" />
            Create Documentation
          </Button>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="apis">API Reference</TabsTrigger>
            <TabsTrigger value="guides">Guides</TabsTrigger>
            <TabsTrigger value="sdks">SDKs</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            {/* Quick Start Section */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Start Guides</CardTitle>
                <CardDescription>Get up and running with our APIs in minutes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  {quickStart.map((guide) => (
                    <Card key={guide.title} className="cursor-pointer hover:shadow-md transition-shadow">
                      <CardHeader className="pb-3">
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl">{guide.icon}</span>
                          <CardTitle className="text-base">{guide.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-sm text-muted-foreground mb-2">{guide.description}</p>
                        <Badge variant="outline" className="text-xs">
                          {guide.time}
                        </Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Popular APIs */}
            <Card>
              <CardHeader>
                <CardTitle>Popular APIs</CardTitle>
                <CardDescription>Most accessed API documentation and references</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {apiDocs.slice(0, 4).map((api) => (
                    <Card key={api.id} className="cursor-pointer hover:shadow-md transition-shadow">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Globe className="h-5 w-5 text-muted-foreground" />
                            <CardTitle className="text-base">{api.name}</CardTitle>
                          </div>
                          <Badge variant="outline">{api.version}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-sm text-muted-foreground mb-3">{api.description}</p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>{api.endpoints} endpoints</span>
                          <div className="flex items-center space-x-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span>{api.rating}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="apis" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>API Reference</CardTitle>
                <CardDescription>Complete API documentation with interactive examples</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input placeholder="Search APIs..." className="pl-10" />
                  </div>
                </div>

                <div className="grid gap-4">
                  {apiDocs.map((api) => (
                    <Card key={api.id} className="cursor-pointer hover:shadow-md transition-shadow">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                              <Code2 className="h-5 w-5" />
                            </div>
                            <div>
                              <CardTitle className="text-lg">{api.name}</CardTitle>
                              <CardDescription>{api.description}</CardDescription>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline">{api.category}</Badge>
                            <Badge
                              variant={
                                api.status === "Active"
                                  ? "default"
                                  : api.status === "Beta"
                                    ? "secondary"
                                    : "destructive"
                              }
                            >
                              {api.status}
                            </Badge>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                            <span>Version {api.version}</span>
                            <span>{api.endpoints} endpoints</span>
                            <span>Updated {api.lastUpdated}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm">
                              <Play className="mr-2 h-3 w-3" />
                              Try it
                            </Button>
                            <Button variant="outline" size="sm">
                              <ExternalLink className="mr-2 h-3 w-3" />
                              View Docs
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="guides" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Developer Guides</CardTitle>
                <CardDescription>In-depth tutorials and best practices for API integration</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] flex items-center justify-center text-muted-foreground">
                  Developer guides and tutorials would be displayed here
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sdks" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Software Development Kits</CardTitle>
                <CardDescription>Official SDKs and libraries for popular programming languages</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {sdks.map((sdk) => (
                    <Card key={sdk.name} className="cursor-pointer hover:shadow-md transition-shadow">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-base">{sdk.name}</CardTitle>
                          <Badge variant="outline">{sdk.version}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-sm text-muted-foreground mb-3">{sdk.description}</p>
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary">{sdk.language}</Badge>
                          <div className="flex items-center space-x-2">
                            <Download className="h-3 w-3 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">{sdk.downloads}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
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
