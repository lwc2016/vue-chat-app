-- 创建数据库
create database if not exists chat_app;
-- 修改users_table中的avatar字段
alter table users_table modify avatar varchar(128);

