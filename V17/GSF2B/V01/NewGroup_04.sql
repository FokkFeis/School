DELIMITER $$
DROP PROCEDURE IF EXISTS NewGroup $$

CREATE PROCEDURE NewGroup
(
	group_name VARCHAR(55),
    supports_team INT(11)
)
BEGIN
	declare group_id int;
	start transaction;
		insert into groups(groupName,supportsTeam)
		values(group_name, supports_team);
        
		set group_id = last_insert_id();
		
    commit;
END $$
DELIMITER $$

call NewGroup('Fan of Siggi',10);