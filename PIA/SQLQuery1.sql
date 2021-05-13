create database RFID
use RFID

--Unica tabla de todo la BD
create table Empleado (
id int identity(1,1) primary key,
nombre varchar(50),
RFID varchar(50)
);


CREATE TABLE ingresos(
registro_id int identity(1,1) primary key,
empleado_id int not null,
fecha datetime NOT NULL,
FOREIGN KEY (empleado_id) REFERENCES Empleado(id)
)

--Insertar las dos tarjetas RFID
insert into Empleado values ('Mario', 'A9890DE9');
insert into Empleado values ('Jorge','8EB92AD9');

insert into ingresos values(1,convert(DATETIME,'2021-04-27 17:20:12',120));
insert into ingresos values(2,convert(DATETIME,'2021-04-27 16:20:12',120));


insert into ingresos values(1,convert(DATETIME,'2021-04-27 17:20:13',120));
insert into ingresos values(2,convert(DATETIME,'2021-04-27 16:20:15',120));