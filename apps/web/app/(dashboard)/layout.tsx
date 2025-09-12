import AuthGard from "@/modules/auth/ui/components/auth-guard";
import OrganizationGuard from "@/modules/auth/ui/components/organization-guard";

export default function RootLayout({ children } : { children: React.ReactNode }) {
    return (
       
        <AuthGard> 
           <OrganizationGuard>
              {children}
           </OrganizationGuard>
        </AuthGard>
    )
}