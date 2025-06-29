import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ParameterizedLogging{
    private static final Logger logger = LoggerFactory.getLogger(ParameterizedLogging.class);

    public static void main(String[] args) {
        String user = "Kaithamalai";
        int age = 21;
        String city = "Coimbatore";

        logger.info("User {} from {} is {} years old.", user, city, age);
        logger.warn("Login attempt failed for user: {}", user);
        logger.error("System encountered an error for user {}", user);
    }
}
