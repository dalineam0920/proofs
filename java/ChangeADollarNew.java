package SecondTask;

import java.util.Scanner; 

/* Task from Test Automation cource from https://testautomationu.applitools.com/

So, you're going to create a program that asks the user to enter the quantities for the following coins.
You'll ask them how many pennies would you like?
How many nickels would you like?
How many dimes?
And then, how many quarters?
What your program is going to do is count up the value of all of the change that they answered.

If it's exactly one dollar then they win the game.
If it's more than one dollar, then you need to tell them that it's more than one dollar and how much they went over.
If it's less than one dollar, tell them how much they went under. */

public class ChangeADollarNew {

	public static void main(String args[]) {
	
		int amount = 100;
		
		System.out.println("Enter amount of pennies:");
		Scanner scanner = new Scanner(System.in);
		int p= scanner.nextInt();
		System.out.println("Enter amount of nickels:");
		int n = scanner.nextInt();
		System.out.println("Enter amount of dimes:");
		int d = scanner.nextInt();
		System.out.println("Enter amount of quaters:");
		int q = scanner.nextInt();
		
		scanner.close();
		
		int entered = 1 * p + 5 * n + 10 * d + 25 * q;
		
		int leftover = amount - entered;
		int overdone = entered - amount;
		
		if(amount == entered) {
			System.out.println("You are a winner!");
		}
		else if (amount < entered) {
			System.out.println("You went " + overdone + " cent(s) over");
		}
		else if (amount > entered) {
			System.out.println("You went " + leftover + " cent(s) under");
		}
	}

}
