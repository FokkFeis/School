DELIMITER $$
DROP PROCEDURE IF EXISTS GameExists $$

CREATE PROCEDURE GameExists
(
	home_team INT(11),
    away_team INT(11),
	game_kickoff DATETIME
)
BEGIN
	DECLARE game_id INT;
    START TRANSACTION;
    SELECT (