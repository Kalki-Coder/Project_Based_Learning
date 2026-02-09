import java.util.Scanner;
public class excercise_24 {
    public static void main(String[] args) {
        Scanner reader = new Scanner(System.in);
        int userInput = Integer.valueOf(reader.nextLine());
        printFromNumberToOne(userInput);
    }
    public static void printFromNumberToOne(int number) {
        for ( int i = number; i >= 1; i-- ) {
            System.out.println(i);
        }
    }
}

