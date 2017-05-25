-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: May 25, 2017 at 09:35 AM
-- Server version: 10.1.10-MariaDB
-- PHP Version: 7.0.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `panti`
--

-- --------------------------------------------------------

--
-- Table structure for table `rmpanti`
--

CREATE TABLE `rmpanti` (
  `id` int(11) NOT NULL,
  `nama_panti` text NOT NULL,
  `email_panti` text NOT NULL,
  `password_panti` varchar(225) NOT NULL,
  `alamat_panti` text NOT NULL,
  `kondisi_panti` text NOT NULL,
  `jml_penghuni` int(225) NOT NULL,
  `nama_pemilik` text NOT NULL,
  `kontak_panti` varchar(225) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `rmpanti`
--

INSERT INTO `rmpanti` (`id`, `nama_panti`, `email_panti`, `password_panti`, `alamat_panti`, `kondisi_panti`, `jml_penghuni`, `nama_pemilik`, `kontak_panti`, `created_at`, `updated_at`) VALUES
(1, 'cobaaa', 'cobaaq@gmail.com', 'asssss', 'andara', 'bagussss', 100, 'ariiq', '2147483647', '2017-05-24 14:29:58', '2017-05-24 14:29:58'),
(2, 'cobaaa', 'cobaaq@gmail.com', 'asssss', 'andara', 'bagussss', 100, 'ariiq', '081294954906', '2017-05-24 14:34:37', '2017-05-24 14:34:37');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `no_hp` varchar(20) NOT NULL,
  `alamat` text NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `no_hp`, `alamat`, `created_at`, `updated_at`) VALUES
(9, 'cobaaa', 'cobaaq@gmail.com', 'asssss', '2147483647', 'andara', '2017-05-24 13:38:14', '2017-05-24 13:38:14');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `rmpanti`
--
ALTER TABLE `rmpanti`
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
-- AUTO_INCREMENT for table `rmpanti`
--
ALTER TABLE `rmpanti`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
