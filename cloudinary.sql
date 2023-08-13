-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-08-2023 a las 00:33:31
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cloudinary`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagenes`
--

CREATE TABLE `imagenes` (
  `id` int(11) NOT NULL,
  `original_filename` varchar(255) DEFAULT NULL,
  `format` varchar(255) DEFAULT NULL,
  `resource_type` varchar(255) DEFAULT NULL,
  `url` text DEFAULT NULL,
  `secure_url` text DEFAULT NULL,
  `asset_id` varchar(255) DEFAULT NULL,
  `public_id` varchar(255) DEFAULT NULL,
  `version_id` varchar(255) DEFAULT NULL,
  `creation` datetime DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `imagenes`
--

INSERT INTO `imagenes` (`id`, `original_filename`, `format`, `resource_type`, `url`, `secure_url`, `asset_id`, `public_id`, `version_id`, `creation`, `created_at`, `updated_at`, `deleted_at`) VALUES
(7, '1C9D5C079', 'png', 'image', 'http://res.cloudinary.com/dodsifwhb/image/upload/v1691965740/mazh9s1uuwb8pnj0uvmo.png', 'https://res.cloudinary.com/dodsifwhb/image/upload/v1691965740/mazh9s1uuwb8pnj0uvmo.png', 'c5f84e5fe238a1b5dea8570d615777ff', 'mazh9s1uuwb8pnj0uvmo', 'f25fd1e93ab83de72d6055ef5240122c', '2023-08-13 22:29:00', '2023-08-13 22:29:04', '2023-08-13 22:29:04', NULL),
(8, '1C9D5C079', 'png', 'image', 'http://res.cloudinary.com/dodsifwhb/image/upload/v1691965744/wv9ttv92mod5nso7yyyq.png', 'https://res.cloudinary.com/dodsifwhb/image/upload/v1691965744/wv9ttv92mod5nso7yyyq.png', '77d30b6e55855b9df4a3aa1fdad31c42', 'wv9ttv92mod5nso7yyyq', '4fa46d5ab67b00afafad7bad8b41fe5f', '2023-08-13 22:29:04', '2023-08-13 22:29:07', '2023-08-13 22:29:07', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `imagenes`
--
ALTER TABLE `imagenes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `imagenes`
--
ALTER TABLE `imagenes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
