-- create employee table
drop table if exists employees;
create table employees (
	Name varchar(45) not null,
	Phone_number varchar(20),
	Job_role varchar(60) not null,
	Work_location varchar(60) not null,
	Salary int
);
-- visualizing the table
select * from employees;

--adding data to table 
insert into employees (Name, Phone_number, Job_role, Work_location, Salary)
values ('John Smith', '770-921-3235', 'employee', 'Hartford', 65000),
		('Jackie Hall', '978-203-4545', 'manager', 'Hartford', 92000),
		('Ashley Bell', '778-321-8567', 'HR', 'Hartford', 75000);

insert into employees (Name, Phone_number, Job_role, Work_location, Salary)
values ('Carlos Garcia','655-423-8767', 'employee', 'Hartford', 75000),
		('Jack Don','770-863-2436', 'employee', 'Hartford', 63000);
		
		
--creating Users tables 
create table users (
	Employee_no int PRIMARY KEY,
	Name varchar (45) not null,
	Username varchar(45) not null,
	Password varchar (60) not null
);

-- visualizing the table 
select * from users;

-- adding data into users table
insert into users (Employee_no, Name, Username, Password)
values (1, 'John Smith', 'jsmith@travelers.com', 'dog'), 
		(2, 'Jackie Hall', 'jhall@travelers.com', 'cat'),
		(3, 'Ashley Bell', 'abell@travelers.com', 'fish'),
		(4, 'Carlos Garcia', 'cgarcia@travelers.com', 'snake'),
		(5, 'Jack Don', 'jdon@travelers.com', 'bird');