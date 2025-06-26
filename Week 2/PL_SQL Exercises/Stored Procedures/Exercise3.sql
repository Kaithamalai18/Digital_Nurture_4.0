Table Creation :

CREATE TABLE savings_accounts (
    account_id NUMBER PRIMARY KEY,
    customer_name VARCHAR2(100),
    balance NUMBER
);

CREATE TABLE employees (
    emp_id NUMBER PRIMARY KEY,
    emp_name VARCHAR2(100),
    department VARCHAR2(50),
    salary NUMBER
);

CREATE TABLE accounts (
    acc_id NUMBER PRIMARY KEY,
    acc_holder VARCHAR2(100),
    balance NUMBER
);


Data Insertion :

INSERT INTO savings_accounts VALUES (1, 'Eren Yeager', 10000);
INSERT INTO savings_accounts VALUES (2, 'Levi Ackerman', 5000);
INSERT INTO savings_accounts VALUES (3, 'Mikasa Ackerman', 7500);


INSERT INTO employees VALUES (1, 'Armin Arlert', 'IT', 50000);
INSERT INTO employees VALUES (2, 'Jean Kirstein', 'HR', 40000);
INSERT INTO employees VALUES (3, 'Connie Springer', 'IT', 45000);


INSERT INTO accounts VALUES (101, 'Levi Ackerman', 10000);
INSERT INTO accounts VALUES (102, 'Eren Yeager', 5000);

COMMIT;


SCENARIO 1 :

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest AS
BEGIN
  FOR acc IN (SELECT account_id, balance FROM savings_accounts) LOOP
    UPDATE savings_accounts
    SET balance = balance + (acc.balance * 0.01)
    WHERE account_id = acc.account_id;

    DBMS_OUTPUT.PUT_LINE('Interest added to Account ID: ' || acc.account_id);
  END LOOP;
END;

BEGIN
  ProcessMonthlyInterest;
END;


SCENARIO 2 :

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
  dept_name IN VARCHAR2,
  bonus_percent IN NUMBER
) AS
BEGIN
  FOR emp IN (SELECT emp_id FROM employees WHERE department = dept_name) LOOP
    UPDATE employees
    SET salary = salary + (salary * bonus_percent / 100)
    WHERE emp_id = emp.emp_id;

    DBMS_OUTPUT.PUT_LINE('Bonus added to Employee ID: ' || emp.emp_id);
  END LOOP;
END;
/

BEGIN
  UpdateEmployeeBonus('IT', 10);
END;
/


SCENARIO 3 :

CREATE OR REPLACE PROCEDURE TransferFunds (
  from_acc IN NUMBER,
  to_acc IN NUMBER,
  amount IN NUMBER
) AS
  from_balance NUMBER;
BEGIN
  SELECT balance INTO from_balance FROM accounts WHERE acc_id = from_acc;

  IF from_balance >= amount THEN
    UPDATE accounts SET balance = balance - amount WHERE acc_id = from_acc;
    UPDATE accounts SET balance = balance + amount WHERE acc_id = to_acc;

    DBMS_OUTPUT.PUT_LINE('Transferred ' || amount || ' from ' || from_acc || ' to ' || to_acc);
  ELSE
    DBMS_OUTPUT.PUT_LINE('Transfer failed: Insufficient balance in Account ' || from_acc);
  END IF;
END;
/

BEGIN
  TransferFunds(101, 102, 2000);
END;
/
