import java.util.Scanner;
public class excercise_18 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("First number? ");
        int firstInput = Integer.valueOf(scanner.nextLine());
        System.out.print("Last number? ");
        int secondInput = Integer.valueOf(scanner.nextLine());
        int sum = 0;
        for ( int i = firstInput; i <= secondInput; i++ ) {
            sum += i;
        }
        System.out.println("The sum is: " + sum);
    }
}
