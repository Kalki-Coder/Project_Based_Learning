import java.util.Scanner;
public class excercise_13 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int sum = 0;
        int count = 0;
        while (true) {
            int value = Integer.valueOf(scanner.nextLine());
            if ( value == 0 ) {
                break;
            } else if ( value > 0 ) {
                count += 1;
                sum += value;
            }
        }
        if (count == 0) {
            System.out.println("Cannot calculate the average");
        } else {
            System.out.println((double) sum/count);
        }
    }
}
