#!/bin/sh

####
# 打包脚本配置
# 此段脚本由RPG自动生成，提供CI构建时使用，大多数情况下，开发人员不需要关注
current_tag=$GIT_PUSH_BRANCH

pack_time=`date "+%Y%m%d-%H%M"`
pack_name="ucoinadmin-$current_tag-"$pack_time"-bin"


echo "开始执行打包脚本 pack.sh..."


# 创建打包用的临时文件夹
mkdir -p $pack_name

# 以下一段脚本为构建前端所用，如此活动不涉及前端，可以将其注释
if [ ! -d "./frontend" ];
then
	echo "文件夹 ./frontend 不存在, 跳过前端打包."
else
	echo "正在前端构建打包..."

	cd frontend
	npm run ci
	cd ..
fi

# 以下一段脚本为打包日志检查相关类
if [[ "$GIT_PUSH_BRANCH" =~ "logcheck" ]]; then
   git clone git@git.ucweb.local:pf/logCheck.git
   cp -R logCheck/app/ ./
   rm -rf logCheck/
   cd conf
   echo "#日志检查 0关闭 1开启" >> common.conf
   echo "log.check.onoff=1" >> common.conf
   echo "#日志检查 babel规则api" >> common.conf
   echo "babel.log.rule=http://babel.test2.uae.uc.cn/api/activities/57de84377d3e9f92199bc58b/logs" >> common.conf
   cd ..
fi
tnpm install --production

# 打包压缩
echo "正在压缩到"$pack_name".tgz   ..."
mkdir -p releases
tar -czf releases/$pack_name.tgz app config node_modules conf index.js Procfile package.json


# 清理临时文件夹
rm -rf $pack_name

# 以下一段脚本为打包日志检查相关类
if [[ "$GIT_PUSH_BRANCH" =~ "logcheck" ]]; then
  git add app/ conf/
  git stash
  git stash drop
fi

# 结束
echo "打包已完成! "