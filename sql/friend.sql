-- 创建朋友表
create table if not exists friends_table(
    id int primary key auto_increment,
    fromId int not null,
    toId int not null,
    remarkName varchar(32),
    isValid tinyint default 1,
    createdTime dateTime default now()
);

-- 添加好友
insert into friends_table (fromId, toId) values (1, 2), (2, 1);
insert into friends_table (fromId, toId) values (1, 3), (3, 1);

-- 获取好友
select friends_table.id as id, users_table.id as userId, name, nickName, avatar from friends_table left join users_table on friends_table.toId = users_table.id where fromId = 1 and friends_table.isValid = 1;

-- 好友详情
select friends_table.id as id, users_table.id as userId, name, nickName, avatar from friends_table left join users_table on friends_table.toId = users_table.id where friends_table.id = 3 and fromId = 1 and friends_table.isValid = 1;