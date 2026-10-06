import { TeachersSectionData } from "@/types/teachers";

export const teachersData: TeachersSectionData = {
  badge: "Đội Ngũ Giáo Viên Chuẩn Sư Phạm",
  title: "Giáo Viên Tận Tâm - 1 Kèm 1 - Tuyệt Đối Không Quát Mắng",
  description:
    "100% giáo viên có chứng chỉ sư phạm dạy nghề lái xe của Sở GTVT, giàu kinh nghiệm thực chiến, kiên nhẫn hướng dẫn và truyền đạt phương pháp căn điểm dễ nhớ nhất.",
  guaranteeText:
    "Cam kết quyền lợi học viên: Được quyền yêu cầu đổi giáo viên hoàn toàn miễn phí nếu cảm thấy không hợp phong cách giảng dạy.",
  teachers: [
    {
      id: "teacher-01",
      name: "Thầy Toàn",
      title: "Giáo Viên Phụ Trách Đào Tạo & Thực Hành",
      experienceYears: 12,
      experienceText: "12 năm kinh nghiệm đào tạo B tự động, B số sàn, C",
      specialties: ["Hạng B Tự Động", "Hạng B Số Sàn", "Mẹo 11 bài Sa hình", "Bổ túc tay lái"],
      bio: "Phụ trách đào tạo chính tại trung tâm, trực tiếp kèm cặp học viên từ cơ bản đến vững vàng tay lái, chuyên trị tâm lý sợ lái và rèn mẹo sa hình đạt điểm tối đa.",
      teachingPhilosophy:
        "Tận tâm, kiên nhẫn, truyền đạt trực quan dễ hiểu, dạy lái xe chuẩn thực tế an toàn trọn đời.",
      studentsTrainedText: "2.000+ Học viên",
      passRateText: "98% Đỗ lần 1",
      badge: "Thầy Toàn Dạy Lái Xe",
      isPlaceholder: false,
      avatarColor: "bg-brand-600",
    },
    {
      id: "teacher-02",
      name: "Thầy Trần Tuấn",
      title: "Giáo Viên Đào Tạo Đường Trường DAT",
      experienceYears: 10,
      experienceText: "10 năm kinh nghiệm sa hình & DAT",
      specialties: ["Hạng B Số Sàn", "Hạng C", "DAT 810km", "Xử lý tình huống đèo dốc"],
      bio: "Kinh nghiệm dạn dày qua hàng chục nghìn km đường trường thực tế, rèn phản xạ lái xe an toàn trên cao tốc và quốc lộ.",
      teachingPhilosophy:
        "Tập trung rèn thói quen quan sát gương, giữ khoảng cách an toàn và xử lý phanh mượt mà.",
      studentsTrainedText: "1.400+ Học viên",
      passRateText: "96.8% Đỗ lần 1",
      badge: "Chuyên Gia Đường Trường",
      isPlaceholder: true,
      avatarColor: "bg-emerald-600",
    },
    {
      id: "teacher-03",
      name: "Thầy Lê Minh",
      title: "Giáo Viên Sa Hình & Xe Cảm Ứng Chip",
      experienceYears: 8,
      experienceText: "8 năm kinh nghiệm huấn luyện thi sát hạch",
      specialties: ["Hạng B Tự Động", "Hạng B Số Sàn", "Khắc phục lỗi đề-pa", "Ghép xe hẹp"],
      bio: "Nắm rõ từng vị trí đặt điểm mốc trên các sân thi sát hạch chuẩn, giúp học viên luôn tự tin đạt 100/100 điểm sa hình.",
      teachingPhilosophy:
        "Phương pháp căn điểm chuẩn xác từng centimet, giải thích cặn kẽ vì sao trừ điểm để học viên tự sửa lỗi.",
      studentsTrainedText: "1.100+ Học viên",
      passRateText: "98.2% Đỗ lần 1",
      badge: "Mẹo Sa Hình 100 Điểm",
      isPlaceholder: true,
      avatarColor: "bg-accent-600",
    },
    {
      id: "teacher-04",
      name: "Cô Hoàng Lan",
      title: "Giáo Viên Bổ Túc & Lái Xe Nữ Quyền",
      experienceYears: 7,
      experienceText: "7 năm đào tạo xe B tự động",
      specialties: ["Hạng B Tự Động", "Lái xe phố đông", "Lùi chuồng hầm chung cư", "Tâm lý vững vàng"],
      bio: "Được rất nhiều học viên nữ tin tưởng nhờ sự thấu hiểu tâm lý, hướng dẫn nhẹ nhàng, tỉ mỉ từng chi tiết nhỏ.",
      teachingPhilosophy:
        "Tạo không khí học tập thoải mái, không áp lực, giúp học viên gỡ bỏ hoàn toàn nỗi sợ lái xe.",
      studentsTrainedText: "950+ Học viên",
      passRateText: "96.5% Đỗ lần 1",
      badge: "Tận Tâm & Nhẹ Nhàng",
      isPlaceholder: true,
      avatarColor: "bg-indigo-600",
    },
  ],
};
