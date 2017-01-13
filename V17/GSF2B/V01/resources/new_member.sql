-- ===============================================
-- name:	NewMember	
-- role:    adds a new member to the club
-- author:	Sigurdur R. Ragnarsson
-- date: 13.01.2017
-- parameters:
-- 	first_name string
--  last_name string
--  member_email string
--  user_name string
--  user_pass string
-- todo: The salt for the password encryption is hardcoded into the value list.
-- 		 That must be changed sometime sooner than later...But not just yet.
-- ===============================================
delimiter $$
drop procedure if exists NewMember $$

create procedure NewMember
(
	first_name varchar(55),
    last_name varchar(55),
    member_email varchar(95),
    user_name varchar(15),
    user_pass varchar(15)
)
begin
	declare member_id int;
    
    start transaction;
		insert into Members(firstName,lastName,email,userName,userPass,joined)
		values(first_name,last_name,member_email,user_name,aes_encrypt(user_pass,'xAklwzVY3Q?Jk'),date(now()));
        
		set member_id = last_insert_id();
		insert into Statistics(memberID) values(member_id);
    commit;
end $$
delimiter ;
