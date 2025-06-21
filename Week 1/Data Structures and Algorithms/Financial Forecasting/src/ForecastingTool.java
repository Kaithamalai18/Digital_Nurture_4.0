public class ForecastingTool {

    // Recursive method to predict future value
    public static double forecast(double currentValue, double growthRate, int years) {

        if (years == 0) return currentValue;

        return forecast(currentValue * (1 + growthRate), growthRate, years - 1);
    }

    public static void main(String[] args) {
        double baseValue = 10000;
        double growthRate = 0.10;
        int years = 5;

        double futureValue = forecast(baseValue, growthRate, years);

        System.out.println("Base Value : " + baseValue);
        System.out.printf("Future Value after %d years: ₹%.2f\n", years, futureValue);
    }
}
