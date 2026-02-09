import java.util.Scanner;
public class excercise_23 {
    public static void main(String[] args) {
        Scanner reader = new Scanner(System.in);
        int userInput = Integer.valueOf(reader.nextLine());
        printUntilNumber(userInput);
    }
    public static void printUntilNumber(int number) {
        for ( int i = 1; i <= number; i++ ) {
            System.out.println(i);
        }
    }
}
