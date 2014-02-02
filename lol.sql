-- MySQL dump 10.13  Distrib 5.5.35, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: pela
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
-- Table structure for table `ip_db`
--

DROP TABLE IF EXISTS `ip_db`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ip_db` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `player_name` varchar(45) NOT NULL,
  `ip_addr` varchar(45) NOT NULL,
  `desc` varchar(45) DEFAULT NULL,
  `access` bit(1) DEFAULT NULL,
  `game_value` varchar(45) DEFAULT NULL,
  `connected` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ip_db`
--

LOCK TABLES `ip_db` WRITE;
/*!40000 ALTER TABLE `ip_db` DISABLE KEYS */;
INSERT INTO `ip_db` VALUES (1,'dima','212.112.67.123','VPN','','localhost',''),(2,'dima','222.121.43.98','bank','\0','',''),(3,'dima','211.98.12.3','email','','basic_mail','connection');
/*!40000 ALTER TABLE `ip_db` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `username` varchar(20) DEFAULT NULL,
  `password` varchar(120) DEFAULT NULL,
  `email` varchar(20) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `last_login` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login`
--

LOCK TABLES `login` WRITE;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
INSERT INTO `login` VALUES (0,'dima','lammas','lambi@lambi.ee',1,NULL);
/*!40000 ALTER TABLE `login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `missions`
--

DROP TABLE IF EXISTS `missions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `missions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `player_name` varchar(45) NOT NULL,
  `desc` varchar(45) NOT NULL,
  `level` varchar(45) DEFAULT NULL,
  `access` int(11) DEFAULT NULL,
  `info` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `missions`
--

LOCK TABLES `missions` WRITE;
/*!40000 ALTER TABLE `missions` DISABLE KEYS */;
INSERT INTO `missions` VALUES (1,'dima','Mission uno','1',1,'Go to IP database and create yourself a new e'),(2,'dima','2','2',0,NULL),(3,'dima','3','3',0,NULL),(4,'dima','4','4',0,NULL),(5,'dima','5','5',0,NULL),(6,'dima','6','6',0,NULL),(7,'dima','7','7',0,NULL),(8,'dima','8','8',0,NULL),(9,'dima','9','9',0,NULL),(10,'dima','10','10',0,NULL);
/*!40000 ALTER TABLE `missions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `npc_db`
--

DROP TABLE IF EXISTS `npc_db`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `npc_db` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `player_name` varchar(45) DEFAULT NULL,
  `ip_addr` varchar(45) NOT NULL,
  `software` varchar(45) DEFAULT NULL,
  `access` varchar(45) DEFAULT NULL,
  `player_software` varchar(45) DEFAULT NULL,
  `uploader_name` varchar(45) DEFAULT NULL,
  `type` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `npc_db`
--

LOCK TABLES `npc_db` WRITE;
/*!40000 ALTER TABLE `npc_db` DISABLE KEYS */;
INSERT INTO `npc_db` VALUES (4,'dima','211.98.12.3','AVV','','1',NULL,NULL),(5,'dima','211.98.12.3','trojan horse',NULL,'1',NULL,'virus'),(6,'dima','211.98.12.3','trojan horse',NULL,'1',NULL,'virus'),(7,'','211.98.12.3','wikipedia','','1','','null'),(8,'','211.98.12.3','brute forcer',NULL,'','',NULL),(9,'','211.98.12.3','trooja hobune','','','','virus');
/*!40000 ALTER TABLE `npc_db` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2014-01-31 11:33:51

