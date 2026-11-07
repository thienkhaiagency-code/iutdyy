// ============================================================
// Locket Gold Unlocker — Full Edition (Captions & Filters)
// ============================================================

const TARGET_UA = /Locket/i;
const MEMBER_SINCE = "28/02/2026";

function safeJson(s, fb) { try { return JSON.parse(s); } catch { return fb; } }
function deepMerge(base, patch) { for (const k of Object.keys(patch)) { const v = patch[k]; if (v && typeof v === "object" && !Array.isArray(v) && base[k] && typeof base[k] === "object" && !Array.isArray(base[k])) deepMerge(base[k], v); else base[k] = v; } return base; }
function setJsonString(e, k, patch) { e[k] = JSON.stringify(deepMerge(safeJson(e[k] || "{}", {}), patch)); }
function setStr(e, k, v) { e[k] = String(v); }

// CẤU HÌNH GOLD
const startISO = "2026-02-28T00:00:00Z";
const endISO = "9999-12-31T23:59:59Z";
const fakeSub = { expires_date: endISO, purchase_date: startISO, original_purchase_date: startISO, ownership_type: "PURCHASED", display_name: "locket_1600_1y", is_sandbox: true, store: "app_store" };
const fakeEnt = { expires_date: endISO, purchase_date: startISO, product_identifier: "locket_1600_1y" };

// MẢNG CAPTION ĐẦY ĐỦ (Joke, Meme, Gen Z, Tình yêu...)
const OVERLAY_ITEMS = [
  {
    section: "🎨 iutdyy",
    items: [
      { overlay_id: "caption:iutdyy_member", source: "remote", caption: { background: { colors: ["#B8E7FF", "#A8F5D0", "#DCCBFF"] }, icon: { data: "📅", type: "emoji" }, max_lines: 1, text: "Thành viên từ 28/02/2026", localized_text: { en: "Member since 28/02/2026", vn: "Thành viên từ 28/02/2026" }, text_color: "#183153", type: "static_content" } },
      { overlay_id: "caption:iutdyy", source: "remote", caption: { background: { colors: ["#B8E7FF", "#A8F5D0", "#DCCBFF"] }, max_lines: 1, text: "💻 iutdyy", text_color: "#183153", type: "static_content" } }
    ]
  },
  {
    section: "🎨 Gen Z & Xéo xắt 💅",
    items: [
      { overlay_id: "caption:feeling_cute", source: "remote", caption: { background: { colors: ["#F8BBD0", "#E91E63"] }, icon: { data: "🌷", type: "emoji" }, max_lines: 1, text: "Feeling Cute", localized_text: { en: "Feeling Cute", vn: "Cảm thấy dthw" }, text_color: "#FFFFFFE5", type: "static_content" } },
      { overlay_id: "caption:hello_kitty", source: "remote", caption: { background: { colors: ["#FFD1DC", "#FFB7C5", "#FFC0CB"] }, icon: { data: "🌸", type: "emoji" }, max_lines: 1, text: "Hello Kitty 🐱", text_color: "#FFFFFFE6", type: "static_content" } },
      { overlay_id: "caption:dep_trai_co_gi_sai", source: "remote", caption: { background: { colors: ["#FF5722", "#FFC107"] }, icon: { data: "😎", type: "emoji" }, max_lines: 1, text: "Đẹp trai có gì sai", text_color: "#000000E6", type: "static_content" } },
      { overlay_id: "caption:xinh_dep_tuyet_voi", source: "remote", caption: { background: { colors: ["#FC5C7D", "#6A82FB"] }, icon: { data: "💅", type: "emoji" }, max_lines: 1, text: "Xinh đẹp tuyệt vời", text_color: "#FFFFFFE6", type: "static_content" } },
      { overlay_id: "caption:hom_nay_slay", source: "remote", caption: { background: { colors: ["#C5B5E8", "#DDD0F2", "#F0C9DD"] }, icon: { data: "✨", type: "emoji" }, max_lines: 1, text: "hôm nay cũng slay", text_color: "#514368", type: "static_content" } },
      { overlay_id: "caption:flex_den_hoi_tho_cuoi", source: "remote", caption: { background: { colors: ["#00BFA5", "#64E8C8", "#C4FFF0"] }, icon: { data: "💎", type: "emoji" }, max_lines: 1, text: "Flex đến hơi thở cuối", text_color: "#064D43", type: "static_content" } },
      { overlay_id: "caption:ba_khi", source: "remote", caption: { background: { colors: ["#8EACCD", "#B5C8DE", "#D7C7E6"] }, icon: { data: "😎", type: "emoji" }, max_lines: 1, text: "bá khí ngang ngược", text_color: "#35475D", type: "static_content" } },
      { overlay_id: "caption:main_character", source: "remote", caption: { background: { colors: ["#D6B8E8", "#E8CDEB", "#F3D2D9"] }, icon: { data: "🎬", type: "emoji" }, max_lines: 1, text: "main character của cuộc đời mình", text_color: "#5A4366", type: "static_content" } }
    ]
  },
  {
    section: "🎨 Meme & Hài hước 🤡",
    items: [
      { overlay_id: "caption:cuoi_vcl_m_oi", source: "remote", caption: { background: { colors: ["#F7971E", "#FFD200", "#FFEE58"] }, icon: { data: "😂", type: "emoji" }, max_lines: 1, text: "Cười vcl m oi", text_color: "#000000E6", type: "static_content" } },
      { overlay_id: "caption:hong_drama", source: "remote", caption: { background: { colors: ["#8A2387", "#E94057", "#F27121"] }, icon: { data: "🍿", type: "emoji" }, max_lines: 1, text: "Hóng drama", text_color: "#FFFFFFE6", type: "static_content" } },
      { overlay_id: "caption:check_var", source: "remote", caption: { background: { colors: ["#11998E", "#38EF7D"] }, icon: { data: "📺", type: "emoji" }, max_lines: 1, text: "Check VAR liền", text_color: "#FFFFFFE6", type: "static_content" } },
      { overlay_id: "caption:con_cai_nit", source: "remote", caption: { background: { colors: ["#D7CCC8", "#8D6E63"] }, icon: { data: "🧶", type: "emoji" }, max_lines: 1, text: "còn cái nịt", text_color: "#FFFFFFE6", type: "static_content" } },
      { overlay_id: "caption:minh_la_lop", source: "remote", caption: { background: { colors: ["#263238", "#455A64"] }, max_lines: 1, text: "Mình là lốp", text_color: "#FFFFFFE6", type: "static_content" } },
      { overlay_id: "caption:than_chua_ma_don", source: "remote", caption: { background: { colors: ["#607D8B", "#37474F"] }, icon: { data: "😔", type: "emoji" }, max_lines: 1, text: "Thân chưa mà dỡn", text_color: "#FFFFFFE6", type: "static_content" } },
      { overlay_id: "caption:ai_muon", source: "remote", caption: { background: { colors: ["#FF6B35", "#FF9F1C", "#FFE0A3"] }, icon: { data: "🤨", type: "emoji" }, max_lines: 1, text: "ủa rồi ai mượn?", text_color: "#6B2814", type: "static_content" } },
      { overlay_id: "caption:co_ra_dai_khong", source: "remote", caption: { background: { colors: ["#FF4D6D", "#FF8E72", "#FFD6A5"] }, icon: { data: "😭", type: "emoji" }, max_lines: 1, text: "có ra dại không", text_color: "#6B1833", type: "static_content" } },
      { overlay_id: "caption:boc_trung_sit_rit", source: "remote", caption: { background: { colors: ["#9C27B0", "#7B1FA2"] }, icon: { data: "🎁", type: "emoji" }, max_lines: 1, text: "Bóc trúng sít rịt", text_color: "#FFFFFFE6", type: "static_content" } },
      { overlay_id: "caption:xin_vinh_biet_cu", source: "remote", caption: { background: { colors: ["#232526", "#414345"] }, icon: { data: "🕯️", type: "emoji" }, max_lines: 1, text: "Xin vĩnh biệt cụ", text_color: "#FFFFFFE6", type: "static_content" } }
    ]
  },
  {
    section: "🎨 Bất ổn & Hết cứu",
    items: [
      { overlay_id: "caption:bat_on_that_su", source: "remote", caption: { background: { colors: ["#636363", "#A2AB58"] }, max_lines: 1, text: "Bất ổn thật sự", text_color: "#FFFFFFE6", type: "static_content" } },
      { overlay_id: "caption:nay_la_het_cuu", source: "remote", caption: { background: { colors: ["#607D8B", "#455A64"] }, icon: { data: "❌", type: "emoji" }, max_lines: 1, text: "Này là hết cứu", text_color: "#FFFFFFE6", type: "static_content" } },
      { overlay_id: "caption:toang_that_roi", source: "remote", caption: { background: { colors: ["#F44336", "#B71C1C"] }, icon: { data: "🐉", type: "emoji" }, max_lines: 1, text: "Toang thật rồi", text_color: "#FFFFFFE6", type: "static_content" } },
      { overlay_id: "caption:toi_roi_toi_roi", source: "remote", caption: { background: { colors: ["#F7253E", "#FF6B35", "#FFC857"] }, icon: { data: "❗", type: "emoji" }, max_lines: 1, text: "Tới rồi tới rồi", text_color: "#58151B", type: "static_content" } },
      { overlay_id: "caption:goi_xong_lun", source: "remote", caption: { background: { colors: ["#F3B6AF", "#F6D2C2", "#EAC8D9"] }, icon: { data: "😭", type: "emoji" }, max_lines: 1, text: "gòi xong lun á", text_color: "#6A4549", type: "static_content" } },
      { overlay_id: "caption:khong_cam_xuc", source: "remote", caption: { background: { colors: ["#434343", "#000000"] }, icon: { data: "🗿", type: "emoji" }, max_lines: 1, text: "Không cảm xúc", text_color: "#FFFFFFE6", type: "static_content" } },
      { overlay_id: "caption:cai_deo_ma", source: "remote", caption: { background: { colors: ["#FF6B6B", "#FF8E53", "#FFD166"] }, icon: { data: "🤬", type: "emoji" }, max_lines: 1, text: "cái đéo má ??", text_color: "#542323", type: "static_content" } },
      { overlay_id: "caption:ua_alo", source: "remote", caption: { background: { colors: ["#FFB347", "#FFD166", "#FFF0A8"] }, icon: { data: "🐱", type: "emoji" }, max_lines: 1, text: "Ủa alo❓", text_color: "#654018", type: "static_content" } },
      { overlay_id: "caption:ho", source: "remote", caption: { background: { colors: ["#E63946", "#F07167", "#FFB4A2"] }, icon: { data: "🤨", type: "emoji" }, max_lines: 1, text: "hỏ?", text_color: "#681D2A", type: "static_content" } },
      { overlay_id: "caption:chan_bo_may_di", source: "remote", caption: { background: { colors: ["#6A0572", "#AB1745", "#FF7B54"] }, icon: { data: "🙄", type: "emoji" }, max_lines: 1, text: "Chan bố mày đi", text_color: "#FFFFFF", type: "static_content" } }
    ]
  },
  {
    section: "🎨 Tình yêu & Cơm chó 💕",
    items: [
      { overlay_id: "caption:miss_you", source: "remote", caption: { background: { colors: ["#EC0C00", "#FF493F"] }, icon: { data: "🥰", type: "emoji" }, max_lines: 1, text: "Miss you", text_color: "#FFFFFFDB", type: "static_content" } },
      { overlay_id: "caption:i_love_you", source: "remote", caption: { background: { colors: ["#FF8FAB", "#FFC2D1", "#FFE5EC"] }, icon: { data: "💗", type: "emoji" }, max_lines: 1, text: "i love you", text_color: "#8A304F", type: "static_content" } },
      { overlay_id: "caption:minh_cuoi_nhau", source: "remote", caption: { background: { colors: ["#F0B8CD", "#F7D4DF", "#E7C9EF"] }, icon: { data: "💍", type: "emoji" }, max_lines: 1, text: "hông ấy mình cưới nhau đi", text_color: "#70465B", type: "static_content" } },
      { overlay_id: "caption:tuong_love_hoa_ra_lop", source: "remote", caption: { background: { colors: ["#C9184A", "#FF4D6D", "#FFB3C6"] }, icon: { data: "❤️‍🩹", type: "emoji" }, max_lines: 1, text: "Tưởng love hoá ra lốp", text_color: "#64152F", type: "static_content" } }
    ]
  }
];

// LOGIC CHÍNH
if (!TARGET_UA.test($request.headers["User-Agent"] || "")) {
  $done({});
} else {
  const body = safeJson($response.body, null);
  if (body && typeof body === "object") {
    body.entries = body.entries || {};
    const e = body.entries;

    body.Attention = "iutdyy — Premium unlocked.";
    setStr(e, "profile_badge_visible", "true");
    setStr(e, "android_subscribe_gold_button_enabled", "false");
    
    // Fake Gold & Filter
    setJsonString(e, "subscriptions", { "locket_1600_1y": fakeSub });
    setJsonString(e, "entitlements", { "Gold": fakeEnt });
    setJsonString(e, "feature_gates", { app_icon_picker: "enabled", camera_roll: "enabled", camera_theme: "enabled", remove_ads: "enabled", custom_widget_frames: "enabled", video: "enabled", longer_video: "enabled", longer_captions: "enabled", camera_filters: "enabled" });
    setJsonString(e, "camera", { max_duration: 60.0, maxDuration: 60.0 });
    
    // Khung viền
    setJsonString(e, "widget_frame_event", { uid: "midautumn_2026", url: "https://i.ibb.co/1Yt1Dzzy/Shin-chan-1.png", use_local_time_zone: true, placement: "below", start_at: "2020-01-01T00:00:00", end_at: "2099-12-31T23:59:59" });
    
    // Gắn toàn bộ Caption
    e.overlay_items = JSON.stringify(OVERLAY_ITEMS);
    
    $done({ body: JSON.stringify(body) });
  } else { $done({}); }
}
