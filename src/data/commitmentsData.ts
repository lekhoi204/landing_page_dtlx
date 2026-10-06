import { CommitmentsData } from "@/types/commitments";

export const commitmentsData: CommitmentsData = {
  badge: "Quyền Lợi Học Viên",
  title: "Bộ Cam Kết 3 Không - Đảm Bảo An Tâm Tuyệt Đối",
  description:
    "Chúng tôi lấy sự tiến bộ và quyền lợi của học viên làm kim chỉ nam. Mọi quyền lợi được cụ thể hóa bằng văn bản hợp đồng rõ ràng trước khi nhập học.",
  bottomNotice:
    "Học viên có quyền phản ánh trực tiếp với ban giám đốc hoặc đổi giáo viên ngay lập tức nếu không hài lòng với thái độ giảng dạy mà không mất thêm bất kỳ chi phí nào.",
  commitments: [
    {
      id: "no-hidden-fee",
      number: "01",
      badge: "Minh Bạch Học Phí",
      title: "Không Phát Sinh Chi Phí",
      highlightText: "Trọn gói 100% trong hợp đồng",
      description:
        "Học phí đã bao gồm toàn bộ lệ phí hồ sơ, sân tập, xăng xe, công giáo viên và bảo hiểm đào tạo. Tuyệt đối không phát sinh tiền trà nước, tiền tip hay bất kỳ phụ phí bến bãi nào trong suốt quá trình học.",
      keyPoints: [
        "Hợp đồng pháp lý minh bạch từng điều khoản chi phí",
        "Không có chi phí ẩn, không bồi dưỡng giáo viên",
        "Hỗ trợ chia học phí làm 2 - 3 đợt linh hoạt",
        "Cam kết hoàn tiền nếu phát hiện thu sai quy định",
      ],
      icon: "ShieldAlert",
      tagColor: "brand",
    },
    {
      id: "no-long-wait",
      number: "02",
      badge: "Lịch Học Tức Thì",
      title: "Không Chờ Lịch Lâu",
      highlightText: "Khai giảng liên tục - Học ngay sau đăng ký",
      description:
        "Nộp hồ sơ là có lịch học lý thuyết và thực hành ngay trong tuần, không phải chờ đợi gom lớp nhiều tháng. Lịch học thực hành được sắp xếp hoàn toàn theo thời gian rảnh của học viên (sáng, chiều, tối hoặc cuối tuần).",
      keyPoints: [
        "Khai giảng khóa mới đều đặn hàng tuần",
        "Chủ động đặt lịch học với thầy giáo qua ứng dụng/Zalo",
        "Học ca tối và cuối tuần không phụ thu thêm phí",
        "Được bảo lưu khóa học nếu có việc bận đột xuất",
      ],
      icon: "CalendarClock",
      tagColor: "accent",
    },
    {
      id: "one-on-one-only",
      number: "03",
      badge: "Chất Lượng Đào Tạo",
      title: "Không Nhồi Nhét",
      highlightText: "Chuẩn 1 Thầy / 1 Trò / 1 Xe",
      description:
        "Toàn bộ thời lượng thực hành được dành riêng 100% cho bạn ôm vô lăng trên xe đời mới. Không ghép 3 - 4 người một xe như các trung tâm truyền thống, giúp bạn rèn phản xạ lái xe thực tế nhanh gấp 3 lần.",
      keyPoints: [
        "100% thời gian buổi học bạn trực tiếp cầm lái",
        "Giáo viên ngồi ghế phụ kèm cặp, chỉnh sửa từng động tác",
        "Tập lái trên xe đời mới sạch sẽ, máy lạnh mát rượi",
        "Được đổi giáo viên nếu cảm thấy không hợp phong cách dạy",
      ],
      icon: "UserCheck",
      tagColor: "success",
    },
  ],
};
