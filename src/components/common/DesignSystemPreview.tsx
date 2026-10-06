import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { siteConfig } from "@/data/siteConfig";
import {
  Phone,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  Car,
  Clock,
  Award,
  Sparkles,
  ArrowRight,
  UserCheck,
} from "lucide-react";

export function DesignSystemPreview() {
  return (
    <main className="py-12 md:py-20 pb-28 md:pb-20 space-y-16">
      {/* 1. Introduction & Overview */}
      <Container>
        <SectionHeading
          badge="Design System & UI Foundation"
          badgeVariant="brand"
          title="Hệ Thống Thiết Kế Giao Diện Đào Tạo Lái Xe"
          description="Nền tảng giao diện chuẩn mực, tối ưu trải nghiệm đọc, độ tin cậy cao và định hướng chuyển đổi (conversion-focused) theo chuẩn Mobile-First."
          align="center"
        />

        {/* Brand Summary Card */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-850 to-brand-950 text-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 border border-brand-400/30 text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" /> Thông tin tuyển sinh chính thức
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                {siteConfig.brandName}
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {siteConfig.tagline}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15 space-y-3 text-xs sm:text-sm">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Hotline chính:</span>
                <a
                  href={`tel:${siteConfig.contact.hotlineRaw}`}
                  className="font-bold text-amber-400 hover:underline"
                >
                  {siteConfig.contact.hotlineDisplay}
                </a>
              </div>
              <div className="flex items-center justify-between border-t border-white/10 pt-2">
                <span className="text-slate-400">Phụ trách tư vấn:</span>
                <span className="font-semibold text-white">
                  {siteConfig.contact.consultantName}
                </span>
              </div>
              <div className="flex items-center justify-between border-t border-white/10 pt-2">
                <span className="text-slate-400">SĐT tư vấn:</span>
                <a
                  href={`tel:${siteConfig.contact.consultantPhoneRaw}`}
                  className="font-bold text-emerald-400 hover:underline"
                >
                  {siteConfig.contact.consultantPhoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* 2. Typography & Color System Showcase */}
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Typography Scale */}
          <Card variant="default">
            <CardHeader>
              <Badge variant="brand" size="sm" className="w-fit">Typography System</Badge>
              <CardTitle>Cấp Bậc Chữ & Khả Năng Đọc</CardTitle>
              <CardDescription>
                Tối ưu font sans hệ thống hiện đại, độ tương phản cao, dễ đọc trên mọi thiết bị.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <div className="text-xs text-slate-400 mb-1">Heading 1 (2xl - 4xl, ExtraBold)</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Học Lái Xe Thật - Thi Đỗ Thật
                </div>
              </div>
              <div className="border-b border-slate-100 pb-3">
                <div className="text-xs text-slate-400 mb-1">Heading 2 (xl - 2xl, Bold)</div>
                <div className="text-xl sm:text-2xl font-bold text-slate-800">
                  Cam Kết Đào Tạo 1 Kèm 1 Không Phát Sinh
                </div>
              </div>
              <div className="border-b border-slate-100 pb-3">
                <div className="text-xs text-slate-400 mb-1">Body Text (14px - 16px, Slate-600)</div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Lộ trình học bài bản từ lý thuyết 600 câu, 120 tình huống mô phỏng đến 11 bài thi sa hình và lái xe đường trường thực tế trên xe tập lái đời mới.
                </p>
              </div>
              <div>
                <div className="text-xs text-slate-400 mb-1">Caption / Micro-copy (11px - 12px)</div>
                <p className="text-xs text-slate-400 font-medium">
                  * Hỗ trợ chia nhỏ học phí làm 2 - 3 đợt linh hoạt cho học viên.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Color System */}
          <Card variant="default">
            <CardHeader>
              <Badge variant="accent" size="sm" className="w-fit">Color Tokens</Badge>
              <CardTitle>Bảng Màu Thương Hiệu & Điểm Chuyển Đổi</CardTitle>
              <CardDescription>
                Phối màu hài hòa, tạo cảm giác uy tín, tin cậy và kích thích hành động rõ ràng.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Primary Trust Blue */}
              <div className="p-3.5 rounded-xl bg-brand-50 border border-brand-200/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-600 text-white flex items-center justify-center font-bold text-xs">
                    Navy
                  </div>
                  <div>
                    <div className="text-xs font-bold text-brand-900">Brand Trust Navy (#0F2942 / #1E60D5)</div>
                    <div className="text-[11px] text-brand-700">Màu chủ đạo, thể hiện sự chính quy, an tâm</div>
                  </div>
                </div>
                <Badge variant="brand" size="sm">Primary</Badge>
              </div>

              {/* Conversion Accent */}
              <div className="p-3.5 rounded-xl bg-accent-50 border border-accent-200/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent-500 text-white flex items-center justify-center font-bold text-xs">
                    CTA
                  </div>
                  <div>
                    <div className="text-xs font-bold text-accent-700">Warm Accent Orange (#EA580C)</div>
                    <div className="text-[11px] text-accent-600">Màu nút hành động, chuyển đổi cao</div>
                  </div>
                </div>
                <Badge variant="accent" size="sm">Action</Badge>
              </div>

              {/* Success Green */}
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
                    Safe
                  </div>
                  <div>
                    <div className="text-xs font-bold text-emerald-800">Emerald Success (#059669)</div>
                    <div className="text-[11px] text-emerald-700">Cam kết, hoàn thành, Zalo Chat</div>
                  </div>
                </div>
                <Badge variant="success" size="sm">Success</Badge>
              </div>

              {/* Slate Neutral */}
              <div className="p-3.5 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-700 text-white flex items-center justify-center font-bold text-xs">
                    Slate
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-800">Slate Neutral (#0F172A / #64748B)</div>
                    <div className="text-[11px] text-slate-600">Văn bản, đường viền, nền phụ trợ</div>
                  </div>
                </div>
                <Badge variant="neutral" size="sm">Neutral</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>

      {/* 3. Button Component Variants Showcase */}
      <Container>
        <SectionHeading
          badge="Interactive UI Components"
          badgeVariant="accent"
          title="Hệ Thống Button & Tương Tác"
          description="Đầy đủ các biến thể từ CTA chuyển đổi mạnh, nút phụ, nút liên hệ trực tiếp cho đến trạng thái loading và disabled."
          align="left"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Action & Accent Buttons */}
          <Card variant="interactive">
            <CardHeader>
              <CardTitle className="text-base">1. Nút Hành Động / CTA (Accent & Brand)</CardTitle>
              <CardDescription>Dùng cho các vị trí quan trọng như Đăng ký tư vấn, Nhận báo giá.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="accent" size="lg" fullWidth rightIcon={<Sparkles className="w-4 h-4" />}>
                Đăng ký tư vấn ngay (LG)
              </Button>
              <Button variant="accent" size="md" fullWidth rightIcon={<ArrowRight className="w-4 h-4" />}>
                Xem chi tiết học phí (MD)
              </Button>
              <Button variant="primary" size="md" fullWidth leftIcon={<CheckCircle2 className="w-4 h-4" />}>
                Xác nhận đăng ký học
              </Button>
            </CardContent>
          </Card>

          {/* Contact Buttons */}
          <Card variant="interactive">
            <CardHeader>
              <CardTitle className="text-base">2. Nút Liên Hệ Trực Tiếp</CardTitle>
              <CardDescription>Tích hợp trực tiếp số điện thoại và liên kết Zalo thuận tiện.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button
                variant="outline"
                size="md"
                fullWidth
                href={`tel:${siteConfig.contact.hotlineRaw}`}
                leftIcon={<Phone className="w-4 h-4 text-brand-600" />}
              >
                Hotline: {siteConfig.contact.hotlineDisplay}
              </Button>
              <Button
                variant="outline"
                size="md"
                fullWidth
                href={siteConfig.contact.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                leftIcon={<MessageSquare className="w-4 h-4 text-emerald-600" />}
                className="text-emerald-700 hover:bg-emerald-50 hover:border-emerald-300"
              >
                Chat Zalo ({siteConfig.contact.consultantName})
              </Button>
              <Button variant="secondary" size="md" fullWidth leftIcon={<UserCheck className="w-4 h-4" />}>
                Đặt lịch học thử 1 buổi
              </Button>
            </CardContent>
          </Card>

          {/* Utility & States */}
          <Card variant="interactive">
            <CardHeader>
              <CardTitle className="text-base">3. Kích Cỡ & Trạng Thái</CardTitle>
              <CardDescription>Hỗ trợ đa dạng size, icon và trạng thái loading/disabled mượt mà.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex gap-2">
                <Button variant="primary" size="sm">Small</Button>
                <Button variant="secondary" size="sm">Secondary</Button>
                <Button variant="ghost" size="sm">Ghost Link</Button>
              </div>
              <Button variant="primary" size="md" isLoading fullWidth>
                Đang gửi thông tin...
              </Button>
              <Button variant="primary" size="md" disabled fullWidth>
                Nút ở trạng thái Disabled
              </Button>
            </CardContent>
          </Card>
        </div>
      </Container>

      {/* 4. Card Variants Showcase */}
      <Container>
        <SectionHeading
          badge="Structure & Surfaces"
          badgeVariant="success"
          title="Hệ Thống Thẻ Nội Dung (Cards)"
          description="Được phân tầng rõ ràng từ thẻ tiêu chuẩn, thẻ tương tác di chuột, thẻ nổi bật có viền thương hiệu cho đến thẻ phẳng."
          align="left"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Default */}
          <Card variant="default">
            <CardHeader>
              <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-1">
                <Car className="w-5 h-5" />
              </div>
              <CardTitle className="text-base">Thẻ Mặc Định (Default)</CardTitle>
              <CardDescription>Viền thanh mảnh, đổ bóng nhẹ tinh tế.</CardDescription>
            </CardHeader>
            <CardContent className="text-xs text-slate-600">
              Phù hợp cho các khối thông tin cơ bản, mô tả nội dung chung.
            </CardContent>
          </Card>

          {/* Card 2: Interactive */}
          <Card variant="interactive">
            <CardHeader>
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-1">
                <Clock className="w-5 h-5" />
              </div>
              <CardTitle className="text-base">Thẻ Tương Tác (Interactive)</CardTitle>
              <CardDescription>Hiệu ứng nâng nhẹ và đổi màu viền khi hover.</CardDescription>
            </CardHeader>
            <CardContent className="text-xs text-slate-600">
              Lý tưởng cho danh sách sân tập, mẹo thi, hoặc các khóa học có thể nhấn vào.
            </CardContent>
          </Card>

          {/* Card 3: Featured */}
          <Card variant="featured">
            <div className="absolute top-0 right-0 bg-brand-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
              Nổi Bật
            </div>
            <CardHeader>
              <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-1">
                <Award className="w-5 h-5" />
              </div>
              <CardTitle className="text-base">Thẻ Nổi Bật (Featured)</CardTitle>
              <CardDescription>Viền đậm màu thương hiệu, thu hút ánh nhìn.</CardDescription>
            </CardHeader>
            <CardContent className="text-xs text-slate-600">
              Dành riêng cho gói học được đăng ký nhiều nhất hoặc ưu đãi đặc biệt.
            </CardContent>
          </Card>

          {/* Card 4: Flat */}
          <Card variant="flat">
            <CardHeader>
              <div className="w-10 h-10 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center mb-1">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <CardTitle className="text-base">Thẻ Phẳng (Flat)</CardTitle>
              <CardDescription>Nền màu slate nhẹ, không đổ bóng.</CardDescription>
            </CardHeader>
            <CardContent className="text-xs text-slate-600">
              Phù hợp cho các khối điều khoản, lưu ý hoặc ghi chú kỹ thuật.
            </CardContent>
          </Card>
        </div>
      </Container>

      {/* 5. Responsive & Mobile-First Assurance */}
      <Container>
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-slate-900">
                Sẵn Sàng Cho Các Section Tiếp Theo
              </h3>
              <p className="text-sm text-slate-600">
                Toàn bộ Design System, Header (Desktop/Mobile Drawer) và Mobile Fixed Bottom Bar đã được kết nối hoàn chỉnh.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="success" size="md">
                <CheckCircle2 className="w-3.5 h-3.5" /> Mobile-First Ready
              </Badge>
              <Badge variant="brand" size="md">
                <ShieldCheck className="w-3.5 h-3.5" /> Accessible
              </Badge>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
