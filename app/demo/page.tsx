"use client"

import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
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
} from "@/components/ui/dialog"
import { Play, CheckCircle, ArrowRight, Lightbulb, Users, Code2, Shield, Activity, Brain } from "lucide-react"
import { useState, useEffect } from "react"

const demoSteps = [
  {
    id: "welcome",
    title: "Welcome to API Management Platform",
    description: "Your comprehensive Centre of Excellence for API lifecycle management",
    icon: Play,
    color: "bg-blue-500",
    features: ["127 APIs managed", "2,847 active developers", "99.9% uptime"],
  },
  {
    id: "dashboard",
    title: "Real-time Dashboard",
    description: "Monitor your entire API ecosystem at a glance",
    icon: Activity,
    color: "bg-green-500",
    features: ["Live metrics", "Performance monitoring", "Health checks"],
  },
  {
    id: "design-studio",
    title: "Visual API Design Studio",
    description: "Build APIs with our intuitive visual editor",
    icon: Code2,
    color: "bg-purple-500",
    features: ["OpenAPI integration", "Real-time validation", "AI suggestions"],
  },
  {
    id: "ai-insights",
    title: "AI-Powered Insights",
    description: "Intelligent analytics and predictive recommendations",
    icon: Brain,
    color: "bg-orange-500",
    features: ["Anomaly detection", "Usage predictions", "Smart optimization"],
  },
  {
    id: "governance",
    title: "Enterprise Governance",
    description: "Policy enforcement and compliance monitoring",
    icon: Shield,
    color: "bg-red-500",
    features: ["Policy automation", "Approval workflows", "Compliance tracking"],
  },
  {
    id: "developer-portal",
    title: "Developer Ecosystem",
    description: "Engage and onboard your developer community",
    icon: Users,
    color: "bg-indigo-500",
    features: ["Guided onboarding", "Community forum", "SDK downloads"],
  },
]

export default function DemoPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showDialog, setShowDialog] = useState(false)

  useEffect(() => {
    if (isPlaying && currentStep < demoSteps.length - 1) {
      const timer = setTimeout(() => {
        setCurrentStep(currentStep + 1)
      }, 3000)
      return () => clearTimeout(timer)
    } else if (isPlaying && currentStep === demoSteps.length - 1) {
      setIsPlaying(false)
      setShowDialog(true)
    }
  }, [currentStep, isPlaying])

  const startDemo = () => {
    setCurrentStep(0)
    setIsPlaying(true)
  }

  const nextStep = () => {
    if (currentStep < demoSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const currentStepData = demoSteps[currentStep]

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
              <BreadcrumbPage>Interactive Demo</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Interactive Platform Demo</h1>
            <p className="text-muted-foreground">Experience the full capabilities of our API Management Platform</p>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
              <Play className="mr-1 h-3 w-3" />
              Demo Mode
            </Badge>
            {!isPlaying && (
              <Button onClick={startDemo}>
                <Play className="mr-2 h-4 w-4" />
                Start Guided Tour
              </Button>
            )}
          </div>
        </div>

        {/* Progress Bar */}
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Demo Progress</span>
                <span className="text-sm text-muted-foreground">
                  {currentStep + 1} of {demoSteps.length}
                </span>
              </div>
              <Progress value={((currentStep + 1) / demoSteps.length) * 100} className="w-full" />
              <div className="flex justify-between text-xs text-muted-foreground">
                {demoSteps.map((step, index) => (
                  <div
                    key={step.id}
                    className={`flex flex-col items-center space-y-1 ${index <= currentStep ? "text-primary" : ""}`}
                  >
                    <div className={`h-2 w-2 rounded-full ${index <= currentStep ? "bg-primary" : "bg-muted"}`} />
                    <span className="hidden md:block">{step.title.split(" ")[0]}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Current Step Display */}
        <div className="grid gap-4 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-lg ${currentStepData.color} text-white`}
                >
                  <currentStepData.icon className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-xl">{currentStepData.title}</CardTitle>
                  <CardDescription className="text-base">{currentStepData.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-2 md:grid-cols-3">
                  {currentStepData.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 p-3 bg-muted rounded-lg">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Step-specific content */}
                {currentStep === 0 && (
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
                    <h3 className="font-semibold mb-2">Platform Overview</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Our API Management Platform serves as your organization's Centre of Excellence, providing
                      comprehensive tools for the entire API lifecycle - from design and development to monitoring and
                      governance.
                    </p>
                    <div className="grid gap-2 md:grid-cols-2">
                      <div className="text-sm">
                        <strong>🎯 Key Benefits:</strong>
                        <ul className="list-disc list-inside mt-1 space-y-1 text-muted-foreground">
                          <li>Accelerated API development</li>
                          <li>Enhanced security & compliance</li>
                          <li>Improved developer experience</li>
                          <li>Data-driven insights</li>
                        </ul>
                      </div>
                      <div className="text-sm">
                        <strong>🚀 Enterprise Features:</strong>
                        <ul className="list-disc list-inside mt-1 space-y-1 text-muted-foreground">
                          <li>AI-powered analytics</li>
                          <li>Visual API design studio</li>
                          <li>Plugin ecosystem</li>
                          <li>Multi-tenant architecture</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 1 && (
                  <div className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-medium mb-2">Real-time Metrics</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>API Requests/min</span>
                            <span className="font-medium">1,247</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Avg Response Time</span>
                            <span className="font-medium">142ms</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Success Rate</span>
                            <span className="font-medium text-green-600">99.8%</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-medium mb-2">System Health</h4>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span>API Gateway</span>
                            <Badge variant="default" className="text-xs">
                              Healthy
                            </Badge>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span>Database</span>
                            <Badge variant="default" className="text-xs">
                              Healthy
                            </Badge>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span>Cache Layer</span>
                            <Badge variant="default" className="text-xs">
                              Healthy
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-4">
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h4 className="font-medium mb-2">Visual API Builder</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Design APIs visually with our intuitive drag-and-drop interface. Generate OpenAPI specifications
                        automatically with real-time validation.
                      </p>
                      <div className="grid gap-2 md:grid-cols-3 text-xs">
                        <div className="p-2 bg-white rounded border">
                          <strong>Endpoint Designer</strong>
                          <br />
                          Visual endpoint creation
                        </div>
                        <div className="p-2 bg-white rounded border">
                          <strong>Schema Validator</strong>
                          <br />
                          Real-time validation
                        </div>
                        <div className="p-2 bg-white rounded border">
                          <strong>AI Assistant</strong>
                          <br />
                          Smart suggestions
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-4">
                    <div className="p-4 bg-orange-50 rounded-lg">
                      <h4 className="font-medium mb-2">AI-Powered Intelligence</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Leverage machine learning for anomaly detection, predictive analytics, and intelligent
                        recommendations to optimize your API ecosystem.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm">
                          <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                          <span>High traffic anomaly detected on Payment API</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <div className="h-2 w-2 bg-yellow-500 rounded-full"></div>
                          <span>Predicted 40% traffic increase next week</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                          <span>Optimization suggestion: Add caching layer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 4 && (
                  <div className="space-y-4">
                    <div className="p-4 bg-red-50 rounded-lg">
                      <h4 className="font-medium mb-2">Enterprise Governance</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Enforce organizational policies, manage approval workflows, and ensure compliance with industry
                        standards like GDPR, SOC 2, and PCI DSS.
                      </p>
                      <div className="grid gap-2 md:grid-cols-2 text-xs">
                        <div className="space-y-1">
                          <strong>Active Policies:</strong>
                          <div className="text-muted-foreground">• API Naming Convention</div>
                          <div className="text-muted-foreground">• Security Headers Required</div>
                          <div className="text-muted-foreground">• Rate Limiting Policy</div>
                        </div>
                        <div className="space-y-1">
                          <strong>Compliance Status:</strong>
                          <div className="text-green-600">• GDPR: 92% compliant</div>
                          <div className="text-green-600">• SOC 2: 88% compliant</div>
                          <div className="text-yellow-600">• PCI DSS: 67% compliant</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 5 && (
                  <div className="space-y-4">
                    <div className="p-4 bg-indigo-50 rounded-lg">
                      <h4 className="font-medium mb-2">Developer Experience</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Provide an exceptional developer experience with guided onboarding, comprehensive documentation,
                        SDKs, and an active community forum.
                      </p>
                      <div className="grid gap-2 md:grid-cols-2 text-xs">
                        <div className="space-y-1">
                          <strong>Developer Metrics:</strong>
                          <div className="text-muted-foreground">• 2,847 active developers</div>
                          <div className="text-muted-foreground">• 36.9K SDK downloads</div>
                          <div className="text-muted-foreground">• 23min avg onboarding time</div>
                        </div>
                        <div className="space-y-1">
                          <strong>Community Engagement:</strong>
                          <div className="text-muted-foreground">• 1,234 forum posts</div>
                          <div className="text-muted-foreground">• 95% satisfaction rate</div>
                          <div className="text-muted-foreground">• 24/7 support available</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Navigation Panel */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Demo Navigation</CardTitle>
              <CardDescription>Control your demo experience</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex space-x-2">
                  <Button onClick={prevStep} disabled={currentStep === 0} variant="outline" className="flex-1">
                    Previous
                  </Button>
                  <Button onClick={nextStep} disabled={currentStep === demoSteps.length - 1} className="flex-1">
                    Next
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                <Separator />

                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Quick Jump</h4>
                  {demoSteps.map((step, index) => (
                    <Button
                      key={step.id}
                      variant={index === currentStep ? "default" : "ghost"}
                      size="sm"
                      className="w-full justify-start"
                      onClick={() => setCurrentStep(index)}
                    >
                      <step.icon className="mr-2 h-3 w-3" />
                      {step.title}
                    </Button>
                  ))}
                </div>

                <Separator />

                <div className="p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <Lightbulb className="h-4 w-4 text-blue-600 mt-0.5" />
                    <div className="text-xs">
                      <strong className="text-blue-900">Pro Tip:</strong>
                      <p className="text-blue-800 mt-1">
                        This demo showcases real platform capabilities. Contact us to see how these features can
                        transform your API strategy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Demo Completion Dialog */}
        <Dialog open={showDialog} onOpenChange={setShowDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>🎉 Demo Complete!</DialogTitle>
              <DialogDescription>
                You've experienced the full power of our API Management Platform. Ready to transform your API strategy?
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-medium text-green-900 mb-2">What You've Seen:</h4>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>✅ Real-time monitoring and analytics</li>
                  <li>✅ Visual API design and validation</li>
                  <li>✅ AI-powered insights and predictions</li>
                  <li>✅ Enterprise governance and compliance</li>
                  <li>✅ Developer-first experience</li>
                </ul>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">Next Steps:</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>📞 Schedule a personalized consultation</li>
                  <li>🔧 Request a custom proof of concept</li>
                  <li>📊 Get a detailed ROI analysis</li>
                  <li>🚀 Start your pilot implementation</li>
                </ul>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowDialog(false)}>
                Explore More
              </Button>
              <Button onClick={() => setShowDialog(false)}>Contact Sales</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </SidebarInset>
  )
}
