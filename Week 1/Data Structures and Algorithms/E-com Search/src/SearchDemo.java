import java.util.*;

public class SearchDemo {

    // Linear Search: O(n)
    public static Product linearSearch(Product[] products, int targetId) {
        for (Product p : products) {
            if (p.productId == targetId) return p;
        }
        return null;
    }

    // Binary Search: O(log n) - requires sorted array
    public static Product binarySearch(Product[] products, int targetId) {
        int left = 0, right = products.length - 1;

        while (left <= right) {
            int mid = (left + right) / 2;
            if (products[mid].productId == targetId) return products[mid];
            else if (products[mid].productId < targetId) left = mid + 1;
            else right = mid - 1;
        }
        return null;
    }

    public static void main(String[] args) {
        Product[] products = {
                new Product(103, "Phone", "Electronics"),
                new Product(101, "Shoes", "Fashion"),
                new Product(102, "Laptop", "Electronics"),
                new Product(104, "Watch", "Accessories"),
        };

        //  Linear Search (no sort needed)
        System.out.println("Linear Search for ID 102:");
        Product result1 = linearSearch(products, 102);
        System.out.println(result1 != null ? result1 : "Product not found");

        // Binary Search (sort first)
        Arrays.sort(products, Comparator.comparingInt(p -> p.productId));
        System.out.println("\nBinary Search for ID 102:");
        Product result2 = binarySearch(products, 102);
        System.out.println(result2 != null ? result2 : "Product not found");
    }
}
