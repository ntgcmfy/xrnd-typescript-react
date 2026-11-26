import { AuthForm } from "@/components/auth-form";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";

export default function SignupPage() {
  return (
    <div className="mx-auto w-full max-w-sm">
      <PageHeader title="登録" />
      <Card>
        <AuthForm mode="signup" />
      </Card>
    </div>
  );
}
