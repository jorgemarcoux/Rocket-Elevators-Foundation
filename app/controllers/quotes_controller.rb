class QuotesController < ApplicationController
  def user_quotes
    @quotes = Quote.where(user_id: current_user.id)
  end

  def new
    @quote = Quote.new
  end

  def create
    create_quote_ticket
    @quote = Quote.new(quote_params)
    if NewGoogleRecaptcha.human?(
         params[:new_google_recaptcha_token],
         'quote',
         NewGoogleRecaptcha.minimum_score,
         @quote
       ) && @quote.save
      @quote.user_id = current_user ? (current_user.id) : (nil)
      @quote.save

      respond_to do |format|
        if @quote.save && user_signed_in?
          format.html do
            redirect_to my_quotes_path, notice: 'Quote created successfully!'
          end
          create_zd_ticket(@quote, 'task')
        elsif @quote.save && !user_signed_in?
          format.html do
            redirect_to root_path, notice: 'Quote created successfully!'
          end
          create_zd_ticket(@quote, 'task')
        else
          format.html { render :new }
        end
      end
    else
      respond_to do |format|
        format.html do
          redirect_to root_path, notice: 'You are a robot beep bop boop.'
        end
      end
    end
  end

  private

  def set_quote
    @quote = Quote.find(params[:id])
  end

  def quote_params
    params.require(:quote).permit(
      :apartments,
      :floors,
      :basements,
      :businesses,
      :elevator_shafts,
      :parking_spaces,
      :occupants,
      :opening_hours,
      :product_line,
      :install_fee,
      :total_price,
      :unit_price,
      :elevator_number,
      :building_type,
      :user_id,
      :full_name,
      :phone,
      :email
    )
  end

   #Creating a new Zenddesk task ticket
   def create_quote_ticket
    client = ZendeskAPI::Client.new do |config|
    config.url = ENV["ZENDESK_URL"]
    config.username = ENV["ZENDESK_USERNAME"]
    config.token = ENV["ZENDESK_TOKEN"]
    end

    ZendeskAPI::Ticket.create!(
     client, :subject => "#{params.require(:quote).require(:full_name)} new quote", 
     :comment => { :value => "The contact #{params.require(:quote).require(:full_name)}  
     can be reached at #{params.require(:quote).require(:email)} 
     and at phone number #{params.require(:quote).require(:phone)}, just filled out a quote form. 
     
     Apartments: #{params.require(:quote).require(:project_description)}
     Floors: #{params.require(:quote).require(:floors)}
     Basements: #{params.require(:quote).require(:basements)}
     Businesses:  #{params.require(:quote).require(:businesses)}
     Elevator shafts: #{params.require(:quote).require(:elevator_shafts)}
     Parking spaces: #{params.require(:quote).require(:parking_spaces)}
     Occupants: #{params.require(:quote).require(:occupants)}
     Opening hours: #{params.require(:quote).require(:opening_hours)}
     Product line: #{params.require(:quote).require(:product_line)}
     Total elevators required: #{params.require(:quote).require(:elevator_number)}
     Elevator cost: #{params.require(:quote).require(:unit_prices)}
     Installation free: #{params.require(:quote).require(:install_fee)}
     Total price: #{params.require(:quote).require(:total_price)}


     "
     
    },
     
 
     :priority => "normal",
     :type => "task",
     )
 end





end
