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
      specialties: [
        "Hạng B Tự Động",
        "Hạng B Số Sàn",
        "Mẹo 11 bài Sa hình",
        "Bổ túc tay lái thực tế",
      ],
      bio: "Phụ trách đào tạo chính tại trung tâm, trực tiếp kèm cặp học viên từ cơ bản đến vững vàng tay lái, chuyên trị tâm lý sợ lái và rèn mẹo sa hình đạt điểm tối đa 100/100.",
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
      name: "Thầy Huy",
      title: "Giáo Viên Đào Tạo Thực Hành & Sa Hình",
      experienceYears: 10,
      experienceText: "10 năm kinh nghiệm đào tạo B số tự động, B số sàn & DAT",
      specialties: [
        "Hạng B Tự Động",
        "Hạng B Số Sàn",
        "Chạy DAT 810km",
        "Kỹ năng xử lý tình huống",
      ],
      bio: "Giáo viên dày dặn kinh nghiệm thực chiến qua hàng chục nghìn km đường trường, phong cách chỉ dạy nhiệt tình, vui vẻ, chỉ mẹo căn xe chuẩn xác và rèn luyện phản xạ lái xe an toàn.",
      teachingPhilosophy:
        "Hướng dẫn tận tình từng bước, không tạo áp lực, đồng hành đến khi học viên tự tin làm chủ tay lái.",
      studentsTrainedText: "1.600+ Học viên",
      passRateText: "97.5% Đỗ lần 1",
      badge: "Nhiệt Tình & Chu Đáo",
      isPlaceholder: false,
      avatarColor: "bg-emerald-600",
    },
  ],
};
