import java.util.Scanner;
public class excercise_22 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Give the first number:");
        double first = Double.valueOf(scanner.nextLine());
        System.out.println("Give the second number:");
        double second = Double.valueOf(scanner.nextLine());
        System.out.println("Give the third number:");
        double third = Double.valueOf(scanner.nextLine());
        System.out.println("The average is " + (( 1.0 * first + second + third) / 3));
    }
}
