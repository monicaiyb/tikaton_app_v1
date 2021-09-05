

create table material(
   material_id INT NOT NULL AUTO_INCREMENT,
   material_name VARCHAR(100) NOT NULL,
   material_date VARCHAR(40) NOT NULL,
   submission_date DATE,
   PRIMARY KEY ( material_id )
);