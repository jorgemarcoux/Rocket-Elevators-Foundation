# Rocket Elevators Information System

## Week-4, Team Project Description

The main goal of this week is to transform the static site previously developed during the Genesis program and turn it into a web application on MVC (Model - View - Controller) foundations. The site must be in a state that allows you to create a new section that saves the Javascript form that calculates an estimate in the form of a purchase order. This purchase order includes the key elements of the estimation form and allows you to enter more details. <br> <br>


## Members of the team

#### - [William Sinclair](https://github.com/WilliamSinclairF)
#### - [Frimina Zaddi](https://github.com/frimina)
#### - [Loïc Rico](https://github.com/ricoloic) <br>

<br>
## GitHub Repository

https://github.com/WilliamSinclairF/Rocket_Elevators_Information_System


 ## Utils
 - [Rails](https://guides.rubyonrails.org/) <br>
 - [HTML5](https://www.w3schools.com/html/) <br>
 - [RUBY](https://www.ruby-lang.org/) <br>
 - [JavaScripts](https://www.javascript.com/) <br>
 - [CSS](https://css-tricks.com/) <br><br>
 
 - [Ubuntu](https://www.microsoft.com/en-ca/p/ubuntu-1804-lts/9n9tngvndl3q?activetab=pivot:overviewtab) <br><br>



 Terms : <br>
 Gemfile     - A format for describing gem dependencies for Ruby programs <br>
 Bundle      - Ruby Dependency Management <br>
 Migrations  - Convenient way to alter your database schema over time in a consistent way. <br>
 MySQL       - an open-source database management software that helps users store, organize, and later retrieve data <br><br>




<br>
<br>
 ## How to use

 1. Install Ruby on Rails

    Follow the instuctions for installing Ruby on Rails depending on your operatiing system  

    For Mac computer  : https://gorails.com/setup/osx/10.15-catalina <br>

    For Ubuntu computer  : https://gorails.com/setup/ubuntu/18.04 <br>

    For Windows computer  : https://gorails.com/setup/windows/10 <br>


    The main installations that you will need to do in order for the program to run well

    a) Installing Homebrew <br>
    b) Installing Ruby <br>
    c) Configuring Git <br>
    d) Installing Rails <br>
    c) Setting Up A Database <br>
    d) Installing and setting MySQL <br>
    e) Installing and setting PostgreSQL <br><br>
      


    If you have any problems during installation, google is your best friend. 
    Here is a list of forums that might help you : <br>

    a) https://stackoverflow.com/ <br>
    b) https://www.reddit.com/ <br>
    c) https://askubuntu.com/ <br>
    d) https://developer.mozilla.org/ <br><br>



<br>

2. Setting up databases

    When all the installation are done, you have to create a test application to validate that everything is set up correctly. 
    If all goes well, the installation should end by displaying : Yay! You're on Rails! 


    If so, you are now ready to run the program.
    Do not forget to visit the Rails official website if you want to understand some aspects of the program.


    When you download the program, make sure that the file config/database.yml
    is set correctly. If it's not the case. The program might show you some error when you lunch the server.
    Use this command to install the dependencies specified in your Gemfile :

        bundle-install 

    Other bundler command that can be useful : https://bundler.io/bundle_install.html or 
    https://stackoverflow.com/questions/7304576/how-do-i-set-up-the-database-yml-file-in-rails

    If you have error with the bundler, this link can help you : https://help.dreamhost.com/hc/en-us/articles/115001070131-Using-Bundler-to-install-Ruby-gems

    Command to find some gem : https://guides.rubygems.org/rubygems-basics/



    Sometimes you have to run this command in ordre to reset your database

        rails db:reset <br>
        rails db:drop <br>
        rails db:create <br>
        rails db:migrate <br>


                        
          

3. Running the program

    Enter in the file of the program with : <br>
        cd file_name

    Make sure the all the migration are done with (rails db:migrate). <br>
        rails db:migrate

    Run the server with :  <br>
        rails server <br><br>


                             

4. Exploring the Rocket Elevator Website <br>


    The main program of our website is on the quotes page. 
    From this page, you can get a quote for the type of building you are looking for. We have three types of elevator to satisfy everyone. <br>


    To do this, you must log in using the sign in button. 
    After that, the information that you send to the program will enter in the database. This data will allow us to give you the best service according to your needs. <br>


    Know that all your modifications as well as all your quotes are carefully saved and you can access them by going to your account. <br> <br>



5. Acesss to our code  <br>
 

    Here is the most important folder and files that makes sure that our program runs well : <br>

    app/views :  <br>
        Most of our different html codes that make up the website. The files are a combination of HTML and Ruby <br>
    
    db <br>
        All the database related files go inside this folder. The configuration, schema, and migration files can be found here, along with any seed files. <br>

    app/models : <br>
        This folder make sure the you find a particular data that you're looking for, update that data and remove data. <br>

    app/controllers : <br>
        This is where all the controller files go. Controllers are responsible for orchestrating the model and views. <br>
 
    
    config/routes : <br>
        The rails router recognizes our different URLs and dispatches them to a controller's action <br>


    config/database.yml : <br>
        This file holds all the database configuration the application needs. many different configurations can be set for different environments. <br>

    config/environment.rb <br>
        This file requires application.rb to initialize the Rails application.


    Gemfile : <br>
        The Gemfile is the place where all your app’s gem dependencies are declared.

    
    For more informations about the rails directory structure, please visit : https://www.sitepoint.com/a-quick-study-of-the-rails-directory-structure/ <br><br>



6. Our different database

    For more control of the database, we suggest you to install mysql workbench. It works almost with all operatiing system 

    Here is the link to download it : https://www.mysql.com/fr/products/workbench/

    To download the program, you must make sure that you have an account with oracle. 
    If it's not the case, here is the link to register : https://cutt.ly/Bgg9JBs

    You can also add it in a code editor like visual studio code or IntelliJ IDEA. These different programs allow you to modify database tables more easily. You can alse see our database through the terminal. Depending on the computer, you must find the appropriate command to open mysql.

    Here are examples of commands on mysql :

        Quote.all :  show us all quotes that have been submitted
        Quote.find(1)  : show us the first submission.
        Quote.new and Quote.create : create a new instance of the quote

    You'll find all the informations about mysql command in https://dev.mysql.com/doc/

    There is 3 tables which constitute our database, We have users, employees, and quotes. 
    We have inserted 7 employees who will be our database to start, you will find them, if you connect as admin in the site, or through the terminal.

<br>
<br>

### This concludes the presentation of the program, do not hesitate to share with us any suggestions or improvements.







