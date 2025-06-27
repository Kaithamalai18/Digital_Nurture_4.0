import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {

    private Calculator calculator;

    @Before
    public void setUp() {

        calculator = new Calculator();
        System.out.println(" Setting up before test");
    }

    @After
    public void tearDown() {

        calculator = null;
        System.out.println(" Tearing down after test");
    }

    @Test
    public void testAddition() {

        int result = calculator.add(10, 5);

        assertEquals(15, result);
    }

    @Test
    public void testSubtraction() {
        int result = calculator.subtract(10, 4);
        assertEquals(6, result);
    }
}
