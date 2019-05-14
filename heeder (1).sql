-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 13, 2019 at 02:25 PM
-- Server version: 10.1.35-MariaDB
-- PHP Version: 7.2.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `heeder`
--

-- --------------------------------------------------------

--
-- Table structure for table `channels`
--

CREATE TABLE `channels` (
  `id` int(50) NOT NULL,
  `name` varchar(100) NOT NULL,
  `code` varchar(100) DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `channels`
--

INSERT INTO `channels` (`id`, `name`, `code`, `updated_at`, `created_at`) VALUES
(2, 'Class A1', '201502', '2019-05-06 16:36:11', '0000-00-00 00:00:00'),
(17, 'Class C1', '201503', '2019-05-01 14:31:20', '0000-00-00 00:00:00'),
(18, 'Class D1', '201504', '2019-05-06 16:33:13', '0000-00-00 00:00:00'),
(26, 'Class B1', '201505', '2019-05-06 16:54:05', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `class_student`
--

CREATE TABLE `class_student` (
  `id` int(100) NOT NULL,
  `student_id` varchar(100) DEFAULT NULL,
  `code_id` varchar(100) DEFAULT NULL,
  `isLogin` varchar(100) DEFAULT NULL,
  `channelName` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `class_student`
--

INSERT INTO `class_student` (`id`, `student_id`, `code_id`, `isLogin`, `channelName`) VALUES
(2, '16', '27', '0', 'Class B1'),
(3, '18', '27', '0', 'sample'),
(4, '18', '2', '0', 'Class B1'),
(5, '22', '27', '1', 'sample'),
(6, '23', '27', '1', 'sample'),
(8, '24', '2', '0', 'Class A1'),
(9, '16', '2', '0', 'Class A1');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(100) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `contact_number` varchar(100) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `role` varchar(100) DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `contact_number`, `address`, `role`, `updated_at`, `created_at`) VALUES
(1, 'Samp', 'Samp', 'Samp', NULL, NULL, 'Samp', '2019-05-01 13:03:19', '0000-00-00 00:00:00'),
(2, 'Yawa', 'yawa@gmail.com', '123', NULL, NULL, 'Teacher', '2019-05-01 13:03:19', '0000-00-00 00:00:00'),
(3, 'edehdje', 'zontabigue1@gmail.com', '12345', NULL, NULL, 'Teacher', '2019-05-01 13:03:19', '0000-00-00 00:00:00'),
(4, 'hero casas', 'edbrey_gemina@yahoo.com', '1234567890', NULL, NULL, 'Student', '2019-05-01 13:03:19', '0000-00-00 00:00:00'),
(5, 'Rezon Jay Tabigue', 'zontabigue@gmail.com', '123', NULL, NULL, 'Student', '2019-05-01 13:03:19', '0000-00-00 00:00:00'),
(6, 'sds', 'ds@gmail.com', '123', NULL, NULL, 'Student', '2019-05-01 13:03:19', '0000-00-00 00:00:00'),
(7, 'testAdd', 'test@gmail.com', '123', NULL, NULL, 'Student', '2019-05-01 13:03:19', '0000-00-00 00:00:00'),
(8, 'laravel', 'laravel@gmail.com', '$2y$10$cQ5i7I28RYw0TYXI5Kjun.AyizP9rhuNIwXsUWOnNddTPbAcmQjh.', NULL, NULL, 'Teacher', '2019-05-01 05:03:59', '2019-05-01 05:03:59'),
(9, 'test', 'test', '$2y$10$HuWQtNlEII0E1GQMd7YudOfmy6BGhjiEpg1k/6tOX68KNzT1L/lEG', NULL, NULL, 'Teacher', '2019-05-01 05:09:25', '2019-05-01 05:09:25'),
(10, 'tesss', 'tesss', '$2y$10$JE71g2w1FYv1KBlsYjqY3uc.V9vTou8787nx272DT4nY5W/RnkSoS', NULL, NULL, 'Teacher', '2019-05-01 05:11:06', '2019-05-01 05:11:06'),
(11, 'sss', 'sss', '$2y$10$etPGbRUuY3lzKIBXFtRZO.j2u/NBbLnVpAUI99xy9GwGgGp2.2cri', NULL, NULL, 'Teacher', '2019-05-01 05:13:35', '2019-05-01 05:13:35'),
(12, 'sss', 'sss', '$2y$10$xOfTd5wIOC.gZot35jKNMedVOtW2RqYonlWmDo3kpoQ7F.Fgt3LSe', NULL, NULL, 'Teacher', '2019-05-01 05:15:04', '2019-05-01 05:15:04'),
(13, 'Tony', 'tony@gmail.com', '$2y$10$dwOT5D09m.SX4e4AAvPoPuLaZfw2t6HP5.WSX4u7zLRKGn.uLYPv6', NULL, NULL, 'Teacher', '2019-05-01 05:31:10', '2019-05-01 05:31:10'),
(14, NULL, 'tony@gmail.com', '$2y$10$2Bnt3In9FalZMeoXvoCiOusRZ39iN1E9AZOF4J9qB1TOczVTM3prq', NULL, NULL, NULL, '2019-05-01 05:31:33', '2019-05-01 05:31:33'),
(15, NULL, 'tony@gmail.com', '$2y$10$SBCQC3KrIoVRyAFF5CqyredjapLLLc0nHnE4UBoXHGpSHIUPxZQxi', NULL, NULL, NULL, '2019-05-01 06:05:07', '2019-05-01 06:05:07'),
(16, 'Thor Odin\'s Son', 'thor@gmail.com', '$2y$10$Y6C1TWezg3hmMnXwPr2Q..zAhfIgxWU4SCLDqOVWUTGVVOWbIOyqe', NULL, NULL, 'Student', '2019-05-01 15:24:43', '2019-05-01 07:20:23'),
(17, 'hulk', 'hulk@gmail.com', '$2y$10$6c95aXaw/WPp5m7awXTDNuO1yocUoATy7hCfNViEfVwePp.d274OK', NULL, NULL, 'Student', '2019-05-01 21:10:04', '2019-05-01 07:35:58'),
(18, 'Steve Rogers', 'steve@gmail.com', '$2y$10$WMCdC3tO03uW4Nm4e3A9BevDRhKSrUIxrq1z6jpyIBYN3SWdiN2kK', NULL, NULL, 'Student', '2019-05-01 21:10:10', '2019-05-01 07:49:14'),
(20, 'Zon', 'jay@gmail.com', '$2y$10$vqIERz.v4DP0z49cDJHnguSxrXwmNTCsp98yO7hzFMHpSGHCnTLui', NULL, NULL, 'Teacher', '2019-05-03 11:00:55', '2019-05-03 11:00:55'),
(21, 'Mia Aisa Bajan', 'mia.bajan@gmail.com', '$2y$10$PCLMefI21/Zj7kHjX1a3..G1L4y1xyG/4IBqHAnyCNnVFJ.VtQSXa', NULL, NULL, 'Teacher', '2019-05-06 06:40:49', '2019-05-06 06:40:49'),
(22, 'reymart', 'reymart@gmail.com', '$2y$10$WeVKaDnUyukki17FCFaHn.do0ZdA1i6WNYDhlax..jLrD/Ky5m8uS', NULL, NULL, 'Student', '2019-05-06 06:44:54', '2019-05-06 06:44:54'),
(23, 'Bree Gemina', 'breealinghawa@gmail.com', '$2y$10$dRl3IA4H24PM2W3gJJCJRe1UH9c0QHiM.IOwNcRexLqRGh9sEeP4q', NULL, NULL, 'Student', '2019-05-06 07:04:52', '2019-05-06 07:04:52'),
(24, 'student1', 'student1@gmail.com', '$2y$10$d7YMC.xXe1LdgkpWznMVs.hA1qDMnUGjFU5gxEXPL9dSFUnylBqsK', NULL, NULL, 'Student', '2019-05-13 00:10:21', '2019-05-13 00:10:21'),
(25, 'Bree dem', 'dem@gmail.com', '$2y$10$2Fnk4AYQ2w136qO4PJYNluTiWP6CeKSq9NasUbmjGm5GjnExclS/i', NULL, NULL, 'Student', '2019-05-13 03:40:17', '2019-05-13 03:40:17'),
(26, 'Bree dem', 'dem@gmail.com', '$2y$10$67DJw07Ynk.NPjedbdJ7ZuTtJ1aAP3xARr9ieaqfnqitMB8DtPqz2', NULL, NULL, 'Student', '2019-05-13 03:40:17', '2019-05-13 03:40:17'),
(27, 'Bree dem', 'dem@gmail.com', '$2y$10$sZdLJVlPPt1f2OTm6yKiZOA/xp.c4TPE76TaHyyv5oKipIy3a1CW2', NULL, NULL, 'Student', '2019-05-13 03:40:17', '2019-05-13 03:40:17');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `channels`
--
ALTER TABLE `channels`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `class_student`
--
ALTER TABLE `class_student`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `channels`
--
ALTER TABLE `channels`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `class_student`
--
ALTER TABLE `class_student`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
