# 引入 git
git init

# 切换到 main 分支并提交

## 创建本地 main 分支
git checkout -b to-docusaurus-v3

## 提交代码
git add .
git commit -m "init by pnpx create-docusaurus@latest my-website classic --typescript."

## 推送
git remote add origin https://github.com/cxzx150133/cxzx150133.github.io.git
git push -u origin to-docusaurus-v3