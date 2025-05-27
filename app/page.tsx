import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Activity, AlertTriangle, BarChart3, CheckCircle, Code2, Globe, Shield, Users, Zap } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb"

const stats = [
  {
    title: "Total APIs",
    value: "127",
    change: "+12%",
    icon: Code2,
    color: "text-blue-600",
  },
  {
    title: "Active Consumers",
    value: "2,847",
    change: "+23%",
    icon: Users,
    color: "text-green-600",
  },
  {
    title: "Requests Today",
    value: "1.2M",
    change: "+8%",
    icon: Activity,
    color: "text-purple-600",
  },
  {
    title: "Avg Response Time",
    value: "142ms",
    change: "-5%",
    icon: Zap,
    color: "text-orange-600",
  },
]

const recentAPIs = [
  {
    name: "User Management API",
    version: "v2.1.0",
    status: "Active",
    health: 99.9,
    requests: "45.2K",
  },
  {
    name: "Payment Processing API",
    version: "v1.8.3",
    status: "Active",
    health: 98.7,
    requests: "32.1K",
  },
  {
    name: "Notification Service API",
    version: "v3.0.0",
    status: "Beta",
    health: 97.2,
    requests: "18.9K",
  },
  {
    name: "Analytics API",
    version: "v1.5.2",
    status: "Deprecated",
    health: 95.1,
    requests: "12.3K",
  },
]

const alerts = [
  {
    type: "warning",
    message: "Payment API experiencing high latency",
    time: "2 minutes ago",
  },
  {
    type: "info",
    message: "New API version v2.1.0 deployed successfully",
    time: "1 hour ago",
  },
  {
    type: "error",
    message: "Rate limit exceeded for Analytics API",
    time: "3 hours ago",
  },
]

export default function Dashboard() {
  return (
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage>Dashboard</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">API Management Dashboard</h1>
            <p className="text-muted-foreground">Monitor and manage your API ecosystem from a single platform</p>
          </div>
          <Button>
            <Code2 className="mr-2 h-4 w-4" />
            Create New API
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  <span className={stat.change.startsWith("+") ? "text-green-600" : "text-red-600"}>{stat.change}</span>{" "}
                  from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          {/* API Overview */}
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>API Overview</CardTitle>
              <CardDescription>Recent API performance and usage statistics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentAPIs.map((api) => (
                  <div key={api.name} className="flex items-center justify-between space-x-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                        <Globe className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium leading-none">{api.name}</p>
                        <p className="text-sm text-muted-foreground">{api.version}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Badge
                        variant={
                          api.status === "Active" ? "default" : api.status === "Beta" ? "secondary" : "destructive"
                        }
                      >
                        {api.status}
                      </Badge>
                      <div className="text-right">
                        <p className="text-sm font-medium">{api.health}%</p>
                        <Progress value={api.health} className="w-16" />
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{api.requests}</p>
                        <p className="text-xs text-muted-foreground">requests</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Alerts */}
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Recent Alerts</CardTitle>
              <CardDescription>Latest notifications and system alerts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {alerts.map((alert, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full">
                      {alert.type === "warning" && <AlertTriangle className="h-4 w-4 text-yellow-600" />}
                      {alert.type === "info" && <CheckCircle className="h-4 w-4 text-blue-600" />}
                      {alert.type === "error" && <AlertTriangle className="h-4 w-4 text-red-600" />}
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">{alert.message}</p>
                      <p className="text-xs text-muted-foreground">{alert.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks and shortcuts for API management</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Button variant="outline" className="h-20 flex-col">
                <Code2 className="mb-2 h-6 w-6" />
                Create API
              </Button>
              <Button variant="outline" className="h-20 flex-col">
                <Shield className="mb-2 h-6 w-6" />
                Generate API Key
              </Button>
              <Button variant="outline" className="h-20 flex-col">
                <BarChart3 className="mb-2 h-6 w-6" />
                View Analytics
              </Button>
              <Button variant="outline" className="h-20 flex-col">
                <Users className="mb-2 h-6 w-6" />
                Manage Access
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </SidebarInset>
  )
}
