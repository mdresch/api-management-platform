"use client";

import React, { createContext, useContext, ReactNode, useEffect, useState } from "react";
import { Role, getCurrentUserRole } from "@/lib/rbac";

interface RBACContextProps {
  role: Role;
}

const RBACContext = createContext<RBACContextProps | undefined>(undefined);

export const RBACProvider = ({ children }: { children: ReactNode }) => {
  const [role, setRole] = useState<Role>(getCurrentUserRole());

  useEffect(() => {
    setRole(getCurrentUserRole());
    // Listen for role changes in localStorage (e.g., from profile page)
    const onStorage = () => setRole(getCurrentUserRole());
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  return <RBACContext.Provider value={{ role }}>{children}</RBACContext.Provider>;
};

export function useRBAC() {
  const context = useContext(RBACContext);
  if (!context) throw new Error("useRBAC must be used within RBACProvider");
  return context;
}
