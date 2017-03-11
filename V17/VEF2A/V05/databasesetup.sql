CREATE DATABASE IF NOT EXISTS `picturebase`;
USE picturebase;
# Try to run this only once please, we should refrain from having duplicate entries
CREATE TABLE IF NOT EXISTS `users`
(
	id INTEGER(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS `pictures` (
    id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    filename VARCHAR(100),
    picturename VARCHAR(100),
    description VARCHAR(200),
    user_id INTEGER(11) NOT NULL,
    FOREIGN KEY (user_id)
        REFERENCES users (id)
);


INSERT INTO users(username,email)
VALUES('Konni', 'konni@fokkfeis.org'),
('Hildur', 'hildur@fokkfeis.org');

INSERT INTO pictures(filename, picturename, description,user_id)
VALUES('konni1.jpg', 'My cat', 'This is my cat. there are many like it but this one is mine',1),
('konni2.jpg', 'My house', 'This is my house. It is in the middle of the street!',1),
('hildur1.jpg', 'My car', 'This is my car. there are many like it but this goes wroom wroom',2),
('hildur2.jpg', 'My garden', 'This is my garden. It has flowers',2);
