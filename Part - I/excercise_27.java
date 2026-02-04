import java.util.Scanner;
public class excercise_27 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.println("Give a year:");
        int year = Integer.valueOf(scan.nextLine());
        if ( year < 2015) {
            System.out.println(year);
            System.out.println("Ancient history!");
        } else {
            System.out.println(year);
        }
    }
}
