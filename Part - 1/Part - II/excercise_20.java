import java.util.Scanner;
public class excercise_20 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int sum = 0;
        int count = 0;
        int even = 0;
        int odd = 0;

        while (true) {
            System.out.println("Give numbers:");
            int userInput = Integer.valueOf(scanner.nextLine());
            if ( userInput == -1 ) {
                System.out.println("Thx! Bye!");
                break;
            } else if ( userInput % 2 == 0 ) {
                even += 1;
            } else {
                odd += 1;
            }
            sum += userInput;
            count += 1;
            continue;
        }

        System.out.println("Sum: " + sum);
        System.out.println("Numbers: " + count);
        System.out.println("Average: " + ((double) sum/count));
        System.out.println("Even: " + even);
        System.out.println("Odd: " + odd);
    }
}
