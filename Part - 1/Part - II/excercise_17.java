import java.util.Scanner;
public class excercise_17 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Last number? ");
        int userInput = Integer.valueOf(scanner.nextLine());
        int sum = 0;
        for ( int i = 0; i <= userInput; i++ ) {
            sum += i;
        }
        System.out.println("The sum is " + sum);
    }
}
