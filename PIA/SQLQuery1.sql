create database RFID
use RFID

--Unica tabla de todo la BD
create table Empleado (
id int primary key,
nombre varchar(50),
RFID varchar(50)
)

--Insertar las dos tarjetas RFID
insert into Empleado values ('Mario', 'A9890DE9');
insert into Empleado values ('Jorge','8EB92AD9')