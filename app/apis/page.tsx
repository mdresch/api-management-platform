import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Filter, MoreHorizontal, Plus, Search, Settings, Eye, Edit, Trash2, Activity } from "lucide-react"

const apis = [
  {
    id: "1",
    name: "User Management API",
    description: "Comprehensive user authentication and profile management",
    version: "v2.1.0",
    status: "Active",
    method: "REST",
    endpoint: "/api/v2/users",
    health: 99.9,
    requests: "45.2K",
    lastUpdated: "2024-01-15",
    owner: "Platform Team",
  },
  {
    id: "2",
    name: "Payment Processing API",
    description: "Secure payment processing and transaction management",
    version: "v1.8.3",
    status: "Active",
    method: "REST",
    endpoint: "/api/v1/payments",
    health: 98.7,
    requests: "32.1K",
    lastUpdated: "2024-01-12",
    owner: "Finance Team",
  },
  {
    id: "3",
    name: "Notification Service API",
    description: "Multi-channel notification delivery system",
    version: "v3.0.0",
    status: "Beta",
    method: "GraphQL",
    endpoint: "/graphql/notifications",
    health: 97.2,
    requests: "18.9K",
    lastUpdated: "2024-01-10",
    owner: "Communications Team",
  },
  {
    id: "4",
    name: "Analytics API",
    description: "Business intelligence and reporting endpoints",
    version: "v1.5.2",
    status: "Deprecated",
    method: "REST",
    endpoint: "/api/v1/analytics",
    health: 95.1,
    requests: "12.3K",
    lastUpdated: "2023-12-20",
    owner: "Data Team",
  },
  {
    id: "5",
    name: "Inventory Management API",
    description: "Product catalog and inventory tracking",
    version: "v2.0.1",
    status: "Active",
    method: "REST",
    endpoint: "/api/v2/inventory",
    health: 99.5,
    requests: "28.7K",
    lastUpdated: "2024-01-14",
    owner: "Operations Team",
  },
]

export default function APIsPage() {
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
              <BreadcrumbPage>APIs</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">API Management</h1>
            <p className="text-muted-foreground">Manage all your APIs, versions, and configurations</p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create New API
          </Button>
        </div>

        {/* Filters and Search */}
        <Card>
          <CardHeader>
            <CardTitle>API Catalog</CardTitle>
            <CardDescription>Browse and manage all APIs in your organization</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search APIs..." className="pl-10" />
              </div>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>API Name</TableHead>
                  <TableHead>Version</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead>Health</TableHead>
                  <TableHead>Requests (24h)</TableHead>
                  <TableHead>Owner</TableHead>
                  <TableHead>Last Updated</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {apis.map((api) => (
                  <TableRow key={api.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{api.name}</div>
                        <div className="text-sm text-muted-foreground">{api.description}</div>
                        <div className="text-xs text-muted-foreground font-mono">{api.endpoint}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{api.version}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          api.status === "Active" ? "default" : api.status === "Beta" ? "secondary" : "destructive"
                        }
                      >
                        {api.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{api.method}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <div
                          className={`h-2 w-2 rounded-full ${
                            api.health > 99 ? "bg-green-500" : api.health > 95 ? "bg-yellow-500" : "bg-red-500"
                          }`}
                        />
                        <span className="text-sm">{api.health}%</span>
                      </div>
                    </TableCell>
                    <TableCell>{api.requests}</TableCell>
                    <TableCell className="text-sm">{api.owner}</TableCell>
                    <TableCell className="text-sm">{api.lastUpdated}</TableCell>
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
                            Edit API
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Activity className="mr-2 h-4 w-4" />
                            View Analytics
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Settings className="mr-2 h-4 w-4" />
                            Settings
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
      </div>
    </SidebarInset>
  )
}
