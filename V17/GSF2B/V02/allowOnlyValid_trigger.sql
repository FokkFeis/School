DROP TRIGGER IF EXISTS allowOnlyValidInsert;

DELIMITER $$

CREATE TRIGGER allowOnlyValidInsert
BEFORE INSERT ON ticketbets
FOR EACH ROW
BEGIN
	DECLARE msg VARCHAR(255);
	IF(NEW.betMark != '1' AND NEW.betMark != '2' AND NEW.betMark != 'x') THEN
		SET msg = 'Invalid input';
		SIGNAL SQLSTATE '45000' SET MESSAGE_TEXt = msg;
	END IF;
END $$

DELIMITER ;

DROP TRIGGER IF EXISTS allowOnlyValidUpdate;

DELIMITER $$

CREATE TRIGGER allowOnlyValidUpdate
BEFORE UPDATE ON ticketbets
FOR EACH ROW
BEGIN
	DECLARE msg VARCHAR(255);
	IF(NEW.betMark != '1' AND NEW.betMark != '2' AND NEW.betMark != 'x') THEN
		SET msg = 'Invalid input';
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXt = msg;
	END IF;
END $$

DELIMITER ;
