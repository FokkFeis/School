-- ===============================================
-- name:	NewMemberExtended
-- role:    adds a new member to the club with a twist
-- author:	Sigurdur B. Fridriksson
-- date: 07.04.2017
-- parameters:
-- 	first_name string
--  last_name string
--  member_email string
--  user_name string
--  user_pass string
-- 	In and Out parameters 

-- ===============================================
delimiter $$
drop procedure if exists NewMemberExtended $$

create procedure NewMemberExtended
(
	first_name varchar(55),
    last_name varchar(55),
    member_email varchar(95),
    user_name varchar(15),
    user_pass varchar(15),
    OUT member_id_out INT(11) 
)
begin
	declare member_id int;
	IF NOT EXISTS(SELECT email FROM members WHERE email = member_email) THEN 
		start transaction;
			insert into Members(firstName,lastName,email,userName,userPass,joined)
			values(first_name,last_name,member_email,user_name,aes_encrypt(user_pass,'xAklwzVY3Q?Jk'),date(now()));
			
			set member_id = last_insert_id();
			insert into Statistics(memberID) values(member_id);
		commit;
	ELSE
		SELECT email as 'This email is in our database' FROM members WHERE email = member_email;
	END IF;
	IF EXISTS(SELECT memberID FROM members WHERE memberID = member_id) THEN 
		SET member_id_out = member_id;
	ELSE
		SET member_id_out = 0;
	END IF;
end $$
delimiter ;

call newMemberExtended('Sigurdur','Baldvin','sigurdur@tl.is','FokkFeis','randomPassword',@member_id_out);
#call NewMember('Jon','Jonsson','nonni@fakemail.com','nonniboy','5igfri3d009');
#call NewMember('Sigridur','Gudmundsdottir','sigga@testmail.is','siggabeib','bHU78');
#call NewMember('Petur','Petusson','peterthegreat@nomail.ru','panpanpan','1234');
SELECT @member_id_out

