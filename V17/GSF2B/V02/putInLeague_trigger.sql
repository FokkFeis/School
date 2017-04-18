DROP TRIGGER IF EXISTS putInLeague;

DELIMITER $$

CREATE TRIGGER putInLeague
AFTER UPDATE ON fighters
FOR EACH ROW
BEGIN

    IF(NEW.strength <999) THEN
		  UPDATE fighter_has_leagues SET league_id = 5 WHERE fighter_id = ID;
	END IF;
    IF (NEW.strength >1000 AND NEW.strength < 1999) THEN
      UPDATE fighter_has_leagues SET league_id = 4 WHERE fighter_id = ID;
	END IF;

    IF(NEW.strength >2000 AND NEW.strength <2999) then
      UPDATE fighter_has_leagues SET league_id = 3 WHERE fighter_id = ID;
	END IF;
    IF(strength >3000) THEN
      UPDATE fighter_has_leagues SET league_id = 2 WHERE fighter_id = ID;
	END IF;

END $$
DELIMITER ;
