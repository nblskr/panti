-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 31 Mei 2017 pada 08.28
-- Versi Server: 10.1.10-MariaDB
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
-- Struktur dari tabel `donasi_uang`
--

CREATE TABLE `donasi_uang` (
  `id_donasi` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `Jenis Donasi` text NOT NULL,
  `Jumlah donasi` int(11) NOT NULL,
  `Banyak barang` int(11) NOT NULL,
  `Nama barang` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `donasi_uang`
--

INSERT INTO `donasi_uang` (`id_donasi`, `id_user`, `Jenis Donasi`, `Jumlah donasi`, `Banyak barang`, `Nama barang`) VALUES
(0, 0, '0', 0, 0, '');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
