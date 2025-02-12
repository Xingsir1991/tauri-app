// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

#[tauri::command]
fn save_content(content: String) -> String {
    match std::fs::write("note.txt", &content) {
        println!("x 的值是: {}",content); // 使用 `{}` 占位符打印变量值
        Ok(_) => format!("保存成功: {} 字符", content.len()),
        Err(e) => format!("保存失败: {}", e),
    }
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![save_content]) // 注册命令
        .run(tauri::generate_context!())
        .expect("error while running Tauri application");
}
