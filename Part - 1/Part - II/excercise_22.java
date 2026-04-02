import java.util.Scanner;
public class excercise_22 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("How many times?");
        int userInput = Integer.valueOf(scanner.nextLine());
        for ( int i = 1; i <= userInput; i++ ) {
            printText();
        }
    }
    public static void printText() {
        System.out.println("In a hole in the ground there lived a method");
    }
}
