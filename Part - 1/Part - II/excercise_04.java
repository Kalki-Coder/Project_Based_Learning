import java.util.Scanner;
public class excercise_04 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int first = Integer.valueOf(scanner.nextLine());
        int second = Integer.valueOf(scanner.nextLine());
        if ( first > second ) {
            System.out.println(first + " is greater than " + second + ".");
        } else if ( first < second ) {
            System.out.println(first + " is smaller than " + second + ".");
        } else {
            System.out.println(first + " is equal to " + second + ".");
        }
    }
}
