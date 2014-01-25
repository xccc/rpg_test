-- MySQL dump 10.13  Distrib 5.5.35, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: test
-- ------------------------------------------------------
-- Server version	5.5.35-0+wheezy1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Market`
--

DROP TABLE IF EXISTS `Market`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Market` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tool_name` varchar(45) NOT NULL,
  `tool_version` varchar(45) DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  `tool_type` varchar(45) DEFAULT NULL,
  `costage` varchar(45) DEFAULT NULL,
  `size` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Market`
--

LOCK TABLES `Market` WRITE;
/*!40000 ALTER TABLE `Market` DISABLE KEYS */;
INSERT INTO `Market` VALUES (1,'network scanner','nScan 0.1','Basic network scanner','network','10','600'),(2,'whois','whoIS 0.1','Whois a host','network','10','10'),(3,'Crypter','crypt 0.1','Basic crypter','offense','10','10'),(4,'Firewall','firewall 0.1','Basic firewall','defence','500','5'),(5,'Antivirus','AV 0.1','Basic antivirus',NULL,'400',NULL);
/*!40000 ALTER TABLE `Market` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `NPC`
--

DROP TABLE IF EXISTS `NPC`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `NPC` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ip_address` varchar(45) DEFAULT NULL,
  `level` varchar(45) DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `NPC`
--

LOCK TABLES `NPC` WRITE;
/*!40000 ALTER TABLE `NPC` DISABLE KEYS */;
INSERT INTO `NPC` VALUES (1,'1.1.1.19','1','Easy hack'),(2,'1.1.1.114','1','Easy hack'),(3,'1.1.1.119','2','Moderate hack'),(4,'1.1.1.143','1','Easy Hack'),(5,'1.1.2.43','1','Easy Hack'),(6,'1.1.2.55','3','Hard Hack'),(7,'1.1.2.144','1','Easy Hack'),(8,'1.1.2.212','2','Moderate Hack'),(9,'1.1.2.244','3','Hard Hack'),(10,'1.1.3.11','1',NULL);
/*!40000 ALTER TABLE `NPC` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Skills`
--

DROP TABLE IF EXISTS `Skills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Skills` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `programming` varchar(45) NOT NULL,
  `inprogress` varchar(45) DEFAULT NULL,
  `combat` varchar(45) DEFAULT NULL,
  `xp` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Skills`
--

LOCK TABLES `Skills` WRITE;
/*!40000 ALTER TABLE `Skills` DISABLE KEYS */;
INSERT INTO `Skills` VALUES (1,'dima','6','0','1','125220'),(2,'juku','3','0',NULL,NULL);
/*!40000 ALTER TABLE `Skills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `System`
--

DROP TABLE IF EXISTS `System`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `System` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(45) NOT NULL,
  `cpu` varchar(45) NOT NULL,
  `hdd` varchar(45) NOT NULL,
  `current_memory` varchar(45) NOT NULL,
  `installed` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `System`
--

LOCK TABLES `System` WRITE;
/*!40000 ALTER TABLE `System` DISABLE KEYS */;
INSERT INTO `System` VALUES (1,'dima','333','basics 0.1','64',NULL);
/*!40000 ALTER TABLE `System` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Tools`
--

DROP TABLE IF EXISTS `Tools`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Tools` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tool_name` varchar(45) DEFAULT NULL,
  `success_rate` varchar(45) DEFAULT NULL,
  `time` varchar(45) DEFAULT NULL,
  `level` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Tools`
--

LOCK TABLES `Tools` WRITE;
/*!40000 ALTER TABLE `Tools` DISABLE KEYS */;
INSERT INTO `Tools` VALUES (1,'brute_forcer 0.1','6','300','1'),(2,'brute_forcer 0.2','25','500','2'),(3,'ip_scanner 0.1','100','25','1'),(4,'ip_scanner 0.2','100','1200','2'),(5,NULL,NULL,NULL,'');
/*!40000 ALTER TABLE `Tools` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bank`
--

DROP TABLE IF EXISTS `bank`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bank` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(45) DEFAULT NULL,
  `account_number` int(11) DEFAULT NULL,
  `login` varchar(45) NOT NULL,
  `login_password` varchar(45) NOT NULL,
  `balance` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bank`
--

LOCK TABLES `bank` WRITE;
/*!40000 ALTER TABLE `bank` DISABLE KEYS */;
INSERT INTO `bank` VALUES (1,'dima',2147483647,'ruufus','ror','36300');
/*!40000 ALTER TABLE `bank` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `game_programming`
--

DROP TABLE IF EXISTS `game_programming`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `game_programming` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `level` int(11) DEFAULT NULL,
  `time` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `game_programming`
--

LOCK TABLES `game_programming` WRITE;
/*!40000 ALTER TABLE `game_programming` DISABLE KEYS */;
INSERT INTO `game_programming` VALUES (1,1,'2'),(2,2,'8'),(3,3,'18'),(4,4,'32'),(5,5,'50'),(6,6,'72'),(7,7,'98'),(8,8,'128'),(9,9,'162'),(10,10,'200'),(11,11,'242'),(12,12,'288'),(13,13,'338'),(14,14,'392'),(15,15,'450'),(16,16,'512'),(17,17,'578'),(18,18,'648'),(19,19,'722'),(20,20,'800'),(21,21,'882'),(22,22,'968'),(23,23,'1058'),(24,24,'1152'),(25,25,'1250'),(26,26,'1352'),(27,27,'1458'),(28,28,'1568'),(29,29,'1682'),(30,30,'1800'),(31,31,'1922'),(32,32,'2048'),(33,33,'2178'),(34,34,'2312'),(35,35,'2450'),(36,36,'2592'),(37,37,'2738'),(38,38,'2888'),(39,39,'3042'),(40,40,'3200'),(41,41,'3362'),(42,42,'3528'),(43,43,'3698'),(44,44,'3872'),(45,45,'4050'),(46,46,'4232'),(47,47,'4418'),(48,48,'4608'),(49,49,'4802'),(50,50,'5000'),(51,51,'5202'),(52,52,'5408'),(53,53,'5618'),(54,54,'5832'),(55,55,'6050'),(56,56,'6272'),(57,57,'6498'),(58,58,'6728'),(59,59,'6962'),(60,60,'7200'),(61,61,'7442'),(62,62,'7688'),(63,63,'7938'),(64,64,'8192'),(65,65,'8450'),(66,66,'8712'),(67,67,'8978'),(68,68,'9248'),(69,69,'9522'),(70,70,'9800'),(71,71,'10082'),(72,72,'10368'),(73,73,'10658'),(74,74,'10952'),(75,75,'11250'),(76,76,'11552'),(77,77,'11858'),(78,78,'12168'),(79,79,'12482'),(80,80,'12800'),(81,81,'13122'),(82,82,'13448'),(83,83,'13778'),(84,84,'14112'),(85,85,'14450'),(86,86,'14792'),(87,87,'15138'),(88,88,'15488'),(89,89,'15842'),(90,90,'16200'),(91,91,'16562'),(92,92,'16928'),(93,93,'17298'),(94,94,'17672'),(95,95,'18050'),(96,96,'18432'),(97,97,'18818'),(98,98,'19208'),(99,99,'19602'),(100,100,'20000');
/*!40000 ALTER TABLE `game_programming` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hacked_boxes`
--

DROP TABLE IF EXISTS `hacked_boxes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hacked_boxes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ip` varchar(45) DEFAULT NULL,
  `user` varchar(45) DEFAULT NULL,
  `level` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ip_UNIQUE` (`ip`)
) ENGINE=InnoDB AUTO_INCREMENT=2509 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hacked_boxes`
--

LOCK TABLES `hacked_boxes` WRITE;
/*!40000 ALTER TABLE `hacked_boxes` DISABLE KEYS */;
INSERT INTO `hacked_boxes` VALUES (2501,'1.1.1.114','dima',NULL),(2502,'1.1.1.143','dima',NULL),(2504,'1.1.3.11','dima',NULL),(2505,'1.1.1.19','dima',NULL),(2506,'1.1.2.43','dima',NULL),(2508,'1.1.2.144','dima',NULL);
/*!40000 ALTER TABLE `hacked_boxes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hard_drive`
--

DROP TABLE IF EXISTS `hard_drive`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hard_drive` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `size` varchar(45) NOT NULL,
  `current_size` varchar(45) DEFAULT NULL,
  `hdd_version` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hard_drive`
--

LOCK TABLES `hard_drive` WRITE;
/*!40000 ALTER TABLE `hard_drive` DISABLE KEYS */;
INSERT INTO `hard_drive` VALUES (1,'dima','500','240','basics 0.1');
/*!40000 ALTER TABLE `hard_drive` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hardware`
--

DROP TABLE IF EXISTS `hardware`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hardware` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `version` varchar(45) NOT NULL,
  `type` varchar(45) DEFAULT NULL,
  `stats` varchar(45) DEFAULT NULL,
  `costage` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hardware`
--

LOCK TABLES `hardware` WRITE;
/*!40000 ALTER TABLE `hardware` DISABLE KEYS */;
INSERT INTO `hardware` VALUES (1,'Hdd 1.0','basics 0.1','hdd','500','100'),(2,'Hdd 1.1','basics 0.2','hdd','700','200'),(3,'hdd 1.2','basics 0.3','hdd','800','300'),(4,'hdd 1.3','basics 0.4','hdd','900','500'),(5,'hdd 1.4','basics 0.5','hdd','1500','800'),(6,'cpu 500 mhz','intel','cpu','500','300'),(7,'cpu 600 mhz','intel','cpu','600','400'),(8,'cpu 700 mhz','intel','cpu','700','550'),(9,'cpu 1ghz','intel','cpu','1000','1000'),(10,'cpu 1.3 ghz ','intel ','cpu','1300','1500'),(11,'memory 128 mb','onx','ram','128','50'),(12,'memoy 160 mb','onx','ram','160','75'),(13,'memory 192 mb','onx','ram','192','125'),(14,'memory 256','onx','ram','',NULL),(15,'','',NULL,NULL,NULL);
/*!40000 ALTER TABLE `hardware` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inventory`
--

DROP TABLE IF EXISTS `inventory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inventory` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(45) NOT NULL,
  `software` varchar(45) NOT NULL,
  `installed` varchar(45) DEFAULT NULL,
  `hardware` varchar(45) DEFAULT NULL,
  `hardware_installed` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inventory`
--

LOCK TABLES `inventory` WRITE;
/*!40000 ALTER TABLE `inventory` DISABLE KEYS */;
INSERT INTO `inventory` VALUES (50,'dima','',NULL,'Hdd 1.1','false'),(51,'dima','',NULL,'hdd 1.2','false'),(52,'dima','',NULL,'hdd 1.3','false'),(53,'dima','ip_scanner 0.1','1',NULL,NULL),(54,'dima','brute_forcer 0.1','1',NULL,NULL);
/*!40000 ALTER TABLE `inventory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `login` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(120) DEFAULT NULL,
  `username` varchar(45) DEFAULT NULL,
  `last_login` datetime DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login`
--

LOCK TABLES `login` WRITE;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
INSERT INTO `login` VALUES (1,'lol','dima','0000-00-00 00:00:00','eitarbi',NULL);
/*!40000 ALTER TABLE `login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mail`
--

DROP TABLE IF EXISTS `mail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(45) NOT NULL,
  `title` varchar(45) NOT NULL,
  `message` text NOT NULL,
  `date` date NOT NULL,
  `from` varchar(45) NOT NULL,
  `read` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mail`
--

LOCK TABLES `mail` WRITE;
/*!40000 ALTER TABLE `mail` DISABLE KEYS */;
INSERT INTO `mail` VALUES (1,'dima','parm','ise oled','0000-00-00','dima',NULL),(2,'kuldar','kelpas','paksmagu','0000-00-00','joosep',NULL),(3,'dima','jakob','lexx','0000-00-00','glitch',NULL);
/*!40000 ALTER TABLE `mail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_action`
--

DROP TABLE IF EXISTS `user_action`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_action` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(45) NOT NULL,
  `time` varchar(45) DEFAULT NULL,
  `task` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=204 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_action`
--

LOCK TABLES `user_action` WRITE;
/*!40000 ALTER TABLE `user_action` DISABLE KEYS */;
INSERT INTO `user_action` VALUES (203,'dima','20140682552','scanning');
/*!40000 ALTER TABLE `user_action` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_private`
--

DROP TABLE IF EXISTS `user_private`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_private` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(45) DEFAULT NULL,
  `ip` varchar(45) DEFAULT NULL,
  `access` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ip_UNIQUE` (`ip`)
) ENGINE=InnoDB AUTO_INCREMENT=571 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_private`
--

LOCK TABLES `user_private` WRITE;
/*!40000 ALTER TABLE `user_private` DISABLE KEYS */;
INSERT INTO `user_private` VALUES (561,'dima','1.1.1.19','1'),(562,'dima','1.1.1.114','1'),(563,'dima','1.1.1.119','1'),(564,'dima','1.1.1.143','1'),(565,'dima','1.1.2.43','1'),(566,'dima','1.1.2.55','1'),(567,'dima','1.1.2.144','1'),(568,'dima','1.1.2.212','1'),(569,'dima','1.1.2.244','1'),(570,'dima','1.1.3.11','1');
/*!40000 ALTER TABLE `user_private` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wallet`
--

DROP TABLE IF EXISTS `wallet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `wallet` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `value` varchar(45) DEFAULT NULL,
  `user` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wallet`
--

LOCK TABLES `wallet` WRITE;
/*!40000 ALTER TABLE `wallet` DISABLE KEYS */;
INSERT INTO `wallet` VALUES (1,'1000','dima'),(2,'500','');
/*!40000 ALTER TABLE `wallet` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2014-01-25 10:24:58
