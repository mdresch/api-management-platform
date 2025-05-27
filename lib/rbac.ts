// Role definitions for the API management platform
export type Role =
  | 'api-product-manager'
  | 'api-developer'
  | 'qa-engineer'
  | 'security-officer'
  | 'api-consumer'
  | 'enterprise-architect';

export interface RolePermissions {
  [key: string]: string[]; // role: allowed routes
}

export const rolePermissions: RolePermissions = {
  'api-product-manager': [
    '/executive-dashboard',
    '/apis',
    '/governance',
    '/monitoring',
    '/architecture',
    '/reports',
    '/settings',
  ],
  'api-developer': [
    '/design-studio',
    '/apis',
    '/testing',
    '/developer-portal',
    '/monitoring',
    '/settings',
  ],
  'qa-engineer': [
    '/testing',
    '/monitoring',
    '/apis',
    '/reports',
  ],
  'security-officer': [
    '/security',
    '/governance',
    '/monitoring',
    '/reports',
    '/settings',
  ],
  'api-consumer': [
    '/developer-portal',
    '/docs',
    '/apis',
    '/marketplace',
  ],
  'enterprise-architect': [
    '/architecture',
    '/plugins',
    '/monitoring/analytics',
    '/settings',
    '/executive-dashboard',
    '/reports',
  ],
};

// Get current user role from localStorage (client-side) or fallback to default
export function getCurrentUserRole(): Role {
  if (typeof window !== "undefined") {
    const stored = window.localStorage.getItem("userRole");
    if (stored && [
      'api-product-manager',
      'api-developer',
      'qa-engineer',
      'security-officer',
      'api-consumer',
      'enterprise-architect',
    ].includes(stored)) {
      return stored as Role;
    }
  }
  // Default role if not set
  return 'api-product-manager';
}

// Set current user role in localStorage (for admin use)
export function setCurrentUserRole(role: Role) {
  if (typeof window !== "undefined") {
    window.localStorage.setItem("userRole", role);
  }
}
