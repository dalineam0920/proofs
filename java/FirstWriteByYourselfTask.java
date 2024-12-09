package try_test;

import java.util.Scanner;

public class FirstWriteByYourselfTask { //first task on Test Automation course
	
	public static void main(String arg[]) {
		
	System.out.println("Enter the season of the year");
	Scanner scanner = new Scanner(System.in);// season of the year
	String season = scanner.nextLine();
	
	
			
	System.out.println("Enter the whole number");// the whole number
	int wnumber = scanner.nextInt(); //Read the whole number
	
	scanner.nextLine();
	
	System.out.println("Enter the adjective");
	String adj = scanner.nextLine(); //Read the whole number
	
	
	scanner.close();
	
	System.out.println("On a " + adj + " " + season + " day, I drink a minimum of " + wnumber + " cups of coffee");
	
	}	
}
