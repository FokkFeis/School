DELIMITER $$
DROP PROCEDURE IF EXISTS NewTeam $$

CREATE PROCEDURE NewTeam
(
	team_name VARCHAR(125),
    short_name VARCHAR(45),
    country_code CHAR(2)
)
BEGIN
	declare team_id int;
	start transaction;
		insert into teams(teamName,shortName,countryCode)
		values(team_name,short_name,country_code);
        
		set team_id = last_insert_id();
		
    commit;
END $$
DELIMITER $$

