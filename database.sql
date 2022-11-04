-- drop employees table
drop table if exists employees;

-- create employees table
create table employees (
	Employee_no int Primary Key,
	Name varchar(45) not null,
	Phone_number varchar(20),
	Job_role varchar(60) not null,
	Work_location varchar(60) not null,
	Salary int,
	Username varchar(45) not null,
	Password varchar (60) not null,
	Access_level int not null
);

-- adding data to employees table 
insert into employees (Employee_no, Name, Phone_number, Job_role, Work_location, Salary, Username, Password, Access_level) values 
(1, 'John Smith', '770-921-3235', 'Employee', 'Hartford', 65000, 'jsmith@travelers.com', 'dog', 0),
(2, 'Jackie Hall', '978-203-4545', 'Manager', 'Grand Rapids', 92000, 'jhall@travelers.com', 'cat', 1),
(3, 'Ashley Bell', '772-321-8567', 'HR', 'Seattle', 75000, 'abell@travelers.com', 'fish', 2),
(4, 'Carlos Garcia','657-423-8767', 'Employee', 'Boston', 75000, 'cgarcia@travelers.com', 'snake', 0),
(5, 'Jack Don','772-863-2436', 'Employee', 'Italy', 63000, 'jdon@travelers.com', 'bird', 0),
(6, 'Bo Jangles', '443-239-0090',  'Employee', 'St. Paul', 322000, 'bigbo@travelers.com', 'pig', 0),
(7, 'Henry Charles', '543-939-0220',  'HR', 'St. Paul', 77000, 'hcharles@travelers.com', 'iguana', 2),
(8, 'Felipe Holder', '369-462-9921', 'Manager', 'Los Angeles', 82000, 'fholder@travelers.com', 'cat', 1),
(9, 'Mack Stout', '632-221-0987', 'Manager', 'Boulder', 64000, 'mstout@travelers.com', 'fish', 1),
(10, 'Bulah Simon', '824-009-9811', 'Employee', 'Chicago', 101000, 'bsimon@travelers.com', 'bird', 0),
(11, 'Pohn Smith', '772-921-3235', 'Employee', 'Hartford', 65000, 'psmith@travelers.com', 'dog', 0),
(12, 'Gackie Hall', '971-203-4545', 'Manager', 'St. Paul', 92000, 'ghall@travelers.com', 'cat', 1),
(13, 'Eshley Bell', '774-321-8567', 'HR', 'Hartford', 75000, 'ebell@travelers.com', 'fish', 2),
(14, 'Varlos Garcia','658-423-8767', 'Employee', 'New York', 75000, 'vgarcia@travelers.com', 'snake', 0),
(15, 'Mack Don','775-863-2436', 'Employee', 'Hartford', 63000, 'mdon@travelers.com', 'bird', 0),
(16, 'Go Jangles', '443-239-0090',  'Employee', 'St. Paul', 322000, 'gigbo@travelers.com', 'pig', 0),
(17, 'Benry Charles', '545-939-0220',  'HR', 'St. Paul', 77000, 'bcharles@travelers.com', 'iguana', 2),
(18, 'Yelipe Holder', '362-462-9921', 'Manager', 'Los Angeles', 82000, 'yholder@travelers.com', 'cat', 1),
(19, 'Jack Stout', '632-221-0987', 'Manager', 'Boulder', 64000, 'jstout@travelers.com', 'fish', 1),
(20, 'Nulah Simon', '827-009-9811', 'Employee', 'Chicago', 101000, 'msimon@travelers.com', 'bird', 0),
(21, 'Lohn Smith', '773-921-3235', 'Employee', 'Hartford', 65000, 'lsmith@travelers.com', 'dog', 0),
(22, 'Wackie Hall', '973-203-4545', 'Manager', 'Washington D.C.', 92000, 'whall@travelers.com', 'cat', 1),
(23, 'Qshley Bell', '776-321-8567', 'HR', 'Detroit', 75000, 'qbell@travelers.com', 'fish', 2),
(24, 'Tarlos Garcia','651-423-8767', 'Employee', 'Miami', 75000, 'tgarcia@travelers.com', 'snake', 0),
(25, 'Rack Don','777-863-2436', 'Employee', 'Hartford', 63000, 'rdon@travelers.com', 'bird', 0),
(26, 'Mo Jangles', '443-239-0090',  'Employee', 'St. Paul', 322000, 'migbo@travelers.com', 'pig', 0),
(27, 'Zenry Charles', '549-939-0220',  'HR', 'Minneapolis', 77000, 'zcharles@travelers.com', 'iguana', 2),
(28, 'Kelipe Holder', '364-462-9921', 'Manager', 'Los Angeles', 82000, 'kholder@travelers.com', 'cat', 1),
(29, 'Dack Stout', '632-221-0987', 'Manager', 'Boulder', 64000, 'dstout@travelers.com', 'fish', 1),
(30, 'Sulah Simon', '828-009-9811', 'Employee', 'Chicago', 101000, 'ssimon@travelers.com', 'bird', 0);

-- visualizing the employees table
select * from employees;
