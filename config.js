// ===== GitHub 方案配置（站长填写一次）=====
// 1. GH_OWNER / GH_REPO / GH_BRANCH：你的 GitHub 用户名、仓库名、分支
// 2. GH_TOKEN：在 GitHub 生成一个「细粒度 PAT」，仅授权本仓库 Contents: Read and Write
//    生成步骤：GitHub 头像 → Settings → Developer settings → Personal access tokens
//              → Fine-grained tokens → Generate new token
//              → Resource owner 选你自己 → Repository access 选 Only select repositories → 勾 delta-rental
//              → Repository permissions → Contents → Read and write → Generate → 复制令牌
//    注：令牌会出现在公开前端源码里，但因仅限本仓库、仅能改这一个文件，风险可控；
//        不想要此权衡可改用 GitHub Actions 方案（写令牌放仓库 Secret）。
const GH_OWNER  = "O0Jiang";
const GH_REPO   = "delta-rental";
const GH_BRANCH = "main";
const GH_TOKEN  = "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";

const DATA_PATH = "accounts.json";
const RAW_URL = `https://raw.githubusercontent.com/${GH_OWNER}/${GH_REPO}/${GH_BRANCH}/${DATA_PATH}`;
const API_URL = `https://api.github.com/repos/${GH_OWNER}/${GH_REPO}/contents/${DATA_PATH}`;
