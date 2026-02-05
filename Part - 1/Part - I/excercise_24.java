import java.util.Scanner;
public class excercise_24 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int value = Integer.valueOf(scanner.nextLine());
        System.out.println("Give speed:");
        if ( value > 120) {
            System.out.println(value);
            System.out.println("Speeding ticket!");
        } else {
            System.out.println(value);
        }
    }
}
