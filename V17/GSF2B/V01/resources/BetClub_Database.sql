drop database if exists BetClub1X2;
create database BetClub1X2;
use BetClub1X2;

set sql_mode = 'STRICT_ALL_TABLES';

create table Countries
(
	alpha336612 char(2) not null,
    alpha336613 char(3) not null,
    alpha31662 char(13) not null,
    numeric33661 int not null,
    countryName varchar(75) not null,
    constraint countrycodes_PK primary key(alpha336612)
);

create table Teams
(
	teamID int auto_increment,
    teamName varchar(125),
    shortName varchar(45),
    countryCode char(2),
    constraint team_PK primary key(teamID),
    constraint teamname_UQ unique(teamName),
    constraint team_country_FK foreign key(countryCode) references Countries(alpha336612)
);

create table Members
(
	memberID int auto_increment,
    firstName varchar(55),
    lastName varchar(55),
    userName varchar(15),
    userPass blob,
    email varchar(95),
    joined date,
    active boolean default true,
    constraint member_PK primary key(memberID)
);

create table Groups
(
	groupID int auto_increment,
    groupName varchar(55) not null,
    supportsTeam int null,	-- yfirleitt eru grúppur tileinkaðar ákv. liði.
	constraint group_PK primary key(groupID),
    constraint groupname_UQ unique(groupName),
    constraint supportsteam_team foreign key(supportsTeam) references Teams(teamID)
);

create table Games
(
	gameID int auto_increment,
    gameKickoff datetime,
    homeTeam int not null,
    awayTeam int not null,
    homeGoals tinyint,
    awaygoals tinyint,
    resultMark char(1) default null,	
    bettingDeadline datetime,
    constraint game_PK primary key(gameID),
    constraint hometeam_team_FK foreign key(homeTeam) references Teams(teamID),
    constraint awayteam_team_FK foreign key(awayTeam) references Teams(teamID)
);

create table GroupMembers
(
    memberID int not null,
    groupID int not null,
    constraint groupmember_PK primary key(memberID,groupID),
    constraint groupmember_member_FK foreign key(memberID) references Members(memberID),
    constraint groupmember_group_FK foreign key(groupID) references Groups(groupID)
);

create table Tickets
(
	ticketID int auto_increment,
    gameWeek int,
    created datetime,
    score int default 0,
    groupID int null,
    memberID int null,
    constraint ticket_PK primary key(ticketID),
    constraint ticket_group_FK foreign key(groupID) references Groups(groupID),
    constraint ticket_member_FK foreign key(memberID) references Members(memberID)
);

create table TicketBets
(
	ticketbetsID int auto_increment,
	ticketID int,
    gameID int,
    betMark char(1) not null,
    constraint ticketbet_PK primary key(ticketbetsID),
    constraint ticketbet_ticket_FK foreign key(ticketID) references Tickets(ticketID),
    constraint ticketbet_game_FK foreign key(gameID) references Games(gameID)
);

create table Statistics
(
	statisticID int auto_increment,
    totalTickets int default 0,
    totalTicketRows int default 0,
    averageTicketRows int default 0,
    totalScore int default 0,
    highestScore int default 0,
    averageScore int default 0,
    groupID int null,
    memberID int null,
    constraint statistics_PK primary key(statisticID),
    constraint statistics_group_FK foreign key(groupID) references Groups(groupID),
    constraint statistics_member_FK foreign key(memberID) references Members(memberID)  
);