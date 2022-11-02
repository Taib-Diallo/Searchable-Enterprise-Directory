-- create employee table
drop table if exists employees;
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
-- visualizing the table
select * from employees;

--adding data to table 
insert into employees (Employee_no, Name, Phone_number, Job_role, Work_location, Salary, Username, Password, Access_level)
values (1, 'John Smith', '770-921-3235', 'employee', 'Hartford', 65000, 'jsmith@travelers.com', 'dog', 0),
		(2, 'Jackie Hall', '978-203-4545', 'manager', 'Hartford', 92000, 'jhall@travelers.com', 'cat', 1),
		(3, 'Ashley Bell', '778-321-8567', 'HR', 'Hartford', 75000, 'abell@travelers.com', 'fish', 2),
		(4, 'Carlos Garcia','655-423-8767', 'employee', 'Hartford', 75000, 'cgarcia@travelers.com', 'snake', 0),
		(5, 'Jack Don','770-863-2436', 'employee', 'Hartford', 63000, 'jdon@travelers.com', 'bird', 0);


