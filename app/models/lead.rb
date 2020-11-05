require 'sendgrid-ruby'
include SendGrid
class Lead < ApplicationRecord
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
end
# def rocketMail
#     @full_name = "#{self.full_name}"
#     @project_name = "#{self.project_name}"
#     @email = "#{self.email}"
#     puts "-----allo"
#     mail = SendGrid::Email.new
#     mail.from = Email.new(email: 'olivier_beauchesne4@hotmail.com')
#     personalization = Personalization.new
#     personalization.add_to(Email.new(email: @email))
#     personalization.add_dynamic_template_data({
#         "full_name" => @full_name,
#         "project_name" => @project_name,
#     })
#     mail.add_personalization(personalization)
#     mail.template_id = 'd-b3ae4b30c1e54327bd9460468cf77df3'
#     sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY'])
#     begin
#         response = sg.client.mail._("send").post(request_body: mail.to_json)
#     rescue Exception => e
#         puts e.message
#     end
#     puts response.status_code
#     puts response.body
#     #puts response.parsed_body
#     puts response.headers
#     puts "allo--------" 
# end
def rocketMail

    @full_name = "#{self.full_name}"
    @project_name = "#{self.project_name}"
    @email = "#{self.email}"

    mail = SendGrid::Mail.new
    mail.from = Email.new(email: "olivier_beauchesne4@hotmail.com")
    mail.subject = 'Hello World from the Twilio SendGrid Ruby Library'

    personalization = Personalization.new
    personalization.add_to(Email.new(email: "jorgemarcoux@gmail.com"))
    personalization.add_dynamic_template_data({
        "full_name" => @full_name,
        "project_name" => @project_name,
    })
    mail.add_personalization(personalization)
    mail.template_id = 'd-b3ae4b30c1e54327bd9460468cf77df3'

    mail.send_at = Email.new(email: "jorgemarcoux@gmail.com")

    sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY'])
    response = sg.client.mail._('send').post(request_body: mail.to_json)
    puts "alolooooooooooooooooooooooooooo"


    # to = Email.new("#{self.email}")
    # content = Content.new(type: 'text/plain', value: 'some text here')
    # mail = SendGrid::Mail.new("olivier_beauchesne4@hotmail.com",  'Hello World from the Twilio SendGrid Ruby Library',SendGrid::Mail.("thomas.carrier@codeboxx.biz"))
    # # puts mail, "allo"

    # sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY'])
    # response = sg.client.mail._('send').post(request_body: mail.to_json)




    #@full_name = "#{self.full_name}"
    #@project_name = "#{self.project_name}"




    # from = SendGrid::Mail.new(email: 'olivier_beauchesne4@hotmail.com')
    # subject = 'Hello World from the Twilio SendGrid Ruby Library'
    # to = Email.new("#{self.email}")
    # content = Content.new(type: 'text/plain', value: 'some text here')
    # mail = SendGrid::Mail.new(from, subject, to, content)
    # # puts JSON.pretty_generate(mail.to_json)
    # puts mail.to_json
  
    # sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY'])
    # response = sg.client.mail._('send').post(request_body: mail.to_json)
    # puts response.status_code
    # puts response.body
    # puts response.headers
end