
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
    after_create :lead_mail
end



def lead_mail
  @full_name = "#{self.full_name}"
  @project_name = "#{self.project_name}"
  @email = "#{self.email}"

  from = SendGrid::Email.new(email:  ENV['SENDGRID_FROM_EMAIL'])
  to = SendGrid::Email.new(email: @email)
  subject = 'Thank you for contacting Rocket Elevators'
  content = SendGrid::Content.new(type: 'text/plain', value: 'and easy to do anywhere, even with Ruby')
  mail = SendGrid::Mail.new(from, subject, to, content)

  personalization = SendGrid::Personalization.new #changed
  personalization.add_to(SendGrid::Email.new(email: @email))
  personalization.add_dynamic_template_data({
        "full_name" => @full_name,
        "project_name" => @project_name,
    })
 mail.add_personalization(personalization)
 mail.template_id = 'd-4b7f69bd582143e5b550e78e1deb1ab9'

  sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY'])
  response = sg.client.mail._('send').post(request_body: mail.to_json)
  
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

    




