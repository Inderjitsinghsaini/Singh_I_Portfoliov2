-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 07, 2019 at 11:21 PM
-- Server version: 5.7.26
-- PHP Version: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_homepage`
--

DROP TABLE IF EXISTS `tbl_homepage`;
CREATE TABLE IF NOT EXISTS `tbl_homepage` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(100) COLLATE utf16_bin NOT NULL,
  `lastName` varchar(100) COLLATE utf16_bin NOT NULL,
  `Description` text COLLATE utf16_bin NOT NULL,
  `Image` varchar(100) COLLATE utf16_bin NOT NULL,
  `Skill1Image` varchar(100) COLLATE utf16_bin NOT NULL,
  `Skill1Type` varchar(100) COLLATE utf16_bin NOT NULL,
  `Skill2Image` varchar(100) COLLATE utf16_bin NOT NULL,
  `Skill2Type` varchar(100) COLLATE utf16_bin NOT NULL,
  `Skill3Image` varchar(100) COLLATE utf16_bin NOT NULL,
  `Skill3Type` varchar(100) COLLATE utf16_bin NOT NULL,
  `showreel` varchar(100) COLLATE utf16_bin NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf16 COLLATE=utf16_bin;

--
-- Dumping data for table `tbl_homepage`
--

INSERT INTO `tbl_homepage` (`ID`, `firstName`, `lastName`, `Description`, `Image`, `Skill1Image`, `Skill1Type`, `Skill2Image`, `Skill2Type`, `Skill3Image`, `Skill3Type`, `showreel`) VALUES
(1, 'INDERJIT ', 'SINGH', 'Dedicated and Ambitious ready to sharpen my skills as a media designer. I know a plenty of designing and coding skills that you are seeking for. if you want to have your product promoted or want your company website give a hit to the contact panel.', 'myImage.jpg', 'Advertising.svg', 'ADVERTISING', 'Coding.svg', 'CODING', 'Design.svg', 'DESIGN', 'demoVideo.mp4');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
