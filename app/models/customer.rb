class Customer < ApplicationRecord    
  has_many :buildings
  has_one :address, :dependent => :delete
  belongs_to :user, optional: true

  after_update :dropbox_API

  def custom_label_method
    "#{User.find(user_id).first_name} #{User.find(user_id).last_name}"
  end

  def dropbox_API
    client = DropboxApi::Client.new(DROPBOX_OAUTH_BEARER)
    Lead.all.each do |lead|
      if lead.attachment != nil                             
        if self.user_id == lead.user_id                                               
          file_content = lead.attachment.read                        
          file_extension = File.extname(lead.attachment.to_s) 
          file_name = "/file" + lead.id.to_s  + file_extension
          puts file_name
          client.upload file_name, file_content   
        end                            
      end 
    end
  end
end