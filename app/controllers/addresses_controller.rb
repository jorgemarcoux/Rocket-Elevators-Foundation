class AddressesController < ApplicationController
  def index
    @address = Address.first
  end
end
