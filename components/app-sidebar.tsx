import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  BookOpen,
  ChevronDown,
  Code2,
  FileText,
  Globe,
  LayoutDashboard,
  Settings,
  Shield,
  Users,
  Activity,
  User,
  LogOut,
  Brain,
  TestTube,
  BarChart3,
  Play,
  Store,
  Wand2,
  Network,
} from "lucide-react"
import Link from "next/link"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

const navigation = [
  {
    title: "Overview",
    icon: LayoutDashboard,
    href: "/",
  },
  {
    title: "API Management",
    icon: Code2,
    items: [
      { title: "All APIs", href: "/apis" },
      { title: "Create API", href: "/apis/create" },
      { title: "Versions", href: "/apis/versions" },
      { title: "Deprecation", href: "/apis/deprecation" },
    ],
  },
  {
    title: "Design Studio",
    icon: Globe,
    href: "/design-studio",
  },
  {
    title: "AI Copilot",
    icon: Wand2,
    href: "/ai-copilot",
  },
  {
    title: "Testing",
    icon: TestTube,
    href: "/testing",
  },
  {
    title: "Documentation",
    icon: BookOpen,
    items: [
      { title: "API Docs", href: "/docs" },
      { title: "Swagger UI", href: "/docs/swagger" },
      { title: "Guides", href: "/docs/guides" },
    ],
  },
  {
    title: "Security & Access",
    icon: Shield,
    items: [
      { title: "API Keys", href: "/security/keys" },
      { title: "OAuth2", href: "/security/oauth" },
      { title: "Rate Limiting", href: "/security/rate-limits" },
      { title: "Audit Logs", href: "/security/audit" },
    ],
  },
  {
    title: "Monitoring",
    icon: Activity,
    items: [
      { title: "Analytics", href: "/monitoring/analytics" },
      { title: "Health Checks", href: "/monitoring/health" },
      { title: "Alerts", href: "/monitoring/alerts" },
      { title: "Performance", href: "/monitoring/performance" },
    ],
  },
  {
    title: "AI Insights",
    icon: Brain,
    href: "/ai-insights",
  },
  {
    title: "Governance",
    icon: FileText,
    href: "/governance",
  },
  {
    title: "Plugins",
    icon: Settings,
    href: "/plugins",
  },
  {
    title: "Developer Portal",
    icon: Users,
    href: "/developer-portal",
  },
  {
    title: "Marketplace",
    icon: Store,
    href: "/marketplace",
  },
  {
    title: "Executive Dashboard",
    icon: BarChart3,
    href: "/executive-dashboard",
  },
  {
    title: "Architecture",
    icon: Network,
    href: "/architecture",
  },
  {
    title: "Demo",
    icon: Play,
    href: "/demo",
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="border-r">
      <SidebarHeader className="border-b px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Globe className="h-4 w-4" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">API Management</span>
            <span className="text-xs text-muted-foreground">Centre of Excellence</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-4 py-4">
        <SidebarGroup>
          <SidebarMenu>
            {navigation.map((item) => (
              <SidebarMenuItem key={item.title}>
                {item.items ? (
                  <Collapsible defaultOpen className="group/collapsible">
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton className="w-full">
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                        <ChevronDown className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton asChild>
                              <Link href={subItem.href}>
                                <span>{subItem.title}</span>
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </Collapsible>
                ) : (
                  <SidebarMenuButton asChild>
                    <Link href={item.href}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                )}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="w-full">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <span>John Doe</span>
                  <ChevronDown className="ml-auto h-4 w-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="top" className="w-[--radix-popper-anchor-width]">
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
