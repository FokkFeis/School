DELIMITER $$
DROP PROCEDURE IF EXISTS addTicket $$
CREATE PROCEDURE addTicket
(
	member_id INT(11),
    group_id INT(11)
)
BEGIN
	START TRANSACTION;
	INSERT INTO tickets(tickets.gameWeek, tickets.created, tickets.groupID, tickets.memberID)
    VALUES(WEEK(NOW()),concat(current_date()," " ,current_time()), group_id,member_id);
    COMMIT;
END $$
DELIMITER $$
CALL addTicket(1,1);