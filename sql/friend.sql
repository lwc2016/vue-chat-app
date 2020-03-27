-- 创建朋友表
create table if not exists friends_table(
    id int primary key auto_increment,
    fromId int not null,
    toId int not null,
    remarkName varchar(32),
    createdTime dateTime default now()
);
