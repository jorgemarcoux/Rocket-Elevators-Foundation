class Quote < ActiveRecord::Base

  before_save :calculate_quote_total

  belongs_to :user

end