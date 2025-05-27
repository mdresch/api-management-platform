"use client"

import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
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
  Users,
  Download,
  MessageSquare,
  BookOpen,
  Code2,
  Play,
  CheckCircle,
  Clock,
  TrendingUp,
  Search,
  Filter,
  ExternalLink,
  Heart,
  Share,
} from "lucide-react"

const developers = [
  {
    id: "1",
    name: "Sarah Chen",
    email: "sarah.chen@company.com",
    avatar: "/placeholder.svg?height=40&width=40",
    team: "Frontend Team",
    joinDate: "2023-08-15",
    apisUsed: 8,
    totalRequests: "1.2M",
    status: "Active",
    lastActive: "2 hours ago",
  },
  {
    id: "2",
    name: "Mike Johnson",
    email: "mike.j@startup.io",
    avatar: "/placeholder.svg?height=40&width=40",
    team: "Backend Team",
    joinDate: "2023-11-20",
    apisUsed: 5,
    totalRequests: "856K",
    status: "Active",
    lastActive: "1 day ago",
  },
  {
    id: "3",
    name: "Alex Rodriguez",
    email: "alex@mobile-app.com",
    avatar: "/placeholder.svg?height=40&width=40",
    team: "Mobile Team",
    joinDate: "2024-01-10",
    apisUsed: 3,
    totalRequests: "234K",
    status: "Onboarding",
    lastActive: "5 minutes ago",
  },
]

const onboardingSteps = [
  {
    id: "1",
    title: "Account Setup",
    description: "Create your developer account and verify email",
    status: "completed",
    duration: "2 minutes",
  },
  {
    id: "2",
    title: "API Key Generation",
    description: "Generate your first API key for authentication",
    status: "completed",
    duration: "1 minute",
  },
  {
    id: "3",
    title: "First API Call",
    description: "Make your first successful API request",
    status: "current",
    duration: "5 minutes",
  },
  {
    id: "4",
    title: "SDK Integration",
    description: "Integrate our SDK into your application",
    status: "pending",
    duration: "10 minutes",
  },
  {
    id: "5",
    title: "Production Setup",
    description: "Configure production environment and monitoring",
    status: "pending",
    duration: "15 minutes",
  },
]

const communityPosts = [
  {
    id: "1",
    title: "Best practices for API rate limiting",
    author: "Sarah Chen",
    avatar: "/placeholder.svg?height=32&width=32",
    category: "Best Practices",
    replies: 12,
    likes: 24,
    timeAgo: "2 hours ago",
    tags: ["rate-limiting", "performance"],
  },
  {
    id: "2",
    title: "How to handle authentication errors gracefully",
    author: "Mike Johnson",
    avatar: "/placeholder.svg?height=32&width=32",
    category: "Troubleshooting",
    replies: 8,
    likes: 16,
    timeAgo: "1 day ago",
    tags: ["authentication", "error-handling"],
  },
  {
    id: "3",
    title: "New GraphQL endpoints available in v2.0",
    author: "API Team",
    avatar: "/placeholder.svg?height=32&width=32",
    category: "Announcements",
    replies: 25,
    likes: 45,
    timeAgo: "3 days ago",
    tags: ["graphql", "v2.0", "announcement"],
  },
]

const sdkDownloads = [
  {
    name: "JavaScript SDK",
    description: "Official JavaScript/TypeScript SDK with full type support",
    version: "v2.1.0",
    downloads: "15.2K",
    language: "JavaScript",
    size: "245 KB",
  },
  {
    name: "Python SDK",
    description: "Python SDK with async/await support and comprehensive documentation",
    version: "v1.8.0",
    downloads: "12.8K",
    language: "Python",
    size: "180 KB",
  },
  {
    name: "Go SDK",
    description: "Lightweight Go SDK optimized for high-performance applications",
    version: "v1.5.2",
    downloads: "8.9K",
    language: "Go",
    size: "95 KB",
  },
]

export default function DeveloperPortalPage() {
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
              <BreadcrumbPage>Developer Portal</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Developer Portal</h1>
            <p className="text-muted-foreground">Onboarding, community, and resources for API developers</p>
          </div>
          <Button>
            <Users className="mr-2 h-4 w-4" />
            Invite Developer
          </Button>
        </div>

        {/* Overview Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Developers</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,847</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">SDK Downloads</CardTitle>
              <Download className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">36.9K</div>
              <p className="text-xs text-muted-foreground">+23% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Community Posts</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
              <p className="text-xs text-muted-foreground">+8% from last week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Onboarding Time</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23m</div>
              <p className="text-xs text-muted-foreground">-15% improvement</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="developers" className="space-y-4">
          <TabsList>
            <TabsTrigger value="developers">Developers</TabsTrigger>
            <TabsTrigger value="onboarding">Onboarding</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="developers" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Developer Community</CardTitle>
                <CardDescription>Manage and engage with your API developer community</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input placeholder="Search developers..." className="pl-10" />
                  </div>
                  <Button variant="outline">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                  </Button>
                </div>

                <div className="space-y-4">
                  {developers.map((developer) => (
                    <div key={developer.id} className="border rounded-lg p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Avatar>
                            <AvatarImage src={developer.avatar || "/placeholder.svg"} />
                            <AvatarFallback>
                              {developer.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-medium">{developer.name}</h3>
                            <p className="text-sm text-muted-foreground">{developer.email}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline">{developer.team}</Badge>
                          <Badge variant={developer.status === "Active" ? "default" : "secondary"}>
                            {developer.status}
                          </Badge>
                        </div>
                      </div>
                      <div className="grid gap-2 md:grid-cols-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Joined: </span>
                          <span className="font-medium">{developer.joinDate}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">APIs Used: </span>
                          <span className="font-medium">{developer.apisUsed}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Total Requests: </span>
                          <span className="font-medium">{developer.totalRequests}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Last Active: </span>
                          <span className="font-medium">{developer.lastActive}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <MessageSquare className="mr-2 h-3 w-3" />
                          Message
                        </Button>
                        <Button size="sm" variant="outline">
                          <ExternalLink className="mr-2 h-3 w-3" />
                          View Profile
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="onboarding" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Developer Onboarding</CardTitle>
                <CardDescription>Guide new developers through the API integration process</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-lg font-medium mb-2">Welcome to Our API Platform!</h3>
                    <p className="text-muted-foreground mb-4">
                      Follow these steps to get started with our APIs and begin building amazing applications.
                    </p>
                    <Progress value={40} className="w-full max-w-md mx-auto" />
                    <p className="text-sm text-muted-foreground mt-2">2 of 5 steps completed</p>
                  </div>

                  <div className="space-y-4">
                    {onboardingSteps.map((step, index) => (
                      <div
                        key={step.id}
                        className={`border rounded-lg p-4 ${
                          step.status === "current" ? "border-primary bg-primary/5" : ""
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div
                            className={`flex h-8 w-8 items-center justify-center rounded-full ${
                              step.status === "completed"
                                ? "bg-green-500 text-white"
                                : step.status === "current"
                                  ? "bg-primary text-primary-foreground"
                                  : "bg-muted text-muted-foreground"
                            }`}
                          >
                            {step.status === "completed" ? (
                              <CheckCircle className="h-4 w-4" />
                            ) : (
                              <span className="text-sm font-medium">{index + 1}</span>
                            )}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium">{step.title}</h4>
                            <p className="text-sm text-muted-foreground">{step.description}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline" className="text-xs">
                              {step.duration}
                            </Badge>
                            {step.status === "current" && (
                              <Button size="sm">
                                <Play className="mr-2 h-3 w-3" />
                                Start
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="community" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Community Forum</CardTitle>
                <CardDescription>Developer discussions, Q&A, and knowledge sharing</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {communityPosts.map((post) => (
                    <div key={post.id} className="border rounded-lg p-4 space-y-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={post.avatar || "/placeholder.svg"} />
                            <AvatarFallback>
                              {post.author
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <h4 className="font-medium">{post.title}</h4>
                            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                              <span>by {post.author}</span>
                              <span>•</span>
                              <span>{post.timeAgo}</span>
                              <span>•</span>
                              <Badge variant="outline" className="text-xs">
                                {post.category}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <MessageSquare className="h-3 w-3" />
                            <span>{post.replies} replies</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Heart className="h-3 w-3" />
                            <span>{post.likes} likes</span>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Heart className="mr-2 h-3 w-3" />
                            Like
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

          <TabsContent value="resources" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>SDK Downloads</CardTitle>
                  <CardDescription>Official SDKs and libraries for popular languages</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {sdkDownloads.map((sdk) => (
                      <div key={sdk.name} className="border rounded-lg p-3 space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">{sdk.name}</h4>
                          <Badge variant="outline">{sdk.version}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{sdk.description}</p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <div className="flex items-center space-x-4">
                            <span>{sdk.language}</span>
                            <span>{sdk.size}</span>
                            <span>{sdk.downloads} downloads</span>
                          </div>
                          <Button size="sm">
                            <Download className="mr-2 h-3 w-3" />
                            Download
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Resources</CardTitle>
                  <CardDescription>Essential guides and documentation</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Getting Started Guide
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Code2 className="mr-2 h-4 w-4" />
                      API Reference
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Play className="mr-2 h-4 w-4" />
                      Interactive Playground
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Community Forum
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <TrendingUp className="mr-2 h-4 w-4" />
                      Best Practices
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SidebarInset>
  )
}
