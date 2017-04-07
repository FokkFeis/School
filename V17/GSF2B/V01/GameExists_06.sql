DELIMITER $$
DROP FUNCTION IF EXISTS GameExists $$

CREATE FUNCTION GameExists (game_kick_off DATETIME, home_team INT(11) , away_team INT(11))
RETURNS VARCHAR(55)
BEGIN
	DECLARE isGame BOOl;
    set isGame = 0;
    SELECT EXISTS(SELECT * FROM games WHERE `gameKickoff` = game_kick_off AND `homeTeam` = home_team AND `awayTeam` = away_team) INTO isGame ;
    if isGame !=0 THEN
		return 'True';
	ELSE
		return 'False';
	END IF;
END $$
DELIMITER ;

SELECT GameExists('2015-11-05 13:43:17' , 2 , 3);
