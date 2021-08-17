use employees;

INSERT INTO department
    (name)
VALUES
    ('BasketBall'),
    ('Baseball'),
    ('Soccer'),
    ('Football');

INSERT INTO role
    (title, salary, department_id)
VALUES

    ('Coaches', 1200000, 1),
    ('Players', 30000000, 1),
    ('Referees', 12000, 2),
    ('Managers', 160000, 3),
    ('Accountant', 125000, 3),
    ('Cheerleaders', 550000,2 );
    
INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    
    ('Leslie', 'Santos', 2, 1),
    ('Ebagnisev', 'Lopez', 3, NULL),
    ('Kevin', 'Giron', 3),
    ('Jordan', 'Sparks', 5, NULL),
    ('Deborah', 'Sky', 3, 5),
    ('Handrei', 'Borja', 7, NULL),
    ('This', 'Guy', 6, 7);
