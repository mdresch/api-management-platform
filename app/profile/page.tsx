"use client";

import { useEffect, useState } from "react";
import { Role, getCurrentUserRole, setCurrentUserRole } from "@/lib/rbac";

const ROLES: Role[] = [
	"api-product-manager",
	"api-developer",
	"qa-engineer",
	"security-officer",
	"api-consumer",
	"enterprise-architect",
];

export default function ProfilePage() {
];

export default function ProfilePage() {
	const [role, setRole] = useState<Role>(() => {
		try {
			return getCurrentUserRole();
		} catch (error) {
			console.error("Error getting current user role:", error);
			return ROLES[0]; // Default to first role
		}
	});

	useEffect(() => {
		try {
			setRole(getCurrentUserRole());
		} catch (error) {
			console.error("Error getting current user role:", error);
		}
	}, []);

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const newRole = e.target.value as Role;
		setRole(newRole);
		try {
			setCurrentUserRole(newRole);
			// Use a short timeout before reload to ensure localStorage is flushed
			setTimeout(() => window.location.reload(), 100);
		} catch (error) {
			console.error("Error setting current user role:", error);
		}
	};

	return (

	useEffect(() => {
		setRole(getCurrentUserRole());
	}, []);

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const newRole = e.target.value as Role;
		setRole(newRole);
		setCurrentUserRole(newRole);
		// Use a short timeout before reload to ensure localStorage is flushed
		setTimeout(() => window.location.reload(), 100);
	};

	return (
		<div className="max-w-xl mx-auto py-10">
			<h1 className="text-2xl font-bold mb-4">Profile</h1>
			<div className="mb-6">
				<div className="text-lg font-medium mb-2">
					Signed in as:{" "}
					<span className="font-mono">John Doe</span>
				</div>
				<div className="text-sm text-muted-foreground mb-2">
					RBAC Role:
				</div>
				<select
					className="border rounded px-3 py-2"
					value={role}
					onChange={handleChange}
				>
					{ROLES.map((r) => (
						<option key={r} value={r}>
							{r}
						</option>
					))}
				</select>
				<div className="mt-2 text-xs text-muted-foreground">
					(Only administrators can change this role.)
				</div>
			</div>
		</div>
	);
}
