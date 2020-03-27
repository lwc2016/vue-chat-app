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

-- 修改users_table中的avatar字段
alter table users_table modify avatar varchar(128);

-- 创建朋友表
create table if not exists friends_table(
    id int primary key auto_increment,
    fromId int not null,
    toId int not null,
    remarkName varchar(32),
    createdTime dateTime default not()
);