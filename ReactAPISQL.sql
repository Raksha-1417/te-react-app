create database ReactAxiosAPI
use ReactAxiosAPI
create table Details(
id int PRIMARY KEY IDENTITY(1,1),
title varchar(300),
image varchar(300),
description varchar(300)
)

select * from Details

set identity_insert Details on

