# Rocket Elevators Consolidation Project

<h2>Week 9</h2>



For this project I used the Ruby on Rails application that was made by my team and I during the apst 2 weeks. I then implemented some modifications:
<ol>
	<li>A new updated MySQL database</li>
	<li>An 'intervention form' only available to employees</li>
	<li>Three ned endpoints to the REST API</li>
</ol>
	
The website deployed on CodeBoxx servers can be found at http://marcouxs.com/ . In order to visit the "backoffice" section, you will need to login with the following information: 

- username: rocket@admin.com 
- password: rocket

## The new interventions form:

Log in with the credentials provided above and then go back again to the main page. You will now see the 'interventions' page displayed on the menu. 
Once there, start by selecting the client that you want to create an intervention for. You will then see a dropdown menu showing all the buildings that belong to the selected user. Afterwards, you can select the battery, column or elevator. You can also assign an specific employee for the intervention.

### Zendesk

When a customer sends an intervention form, the Zendesk API is triggered and a new ticket is created on the behalf of the customer. This ticket contains the information of each intervention.


## Consolidated REST API
You can visit the deployed version here: https://consolidation-jorge-rest.azurewebsites.net/api/interventions/ and read more about this project in its respective repo: https://github.com/jorgemarcoux/Rest_API_Consolidation

