-- phpMyAdmin SQL Dump
-- version 5.2.1deb1ubuntu1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 24, 2024 at 04:16 PM
-- Server version: 8.0.36-0ubuntu0.23.10.1
-- PHP Version: 8.2.10-2ubuntu1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fundexsl`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slung` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta` text COLLATE utf8mb4_unicode_ci,
  `content` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `title`, `slung`, `meta`, `content`, `created_at`, `updated_at`) VALUES
(1, 'Remittance', 'remittance', NULL, NULL, NULL, NULL),
(2, 'Mobile Money Transaction', 'mobile-money-transaction', NULL, NULL, NULL, NULL),
(3, 'Micro Finance', 'micro-finance', NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2014_10_12_100000_create_password_resets_table', 1),
(4, '2019_08_19_000000_create_failed_jobs_table', 1),
(5, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(6, '2024_02_24_124814_create_categories_table', 1),
(7, '2024_02_24_125347_create_services_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` bigint UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `category_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slung` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta` text COLLATE utf8mb4_unicode_ci,
  `content` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `title`, `category_id`, `slung`, `meta`, `content`, `created_at`, `updated_at`) VALUES
(1, 'Money Gram', '1', 'money-gram', 'our money transfers and payouts made easier via Money Gram. We helped over 5,000 people transfer and receive money to and from overseas per month. Be part of it now!', NULL, NULL, NULL),
(2, 'Western Union', '1', 'western-union', 'Western Union is also one of the simplest ways to transfer money from abroad and to your loved ones back home. At FundEx (SL) Ltd., We make sending and receiving money to/from overseas simple by removing the hassle of dealing with your bank and making sure you get the best exchange rate possible.', NULL, NULL, NULL),
(3, 'Ria', '1', 'ria', 'Whether you want to speak to someone face-to-face or have a chat about your requirements over the phone on your funds transfer or payout through Ria, our friendly and dedicated teams of experts are on hand in all the districts in Sierra Leone.', NULL, NULL, NULL),
(4, 'Afro International', '1', 'afro-international', 'The speed and reliability of money transfer and payouts via Afro is what pay attention to. We’d ensure that your cash reaches your pocket or purse safely and convenient. \n', NULL, NULL, NULL),
(5, 'World Remit', '1', 'world-remit', 'We’re building the best way to move and manage your world through World Remit transfer. We’d ensure maximum ease but with high speed. FundEx (SL) Ltd. has changed the game in terms of simplicity, and certainly managing the turnaround time of processing your transactions.', NULL, NULL, NULL),
(6, 'Cash in', '2', 'Cash-in', 'nlike other agents (who hardly accept cash deposits on customers’ e-wallets), but at FundEx (SL) Ltd., we go the extra mile to make our customers deposit any amount of money on their e-wallet at any time and anywhere.', NULL, NULL, NULL),
(7, 'Cash Out', '2', 'cash-out', 'Struggling to cash out or get paid out with physical money but you’re told no money?? FundEx (SL) Ltd. Is your tailor-made solution. With us, you can collect your payments easily within a limited time through our certified Kiosks Agents throughout the country in a very Simple, Transparent and Honest manner.', NULL, NULL, NULL),
(8, 'Orange Money Account Editing', '2', 'Orange-money-account-editing', 'Because we always want to put a SMILE on the faces of our customers, we’re bringing all the services to your doorsteps. With FundEx (SL) Ltd. Kiosks Agents, no need to go to Orange Head Offices. You can now edit your orange money account (like your names, ID/Passport details, address, etc) at any of our Kiosks located across the country.', NULL, NULL, NULL),
(9, 'SIM Cards Replacements', '2', 'sim-cards-replacements', 'Are you wondering if you could ever get your number back after your SIM Card gets lost, or mobile device stolen? FundEx (SL) Ltd. Is your next stop solution. Our Kiosks Agents across the country can now replace you lost/stolen SIM cards at your backyard without you going to Orange Sierra Leone Office.', NULL, NULL, NULL),
(10, 'Sales of New SIM Cards', '2', 'sales-of-new-sim-cards', 'Thinking of becoming an Orange customer? Or need a special SIM number or want the same SIM number for Orange as your Africell or Q-Cell? We’re here for that. Our Kiosks Agents can also do this for you in a seamless manner. Just reach out to anyone of our certified Kiosks Agents, and your solution will put a smile on your face instantly.', NULL, NULL, NULL),
(11, 'Customer or Vendor/Supplier Payments', '2', 'customer-or-Vendor-supplier-payments', 'ave you been struggling to pay your customers or suppliers/vendors because they are far away with no bank? Don’t worry, FundEx (SL) Ltd is everywhere. Just go to our certified Kiosks Agents and your transaction will be done and your customers or suppliers get paid in less than 5 minutes.', NULL, NULL, NULL),
(12, 'E-wallet Limits', '2', 'e-wallet-limits', 'Struggling with holding more money on your Orange Moni e-wallet? No more hassles with this. Our certified Kiosks Agents can increase your limits with a click of a button. Visit our Kiosks Agents today nearby.', NULL, NULL, NULL),
(13, 'Individual Corporate Loan', '3', 'Individual-Corporate-Loan', 'This loan targets working-class individuals who have run out of cash to sort out some urgent needs. FundEx (SL) Ltd will give you 50% equivalent of your monthly salary and then you repay at the end of the month in which the loan was taken.', NULL, NULL, NULL),
(14, 'Business Loan', '3', 'business-loan', 'Most Small and Micro- enterprises encounter growth restraints due to lack of capital. At FundEx (SL) Ltd, we offer you a wide range of business loans with flexible repayment terms as working capital to grow your business.', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
