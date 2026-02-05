import java.util.Scanner;
public class excercise_03 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int value = Integer.valueOf(scanner.nextLine());
        if ( value < 0) {
            System.out.println(value * -1);
        } else {
            System.out.println(value);
        }
    }
}
