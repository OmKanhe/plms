-- -- create database if not exists lab;

-- -- CREATE TABLE lab_registration (
-- --     owner_id INT AUTO_INCREMENT PRIMARY KEY ,
-- --     fullname VARCHAR(255),
-- --     contact_no VARCHAR(20),
-- --     lab_name VARCHAR(255),
-- --     lab_license VARCHAR(50),
-- --     email VARCHAR(255) UNIQUE,
-- --     password VARCHAR(255)
-- -- );

-- CREATE TABLE lab_profiles (
--     lab_id INT AUTO_INCREMENT primary KEY,
--     email VARCHAR(255) UNIQUE not null,
--     address VARCHAR(255),
--     landmark VARCHAR(255),
--     city VARCHAR(100),
--     district VARCHAR(100),
--     state VARCHAR(100),
--     country VARCHAR(100),
--     pincode VARCHAR(20),
--     registration_id INT,
--     FOREIGN KEY (registration_id) REFERENCES lab_registration(owner_id)
-- );


-- -- CREATE TABLE add_Patient(patient_id PRIMARY KEY)

ALTER TABLE add_Patient MODIFY p_whatsapp_no VARCHAR(15);