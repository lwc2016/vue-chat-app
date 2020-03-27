-- 创建添加好友邀请表
create table if not exists invitations_table(
    id int primary key auto_increment,
    fromId int not null,
    toId int not null,
    isValid tinyint not null default 1,
    status enum("waiting", "agreed", "refused") default "waiting",
    createdTime dateTime default now()
);