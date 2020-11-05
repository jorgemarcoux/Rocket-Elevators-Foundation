class Lead < ApplicationRecord
    belongs_to :user, optional: true
    #has_many :customers, through: :users
    validates :full_name, presence: true, allow_blank: false
    validates :email, presence: true, allow_blank: false
    validates :phone, presence: true, allow_blank: false
    validates :business_name, presence: true, allow_blank: false
    validates :project_name, presence: true, allow_blank: false
    validates :department, presence: true, allow_blank: false
    validates :project_description, presence: true, allow_blank: false
    validates :message, presence: true, allow_blank: false

    mount_uploader :attachment, AttachmentUploader
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

