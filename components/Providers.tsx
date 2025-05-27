"use client";
import { ReactNode } from "react";
import { RBACProvider } from "@/components/rbac-context";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <RBACProvider>
      <SidebarProvider>
        <AppSidebar />
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

// import { sanitizeHtml } from 'some-sanitization-library'; // Import a sanitization library

export function Providers({ children }: { children: ReactNode }) {
  return (
    <RBACProvider>
      <SidebarProvider>
        <AppSidebar />
        <main className="flex-1">{typeof children === 'string' ? sanitizeHtml(children) : children}</main>
      </SidebarProvider>
    </RBACProvider>
  );
      </SidebarProvider>
    </RBACProvider>
  );
}
