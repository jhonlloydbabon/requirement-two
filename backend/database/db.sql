CREATE DATABASE requirement_two;

--Install this first
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users(
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_profile VARCHAR(255) NOT NULL
);
CREATE TABLE company(
    company_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    company_name VARCHAR(255) NOT NULL,
    company_description VARCHAR(255) NOT NULL
);
CREATE TABLE license(
    license_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    fk_company uuid,
    fk_user uuid,
    FOREIGN KEY (fk_company) REFERENCES company(company_id),
    FOREIGN KEY (fk_user) REFERENCES users(user_id)
);