-- ===============================================
-- name:	ResetPassword	
-- role:    Changes the password of a user
-- author:	Sigurdur B. Fridriksson
-- date: 	03.04.17
-- parameters:
-- 	memberID INT
--  user_pass blob
-- todo: The salt for the password encryption is hardcoded into the value list.
-- 		 That must be changed sometime sooner than later...But not just yet.
-- ===============================================
delimiter $$
drop procedure if exists ResetPassword $$

create procedure ResetPassword
(
    member_id INT(11),
    user_pass blob
)
begin
	UPDATE members
    SET
		userPass = aes_encrypt(user_pass,'xAklwzVY3Q?Jk')
        WHERE memberID = member_ID;
		
end $$
delimiter ;

call resetPassword(1,'siggi')