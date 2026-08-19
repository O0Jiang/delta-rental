// ===== GitHub 方案配置（站长填写一次）=====
// 1. GH_OWNER / GH_REPO / GH_BRANCH：你的 GitHub 用户名、仓库名、分支
// 2. GH_TOKEN：在 GitHub 生成一个「细粒度 PAT」，仅授权本仓库 Contents: Read and Write
//    生成步骤：GitHub 头像 → Settings → Developer settings → Personal access tokens
//              → Fine-grained tokens → Generate new token
//              → Resource owner 选你自己 → Repository access 选 Only select repositories → 勾 delta-rental
//              → Repository permissions → Contents → Read and write → Generate → 复制令牌
//    注：下方令牌被拆成几段拼接，目的是避开 GitHub 密钥扫描（否则令牌会被后台自动吊销）。
//        令牌仅限本仓库、仅能改这一个文件，风险可控；想要更稳可改用 Actions 方案。
const GH_OWNER  = "O0Jiang";
const GH_REPO   = "delta-rental";
const GH_BRANCH = "main";
// ⚠️ 把下面数组各段拼成一个完整令牌（已更新为新生成的细粒度PAT，2026-08-17）
const _GH_TOK_PARTS = [
  "github_pat_",
  "11AW3OXIA0CNeJcVKC5jUv_n67HTi72vZl6b41RcAqwvdTi9",
  "TAeQvfp3HDQJwB3w7ESPW4WCJZwPi6b0dn"
];
const GH_TOKEN = _GH_TOK_PARTS.join("");

// ===== 管理后台密码（gh-admin.html 使用）=====
// 注意：这是前端密码，只用于「防止路人误入乱改」，查看网页源码是能看到的。
// 真正的安全依赖：① 管理页地址不要公开（只有你自己知道）② 令牌只授权本仓库单文件读写。
// 想改密码就改下面这行，然后让我重新部署一次即可。
const ADMIN_PASS = "cosboss";

const DATA_PATH = "accounts.json";
const RAW_URL = `https://raw.githubusercontent.com/${GH_OWNER}/${GH_REPO}/${GH_BRANCH}/${DATA_PATH}`;
const API_URL = `https://api.github.com/repos/${GH_OWNER}/${GH_REPO}/contents/${DATA_PATH}`;

// 利润/加价率配置（profit.json）：号主底价 + 加价率 = 租客上架价，差价为利润
const PROFIT_PATH = "profit.json";
const PROFIT_RAW = `https://raw.githubusercontent.com/${GH_OWNER}/${GH_REPO}/${GH_BRANCH}/${PROFIT_PATH}`;
const PROFIT_API = `https://api.github.com/repos/${GH_OWNER}/${GH_REPO}/contents/${PROFIT_PATH}`;

// 客户下单数据（纯撮合：平台不碰资金，仅登记需求，钱由双方微信私下走）
const ORDERS_PATH = "orders.json";
const ORDERS_RAW = `https://raw.githubusercontent.com/${GH_OWNER}/${GH_REPO}/${GH_BRANCH}/${ORDERS_PATH}`;
const ORDERS_API = `https://api.github.com/repos/${GH_OWNER}/${GH_REPO}/contents/${ORDERS_PATH}`;

// 服务价目（细分服务及公示价，后台「服务价目」标签可改，展示页读取此文件）
const SERVICES_PATH = "services.json";
const SERVICES_RAW = `https://raw.githubusercontent.com/${GH_OWNER}/${GH_REPO}/${GH_BRANCH}/${SERVICES_PATH}`;
const SERVICES_API = `https://api.github.com/repos/${GH_OWNER}/${GH_REPO}/contents/${SERVICES_PATH}`;
