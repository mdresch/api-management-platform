"use client"

import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
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
import { Network, Server, Database, Shield, Cloud, Layers, Download, Share, Zap, Globe, Lock } from "lucide-react"

const architectureComponents = [
  {
    layer: "Presentation Layer",
    components: [
      {
        name: "React Dashboard",
        description: "Modern web interface built with Next.js and shadcn/ui",
        status: "Active",
      },
      { name: "Mobile App", description: "React Native companion app for monitoring", status: "Planned" },
      { name: "CLI Tools", description: "Command-line interface for developers", status: "Active" },
    ],
  },
  {
    layer: "API Gateway",
    components: [
      { name: "Kong Gateway", description: "High-performance API gateway with plugins", status: "Active" },
      { name: "Rate Limiting", description: "Distributed rate limiting with Redis", status: "Active" },
      { name: "Authentication", description: "JWT and OAuth2 authentication", status: "Active" },
    ],
  },
  {
    layer: "Application Layer",
    components: [
      { name: "API Management Service", description: "Core API lifecycle management", status: "Active" },
      { name: "AI Insights Engine", description: "Machine learning for analytics", status: "Active" },
      { name: "Plugin System", description: "Extensible plugin architecture", status: "Active" },
    ],
  },
  {
    layer: "Data Layer",
    components: [
      { name: "PostgreSQL", description: "Primary database for structured data", status: "Active" },
      { name: "Redis", description: "Caching and session storage", status: "Active" },
      { name: "Elasticsearch", description: "Search and analytics", status: "Active" },
    ],
  },
]

const deploymentOptions = [
  {
    name: "Cloud Native (Kubernetes)",
    description: "Scalable deployment on Kubernetes with auto-scaling and high availability",
    features: ["Auto-scaling", "Load balancing", "Health checks", "Rolling updates"],
    complexity: "High",
    scalability: "Excellent",
    cost: "Variable",
  },
  {
    name: "Docker Compose",
    description: "Simple containerized deployment for development and small teams",
    features: ["Easy setup", "Local development", "Service orchestration", "Volume management"],
    complexity: "Low",
    scalability: "Limited",
    cost: "Low",
  },
  {
    name: "Serverless (Vercel/AWS)",
    description: "Serverless deployment with automatic scaling and zero maintenance",
    features: ["Zero maintenance", "Automatic scaling", "Pay per use", "Global CDN"],
    complexity: "Medium",
    scalability: "Excellent",
    cost: "Pay-per-use",
  },
]

const securityFeatures = [
  {
    category: "Authentication & Authorization",
    features: [
      "Multi-factor authentication (MFA)",
      "Role-based access control (RBAC)",
      "OAuth2 and OpenID Connect",
      "API key management",
      "JWT token validation",
    ],
  },
  {
    category: "Data Protection",
    features: [
      "End-to-end encryption",
      "Data encryption at rest",
      "PII data masking",
      "Secure key management",
      "GDPR compliance tools",
    ],
  },
  {
    category: "Network Security",
    features: ["TLS 1.3 encryption", "DDoS protection", "IP whitelisting", "VPN support", "Network segmentation"],
  },
  {
    category: "Monitoring & Compliance",
    features: [
      "Real-time security monitoring",
      "Audit logging",
      "Compliance reporting",
      "Vulnerability scanning",
      "Security incident response",
    ],
  },
]

export default function ArchitecturePage() {
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
              <BreadcrumbPage>System Architecture</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">System Architecture</h1>
            <p className="text-muted-foreground">
              Comprehensive overview of the platform architecture and deployment topology
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export Diagram
            </Button>
            <Button variant="outline">
              <Share className="mr-2 h-4 w-4" />
              Share Architecture
            </Button>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Architecture Overview</TabsTrigger>
            <TabsTrigger value="deployment">Deployment Options</TabsTrigger>
            <TabsTrigger value="security">Security Architecture</TabsTrigger>
            <TabsTrigger value="scalability">Scalability & Performance</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            {/* High-Level Architecture Diagram */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Network className="h-5 w-5" />
                  <span>High-Level Architecture</span>
                </CardTitle>
                <CardDescription>
                  Microservices architecture with clear separation of concerns and scalable design
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Visual Architecture Representation */}
                  <div className="grid gap-4 lg:grid-cols-4">
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="flex h-16 w-full items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                          <Globe className="h-8 w-8" />
                        </div>
                        <div className="mt-2 text-sm font-medium">Client Applications</div>
                        <div className="text-xs text-muted-foreground">Web, Mobile, CLI</div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="flex h-16 w-full items-center justify-center rounded-lg bg-green-100 text-green-700">
                          <Shield className="h-8 w-8" />
                        </div>
                        <div className="mt-2 text-sm font-medium">API Gateway</div>
                        <div className="text-xs text-muted-foreground">Kong, Auth, Rate Limiting</div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="flex h-16 w-full items-center justify-center rounded-lg bg-purple-100 text-purple-700">
                          <Server className="h-8 w-8" />
                        </div>
                        <div className="mt-2 text-sm font-medium">Microservices</div>
                        <div className="text-xs text-muted-foreground">API Management, AI, Plugins</div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="flex h-16 w-full items-center justify-center rounded-lg bg-orange-100 text-orange-700">
                          <Database className="h-8 w-8" />
                        </div>
                        <div className="mt-2 text-sm font-medium">Data Layer</div>
                        <div className="text-xs text-muted-foreground">PostgreSQL, Redis, ES</div>
                      </div>
                    </div>
                  </div>

                  {/* Data Flow Arrows */}
                  <div className="flex items-center justify-center space-x-4 text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <div className="h-px w-8 bg-border"></div>
                      <span className="text-xs">HTTPS/WSS</span>
                      <div className="h-px w-8 bg-border"></div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="h-px w-8 bg-border"></div>
                      <span className="text-xs">gRPC/REST</span>
                      <div className="h-px w-8 bg-border"></div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="h-px w-8 bg-border"></div>
                      <span className="text-xs">SQL/NoSQL</span>
                      <div className="h-px w-8 bg-border"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Component Details */}
            <div className="space-y-4">
              {architectureComponents.map((layer) => (
                <Card key={layer.layer}>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Layers className="h-5 w-5" />
                      <span>{layer.layer}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-3">
                      {layer.components.map((component) => (
                        <div key={component.name} className="border rounded-lg p-3 space-y-2">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">{component.name}</h4>
                            <Badge variant={component.status === "Active" ? "default" : "secondary"}>
                              {component.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{component.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="deployment" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Cloud className="h-5 w-5" />
                  <span>Deployment Strategies</span>
                </CardTitle>
                <CardDescription>Choose the deployment option that best fits your requirements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {deploymentOptions.map((option) => (
                    <div key={option.name} className="border rounded-lg p-4 space-y-4">
                      <div>
                        <h3 className="font-semibold">{option.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{option.description}</p>
                      </div>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <h4 className="font-medium mb-2">Features</h4>
                          <ul className="space-y-1">
                            {option.features.map((feature) => (
                              <li key={feature} className="text-sm text-muted-foreground flex items-center space-x-2">
                                <div className="h-1 w-1 bg-primary rounded-full"></div>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span>Complexity:</span>
                            <Badge
                              variant={
                                option.complexity === "Low"
                                  ? "secondary"
                                  : option.complexity === "Medium"
                                    ? "default"
                                    : "destructive"
                              }
                            >
                              {option.complexity}
                            </Badge>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span>Scalability:</span>
                            <Badge variant={option.scalability === "Excellent" ? "default" : "secondary"}>
                              {option.scalability}
                            </Badge>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span>Cost:</span>
                            <span className="font-medium">{option.cost}</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full">
                        View Deployment Guide
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Infrastructure Requirements */}
            <Card>
              <CardHeader>
                <CardTitle>Infrastructure Requirements</CardTitle>
                <CardDescription>Minimum and recommended specifications for different deployment sizes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="border rounded-lg p-4 space-y-3">
                    <h4 className="font-medium">Small Team (&lt; 50 APIs)</h4>
                    <div className="space-y-2 text-sm">
                      <div>CPU: 4 cores</div>
                      <div>RAM: 8GB</div>
                      <div>Storage: 100GB SSD</div>
                      <div>Network: 1Gbps</div>
                    </div>
                    <Badge variant="secondary">Development/Testing</Badge>
                  </div>
                  <div className="border rounded-lg p-4 space-y-3">
                    <h4 className="font-medium">Medium Team (50-200 APIs)</h4>
                    <div className="space-y-2 text-sm">
                      <div>CPU: 8 cores</div>
                      <div>RAM: 32GB</div>
                      <div>Storage: 500GB SSD</div>
                      <div>Network: 10Gbps</div>
                    </div>
                    <Badge variant="default">Production Ready</Badge>
                  </div>
                  <div className="border rounded-lg p-4 space-y-3">
                    <h4 className="font-medium">Enterprise (200+ APIs)</h4>
                    <div className="space-y-2 text-sm">
                      <div>CPU: 16+ cores</div>
                      <div>RAM: 64GB+</div>
                      <div>Storage: 1TB+ SSD</div>
                      <div>Network: 10Gbps+</div>
                    </div>
                    <Badge variant="destructive">High Availability</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Lock className="h-5 w-5" />
                  <span>Security Architecture</span>
                </CardTitle>
                <CardDescription>Comprehensive security measures and compliance features</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {securityFeatures.map((category) => (
                    <div key={category.category} className="border rounded-lg p-4 space-y-3">
                      <h3 className="font-semibold">{category.category}</h3>
                      <div className="grid gap-2 md:grid-cols-2">
                        {category.features.map((feature) => (
                          <div key={feature} className="flex items-center space-x-2 text-sm">
                            <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Compliance Standards */}
            <Card>
              <CardHeader>
                <CardTitle>Compliance & Standards</CardTitle>
                <CardDescription>Industry standards and regulatory compliance support</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <div className="text-center p-4 border rounded-lg">
                    <div className="font-semibold">GDPR</div>
                    <div className="text-sm text-muted-foreground mt-1">Data Protection</div>
                    <Badge variant="default" className="mt-2">
                      Compliant
                    </Badge>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="font-semibold">SOC 2 Type II</div>
                    <div className="text-sm text-muted-foreground mt-1">Security Controls</div>
                    <Badge variant="default" className="mt-2">
                      Certified
                    </Badge>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="font-semibold">ISO 27001</div>
                    <div className="text-sm text-muted-foreground mt-1">Information Security</div>
                    <Badge variant="default" className="mt-2">
                      Certified
                    </Badge>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="font-semibold">PCI DSS</div>
                    <div className="text-sm text-muted-foreground mt-1">Payment Security</div>
                    <Badge variant="secondary" className="mt-2">
                      In Progress
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="scalability" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="h-5 w-5" />
                  <span>Scalability & Performance</span>
                </CardTitle>
                <CardDescription>Built for scale with performance optimization at every layer</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Performance Metrics */}
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <div className="text-center p-4 border rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">99.99%</div>
                      <div className="text-sm text-muted-foreground">Uptime SLA</div>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <div className="text-2xl font-bold text-green-600">&lt; 100ms</div>
                      <div className="text-sm text-muted-foreground">API Response Time</div>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">10K+</div>
                      <div className="text-sm text-muted-foreground">Requests/Second</div>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <div className="text-2xl font-bold text-orange-600">Auto</div>
                      <div className="text-sm text-muted-foreground">Scaling</div>
                    </div>
                  </div>

                  {/* Scaling Strategies */}
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="border rounded-lg p-4 space-y-3">
                      <h4 className="font-medium">Horizontal Scaling</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Kubernetes auto-scaling</li>
                        <li>• Load balancer distribution</li>
                        <li>• Database read replicas</li>
                        <li>• CDN edge caching</li>
                      </ul>
                    </div>
                    <div className="border rounded-lg p-4 space-y-3">
                      <h4 className="font-medium">Performance Optimization</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Redis caching layer</li>
                        <li>• Database query optimization</li>
                        <li>• API response compression</li>
                        <li>• Connection pooling</li>
                      </ul>
                    </div>
                  </div>

                  {/* Monitoring & Observability */}
                  <div className="border rounded-lg p-4 space-y-3">
                    <h4 className="font-medium">Monitoring & Observability</h4>
                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="space-y-2">
                        <h5 className="text-sm font-medium">Metrics</h5>
                        <ul className="space-y-1 text-xs text-muted-foreground">
                          <li>• Prometheus metrics</li>
                          <li>• Custom dashboards</li>
                          <li>• Real-time alerts</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h5 className="text-sm font-medium">Logging</h5>
                        <ul className="space-y-1 text-xs text-muted-foreground">
                          <li>• Centralized logging</li>
                          <li>• Log aggregation</li>
                          <li>• Search & analysis</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h5 className="text-sm font-medium">Tracing</h5>
                        <ul className="space-y-1 text-xs text-muted-foreground">
                          <li>• Distributed tracing</li>
                          <li>• Performance profiling</li>
                          <li>• Error tracking</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </SidebarInset>
  )
}
