import java.util.Scanner;
public class excercise_26 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int value = Integer.valueOf(scan.nextLine());
        System.out.println("Give a number:");
        if ( value == 1984 ) {
            System.out.println(value);
            System.out.println("Orwell");
        } else {
            System.out.println(value);
        }
    }
}
