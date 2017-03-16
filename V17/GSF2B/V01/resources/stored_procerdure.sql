delimiter $$
drop procedure if exists ResetPassword $$

create procedure ResetPassword
(
	first_name varchar(55),
    last_name varchar(55),
    member_email varchar(95),
    user_name varchar(15),
    user_pass varchar(15)
)
begin
	declare member_id int;


    commit;
end $$
delimiter ;
