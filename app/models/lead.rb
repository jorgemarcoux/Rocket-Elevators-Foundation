class Lead < ApplicationRecord

  require 'sendgrid-ruby'
  include SendGrid
  belongs_to :user, optional: true
  validates :full_name, presence: true, allow_blank: false
  validates :email, presence: true, allow_blank: false
  validates :phone, presence: true, allow_blank: false
  validates :business_name, presence: true, allow_blank: false
  validates :project_name, presence: true, allow_blank: false
  validates :department, presence: true, allow_blank: false
  validates :project_description, presence: true, allow_blank: false
  validates :message, presence: true, allow_blank: false

  mount_uploader :attachment, AttachmentUploader
  after_create :rocketMail

  def ticket_subject
    "#{self.full_name} from #{self.business_name}"
  end

  def ticket_body
    @attachment = self.attachment ? 'The Contact uploaded an attachment' : ''
    "
    The contact #{self.full_name} from company #{
      self.business_name
    } can be reached at email #{self.email} and at phone number #{
      self.phone
    }. <br>
    #{self.department} has a project named #{
      self.project_name
    } which would require contribution from Rocket Elevators.
    <br> 
    Project Description: #{self.project_description}
    <br>
    Attached Message: #{self.message}
    <br>
    #{@attachment}
    <br>
    <a href='#{ENV['WEBSITE_URL']}/backoffice/lead/#{
      self.id
    }'>Open in back office</a>"
  end

  # after_create :rocketMail

  def rocketMail
    @full_name = "#{self.full_name}"
    @project_name = "#{self.project_name}"
    @email = "#{self.email}"
    puts '-----allo'
    SendGrid.mail = Mail.new
    SendGrid.mail.from = Email.new(email: 'olivier_beauchesne4@hotmail.com')
    personalization = Personalization.new
    personalization.add_to(Email.new(email: @email))
    personalization.add_dynamic_template_data(
      { 'full_name' => @full_name, 'project_name' => @project_name }
    )
    SendGrid.mail.add_personalization(personalization)
    SendGrid.mail.template_id = 'd-b3ae4b30c1e54327bd9460468cf77df3'
    sg = SendGrid::API.new(api_key: ENV['SENDGRID_APIKEY'])
    begin
      response =
        sg.client.mail.call('send').post(request_body: SendGrid.mail.to_json)
    rescue Exception => e
      puts e.message
    end
    puts response.status_code
    puts response.body #puts response.parsed_body
    puts response.headers
    puts 'allo--------'
  end
end


    



# def dropbox
#     Lead.all.each do |lead|
#         if lead.attachment != nil
#             lead.where()
        
#     end

#     #DROPBOX_OAUTH_BEARER = ENV["DROPBOX_API_KEY"]
#     client = DropboxApi::Client.new(DROPBOX_OAUTH_BEARER)
#     @result = client.list_folder ""
#     print "Result  = "
#     puts @result.entries

    


# end


def rocketMail
  @full_name = "#{self.full_name}"
  @project_name = "#{self.project_name}"
  @email = "#{self.email}"
  puts "-----allo"
SendGrid::mail = Mail.new
SendGrid::mail.from = Email.new(email: 'olivier_beauchesne4@hotmail.com')
personalization = Personalization.new
personalization.add_to(Email.new(email: @email))
personalization.add_dynamic_template_data({
  "full_name" => @full_name,
  "project_name" => @project_name,
})
SendGrid::mail.add_personalization(personalization)
SendGrid::mail.template_id = 'd-b3ae4b30c1e54327bd9460468cf77df3'
sg = SendGrid::API.new(api_key: ENV['SENDGRID_APIKEY'])
begin
  response = sg.client.mail.("send").post(request_body: SendGrid::mail.to_json)
rescue Exception => e
  puts e.message
end
puts response.status_code
puts response.body
#puts response.parsed_body
puts response.headers
puts "allo--------"
end

