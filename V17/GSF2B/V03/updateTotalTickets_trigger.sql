DROP TRIGGER IF EXISTS updateTotalTickets;
DELIMITER $$

CREATE TRIGGER updateTotalTickets
AFTER INSERT ON tickets
FOR EACH ROW
BEGIN
	UPDATE statistics SET totalTickets = totalTickets + 1 WHERE memberID = (SELECT tickets.memberID FROM tickets ORDER BY memberID DESC LIMIT 1);
END $$
DELIMITER ;