class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :quotes

  def custom_label_method
    "#{first_name} #{last_name}"
  end
   
    validates_uniqueness_of :email 
    validates_presence_of :email
    validates :password, presence: true
    validates :password, confirmation: { case_sensitive: true }

end