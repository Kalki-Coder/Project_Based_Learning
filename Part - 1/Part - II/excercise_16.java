import java.util.Scanner;
public class excercise_16 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Where to? ");
        int endPoint = Integer.valueOf(scanner.nextLine());
        System.out.print("Where from? ");
        int startPoint = Integer.valueOf(scanner.nextLine());
        if (endPoint >= startPoint) {
            for (int i = startPoint; i <= endPoint; i++) {
                System.out.println(i);
            }
        }
    }
}
