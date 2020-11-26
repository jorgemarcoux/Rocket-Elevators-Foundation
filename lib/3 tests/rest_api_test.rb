require 'rubygems'
require 'rest-client'

class RestApiTest
    def getStatus
        call = RestClient.get('https://consolidation-jorge-rest.azurewebsites.net/api/interventions/pending')
    end
end

