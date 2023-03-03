-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.21-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for gtr-web
CREATE DATABASE IF NOT EXISTS `gtr-web` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `gtr-web`;

-- Dumping structure for table gtr-web.historymodels
CREATE TABLE IF NOT EXISTS `historymodels` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `models` varchar(50) NOT NULL DEFAULT '0',
  `years` varchar(50) NOT NULL DEFAULT '0',
  `text` text NOT NULL,
  `photo` varchar(50) NOT NULL DEFAULT '',
  `active` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- Dumping data for table gtr-web.historymodels: ~6 rows (approximately)
/*!40000 ALTER TABLE `historymodels` DISABLE KEYS */;
INSERT INTO `historymodels` (`id`, `models`, `years`, `text`, `photo`, `active`) VALUES
	(1, 'GT-R C100', '1969 - 1972', '<p>In 1969, Nissan announced the release of first generation PGC-10 Skyline GT-R with the purpose of winning in the JAF Japan championship. The features of PGC-10 Skyline GT-R is its engine. PGC-10 Skyline GT-R is powered by S20 L-6 1989cc DOHC 4valve with 40PHH SOLEX carburetor engine that makes 160 horsepower.<br>Major features of the S20 engine include a side-bolts type cylinder block, aluminum pistons, stainless steel exhaust manifold, and full-transistor igniter. Top speed is 200km, and 0-400m is 16.1 seconds. And PGC-10 Skyline GT-R adopted Porsche\'s 5 speed manual transmission.</p><p>In 1970, KPGC-10 2-door coupe Skyline GT-R was introduced. The driving performance has been improved by having shortened the wheel-base and lightweight-ized. The interior of the design unified black was equipped with bucket seats and 6-meters.</p><p>KPGC-110 Skyline GT-R was introduced in 1973. KPGC-110 Skyline GT-R called \'KENMERI\' is a Skyline GT-R of the phantom by which only 197 units were produced. The Skyline GT-R carries on with the S20 24 valve L-6 engine, along with its 160 horsepower. Also the Skyline GT-R is equipped with a exclusive black grill, FRP over fenders, rear spoiler, bucket seats, and 4-wheel disk brakes.</p>', 'GT-R - C100.jpg', 1),
	(2, 'GT-R C110', '1972 – 1977', '<p><strong>Nissan produced the second generation of the Skyline GT-R in 197 units before it cut it from the assembly lines due to newer emission standards.</strong></p><p>Nissan unveiled the C110 Skyline at the 1972 Tokyo Motor Show, but the sales started next year. It was a big gamble with the Japanese rules and regulations, which the carmaker lost. It was the last GT-R until the 1989 model, the mighty R32.</p><p>Unlike its predecessor, the C110 featured a fastback coupe shape. Shinichiro Sakurai designed the car as a sport vehicle. It was no longer a two-door version of a sedan. He took his inspiration from American and European sports cars from those times. The front fascia sported a dual-headlights system, with four headlamps in individual clusters. Nissan didn\'t put its name on the mesh-grille and left only the black and red GT-R badge. From its side, the car resembled the fastback shape of the Mustang Mach 1, with a similar window line but scaled down. Its back panel sported only the Skyline nameplate but not the company\'s logo.</p><p>Inside, the carmaker installed two bucket seats at the front separated by a center console with a storage compartment. In the back, even though there was a bench, it was suitable only for children or small dogs. The instrument cluster featured an aluminum panel and seven clusters for the dials and gauges.</p><p>Under the hood, Nissan installed a masterpiece, inline-six engine. Its two-liter displacement provided 160 hp, and it was fed through three double-barrel horizontal carburetors. It was the exact solution adopted by some European racing cars from that era. A five-speed manual sent the power to the rear wheels. The GT-R featured disc brakes in all corners, which was unusual for a Japanese car.</p>', 'GT-R - C110.jpg', 1),
	(3, 'GTR R32', '1989 - 1994', '<p><strong>The Nissan Skyline R32 was part of a long-range of performance vehicles made in Japan. The GT-R was introduced in 1989 after a long break.</strong></p><p>In 1973, Nissan axed the Skyline GT-R performance model from its lineup. The times of oil crisis were on and the car manufacturers had to focus more on economy cars and the GT-R was not even close. But the Japanese car-manufacturer revived the GT-R name in 1989. It was designed to dominate the Group A class racing. But, to put the car on the starting grid, it had to build the series model.</p><p>The bodywork was a sleek, two-door coupe. To fully comply with the regulations, the car had to be fitted with wider tires. That was why the fenders were enlarged, giving the car a more aggressive stance. A short trunk lid and a spoiler on it completed the car\'s silhouette. For the headlights, Nissan chose to go wit square looking elements, that were easier to repair if any damage occurred on the racetrack. The rear taillights were rounded and carried over from the regular, 4-door Skyline.</p><p>Inside, the car featured four seats but only for insurance purposes. The rear legroom was not so important, especially for the race version that was fitted with only the driver\'s seat. A simple dash design with straight-forward lines and a 6-dials instrument cluster was adopted. A particular gauge was on the top right side of the instrument cluster showed the torque sent to the front wheels.</p><p>The engine was an inline-six unit with a 2.6-liter displacement and twin-turbo. The all-wheel-drive system was new and it was specially developed for racing.</p>', 'GT-R - R32.jpg', 1),
	(4, 'GT-R R33', '1995 - 1998', '<p><strong>The fourth generation of the GT-R appeared in 1995, and even though it wasn\'t a major upgrade compared to its predecessor, it represented an essential step toward the GT-R R34.</strong></p><p>Part of the Skyline family, the GT-R R33 was the wild child. For starters, it was a coupe and got all the good things from its predecessor, the R32 Skyline GT-R. Yet, it was less brutal, and somehow it was tamed. It tried to be both a decent personal coupe and a sports car.</p><p>In the bio-design trend, the exterior received organic lines with shaved corners, soft curves, and not a single wedged shape. Moreover, even the front bumper that featured a broad center grille in the apron didn\'t look too aggressive. Yet, one of the most essential statements made by the carmaker was replacing the Nissan logo from the main grille with a GT-R badge. The profile revealed a simple, clean design of a coupe with a decently sized window behind the doors and a raked-forward C-pillar. Out back, the GT-R got a big wing on the trunk\'s lid. In the back, the quad, round taillights were already emblematic.</p><p>Inside, the automaker kept almost the same interior as in a regular Skyline sedan or wagon, although it made a few modifications. For instance, the sports seats were high-bolstered. On the center stack, Nissan placed three additional gauges for front torque distribution, turbo pressure, and oil temperature. Moreover, besides the regular information, the GT-R got an oil-pressure gauge in the instrument cluster. Still, the standard steering wheel looked like it was carried over from a Maxima. The GT-R also offered a pair of seats in the back, and these were also bolstered on the sides, which was unusual.</p><p>Under the hood, it was still the same RB26 engine that sent the power in all corners via a five-speed manual. Likewise, it was the same drivetrain used by the GT-R R32.</p><p><br>&nbsp;</p>', 'GT-R - R33.jpg', 1),
	(5, 'GT-R R34', '1999 - 2002', '<p><strong>It is a cult-car, the vehicle that made the European sports cars looks outdated. The history of Skyline goes back in time since 1957 under the brand Prince.</strong></p><p>Fast forward to 1999 and we found the R34. A car that wrote history in the Skyline R34. A coupe packed with the latest technology on the market and an advanced engine: the RB26DETT. It featured a twin-turbo, individual throttle body for all the six pistons, water-cooled ceramic turbochargers with ball-bearings and the list can go on.</p><p>The Skyline R34 had an intelligent all-wheel-drive system with a limited-slip rear differential (LSD), which helped the car accelerate faster on the corner\'s exits. An important feature of the car was the Multi-Function-Display (MFD) that was mounted on the dashboard. This display showed many of the car\'s engine stats including boost pressure, oil temp, water temp and more. As a 1999 car, this kind of technology was very rare and advanced at the time.</p><p>The stated power output of the engine was 280 hp, as part of a gentleman agreement between the Japanese car-manufacturers to not advertise more power than that. But in reality, the car was dyno-ed at 330 hp. Due to its cast-iron engine block and forged internals, it supported many modifications and some were modified to offer over 1000 hp.</p>', 'GT-R - R34.jpg', 1),
	(6, 'GT-R R35', '2009-2023', '<p>The GT-R badge was used for the first time in 1969 when Nissan released the 2.0-liter Nissan Skyline.</p><p>The Nissan GT-R R35 was presented at the Tokyo Motor Show in 2007 and entered the European market one year later.</p><p>The all new GT-R’s engine was hand-built by only 4 mechanics that were specially trained to do this.</p><p>The engines were a 6-cylinder twin turbo V6 with 480 hp that rocketed the GT-R to 100 kph in just 3.6 seconds. And guess what, it only took 37 meters for the car to come to a full stop. The car had a top speed of 193 mph.</p><p>The supercar had a dual-clutch transmission that was based on the Formula 1 technology. The GT-R was offered with an electronically controlled all-wheel-drive.</p><p>With all its characteristics pointing to a track car, Nissan let the buyers know that the GT-R is suitable for different types of roads and could be driven by anyone due to its automatic transmission, and moreover, it had no problem being in the traffic. It had a reduced fuel consumption if the Race mode was not activated.</p><p>The exterior design indicated a heavy, muscular car – which was true – but was designed with an extreme attention to every line, and even the side mirrors were built to channel the air to the rear spoiler.</p><p>A supercar is expected to perform impeccably while high-speed-cornering, but the GT-R was extremely fast in straight lines as well.</p>', 'GT-R - R35.jpg', 1);
/*!40000 ALTER TABLE `historymodels` ENABLE KEYS */;

-- Dumping structure for table gtr-web.r35models
CREATE TABLE IF NOT EXISTS `r35models` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `model` varchar(100) DEFAULT NULL,
  `photo` varchar(100) DEFAULT NULL,
  `about` text DEFAULT NULL,
  `year` varchar(50) DEFAULT NULL,
  `price` varchar(50) DEFAULT NULL,
  `engine` varchar(50) DEFAULT NULL,
  `gearbox` varchar(50) DEFAULT NULL,
  `speed` varchar(50) DEFAULT NULL,
  `active` int(11) DEFAULT 1,
  `userId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_r35models_user` (`userId`),
  CONSTRAINT `FK_r35models_user` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- Dumping data for table gtr-web.r35models: ~5 rows (approximately)
/*!40000 ALTER TABLE `r35models` DISABLE KEYS */;
INSERT INTO `r35models` (`id`, `model`, `photo`, `about`, `year`, `price`, `engine`, `gearbox`, `speed`, `active`, `userId`) VALUES
	(1, '2022 NISSAN GT-R NISMO SV', 'gt3.jpg', '<p>The <strong>2022 </strong><a href="https://www.carexpert.com.au/nissan/gt-r"><strong>Nissan GT-R</strong></a><strong> NISMO SV</strong> is an all wheel drive two-door coupe that was released to the Australian market on 01/08/2021 classified as a R35 MY22. The GT-R is regarded as a sports from 200k built in Japan with <strong>prices starting at $393,800</strong> before on-road costs.</p><p>The GT-R is an all wheel drive 2 door with 4 seats, powered by a 3.8L TWIN TURBO V6 engine that has 441 kW of power (at 6800 rpm) and 652 Nm of torque (at 3600 rpm) via a Six-speed Auto Dual Clutch. Nissan claims the GT-R NISMO SV uses 12.0L/100km of Premium Unleaded Petrol in the combined city and highway cycle while putting out 281g of CO2. It has a 74L fuel tank, meaning it should be able to travel 617km per full tank.</p><p>The GT-R measures 1370mm (53.9 inches) in height, 4690mm (184.6 inches) in length, 1895mm (74.6 inches) in width with a 2780mm (109.4 inches) wheelbase that brings about a total of 1715kg (3780.9 lbs) of unladen weight. The GT-R NISMO SV comes standard with 255/40 ZRF20 front tyres and 285/35 ZRF20 rear tyres. It requires a service every 6 months or 10,000 km, whichever comes first. It has a 60 month, unlimited kilometre warranty.</p><p>The 2022 Nissan GT-R NISMO SV has a 107mm ground clearance</p><p>The VIN number can be found on the Driver Side Eng Scuttle and the compliance plate is located on the Lower Pass Side B-Pillar. An example VIN number would be similar to JN1GANR35A0123456.</p>', '01/08/2021', '$393,800', '3799cc, 3.8L  441kW @ 6800rpm (591.4 hp)', 'Altı Vites Çift Debriyaj Otomatik', '340 KMH', 1, 1),
	(2, 'Nismo Special Edition', 'nismo-special.jpg', '<p><strong>Used 2021 Nissan GT-R NISMO Special Edition Overview</strong></p><p>The Used 2021 Nissan GT-R NISMO Special Edition is offered in the following styles: NISMO Special Edition 2dr Coupe AWD (3.8L 6cyl Turbo 6AM). The Used 2021 Nissan GT-R NISMO Special Edition comes with all wheel drive. Available transmissions include: 6-speed automated manual.</p><p><strong>What\'s a good price on a Used 2021 Nissan GT-R NISMO Special Edition?</strong></p><p>Shop with Edmunds for perks and special offers on used cars, trucks, and SUVs near Rutland, ND. Doing so could save you hundreds or thousands of dollars. Edmunds also provides consumer-driven dealership sales and service reviews to help you make informed decisions about what cars to buy and where to buy them.</p><p><strong>Which used 2021 Nissan GT-R NISMO Special Editions are available in my area?</strong></p><p><strong>Used 2021 Nissan GT-R NISMO Special Edition Listings and Inventory</strong></p><p>Simply research the type of used car you\'re interested in and then select a prew-owned vehicle from our massive database to find cheap used cars for sale near you. Once you have identified a used or CPO vehicle you\'re interested in, check the AutoCheck vehicle history reports, read dealer reviews, and find out what other owners paid for the Used 2021 Nissan GT-R NISMO Special Edition.</p><p>Shop Edmunds\' car, SUV, and truck listings of over 6 million vehicles to find a cheap used, or certified pre-owned (CPO) 2021 Nissan GT-R NISMO Special Edition for sale near you.</p>', '2022', '$215,690', 'V6 cylinder 600 hp @ 6,800 rpm Torque: 481 lb-ft @', '6-speed automated manual', '0-100 KMH 2.5 seconds', 1, 1),
	(3, 'Track Edition', 'track-edition.png', '<p><strong>Used 2020 Nissan GT-R Overview</strong></p><p><br>The Used 2020 Nissan GT-R is offered in the following submodels: GT-R Coupe, GT-R NISMO. Available styles include Premium 2dr Coupe AWD (3.8L 6cyl Turbo 6AM), NISMO 2dr Coupe AWD (3.8L 6cyl Turbo 6AM), and Track Edition 2dr Coupe AWD (3.8L 6cyl Turbo 6AM). Pre-owned Nissan GT-R models are available with a 3.8 L-liter gas engine, with output up to 600 hp, depending on engine type. The Used 2020 Nissan GT-R comes with all wheel drive. Available transmissions include: 6-speed automated manual.</p><p><strong>What\'s a good price on a Used 2020 Nissan GT-R?</strong></p><p><br>Shop with Edmunds for perks and special offers on used cars, trucks, and SUVs near Rutland, ND. Doing so could save you hundreds or thousands of dollars. Edmunds also provides consumer-driven dealership sales and service reviews to help you make informed decisions about what cars to buy and where to buy them.</p><p><strong>Which used 2020 Nissan GT-RS are available in my area?</strong></p><p><br>Shop Edmunds\' car, SUV, and truck listings of over 6 million vehicles to find a cheap new, used, or certified pre-owned (CPO) 2020 Nissan GT-R for sale near. Simply research the type of car you\'re interested in and then select a used car from our massive database to find cheap prew-owned vehicles for sale near you. Once you have identified a used vehicle you\'re interested in, check the AutoCheck vehicle history reports, read dealer reviews, and find out what other owners paid for the Used 2020 Nissan GT-R.</p><p>Should I lease or buy a 2020 Nissan GT-R?<br>Is it better to lease or buy a car? Ask most people and they\'ll probably tell you that car buying is the way to go. And from a financial perspective, it\'s true, provided you\'re willing to make higher monthly payments, pay off the loan in full and keep the car for a few years. Leasing, on the other hand, can be a less expensive option on a month-to-month basis. It\'s also good if you\'re someone who likes to drive a new car every three years or so.</p>', '2019', '$126,100 – $150,200', 'V6 cylinder  565 hp @ 6,800 rpm  Torque: 467 lb-ft', '6-speed automated manual', '0-100 KMH 3 seconds', 1, 1),
	(4, 'Gentleman Edition', 'Gentleman-Edition.jpg', '<p>The GT-R Gentleman Edition.</p><p>Odd name choice notwithstanding, the GT-R Gentleman Edition is very limited, as only 10 of these babies will be made. No more. No less.</p><p>It\'ll only be sold in France, which is a bummer, but for those lucky enough to get one, you get the treat of a limited run GT-R that that\'s slotted just above the Black Edition, of which its equipment is based on.</p><p>As for the car itself, the GT-R Gentleman Edition only comes in an equally limited Grey Squale finish to go with an amber red leather interior. The latter, in particular, also boasts of hand-sewn seats, as well as more leather coverings on the gear shifter knob, lever gaiter, handbrake, door panels, and table passenger-side edge.</p><p>More than just a fancily dressed GT-R, the Gentleman Edition also comes with some special add-ons, including: a special bag, glasses case and covering pockets that are stitched in leather.</p><p>Finally, specific identification titanium can be found on the front fender while a numbered customizable titanium placard is displayed on the dashboard just to show everyone that this car is only 1 of the 10 Gentleman Edition GT-R models Nissan-&gt;ke62 is building.</p>', '2016', '$152,000', 'V6 cylinder  543 hp @ 6,800 rpm  Torque: 463 lb-ft', '6-speed automated manual', '0-100 KMH 3.3 seconds', 1, 1),
	(5, 'T-SPEC', 't-spec.jpg', '<p>The <strong>2022 </strong><a href="https://www.carexpert.com.au/nissan/gt-r"><strong>Nissan GT-R</strong></a><strong> T-SPEC</strong> is an all wheel drive two-door coupe that was released to the Australian market on 01/08/2021 classified as a R35 MY22. The GT-R is regarded as a sports from 200k built in Japan with <strong>prices starting at $256,700</strong> before on-road costs.</p><p>The GT-R is an all wheel drive 2 door with 4 seats, powered by a 3.8L TWIN TURBO V6 engine that has 419 kW of power (at 6800 rpm) and 632 Nm of torque (at 3300 rpm) via a Six-speed Auto Dual Clutch. Nissan claims the GT-R T-SPEC uses 12.0L/100km of Premium Unleaded Petrol in the combined city and highway cycle while putting out 281g of CO2. It has a 74L fuel tank, meaning it should be able to travel 617km per full tank.</p><p>The GT-R measures 1370mm (53.9 inches) in height, 4710mm (185.4 inches) in length, 1895mm (74.6 inches) in width with a 2780mm (109.4 inches) wheelbase that brings about a total of 1751kg (3860.3 lbs) of unladen weight. The GT-R T-SPEC comes standard with 255/40 ZRF20 front tyres and 285/35 ZRF20 rear tyres. It requires a service every 6 months or 10,000 km, whichever comes first. It has a 60 month, unlimited kilometre warranty.</p><p>The 2022 Nissan GT-R T-SPEC has a 107mm ground clearance</p><p>The VIN number can be found on the Driver Side Eng Scuttle and the compliance plate is located on the Lower Pass Side B-Pillar. An example VIN number would be similar to JN1GANR35A0123456.</p>', '01/08/2021', '$256.700', '419kW @ 6800rpm (561.9 hp)  632Nm @ 3300rpm (466.1', 'Six-speed Auto Dual Clutch', '0-100 KMH 2.7 seconds', 1, 3);
/*!40000 ALTER TABLE `r35models` ENABLE KEYS */;

-- Dumping structure for table gtr-web.roles
CREATE TABLE IF NOT EXISTS `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rolename` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- Dumping data for table gtr-web.roles: ~3 rows (approximately)
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` (`id`, `rolename`) VALUES
	(1, 'admin'),
	(2, 'moderator'),
	(3, 'editor');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;

-- Dumping structure for table gtr-web.session
CREATE TABLE IF NOT EXISTS `session` (
  `sid` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) unsigned NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table gtr-web.session: ~2 rows (approximately)
/*!40000 ALTER TABLE `session` DISABLE KEYS */;
INSERT INTO `session` (`sid`, `expires`, `data`) VALUES
	('4RtWQrY1xFKkNyTuQUqbb9ZVPt4JUNXp', 1677782304, '{"cookie":{"originalMaxAge":86400000,"expires":"2023-03-02T18:38:22.398Z","httpOnly":true,"path":"/"}}'),
	('riaNfH-mWTHsmKrxJ_pkv7tO0rO4vFBz', 1677855575, '{"cookie":{"originalMaxAge":86400000,"expires":"2023-03-03T14:49:17.339Z","httpOnly":true,"path":"/"},"isAuth":true,"fullname":"Sagopa Kajmer","email":"firatyildiznet@gmail.com","userphoto":"face21-1677610734865.jpg","roles":[1],"userid":1}');
/*!40000 ALTER TABLE `session` ENABLE KEYS */;

-- Dumping structure for table gtr-web.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fullname` varchar(255) NOT NULL DEFAULT '',
  `email` varchar(255) NOT NULL DEFAULT '',
  `password` varchar(255) NOT NULL DEFAULT '',
  `user_photo` varchar(150) DEFAULT NULL,
  `bio` text DEFAULT NULL,
  `resetToken` varchar(255) DEFAULT NULL,
  `resetTokenExpiration` varchar(50) DEFAULT NULL,
  `roleId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_users_roles` (`roleId`),
  CONSTRAINT `FK_users_roles` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8;

-- Dumping data for table gtr-web.users: ~4 rows (approximately)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `fullname`, `email`, `password`, `user_photo`, `bio`, `resetToken`, `resetTokenExpiration`, `roleId`) VALUES
	(1, 'Sagopa Kajmer', 'firatyildiznet@gmail.com', '$2b$10$ZQcEOLXIvnN6qk9SKcuPUun5z8liAUtLi5lBVdHwGrwNXDnPKsJt.', 'face21-1677610734865.jpg', '<p>Kral</p>', NULL, NULL, 1),
	(2, 'Elon Musk', 'elonmusk@gmail.com', '$2b$10$kqK6IpuynYUW4sB27uV9..eAMjz9EmDfvNhrtjOUh9K3RnJ8Aqciq', 'elon_musk_boos-1677652675111.jpg', '<p>algşldsjlgjdfgkldfjhjdflhfdhsşdgldahgjdsghjd</p>', NULL, NULL, 2),
	(3, 'Burhancan', 'burhan@gmail.com', '$2b$10$OHHVSwQd7wMwPULkW6MEFePcZLp6qDYNb9YGldCm0Eqj/kC//BO1O', 'face24-1677650396694.jpg', '', NULL, NULL, 3),
	(31, 'sagopa kajmer', 'yunusozyavuz@gmail.com', '$2b$10$ytV5aaOqxth/yzdEZiaHBurHfXjdREGGv5ILJ/kO8evU8IvEzwkE.', 'sago-1677650138685.jpeg', NULL, NULL, NULL, 2);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

-- Dumping structure for table gtr-web.user_message
CREATE TABLE IF NOT EXISTS `user_message` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fullname` varchar(50) NOT NULL DEFAULT '0',
  `email` varchar(50) NOT NULL DEFAULT '0',
  `message` text NOT NULL,
  `message_date` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- Dumping data for table gtr-web.user_message: ~2 rows (approximately)
/*!40000 ALTER TABLE `user_message` DISABLE KEYS */;
INSERT INTO `user_message` (`id`, `fullname`, `email`, `message`, `message_date`) VALUES
	(1, 'fırat yıldız', 'sample@sample.com', 'sample message', '2023-03-01 18:59:23'),
	(5, 'Sagopa Kajmer', 'sample@sample.com', 'Sıfır Huşu', '2023-03-01 19:27:03');
/*!40000 ALTER TABLE `user_message` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
