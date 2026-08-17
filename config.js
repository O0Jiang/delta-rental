// ===== GitHub 方案配置（站长填写一次）=====
// 1. GH_OWNER / GH_REPO / GH_BRANCH：你的 GitHub 用户名、仓库名、分支
// 2. GH_TOKEN：在 GitHub 生成一个 fine-grained PAT，仅授权该仓库 Actions: Read and Write
//    （只需「触发工作流」权限，泄露也写不了仓库文件；真正写库的令牌在仓库 Secrets，不进前端）
const GH_OWNER  = "O0Jiang";
const GH_REPO   = "delta-rental";
const GH_BRANCH = "main";
const GH_TOKEN  = "在此粘贴你的「仅限 Actions 触发」细粒度PAT";

const DATA_PATH = "accounts.json";
const RAW_URL = `https://raw.githubusercontent.com/${GH_OWNER}/${GH_REPO}/${GH_BRANCH}/${DATA_PATH}`;
const API_URL = `https://api.github.com/repos/${GH_OWNER}/${GH_REPO}/contents/${DATA_PATH}`;
