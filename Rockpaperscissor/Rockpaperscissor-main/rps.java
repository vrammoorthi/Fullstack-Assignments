import java.util.*;
import java.io.*;
public class rps {
         public static void main(String args[]) {
        	 String[] game={"Rock","Paper","Scissor"};
        	 String Computer=game[new Random().nextInt(game.length)];
        	 Scanner sc=new Scanner(System.in);
        	 String Player;
        	 while(true){
        	 System.out.println("Please enter(rock,paper or Scissor)");
        	 Player=sc.nextLine();
        	 if(Player.equalsIgnoreCase("Rock") || Player.equalsIgnoreCase("paper") || Player.equalsIgnoreCase("Scissor")){
        	 break;
        	 }
        	 System.out.println(Player + "  is not valid");

        	 }
        	 System.out.println("Computer : "+ Computer);
        	 int count=0;
        	 if(Player.equalsIgnoreCase(Computer)){
        	 System.out.println("The game was a tie!!!");
        	 }
        	 
        	 
        	 else if(Player.equalsIgnoreCase("Rock")){
        	               if(Computer.equalsIgnoreCase("Paper")){
        	                   System.out.println("You Lose!!!");
        	                   System.out.println("Computer:"+ count+1 +" Player:0");
        	 }

        	              else if(Computer.equalsIgnoreCase("Scissor")){
        	                   System.out.println("You Win!!!");  
        	                   System.out.println("Computer:0 " +"Player:"+count+1);
        	 }
        	 }
        	 else if(Player.equalsIgnoreCase("Paper")){
        	               if(Computer.equalsIgnoreCase("Rock")){
        	                   System.out.println("You Win!!!"); 
        	                   System.out.println("Computer:0 " +"Player:"+count+1);
        	 }

        	              else if(Computer.equalsIgnoreCase("Scissor")){
        	                   System.out.println("You Lose!!!");   
        	                   System.out.println("Computer:"+ count+1 +" Player:0");
        	 }
        	 }
        	 else if(Player.equalsIgnoreCase("Scissor")){
        	               if(Computer.equalsIgnoreCase("Rock")){
        	                   System.out.println("You Lose!!!");  
        	                   System.out.println("Computer:"+ count+1 +" Player:0");
        	 }

        	              else if(Computer.equalsIgnoreCase("Paper")){
        	                   System.out.println("You Win!!!"); 
        	                   System.out.println("Computer:0 " +"Player:"+count+1);
        	 }
        	 }

        	 

         }
}
