DROP PROCEDURE IF EXISTS addFormattedData;

DELIMITER $$
CREATE PROCEDURE addFormattedData()

BEGIN
	DECLARE data_id INT;
    declare done int default false;
    DECLARE xml_data text DEFAULT "";
	DECLARE json_data text default "";
        
    
    DECLARE jason CURSOR
		FOR SELECT xmlData, JSonData FROM formatteddata;
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = true;
    
    OPEN jason;
    
    putData: loop
	 FETCH jason INTO v_jason;
     IF done = TRUE THEN
     LEAVE putData;
     END IF;
     
     SET JSonData = json_data;
     SET xmlData = xml_data;
	END LOOP;
    
    CLOSE jason;
    
    
END $$

DELIMITER ; 
