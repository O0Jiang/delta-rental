// ===== GitHub 方案配置（站长填写一次）=====
// 1. GH_OWNER / GH_REPO / GH_BRANCH：改成你的 GitHub 用户名、仓库名、分支
// 2. GH_TOKEN：在 GitHub 生成一个 fine-grained PAT（仅授权该仓库 Contents: Read and Write），粘贴到此
//    生成步骤见 README.md
const GH_OWNER  = "O0Jiang";
const GH_REPO   = "delta-rental";
const GH_BRANCH = "main";
const GH_TOKEN  = "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";

const DATA_PATH = "accounts.json";
const RAW_URL = `https://raw.githubusercontent.com/${GH_OWNER}/${GH_REPO}/${GH_BRANCH}/${DATA_PATH}`;
const API_URL = `https://api.github.com/repos/${GH_OWNER}/${GH_REPO}/contents/${DATA_PATH}`;
