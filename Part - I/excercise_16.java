import java.util.Scanner;
public class excercise_16 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("How many days would you like to convert to seconds?");
        int days = Integer.valueOf(scanner.nextLine());
        System.out.println(days * 24 * 60 * 60);
    }
}
