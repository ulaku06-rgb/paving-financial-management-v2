CREATE TABLE users (
id INTEGER PRIMARY KEY AUTOINCREMENT,
username TEXT UNIQUE,
password TEXT,
name TEXT,
role TEXT
);

INSERT INTO users(username,password,name,role)
VALUES
('owner','owner123','Owner Project','owner'),
('mandor','mandor123','Mandor Lapangan','mandor');

CREATE TABLE projects(
id INTEGER PRIMARY KEY AUTOINCREMENT,
name TEXT,
client TEXT,
budget REAL
);

CREATE TABLE expenses(
id INTEGER PRIMARY KEY AUTOINCREMENT,
project_id INTEGER,
created_by INTEGER,
date TEXT,
description TEXT,
amount REAL,
status TEXT DEFAULT 'pending'
);

CREATE TABLE income(
id INTEGER PRIMARY KEY AUTOINCREMENT,
project_id INTEGER,
date TEXT,
description TEXT,
amount REAL
);

CREATE TABLE rab(
id INTEGER PRIMARY KEY AUTOINCREMENT,
project_id INTEGER,
description TEXT,
amount REAL
);
