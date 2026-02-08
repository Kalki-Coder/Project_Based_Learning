import java.util.Scanner;
public class excercise_09 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int negSum = 0;
        while (true) {
            System.out.println("Give a number:");
            int num = Integer.valueOf(scanner.nextLine());
            if (num == 0) {
                break;
            } else if (num < 0) {
                negSum += 1;
            }
        }
        System.out.println("Number of negative numbers: " + negSum);
    }
}
