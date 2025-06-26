Table Creation :

CREATE TABLE customers (
    customer_id NUMBER PRIMARY KEY,
    name VARCHAR2(100),
    age NUMBER,
    balance NUMBER,
    interest_rate NUMBER(5,2),
    isvip VARCHAR2(10)
);

CREATE TABLE loans (
    loan_id NUMBER PRIMARY KEY,
    customer_id NUMBER,
    due_date DATE,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);


Data Insertion :

INSERT INTO customers VALUES (101, 'Eren Yeager', 65, 5000, 8.5, 'FALSE');
INSERT INTO customers VALUES (102, 'Levi Ackerman', 45, 15000, 9.0, 'FALSE');
INSERT INTO customers VALUES (103, 'Mikasa Ackerman', 70, 20000, 10.0, 'FALSE');
INSERT INTO customers VALUES (104, 'Armin Arlert', 30, 9500, 7.5, 'FALSE');
INSERT INTO customers VALUES (105, 'Jean Kirstein', 61, 3000, 11.0, 'FALSE');

COMMIT;


INSERT INTO loans VALUES (201, 101, SYSDATE + 10);  -- Due in 10 days
INSERT INTO loans VALUES (202, 102, SYSDATE + 35);  -- Due in 35 days
INSERT INTO loans VALUES (203, 103, SYSDATE + 5);   -- Due in 5 days
INSERT INTO loans VALUES (204, 104, SYSDATE + 60);  -- Due in 60 days
INSERT INTO loans VALUES (205, 105, SYSDATE + 25);  -- Due in 25 days

COMMIT;




SCENARIO 1 :


BEGIN
  FOR cust IN (SELECT customer_id, age FROM customers) LOOP
    IF cust.age > 60 THEN
      UPDATE customers
      SET interest_rate = interest_rate - 1
      WHERE customer_id = cust.customer_id;

      DBMS_OUTPUT.PUT_LINE('Discount applied to customer ID: ' || cust.customer_id);
    END IF;
  END LOOP;
END;


SCENARIO 2 :

BEGIN
  FOR cust IN (SELECT customer_id, balance FROM customers) LOOP
    IF cust.balance > 10000 THEN
      UPDATE customers
      SET isvip = 'TRUE'
      WHERE customer_id = cust.customer_id;

      DBMS_OUTPUT.PUT_LINE('VIP promoted: Customer ID ' || cust.customer_id);
    END IF;
  END LOOP;
END;



SCENARIO 3 :

BEGIN
  FOR loan IN (
    SELECT loan_id, customer_id, due_date
    FROM loans
    WHERE due_date BETWEEN SYSDATE AND SYSDATE + 30
  ) LOOP
    DBMS_OUTPUT.PUT_LINE('Reminder: Loan ID ' || loan.loan_id ||
                         ' for Customer ID ' || loan.customer_id ||
                         ' is due on ' || TO_CHAR(loan.due_date, 'DD-MON-YYYY'));
  END LOOP;
END;
