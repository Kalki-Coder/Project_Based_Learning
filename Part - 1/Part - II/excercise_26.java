import java.util.Scanner;
public class excercise_26 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int firstInput = Integer.valueOf(scanner.nextLine());
        int secondInput = Integer.valueOf(scanner.nextLine());
        divisibleByThreeInRange(firstInput, secondInput);
    }
    public static void divisibleByThreeInRange(int beginning, int end) {
        for ( int i = beginning; i <= end; i++ ) {
            if ( i % 3 == 0 ) {
                System.out.println(i);
            }
        }
    }
}
