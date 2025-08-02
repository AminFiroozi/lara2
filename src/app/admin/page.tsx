import { PageHeader } from '@/components/admin/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AdminDashboardPage() {
  return (
    <div>
      <PageHeader
        title="داشبورد"
        description="به پنل مدیریت ستاره خوش آمدید."
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle>آمار کلی</CardTitle>
          </CardHeader>
          <CardContent>
            <p>اینجا محلی برای نمایش آمار کلی سایت خواهد بود.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
