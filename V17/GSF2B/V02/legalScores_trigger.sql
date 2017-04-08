DROP TRIGGER IF EXISTS legalScoresInsert;

DELIMITER $$

CREATE TRIGGER legalScoresInsert
BEFORE INSERT ON games
FOR EACH ROW
BEGIN
	DECLARE msg VARCHAR(255);
	IF(NEW.homeGoals < 0 OR NEW.awayGoals < 0) THEN
		SET msg = 'Cannot be negative number';
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = msg;
	END IF;
END $$

DELIMITER ;

DROP TRIGGER IF EXISTS legalScoresUpdate;

DELIMITER $$

CREATE TRIGGER legalScoresUpdate
BEFORE UPDATE ON games
FOR EACH ROW
BEGIN
	DECLARE msg VARCHAR(255);
	IF(NEW.homeGoals < 0 OR NEW.awayGoals < 0 ) THEN
		SET msg = 'Cannot be negative number';
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = msg;
	END IF;
END $$

DELIMITER ;