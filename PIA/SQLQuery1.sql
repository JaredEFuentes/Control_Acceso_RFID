create database RFID
go;
use RFID

--Unica tabla de todo la BD
create table Empleado (
id int identity(1,1) primary key,
nombre varchar(50),
RFID varchar(50),
Habilitado bit not null
);
go

CREATE TABLE ingresos(
registro_id int identity(1,1) primary key,
empleado_id int not null,
fecha datetime NOT NULL,
FOREIGN KEY (empleado_id) REFERENCES Empleado(id)
);
go

--Insertar las dos tarjetas RFID
insert into Empleado values ('Mario Alberto Rodriguez Valenzuela', 'A9890DE9',1);
insert into Empleado values ('Giovanni Alonso Figueroa','8EB92AD9',1);
insert into Empleado values ('Rodrigo Hernandez Ochoa', 'A9890DEA9',1);
insert into Empleado values ('Jorge Alberto Sanchez Robles','8EBE92AD9',1);
insert into Empleado values ('Juan Alberto Garza Robles', 'A98C90DE9',1);
insert into Empleado values ('Frida Sofia Alvarez Reyes','8EB9E2AD9',1);
insert into Empleado values ('Julieta Nuñez Arrellano', 'A989Q0DE9',1);
insert into Empleado values ('Gerardo Sanchez Mondragon','8EB92AD9Q',1);
insert into Empleado values ('Rosa Maria Hernandez Garcia', 'A98Q90DE9',1);
insert into Empleado values ('Fernanda Garza Gonzalez','98EB92AD9',1);

insert into ingresos values(1,convert(DATETIME,'2021-05-14 07:20:12',120));
insert into ingresos values(2,convert(DATETIME,'2021-05-14 07:20:12',120));
insert into ingresos values(3,convert(DATETIME,'2021-05-14 07:20:12',120));
insert into ingresos values(4,convert(DATETIME,'2021-05-14 07:20:12',120));
insert into ingresos values(5,convert(DATETIME,'2021-05-14 07:20:12',120));
insert into ingresos values(6,convert(DATETIME,'2021-05-14 07:20:12',120));
insert into ingresos values(7,convert(DATETIME,'2021-05-14 07:20:12',120));
insert into ingresos values(8,convert(DATETIME,'2021-05-14 07:20:12',120));
insert into ingresos values(9,convert(DATETIME,'2021-05-14 07:20:12',120));
insert into ingresos values(10,convert(DATETIME,'2021-05-14 07:20:12',120));


insert into ingresos values(1,convert(DATETIME,'2021-05-15 07:00:12',120));
insert into ingresos values(2,convert(DATETIME,'2021-05-15 07:00:15',120));
insert into ingresos values(3,convert(DATETIME,'2021-05-15 07:00:12',120));
insert into ingresos values(4,convert(DATETIME,'2021-05-15 07:00:15',120));
insert into ingresos values(5,convert(DATETIME,'2021-05-15 07:00:12',120));
insert into ingresos values(6,convert(DATETIME,'2021-05-15 07:00:15',120));
insert into ingresos values(7,convert(DATETIME,'2021-05-15 07:00:12',120));
insert into ingresos values(8,convert(DATETIME,'2021-05-15 07:00:15',120));
insert into ingresos values(9,convert(DATETIME,'2021-05-15 07:00:12',120));
insert into ingresos values(10,convert(DATETIME,'2021-05-15 07:00:15',120));

