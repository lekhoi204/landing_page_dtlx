/**
 * GOOGLE APPS SCRIPT WEB APP - HỆ THỐNG GHI NHẬN LEAD TƯ VẤN LÁI XE
 * 
 * 5 CỘT TRONG GOOGLE SHEET:
 * [Thời Gian | Họ Tên | Số Điện Thoại | Nhu Cầu | Trạng Thái]
 * 
 * HƯỚNG DẪN CÀI ĐẶT:
 * 1. Mở Google Sheet đã tạo sẵn 5 cột: Thời Gian | Họ Tên | Số Điện Thoại | Nhu Cầu | Trạng Thái
 * 2. Vào menu "Tiện ích mở rộng" (Extensions) -> Chọn "Apps Script".
 * 3. Xóa code mặc định và dán toàn bộ nội dung file này vào.
 * 4. Nhấn nút "Lưu" (Save - icon đĩa mềm).
 * 5. Nhấn nút "Triển khai" (Deploy) -> Chọn "Tùy chọn triển khai mới" (New deployment).
 * 6. Nhấp vào biểu tượng bánh răng ⚙️ bên cạnh "Chọn loại" -> Chọn "Ứng dụng web" (Web app).
 * 7. Thiết lập cấu hình:
 *    - Mô tả: "Landing Page Lead Form v1"
 *    - Thực thi dưới dạng (Execute as): "Tôi" (Me / email của bạn).
 *    - Ai có quyền truy cập (Who has access): "Bất kỳ ai" (Anyone). -> BẮT BUỘC CHỌN MỤC NÀY
 * 8. Nhấn "Triển khai" (Deploy) -> Cấp quyền truy cập Google Account khi được hỏi.
 * 9. Sao chép "URL của ứng dụng web" (Web App URL dạng https://script.google.com/macros/s/AKfycb.../exec).
 * 10. Dán URL này vào file .env.local của dự án Next.js:
 *     NEXT_PUBLIC_FORM_ENDPOINT=https://script.google.com/macros/s/AKfycb.../exec
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  // Khóa lock tối đa 10 giây để tránh xung đột ghi đồng thời nhiều request
  lock.tryLock(10000);

  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Tự động khởi tạo tiêu đề cột nếu sheet đang trống hoàn toàn
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Thời Gian", "Họ Tên", "Số Điện Thoại", "Nhu Cầu", "Trạng Thái"]);
      var headerRange = sheet.getRange(1, 1, 1, 5);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#f1f5f9");
    }

    var data = {};
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    var fullName = (data.name || data.fullName || "").toString().trim();
    var rawPhone = (data.phone || "").toString().trim();
    var demand = (data.demand || data.licenseInterest || data.need || "Hạng B1 (Tự động)").toString().trim();
    var status = (data.status || "Chưa xử lý").toString().trim();

    // Kiểm tra dữ liệu bắt buộc
    if (!fullName || !rawPhone) {
      return ContentService.createTextOutput(
        JSON.stringify({
          status: "error",
          message: "Họ tên và số điện thoại không được để trống."
        })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    // Định dạng thời gian Việt Nam (GMT+7)
    var timestamp = Utilities.formatDate(
      new Date(),
      "Asia/Ho_Chi_Minh",
      "yyyy-MM-dd HH:mm:ss"
    );

    // Thêm tiền tố dấu nháy đơn ' vào số điện thoại để Google Sheet không tự cắt mất số 0 ở đầu
    var formattedPhone = "'" + rawPhone;

    // Ghi dòng mới vào 5 cột: [Thời Gian, Họ Tên, Số Điện Thoại, Nhu Cầu, Trạng Thái]
    sheet.appendRow([
      timestamp,
      fullName,
      formattedPhone,
      demand,
      status
    ]);

    // Trả về JSON phản hồi thành công
    return ContentService.createTextOutput(
      JSON.stringify({
        status: "success",
        message: "Cảm ơn bạn! Thông tin đã được ghi nhận. Thầy/cô sẽ liên hệ tư vấn sớm nhất."
      })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({
        status: "error",
        message: "Lỗi xử lý máy chủ: " + error.toString()
      })
    ).setMimeType(ContentService.MimeType.JSON);

  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  // Phục vụ kiểm tra nhanh endpoint hoạt động qua trình duyệt
  return ContentService.createTextOutput(
    JSON.stringify({
      status: "ok",
      message: "Google Apps Script Web App Landing Page đang hoạt động tốt! (5 Cột: Thời Gian | Họ Tên | Số Điện Thoại | Nhu Cầu | Trạng Thái)"
    })
  ).setMimeType(ContentService.MimeType.JSON);
}
