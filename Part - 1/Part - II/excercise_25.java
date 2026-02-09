import java.util.Scanner;
public class excercise_25 {
    public static void main(String[] args) {
        Scanner reader = new Scanner(System.in);
        int firstInput = Integer.valueOf(reader.nextLine());
        int secondInput = Integer.valueOf(reader.nextLine());
        division(firstInput, secondInput);
    }
    public static void division(int numerator, int denominator) {
        if (denominator != 0) {
            System.out.println((double) numerator/denominator);
        }
    }
}
