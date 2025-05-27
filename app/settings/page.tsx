"use client"

import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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
import { Bell, Shield, Globe, Database, Mail, Smartphone, Users, Building, CreditCard, Download } from "lucide-react"

const organizationSettings = {
  name: "TechCorp Inc.",
  domain: "techcorp.com",
  timezone: "UTC-8 (Pacific Time)",
  language: "English",
  currency: "USD",
  plan: "Professional",
  users: 45,
  apis: 127,
}

const notificationSettings = [
  {
    category: "Security Alerts",
    settings: [
      { name: "Failed login attempts", email: true, sms: false, push: true },
      { name: "API key compromised", email: true, sms: true, push: true },
      { name: "Unusual API activity", email: true, sms: false, push: true },
    ],
  },
  {
    category: "System Updates",
    settings: [
      { name: "Maintenance windows", email: true, sms: false, push: false },
      { name: "Feature releases", email: true, sms: false, push: false },
      { name: "System outages", email: true, sms: true, push: true },
    ],
  },
  {
    category: "Usage & Billing",
    settings: [
      { name: "Usage threshold alerts", email: true, sms: false, push: true },
      { name: "Billing notifications", email: true, sms: false, push: false },
      { name: "Invoice reminders", email: true, sms: false, push: false },
    ],
  },
]

const teamMembers = [
  {
    id: "1",
    name: "Sarah Chen",
    email: "sarah.chen@techcorp.com",
    role: "Admin",
    status: "Active",
    lastActive: "2 hours ago",
  },
  {
    id: "2",
    name: "Mike Johnson",
    email: "mike.johnson@techcorp.com",
    role: "Developer",
    status: "Active",
    lastActive: "1 day ago",
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    email: "emily.rodriguez@techcorp.com",
    role: "Viewer",
    status: "Invited",
    lastActive: "Never",
  },
]

const integrationSettings = [
  {
    name: "Slack",
    description: "Send notifications to Slack channels",
    status: "Connected",
    configured: true,
  },
  {
    name: "GitHub",
    description: "Sync API documentation with repositories",
    status: "Connected",
    configured: true,
  },
  {
    name: "Jira",
    description: "Create tickets for API issues",
    status: "Not Connected",
    configured: false,
  },
  {
    name: "Datadog",
    description: "Send metrics to Datadog for monitoring",
    status: "Connected",
    configured: true,
  },
]

export default function SettingsPage() {
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
              <BreadcrumbPage>Settings</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
            <p className="text-muted-foreground">Manage your organization settings and preferences</p>
          </div>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Export Settings
          </Button>
        </div>

        <Tabs defaultValue="general" className="space-y-4">
          <TabsList>
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
            <TabsTrigger value="integrations">Integrations</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Building className="h-5 w-5" />
                  <span>Organization Settings</span>
                </CardTitle>
                <CardDescription>Basic information about your organization</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="org-name">Organization Name</Label>
                    <Input id="org-name" defaultValue={organizationSettings.name} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="domain">Domain</Label>
                    <Input id="domain" defaultValue={organizationSettings.domain} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <Select defaultValue="utc-8">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="utc-8">UTC-8 (Pacific Time)</SelectItem>
                        <SelectItem value="utc-5">UTC-5 (Eastern Time)</SelectItem>
                        <SelectItem value="utc+0">UTC+0 (GMT)</SelectItem>
                        <SelectItem value="utc+1">UTC+1 (Central European Time)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="language">Language</Label>
                    <Select defaultValue="en">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="es">Spanish</SelectItem>
                        <SelectItem value="fr">French</SelectItem>
                        <SelectItem value="de">German</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Organization Description</Label>
                  <Textarea id="description" placeholder="Brief description of your organization" rows={3} />
                </div>
                <Button>Save Changes</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="h-5 w-5" />
                  <span>API Configuration</span>
                </CardTitle>
                <CardDescription>Default settings for API management</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="default-version">Default API Version Format</Label>
                    <Select defaultValue="semantic">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="semantic">Semantic (v1.2.3)</SelectItem>
                        <SelectItem value="date">Date-based (2024-01-15)</SelectItem>
                        <SelectItem value="simple">Simple (v1, v2, v3)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="rate-limit">Default Rate Limit</Label>
                    <Input id="rate-limit" defaultValue="1000" placeholder="Requests per hour" />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="auto-docs" defaultChecked />
                  <Label htmlFor="auto-docs">Auto-generate documentation for new APIs</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="analytics" defaultChecked />
                  <Label htmlFor="analytics">Enable analytics tracking by default</Label>
                </div>
                <Button>Save Configuration</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Bell className="h-5 w-5" />
                  <span>Notification Preferences</span>
                </CardTitle>
                <CardDescription>Configure how and when you receive notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {notificationSettings.map((category) => (
                  <div key={category.category} className="space-y-4">
                    <h3 className="font-medium">{category.category}</h3>
                    <div className="space-y-3">
                      {category.settings.map((setting) => (
                        <div key={setting.name} className="flex items-center justify-between p-3 border rounded-lg">
                          <span className="font-medium">{setting.name}</span>
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                              <Mail className="h-4 w-4 text-muted-foreground" />
                              <Switch defaultChecked={setting.email} />
                            </div>
                            <div className="flex items-center space-x-2">
                              <Smartphone className="h-4 w-4 text-muted-foreground" />
                              <Switch defaultChecked={setting.sms} />
                            </div>
                            <div className="flex items-center space-x-2">
                              <Bell className="h-4 w-4 text-muted-foreground" />
                              <Switch defaultChecked={setting.push} />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                <Button>Save Preferences</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5" />
                  <span>Security Settings</span>
                </CardTitle>
                <CardDescription>Manage security policies and authentication settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium">Two-Factor Authentication</div>
                      <div className="text-sm text-muted-foreground">Add an extra layer of security</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="default">Enabled</Badge>
                      <Button size="sm" variant="outline">
                        Configure
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium">Single Sign-On (SSO)</div>
                      <div className="text-sm text-muted-foreground">SAML/OAuth integration</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary">Not Configured</Badge>
                      <Button size="sm" variant="outline">
                        Setup
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium">Session Timeout</div>
                      <div className="text-sm text-muted-foreground">Automatic logout after inactivity</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Select defaultValue="8h">
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1h">1 hour</SelectItem>
                          <SelectItem value="4h">4 hours</SelectItem>
                          <SelectItem value="8h">8 hours</SelectItem>
                          <SelectItem value="24h">24 hours</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Password Policy</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Switch defaultChecked />
                      <Label>Minimum 12 characters</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch defaultChecked />
                      <Label>Require uppercase and lowercase letters</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch defaultChecked />
                      <Label>Require numbers and special characters</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch defaultChecked />
                      <Label>Password expiration (90 days)</Label>
                    </div>
                  </div>
                </div>
                <Button>Update Security Settings</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="team" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>Team Management</span>
                </CardTitle>
                <CardDescription>Manage team members and their permissions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-muted-foreground">{organizationSettings.users} of 50 seats used</div>
                  <Button>
                    <Users className="mr-2 h-4 w-4" />
                    Invite Member
                  </Button>
                </div>
                <div className="space-y-4">
                  {teamMembers.map((member) => (
                    <div key={member.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div>
                          <div className="font-medium">{member.name}</div>
                          <div className="text-sm text-muted-foreground">{member.email}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Badge variant="outline">{member.role}</Badge>
                        <Badge variant={member.status === "Active" ? "default" : "secondary"}>{member.status}</Badge>
                        <div className="text-sm text-muted-foreground">{member.lastActive}</div>
                        <Button size="sm" variant="outline">
                          Edit
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="integrations" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Database className="h-5 w-5" />
                  <span>Integrations</span>
                </CardTitle>
                <CardDescription>Connect with external tools and services</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {integrationSettings.map((integration) => (
                    <div key={integration.name} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <div className="font-medium">{integration.name}</div>
                        <div className="text-sm text-muted-foreground">{integration.description}</div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Badge variant={integration.configured ? "default" : "secondary"}>{integration.status}</Badge>
                        <Button size="sm" variant="outline">
                          {integration.configured ? "Configure" : "Connect"}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="billing" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CreditCard className="h-5 w-5" />
                  <span>Billing & Subscription</span>
                </CardTitle>
                <CardDescription>Manage your subscription and billing information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Current Plan</Label>
                    <div className="flex items-center space-x-2">
                      <Badge variant="default">{organizationSettings.plan}</Badge>
                      <Button size="sm" variant="outline">
                        Upgrade
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Billing Cycle</Label>
                    <div className="text-sm">Monthly - Next billing: Feb 15, 2024</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Usage Summary</Label>
                  <div className="grid gap-2 md:grid-cols-3 text-sm">
                    <div>APIs: {organizationSettings.apis} of 200</div>
                    <div>Users: {organizationSettings.users} of 50</div>
                    <div>Requests: 1.2M of 5M</div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline">View Invoices</Button>
                  <Button variant="outline">Update Payment Method</Button>
                  <Button variant="outline">Download Receipt</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </SidebarInset>
  )
}
