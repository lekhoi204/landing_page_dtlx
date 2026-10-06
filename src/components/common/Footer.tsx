import React from "react";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/siteConfig";
import {
  Phone,
  MessageSquare,
  ShieldCheck,
  Award,
  Clock,
  HeartHandshake,
  CheckCircle2,
  ChevronRight,
  Sparkles,
} from "lucide-react";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer
      className="bg-slate-950 text-slate-400 border-t border-slate-800 text-sm relative z-20 pb-24 md:pb-10"
      aria-label="Chân trang website đào tạo lái xe"
    >
      {/* Top Value Banner */}
      <div className="border-b border-slate-800/80 bg-slate-900/60 py-8">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-500/20 text-brand-400 flex items-center justify-center shrink-0 border border-brand-500/30">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm">Học Phí Trọn Gói</h3>
                <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                  Cam kết minh bạch trên hợp đồng, không phát sinh chi phí phụ.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm">Tỷ Lệ Đỗ Cao</h3>
                <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                  Đào tạo chuẩn thực tế, rèn mẹo sa hình và thực hành DAT 810km.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm">1 Kèm 1 Tận Tâm</h3>
                <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                  Giáo viên sư phạm chuẩn mực, Thầy Toàn trực tiếp kèm cặp và hỗ trợ đổi giáo viên nếu không hài lòng.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent-500/20 text-accent-400 flex items-center justify-center shrink-0 border border-accent-500/30">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm">Thời Gian Linh Hoạt</h3>
                <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                  Học viên chủ động chọn lịch học cuối tuần hoặc buổi tối rảnh.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Footer Links */}
      <div className="py-12">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
            {/* Col 1: Brand & Bio (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-brand-600 text-white flex items-center justify-center font-black text-xl shadow-md">
                  🚗
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-black text-white tracking-tight leading-tight">
                    {siteConfig.shortName}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    Đào tạo lái xe chuẩn thực tế
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
                Trung tâm Thầy Toàn Dạy Lái Xe - Đào tạo &amp; sát hạch lái xe chuẩn quốc gia. Chúng tôi chú trọng kỹ năng lái xe an toàn, vững vàng thực tế trên mọi cung đường.
              </p>

              <div className="pt-2 text-xs space-y-2 text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Khai giảng liên tục hàng tháng các hạng B1, B2, C</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-400" />
                  <span>Sân tập chuẩn sát hạch có xe gắn chip thi thử</span>
                </div>
              </div>
            </div>

            {/* Col 2: Navigation Links (3 cols) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                Khóa Học Đào Tạo
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <a
                    href="#pricing"
                    className="hover:text-brand-400 transition-colors flex items-center gap-1.5 py-1"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                    <span>Học lái xe B1 tự động (Không kinh doanh)</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="hover:text-brand-400 transition-colors flex items-center gap-1.5 py-1"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                    <span>Học lái xe B2 số sàn (Kinh doanh vận tải)</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="hover:text-brand-400 transition-colors flex items-center gap-1.5 py-1"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                    <span>Học bằng lái xe Hạng C (Xe tải trên 3.5 tấn)</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#special-packages"
                    className="hover:text-brand-400 transition-colors flex items-center gap-1.5 py-1"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                    <span>Bổ túc tay lái xe số tự động / số sàn</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#special-packages"
                    className="hover:text-brand-400 transition-colors flex items-center gap-1.5 py-1"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                    <span>Khóa học đưa đón tận nhà &amp; Nữ giáo viên 1-1</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Quick Navigation & Tips (2 cols) */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                Cẩm Nang &amp; Hỗ Trợ
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <a
                    href="#tips"
                    className="hover:text-brand-400 transition-colors flex items-center gap-1.5 py-1"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                    <span>Mẹo thi sa hình 11 bài</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#grounds"
                    className="hover:text-brand-400 transition-colors flex items-center gap-1.5 py-1"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                    <span>Hệ thống sân tập gần nhà</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#instructors"
                    className="hover:text-brand-400 transition-colors flex items-center gap-1.5 py-1"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                    <span>Đội ngũ giáo viên</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#commitments"
                    className="hover:text-brand-400 transition-colors flex items-center gap-1.5 py-1"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                    <span>Cam kết 3 Không</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#post-license"
                    className="hover:text-brand-400 transition-colors flex items-center gap-1.5 py-1"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                    <span>Góc sau khi có bằng</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Contact Box (3 cols) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                Liên Hệ &amp; Mạng Xã Hội
              </h4>

              <div className="space-y-2.5">
                <a
                  href={`tel:${siteConfig.contact.hotlineRaw}`}
                  className="p-3 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 transition-all flex items-center gap-3 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-bold shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block leading-tight">
                      Hotline Tuyển Sinh 24/7
                    </span>
                    <span className="text-sm font-black text-white group-hover:text-amber-400 transition-colors">
                      {siteConfig.contact.hotlineDisplay}
                    </span>
                  </div>
                </a>

                <a
                  href={siteConfig.contact.zaloUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-emerald-950/50 hover:bg-emerald-900/50 border border-emerald-500/30 transition-all flex items-center gap-3 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-500 text-white flex items-center justify-center font-bold shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-emerald-300 block leading-tight">
                      Tư vấn Zalo trực tiếp
                    </span>
                    <span className="text-sm font-black text-white group-hover:text-emerald-300 transition-colors">
                      {siteConfig.contact.consultantName} ({siteConfig.contact.consultantPhoneDisplay})
                    </span>
                  </div>
                </a>

                <a
                  href={siteConfig.contact.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900 hover:bg-slate-850 border border-rose-500/30 hover:border-rose-500/60 transition-all flex items-center gap-3 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-rose-600 text-white flex items-center justify-center font-bold shrink-0 text-sm">
                    🎵
                  </div>
                  <div>
                    <span className="text-[11px] text-rose-300 block leading-tight">
                      Kênh TikTok Thầy Toàn
                    </span>
                    <span className="text-sm font-bold text-white group-hover:text-rose-300 transition-colors">
                      @thaytoandaylai999
                    </span>
                  </div>
                </a>
              </div>

              <div className="pt-2">
                <a
                  href="#consultation"
                  className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-xl bg-accent-500 text-white font-bold text-xs hover:bg-accent-600 transition-colors shadow-sm"
                >
                  <Sparkles className="w-3.5 h-3.5 mr-1.5" /> Đăng Ký Tư Vấn Ngay
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar & Copyright */}
      <div className="border-t border-slate-800/80 pt-6">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
            <p>
              © {currentYear} {siteConfig.brandName}. Bản quyền thuộc về trung tâm.
            </p>
            <p className="text-[11px] text-slate-400">
              Chương trình đào tạo lái xe chuẩn Tổng cục Đường bộ Việt Nam.
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
