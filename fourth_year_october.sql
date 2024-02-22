-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 23, 2024 at 12:00 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `projecttest`
--

-- --------------------------------------------------------

--
-- Table structure for table `fourth_year_october`
--

CREATE TABLE `fourth_year_october` (
  `COL 1` varchar(2) DEFAULT NULL,
  `COL 2` varchar(35) DEFAULT NULL,
  `COL 3` varchar(11) DEFAULT NULL,
  `COL 4` varchar(13) DEFAULT NULL,
  `COL 5` varchar(11) DEFAULT NULL,
  `COL 6` varchar(14) DEFAULT NULL,
  `COL 7` varchar(11) DEFAULT NULL,
  `COL 8` varchar(11) DEFAULT NULL,
  `COL 9` varchar(19) DEFAULT NULL,
  `COL 10` varchar(15) DEFAULT NULL,
  `COL 11` varchar(7) DEFAULT NULL,
  `COL 12` varchar(16) DEFAULT NULL,
  `COL 13` varchar(14) DEFAULT NULL,
  `COL 14` varchar(23) DEFAULT NULL,
  `COL 15` varchar(41) DEFAULT NULL,
  `COL 16` varchar(16) DEFAULT NULL,
  `COL 17` varchar(22) DEFAULT NULL,
  `COL 18` varchar(29) DEFAULT NULL,
  `COL 19` varchar(13) DEFAULT NULL,
  `COL 20` varchar(15) DEFAULT NULL,
  `COL 21` varchar(22) DEFAULT NULL,
  `COL 22` varchar(27) DEFAULT NULL,
  `COL 23` varchar(29) DEFAULT NULL,
  `COL 24` varchar(24) DEFAULT NULL,
  `COL 25` varchar(15) DEFAULT NULL,
  `COL 26` varchar(17) DEFAULT NULL,
  `COL 27` varchar(24) DEFAULT NULL,
  `COL 28` varchar(25) DEFAULT NULL,
  `COL 29` varchar(27) DEFAULT NULL,
  `COL 30` varchar(28) DEFAULT NULL,
  `COL 31` varchar(15) DEFAULT NULL,
  `COL 32` varchar(8) DEFAULT NULL,
  `COL 33` varchar(7) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `fourth_year_october`
--

INSERT INTO `fourth_year_october` (`COL 1`, `COL 2`, `COL 3`, `COL 4`, `COL 5`, `COL 6`, `COL 7`, `COL 8`, `COL 9`, `COL 10`, `COL 11`, `COL 12`, `COL 13`, `COL 14`, `COL 15`, `COL 16`, `COL 17`, `COL 18`, `COL 19`, `COL 20`, `COL 21`, `COL 22`, `COL 23`, `COL 24`, `COL 25`, `COL 26`, `COL 27`, `COL 28`, `COL 29`, `COL 30`, `COL 31`, `COL 32`, `COL 33`) VALUES
('', 'name', 'birth_place', 'birth_date', 'nationality', 'national_ID', 'gender', 'degree_type', 'degree_name', 'university_name', 'faculty', 'department', 'specialization', 'sub_specialization', 'educationType', 'general_points', 'general_points_total', 'general_percentage', 'general_grade', 'CGPA', 'GPA_Scale', 'total_credit_hours', 'Graduation_project_percentage', 'Graduation_project_grade', 'graduation_turn', 'graduation_season', 'approval_date', 'approval_date_council', 'decision_number', 'council_decision_number', 'printing_counts', 'Guidance', 'Program'),
('م', 'الطالب/الطالبة', 'محل ميلاد ', 'تاريخ الميلاد', 'الجنسية', 'الرقم القومي', 'ذكر او انثي', 'نوع الشهادة', 'مسمي الدرجة العلمية', 'اسم الجامعة', 'الكليه', 'القسم', 'التخصص', 'الشعبة', 'نظام التعليم (فصول دارسية - ساعات معتمده)', 'المجموع التراكمي', 'المجموع التراكمي الكلي', 'النسبه المئوية للتقدير العام ', 'التقدير العام', 'المعدل التراكمي', 'مقياس المجموع التراكمى', 'اجمالي عدد الساعات المعتمدة', 'النسبة المئوية لمشروع التخرج', 'تقدير مشروع التخرج', 'تاريخ  التخرج', 'دور', 'تاريخ اعتماد مجلس الكلية', 'تاريخ اعتماد مجلس الجامعة', 'رقم قرار اعتماد مجلس الكلية', 'رقم قرار اعتماد مجلس الجامعة', 'عدد نسخ الشهادة', 'توجه', 'برنامج'),
('1', 'زياد احمد عبدالسميع محمد عطيه', '', '', 'مصري', '', 'ذكر', 'البكالوريوس', 'الهندسة', 'أسوان', 'الهندسة', 'الهندسة المدنية', '', '', 'فصول دراسية', '', '', '', '', '', '', '', '', '', '2022/2023', 'أكتوبر', '', '', '', '', '3', '', ''),
('2', 'محمد احمد حسن جعفر', '', '', 'مصري', '29911062800471', 'ذكر', 'البكالوريوس', 'الهندسة', 'أسوان', 'الهندسة', 'الهندسة المدنية', '', '', 'فصول دراسية', '', '', '', '', '', '', '', '', '', '2022/2023', 'أكتوبر', '', '', '', '', '3', '', ''),
('5', 'عبد المؤمن احمد محمد شمس الدين احمد', '', '', 'مصري', '29706012802811', 'ذكر', 'البكالوريوس', 'الهندسة', 'أسوان', 'الهندسة', 'الهندسة الكهربية', '', 'القوى والآلات الكهربية', 'فصول دراسية', '', '', '', '', '', '', '', '', '', '2022/2023', 'أكتوبر', '', '', '', '', '3', '', ''),
('6', 'عبدالرحمن السيد احمد محمد', '', '', 'مصري', '', 'ذكر', 'البكالوريوس', 'الهندسة', 'أسوان', 'الهندسة', 'الهندسة الكهربية', '', 'القوى والآلات الكهربية', 'فصول دراسية', '', '', '', '', '', '', '', '', '', '2022/2023', 'أكتوبر', '', '', '', '', '3', '', ''),
('7', 'عبدالرحمن عاطف صالح محمد', '', '', 'مصري', '30011048800838', 'ذكر', 'البكالوريوس', 'الهندسة', 'أسوان', 'الهندسة', 'الهندسة الكهربية', '', 'القوى والآلات الكهربية', 'فصول دراسية', '', '', '', '', '', '', '', '', '', '2022/2023', 'أكتوبر', '', '', '', '', '3', '', ''),
('8', 'محمد صلاح الدين حسين مكي', '', '', 'مصري', '29909012800174', 'ذكر', 'البكالوريوس', 'الهندسة', 'أسوان', 'الهندسة', 'الهندسة الكهربية', '', 'القوى والآلات الكهربية', 'فصول دراسية', '', '', '', '', '', '', '', '', '', '2022/2023', 'أكتوبر', '', '', '', '', '3', '', ''),
('9', 'محمد عبدالسلام رجب محمد', '', '', 'مصري', '30102242702192', 'ذكر', 'البكالوريوس', 'الهندسة', 'أسوان', 'الهندسة', 'الهندسة الكهربية', '', 'القوى والآلات الكهربية', 'فصول دراسية', '', '', '', '', '', '', '', '', '', '2022/2023', 'أكتوبر', '', '', '', '', '3', '', ''),
('10', 'أيمن محمود احمد عصمان', '', '', 'مصري', '27501022703391', 'ذكر', 'البكالوريوس', 'الهندسة', 'أسوان', 'الهندسة', 'الهندسة الكهربية', '', 'الالكترونيات والاتصالات', 'فصول دراسية', '', '', '', '', '', '', '', '', '', '2022/2023', 'أكتوبر', '', '', '', '', '3', '', ''),
('11', 'على محمد محمد على كمالى', '', '', 'مصري', '29911062703913', 'ذكر', 'البكالوريوس', 'الهندسة', 'أسوان', 'الهندسة', 'الهندسة الكهربية', '', 'الالكترونيات والاتصالات', 'فصول دراسية', '', '', '', '', '', '', '', '', '', '2022/2023', 'أكتوبر', '', '', '', '', '3', '', ''),
('12', 'احمد شوقي حمام علي', '', '', 'مصري', '30009202601091', 'ذكر', 'البكالوريوس', 'الهندسة', 'أسوان', 'الهندسة', 'الهندسة الكهربية', '', 'الحاسبات والنظم', 'فصول دراسية', '', '', '', '', '', '', '', '', '', '2022/2023', 'أكتوبر', '', '', '', '', '3', '', '');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
