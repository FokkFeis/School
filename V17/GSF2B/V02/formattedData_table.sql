DROP TABLE IF EXISTS formatteddata;

CREATE TABLE formatteddata
(
	dataID INT(11) AUTO_INCREMENT,
    xmlData TEXT,
    JSonData TEXT,
    CONSTRAINT formatteddata_PK PRIMARY KEY(dataID)
)