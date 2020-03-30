-- 创建添加好友邀请表
create table if not exists invitations_table(
    id int primary key auto_increment,
    fromId int not null,
    toId int not null,
    isValid tinyint not null default 1,
    status enum("waiting", "agreed", "refused") default "waiting",
    remarks varchar(128),
    createdTime dateTime default now()
);

select invitations_table.id as id, nickName, avatar, fromId, remarks from invitations_table left join users_table on invitations_table.fromId = users_table.id where fromId = 5 and toId = 1;