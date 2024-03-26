//get the button elements
var startButton = document.getElementById("StButton");
var moreInfoButton = document.getElementById("MIButton");

//introduce the sound effects
var clickSound = new Audio('clickSound.m4a');

startButton.addEventListener('click', function(){
	console.log("Start button clicked"); //log a message for checking purpose
	clickSound.play();
});

moreInfoButton.addEventListener('click', function(){
	clickSound.play();
});
//add actionListeners to the buttons


/*public class game_Main extends JFrame implements ActionListener{
	//global var.
	//an object of user --> all features are default
	user user_obj = new user();
	String name = "user name";
	int avatar_num = 0;
	//layers of page
	JLayeredPane layeredPane;
	//bot bg; avatar (0-5), size 75x75; image for exit button
	ImageIcon table, avar0_img, avar1_img, avar2_img, avar3_img, avar4_img, avar5_img, exit_img;
	//place to put bg; user name; user work position; company name
	JLabel table_bg, user_name, user_pos, company_name;
	//button to place avatar; exit button
	JButton avar_b, cname_b, exit_b;
	//prep for bottom
	JPanel top_panel, bot_panel; 
	//font used
	Font company_f = new Font("Comic Sans MS", Font.ITALIC, 25);
	Font txt_f = new Font("Comic Sans MS", Font.BOLD, 15);
	Font pos_f = new Font("Comic Sans MS", Font.PLAIN, 12);
	//temp var. to keep track of user's action
	int indicator = 0;
	
	
	//set up main page - constructor
	public game_Main(user current_user, int current_ind) {
		//keep track of user information
		user_obj.copy(current_user);
		indicator = current_ind;
		
		//layer set-up
			layeredPane = new JLayeredPane();
		
		//bg set-up (layer 1)
			table = new ImageIcon("P_bg_table.jpg");
			table_bg = new JLabel(table);
			layeredPane.add(table_bg, JLayeredPane.DEFAULT_LAYER);
	
			
		//panels set-up (layer 2)
		//top panel and bot panel
			top_panel = new JPanel();
			top_panel.setBounds(0, 0, 650, 100);
			top_panel.setBackground(Color.DARK_GRAY);
			layeredPane.add(top_panel, JLayeredPane.PALETTE_LAYER);
			
			bot_panel = new JPanel();
			bot_panel.setBounds(225, 550, 200, 100);
			bot_panel.setBackground(Color.LIGHT_GRAY);
			layeredPane.add(bot_panel, JLayeredPane.PALETTE_LAYER);

			
		//contents set-up (layer 3)
		//part 1: user info --> user name & avatar
			//depending on diff avatar_num, the shown avatar will be diff
			//first set-up all available avatar images
			avar0_img = new ImageIcon("P_uavatar0_userwin.jpg"); 
			avar1_img = new ImageIcon("P_uavatar1_userwin.jpg");  
			avar2_img = new ImageIcon("P_uavatar2_userwin.jpg"); 
			avar3_img = new ImageIcon("P_uavatar3_userwin.jpg"); 
			avar4_img = new ImageIcon("P_uavatar4_userwin.jpg"); 
			avar5_img = new ImageIcon("P_uavatar5_userwin.jpg"); 
			
			//default avatar_num = 0
			//add ActionListener to allow user to change avatar
			if(user_obj.getNum() == 0) {
				avar_b = new JButton(avar0_img);
			}
			else if(user_obj.getNum() == 1) {
				avar_b = new JButton(avar1_img);
			}
			else if(user_obj.getNum() == 2) {
				avar_b = new JButton(avar2_img);
			}
			else if(user_obj.getNum() == 3) {
				avar_b = new JButton(avar3_img);
			}
			else if(user_obj.getNum() == 4) {
				avar_b = new JButton(avar4_img);
			}
			else if(user_obj.getNum() == 5) {
				avar_b = new JButton(avar5_img);
			}
			else {
				error_win exit_win = new error_win();
			}
			
			//shared parts for the avatar
			avar_b.setBounds(10, 10, 75, 75);
			avar_b.addActionListener(this);
			layeredPane.add(avar_b, JLayeredPane.MODAL_LAYER);

			//setup user name
			//2023.08.30 --> IDEA: thinking of changing JLabel into JButton to change name more conveniently
			//			 --> Alternatively, can add a "Change" button beside the User name label.
			user_name = new JLabel("User Name: " + current_user.getName());
			user_name.setFont(txt_f);
			user_name.setForeground(Color.WHITE);
			user_name.setBounds(95, 30, 300, 20);
			layeredPane.add(user_name, JLayeredPane.MODAL_LAYER);
			cname_b = new JButton("Change");
			cname_b.setBounds(180+16*(current_user.getName().length()), 30, 80, 25);
			cname_b.addActionListener(this);
			layeredPane.add(cname_b, JLayeredPane.MODAL_LAYER);
			
			//setup user position
			user_pos = new JLabel("Trainee Real Estate Agent");
			user_pos.setFont(pos_f);
			user_pos.setForeground(Color.WHITE);
			user_pos.setBounds(95, 60, 300, 20);
			layeredPane.add(user_pos, JLayeredPane.MODAL_LAYER);
			
			//setup company name --> 2023.08.30 Considering whether to change company name to its logo
			company_name = new JLabel("Best Real Estate");
			company_name.setFont(company_f);
			company_name.setForeground(Color.WHITE);
			company_name.setBounds(400, 40, 300, 30);
			layeredPane.add(company_name, JLayeredPane.MODAL_LAYER);

		
		//part 2: exit button
			exit_img = new ImageIcon("P_exit_gameMain.jpg");
			exit_b = new JButton(exit_img);
			exit_b.setBounds(10, 570, 35, 35);
			exit_b.addActionListener(this);
			layeredPane.add(exit_b, JLayeredPane.MODAL_LAYER);

		//set window
			this.setTitle("PC Screen");
			this.setLayeredPane(layeredPane);
			this.setSize(650, 650);
			this.setDefaultCloseOperation(DISPOSE_ON_CLOSE);
			this.setVisible(true);
		

		//regardless of the choice of the user, first show up pop-up windows to welcome them (indicator == 0 [init])
		if(indicator == 0) {
			this.setVisible(false);
			sarah_win welcome_win1 = new sarah_win(user_obj, "welcome", indicator); //1st sentence said by sarah
			//update user information and indicator. --> not sure whether these are still useful with current design
			//--> to be determined.
			indicator = 5;
			user_obj.copy(welcome_win1.getUser());
			//-------- user name collected/updated --------
			dispose();
		}
	
		//system messages will demonstrate how to change avatar, followed by introductions of the panel --> to be implemented
	}
	
	//mouse interaction
		public void actionPerformed(ActionEvent e) {
			//user's action
			Object choice = e.getSource();
			
			//if user want to change avatar
			if(choice == avar_b) {
				this.setVisible(false);
				change_avar_win change_win = new change_avar_win(user_obj);
				dispose();
				
				//----- the window is "refreshed" if user changed the avatar -----
			}
			//if user want to change name
			if(choice == cname_b) {
				//to be implemented...
			}
			//if user clicked on exit button, the program will show the init starting page
			//if user clicked play button on the starting page, a new game will be initiated.
			if(choice == exit_b) {
				this.setVisible(false);
				starting_pg new_game = new starting_pg();
				dispose();
			}
		}
}*/
