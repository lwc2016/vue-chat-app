-- 创建数据库
create database if not exists chat_app;

-- 创建用户表
create table if not exists users_table(
    id int primary key auto_increment,
    name varchar(32) not null unique,
    nickName varchar(32) not null,
    avatar varchar(128),
    password varchar(32) not null,
    remarks varchar(128),
    isValid tinyint not null default 1,
    createdTime dateTime default now()
)

-- 查询全部用户
select * from users_table;
