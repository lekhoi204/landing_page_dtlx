import { TrainingGroundsData } from "@/types/grounds";

export const trainingGroundsData: TrainingGroundsData = {
  badge: "Hệ Thống Sân Tập Rộng Khắp",
  title: "Sân Tập Chuẩn Sát Hạch - Học Gần Nhà, Đưa Đón Thuận Tiện",
  description:
    "Hệ thống sân tập liên kết phủ khắp các quận huyện với đầy đủ 11 bài thi sa hình, mặt sân bê tông chuẩn, xe cảm ứng chấm điểm và đèn chiếu sáng ban đêm.",
  pickupSupportNote:
    "Trung tâm hỗ trợ điểm đón tại các trục đường lớn hoặc hỗ trợ giáo viên đón học viên tận nhà (theo yêu cầu khóa học).",
  areas: [
    "Tất Cả Khu Vực",
    "Sân Sát Hạch Chuẩn",
    "Khu Vực Phía Đông",
    "Khu Vực Phía Tây",
    "Khu Vực Phía Nam",
  ],
  grounds: [
    {
      id: "ground-01",
      name: "Sân Sát Hạch Quốc Gia Loại 1 (Trung Tâm Thi)",
      area: "Sân Sát Hạch Chuẩn",
      address: "Khu trung tâm sát hạch lái xe tiêu chuẩn Tổng Cục Đường Bộ",
      description:
        "Sân sát hạch chính thức với quy mô hơn 20.000m², đầy đủ 100% xe gắn chip cảm ứng điện tử chấm điểm tự động như ngày thi thật.",
      supportedLicenses: ["B1", "B2", "C", "D"],
      standard: "Sân Sát Hạch Loại 1 Quốc Gia",
      features: [
        "100% xe gắn chip cảm ứng thi sát hạch",
        "Đầy đủ 11 bài sa hình liên hoàn",
        "Hệ thống bảng điện tử báo lỗi trực tiếp",
        "Phòng chờ máy lạnh và căng tin tiện nghi",
      ],
      googleMapsUrl: "https://maps.google.com/?q=San+Sat+Hach+Lai+Xe",
      hasVirtualTour: true,
      imagePlaceholderText: "Toàn cảnh Sân Sát Hạch Loại 1 có xe chip",
      isPlaceholder: true,
    },
    {
      id: "ground-02",
      name: "Sân Tập Sa Hình Khu Vực Phía Đông",
      area: "Khu Vực Phía Đông",
      address: "Trục đường lớn kết nối thuận tiện các quận phía Đông & Vành đai",
      description:
        "Sân tập rộng rãi 12.000m², cây xanh thoáng mát, mặt sân chuẩn độ dốc cầu thi, thuận tiện cho học viên khu vực phía Đông và lân cận.",
      supportedLicenses: ["B1", "B2", "C"],
      standard: "Sân Sa Hình Chuẩn 11 Bài Thi",
      features: [
        "Mô hình dốc cầu đề-pa chuẩn kích thước thi",
        "Khu vực ghép xe dọc và ngang riêng biệt",
        "Hệ thống đèn chiếu sáng phục vụ tập ca tối",
        "Điểm đón đưa học viên tại trạm metro / xe buýt lớn",
      ],
      googleMapsUrl: "https://maps.google.com/?q=San+Tap+Lai+Xe+Phia+Dong",
      hasVirtualTour: true,
      imagePlaceholderText: "Sân tập Sa hình Phía Đông có đèn ca tối",
      isPlaceholder: true,
    },
    {
      id: "ground-03",
      name: "Sân Tập Sa Hình Khu Vực Phía Tây",
      area: "Khu Vực Phía Tây",
      address: "Gần trục đại lộ lớn phía Tây, giao thông thông thoáng",
      description:
        "Sân tập hiện đại, xe tập lái 100% đời mới (Vios, Accent), đội ngũ giáo viên túc trực hướng dẫn từng bài sa hình khó.",
      supportedLicenses: ["B1", "B2"],
      standard: "Sân Tập Chuẩn B1 - B2",
      features: [
        "Đầy đủ bài vệt bánh xe và đường vuông góc",
        "Xe tập đời mới trang bị máy lạnh mát rượi",
        "Có giáo viên kèm riêng 1 kèm 1",
        "Bãi đỗ xe ô tô và xe máy an toàn cho học viên",
      ],
      googleMapsUrl: "https://maps.google.com/?q=San+Tap+Lai+Xe+Phia+Tay",
      hasVirtualTour: false,
      imagePlaceholderText: "Sân tập B1 - B2 Phía Tây xe đời mới",
      isPlaceholder: true,
    },
    {
      id: "ground-04",
      name: "Sân Tập Sa Hình Khu Vực Phía Nam",
      area: "Khu Vực Phía Nam",
      address: "Khu đô thị mới phía Nam, đường vào rộng rãi 4 làn xe",
      description:
        "Sân tập mới nâng cấp mặt thảm nhựa tiêu chuẩn cao, vạch sơn căn điểm rõ ràng, không khí trong lành, thuận tiện di chuyển.",
      supportedLicenses: ["B1", "B2"],
      standard: "Sân Tập Sa Hình Thảm Nhựa Mới",
      features: [
        "Mặt sân thảm nhựa êm ái, bám đường tốt",
        "Cột mốc căn điểm chuẩn thi từng bài",
        "Hỗ trợ tập ngày cuối tuần không phụ thu",
        "Nước uống và phòng nghỉ trưa máy lạnh",
      ],
      googleMapsUrl: "https://maps.google.com/?q=San+Tap+Lai+Xe+Phia+Nam",
      hasVirtualTour: true,
      imagePlaceholderText: "Sân tập Phía Nam thảm nhựa tiêu chuẩn cao",
      isPlaceholder: true,
    },
  ],
};
