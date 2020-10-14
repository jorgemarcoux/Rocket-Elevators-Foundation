class CreateQuotesTable < ActiveRecord::Migration[5.2]  


  def change
    create_table :quotes do |t|

      t.integer :number_apartments             # inputs DB: Number of apartemennt
      t.integer :number_floors                  # inputs DB: Number of floors
      t.integer :number_basements               # inputs DB: Number of basements
      t.integer :distinct_business              # inputs DB: Number of distinc buisness
      t.integer :number_elevator_shaft          # inputs DB: Number of elevator to shaft
      t.integer :number_parking                 # inputs DB: Number of parking spaces available
      t.integer :maximum_occupant               # inputs DB:maximum occupant per floors
      t.integer :hours_activity                 # inputs DB: number of hours activity
      t.integer :gamme                          # The selected radio button
      t.integer :total_price                    # Total Price 
      t.integer :price_unit                     # Price unit per elevator
      t.integer :number_elevator                # Number of Elevator

    end
  end
end


#table "Quotes" that allows you to save the forms filled out on the site and eventually turn them into prospects. 
#This table must persist all required fields.
