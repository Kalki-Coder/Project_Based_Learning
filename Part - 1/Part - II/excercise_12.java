import java.util.Scanner;
public class excercise_12 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int sum = 0;
        int count = 0;
        while (true) {
            System.out.println("Give a number:");
            int UserInput = Integer.valueOf(scanner.nextLine());
            if ( UserInput == 0 ) {
                break;
            }
            count += 1;
            sum += UserInput;
        }
        if (count > 0) {
            double avg = (double) sum/count;
            System.out.println("Average of the numbers: " + avg);
        }
    }
}
