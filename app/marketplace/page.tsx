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
import {
  Store,
  Star,
  DollarSign,
  Users,
  TrendingUp,
  Search,
  Filter,
  Plus,
  Eye,
  Code2,
  Globe,
  Zap,
  Shield,
  CreditCard,
} from "lucide-react"

const featuredAPIs = [
  {
    id: "1",
    name: "Payment Gateway API",
    description: "Secure payment processing with multi-currency support and fraud detection",
    provider: "FinTech Solutions",
    providerLogo: "/placeholder.svg?height=40&width=40",
    category: "Payments",
    pricing: "Pay per use",
    startingPrice: "$0.02",
    rating: 4.9,
    reviews: 1247,
    subscribers: 15600,
    featured: true,
    tags: ["payments", "security", "fintech"],
    endpoints: 24,
    uptime: "99.99%",
    responseTime: "89ms",
  },
  {
    id: "2",
    name: "AI Content Generator",
    description: "Generate high-quality content using advanced AI models with customizable parameters",
    provider: "AI Innovations",
    providerLogo: "/placeholder.svg?height=40&width=40",
    category: "AI/ML",
    pricing: "Subscription",
    startingPrice: "$29",
    rating: 4.8,
    reviews: 892,
    subscribers: 8900,
    featured: true,
    tags: ["ai", "content", "nlp"],
    endpoints: 12,
    uptime: "99.95%",
    responseTime: "1.2s",
  },
  {
    id: "3",
    name: "Geolocation Services",
    description: "Comprehensive location data with IP geolocation, geocoding, and mapping services",
    provider: "GeoData Corp",
    providerLogo: "/placeholder.svg?height=40&width=40",
    category: "Location",
    pricing: "Freemium",
    startingPrice: "Free",
    rating: 4.7,
    reviews: 2156,
    subscribers: 23400,
    featured: false,
    tags: ["location", "maps", "geocoding"],
    endpoints: 18,
    uptime: "99.97%",
    responseTime: "156ms",
  },
]

const categories = [
  { name: "Payments", count: 45, icon: CreditCard },
  { name: "AI/ML", count: 32, icon: Zap },
  { name: "Location", count: 28, icon: Globe },
  { name: "Security", count: 24, icon: Shield },
  { name: "Analytics", count: 19, icon: TrendingUp },
  { name: "Communication", count: 16, icon: Users },
]

const myAPIs = [
  {
    id: "1",
    name: "Customer Analytics API",
    description: "Real-time customer behavior analytics and insights",
    status: "Published",
    subscribers: 156,
    revenue: "$2,340",
    requests: "45.2K",
    rating: 4.6,
    lastUpdated: "2024-01-15",
  },
  {
    id: "2",
    name: "Inventory Management API",
    description: "Comprehensive inventory tracking and management system",
    status: "Draft",
    subscribers: 0,
    revenue: "$0",
    requests: "0",
    rating: 0,
    lastUpdated: "2024-01-14",
  },
]

const subscriptions = [
  {
    id: "1",
    api: "Payment Gateway API",
    provider: "FinTech Solutions",
    plan: "Professional",
    price: "$99/month",
    usage: "12,450 / 50,000",
    usagePercent: 25,
    status: "Active",
    nextBilling: "2024-02-15",
  },
  {
    id: "2",
    api: "AI Content Generator",
    provider: "AI Innovations",
    plan: "Starter",
    price: "$29/month",
    usage: "890 / 5,000",
    usagePercent: 18,
    status: "Active",
    nextBilling: "2024-02-10",
  },
]

export default function MarketplacePage() {
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
              <BreadcrumbPage>API Marketplace</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">API Marketplace</h1>
            <p className="text-muted-foreground">Discover, publish, and monetize APIs in our global marketplace</p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Publish API
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Publish API to Marketplace</DialogTitle>
                <DialogDescription>Make your API available to the global developer community</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="api-name" className="text-right">
                    API Name
                  </Label>
                  <Input id="api-name" placeholder="My Awesome API" className="col-span-3" />
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
                      <SelectItem value="payments">Payments</SelectItem>
                      <SelectItem value="ai-ml">AI/ML</SelectItem>
                      <SelectItem value="location">Location</SelectItem>
                      <SelectItem value="security">Security</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="pricing" className="text-right">
                    Pricing Model
                  </Label>
                  <Select>
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select pricing" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="free">Free</SelectItem>
                      <SelectItem value="freemium">Freemium</SelectItem>
                      <SelectItem value="subscription">Subscription</SelectItem>
                      <SelectItem value="pay-per-use">Pay per use</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="description" className="text-right">
                    Description
                  </Label>
                  <Textarea id="description" placeholder="Describe your API..." className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Publish API</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Marketplace Stats */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Available APIs</CardTitle>
              <Store className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,247</div>
              <p className="text-xs text-muted-foreground">+23 new this week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Subscribers</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">89.2K</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Marketplace Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$2.4M</div>
              <p className="text-xs text-muted-foreground">+34% growth</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Rating</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.7</div>
              <p className="text-xs text-muted-foreground">Based on 15.6K reviews</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="discover" className="space-y-4">
          <TabsList>
            <TabsTrigger value="discover">Discover APIs</TabsTrigger>
            <TabsTrigger value="my-apis">My Published APIs</TabsTrigger>
            <TabsTrigger value="subscriptions">My Subscriptions</TabsTrigger>
            <TabsTrigger value="analytics">Revenue Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="discover" className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search APIs..." className="pl-10" />
              </div>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </div>

            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle>Browse by Category</CardTitle>
                <CardDescription>Explore APIs organized by functionality and use case</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {categories.map((category) => (
                    <div
                      key={category.name}
                      className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-muted"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <category.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">{category.name}</div>
                        <div className="text-sm text-muted-foreground">{category.count} APIs</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Featured APIs */}
            <Card>
              <CardHeader>
                <CardTitle>Featured APIs</CardTitle>
                <CardDescription>Handpicked APIs with exceptional quality and developer experience</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {featuredAPIs.map((api) => (
                    <div key={api.id} className="border rounded-lg p-4 space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-3">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={api.providerLogo || "/placeholder.svg"} />
                            <AvatarFallback>{api.provider.substring(0, 2)}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              <h3 className="font-semibold">{api.name}</h3>
                              {api.featured && (
                                <Badge variant="secondary" className="text-xs">
                                  Featured
                                </Badge>
                              )}
                              <Badge variant="outline">{api.category}</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">{api.description}</p>
                            <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                              <span>by {api.provider}</span>
                              <div className="flex items-center space-x-1">
                                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                <span>{api.rating}</span>
                                <span>({api.reviews} reviews)</span>
                              </div>
                              <span>{api.subscribers.toLocaleString()} subscribers</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold">
                            {api.pricing === "Pay per use"
                              ? `From ${api.startingPrice}/call`
                              : `${api.startingPrice}/month`}
                          </div>
                          <div className="text-sm text-muted-foreground">{api.pricing}</div>
                        </div>
                      </div>

                      <div className="grid gap-2 md:grid-cols-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Endpoints: </span>
                          <span className="font-medium">{api.endpoints}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Uptime: </span>
                          <span className="font-medium text-green-600">{api.uptime}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Response: </span>
                          <span className="font-medium">{api.responseTime}</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {api.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              #{tag}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Button>Subscribe</Button>
                        <Button variant="outline">
                          <Eye className="mr-2 h-4 w-4" />
                          View Details
                        </Button>
                        <Button variant="outline">
                          <Code2 className="mr-2 h-4 w-4" />
                          Try API
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="my-apis" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>My Published APIs</CardTitle>
                <CardDescription>Manage your APIs in the marketplace and track performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {myAPIs.map((api) => (
                    <div key={api.id} className="border rounded-lg p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">{api.name}</h3>
                          <p className="text-sm text-muted-foreground">{api.description}</p>
                        </div>
                        <Badge variant={api.status === "Published" ? "default" : "secondary"}>{api.status}</Badge>
                      </div>
                      <div className="grid gap-2 md:grid-cols-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Subscribers: </span>
                          <span className="font-medium">{api.subscribers}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Revenue: </span>
                          <span className="font-medium text-green-600">{api.revenue}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Requests: </span>
                          <span className="font-medium">{api.requests}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Rating: </span>
                          <span className="font-medium">{api.rating > 0 ? api.rating : "No ratings yet"}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          Edit
                        </Button>
                        <Button size="sm" variant="outline">
                          Analytics
                        </Button>
                        <Button size="sm" variant="outline">
                          Pricing
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="subscriptions" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Active Subscriptions</CardTitle>
                <CardDescription>Manage your API subscriptions and monitor usage</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {subscriptions.map((sub) => (
                    <div key={sub.id} className="border rounded-lg p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">{sub.api}</h3>
                          <p className="text-sm text-muted-foreground">by {sub.provider}</p>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold">{sub.price}</div>
                          <Badge variant="default">{sub.plan}</Badge>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Usage this month</span>
                          <span>{sub.usage}</span>
                        </div>
                        <Progress value={sub.usagePercent} />
                      </div>
                      <div className="grid gap-2 md:grid-cols-2 text-sm">
                        <div>
                          <span className="text-muted-foreground">Status: </span>
                          <span className="font-medium text-green-600">{sub.status}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Next billing: </span>
                          <span className="font-medium">{sub.nextBilling}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          Manage
                        </Button>
                        <Button size="sm" variant="outline">
                          Usage Details
                        </Button>
                        <Button size="sm" variant="outline">
                          Upgrade
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$2,340</div>
                  <p className="text-xs text-muted-foreground">+18% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">API Calls</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">45.2K</div>
                  <p className="text-xs text-muted-foreground">+23% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">New Subscribers</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">156</div>
                  <p className="text-xs text-muted-foreground">+12% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Avg Rating</CardTitle>
                  <Star className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4.6</div>
                  <p className="text-xs text-muted-foreground">Based on 89 reviews</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Revenue Analytics</CardTitle>
                <CardDescription>Track your API monetization performance over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                  Revenue charts and detailed analytics would be displayed here
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </SidebarInset>
  )
}
