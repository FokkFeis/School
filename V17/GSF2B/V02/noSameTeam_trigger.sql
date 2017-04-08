DROP TRIGGER IF EXISTS NoSameTeamInsert;

DELIMITER $$

CREATE TRIGGER NoSameTeamInsert
BEFORE INSERT ON games
FOR EACH ROW
BEGIN
	DECLARE msg VARCHAR(255);
    IF(NEW.homeTeam = NEW.awayTeam OR NEW.awayTeam = NEW.homeTeam) THEN
		SET msg = 'Cannot be same team';
		SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = msg;
    END IF;
END $$
DELIMITER ;


DROP TRIGGER IF EXISTS NoSameTeamUpdate;
DELIMITER $$

CREATE TRIGGER NoSameTeamUpdate
BEFORE UPDATE ON games
FOR EACH ROW
BEGIN
	DECLARE msg VARCHAR(255);
    IF(OLD.homeTeam = NEW.awayTeam OR OLD.awayTeam = NEW.homeTeam) THEN
		SET msg = 'Cannot be same team';
		SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = msg;
    END IF;
END $$
DELIMITER ;

