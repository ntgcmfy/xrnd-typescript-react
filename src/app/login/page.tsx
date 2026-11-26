import { AuthForm } from "@/components/auth-form";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";

export default function LoginPage() {
  return (
    <div className="mx-auto w-full max-w-sm">
      <PageHeader title="ログイン" />
      <Card>
        <AuthForm mode="login" />
      </Card>
    </div>
  );
}
