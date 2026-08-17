# 三角洲账号出租 · GitHub 版部署指南

用 GitHub Pages 托管网页、用仓库里的 `accounts.json` 当数据库，号主自助登记、租号人实时看到。零服务器、零费用。

## 1. 准备工作
- 注册 GitHub 账号（免费）：https://github.com/signup
- 新建一个 **public** 仓库（命名如 `delta-rental`），例如 `https://github.com/你的用户名/delta-rental`

## 2. 填写 config.js
打开 `config.js`，改这几处：
- `GH_OWNER`：你的 GitHub 用户名
- `GH_REPO`：你的仓库名（如 `delta-rental`）
- `GH_BRANCH`：分支，默认 `main`
- `GH_TOKEN`：下一步生成的 token

## 3. 生成 fine-grained PAT（写权限）
1. 右上角头像 → Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate new token
2. Token name：`delta-rental-write`
3. Resource owner：你的账号
4. Repository access：Only select repositories → 选你的 `delta-rental` 仓库
5. Permissions → Repository permissions → Contents：**Read and Write**
6. Generate token，复制保存（只显示一次）
7. 粘贴到 `config.js` 的 `GH_TOKEN`

> 安全说明：此 token 在前端公开（仓库 public，任何人都看得到），但它只能读写这一个仓库的 `accounts.json`，且数据本就公开，风险可控。
> 若想更稳，可改用「Actions 中转」方案（token 存仓库 secret，不暴露前端），需要我补一个 workflow 文件即可。

## 4. 上线（GitHub Pages）
1. 把本目录所有文件 push 到仓库（含 `config.js` / `gh-index.html` / `gh-register.html` / `accounts.json` / `wechat-qr.jpg`）
2. 仓库 Settings → Pages → Source 选 `main` 分支 / `root` → Save
3. 约 1 分钟后得到两个网址：
   - 展示页：`https://你的用户名.github.io/delta-rental/gh-index.html`
   - 登记页：`https://你的用户名.github.io/delta-rental/gh-register.html`

## 5. 使用
- 把**登记页**链接发给号主 → 号主填表提交 → 直接写入 `accounts.json` → 展示页每 30 秒自动刷新，租号人立即可见
- 账号租出后：在 GitHub 网页里编辑 `accounts.json`，把该条 `status` 改为 `已租`，展示页自动隐藏
- 想回看已租账号：展示页状态下拉选「已租」

## 文件说明
- `config.js`：仓库与 token 配置（你填一次）
- `gh-register.html`：号主登记页（提交即写库）
- `gh-index.html`：租号人展示页（读库 + 30 秒轮询）
- `accounts.json`：数据文件（初始含现有 41 条账号）
- `wechat-qr.jpg`：微信二维码（展示页底部对接用）
