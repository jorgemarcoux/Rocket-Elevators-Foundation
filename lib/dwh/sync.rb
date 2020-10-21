module Dwh
  class Sync
    def self.sync_fact_quotes
      for q in Quote.all do
        user = User.find(q.user_id)
        customer = Customer.find(user.id)
        FactQuote.create!({
          quote_id: q.id,
          quote_created_at: q.created_at,
          company_name: customer.company_name,
          email: user.email,
          elevator_number: q.elevator_number
        })
      end
    end

    def self.sync_dim_customers
      for c in Customer.all do
        elevator_number = 0
        customer_buildings = Building.where("customer_id = #{c.id}")
        puts customer_buildings
        for building in customer_buildings do
          batteries = Battery.find(:all, :condition => { :building_id => building.id })
          for battery in batteries do
            columns = Column.find(:all, :condition => { :battery_id => battery.id })
            for column in columns do
              elevators = Elevator.find(:all, :condition => { :column_id => column.id })
              elevator_number += elevators.size
            end
          end
        end
        address = Address.find(c.address_id)
        DimCustomer.create!({
        creation_date: c.created_at,
        company_name: c.company_name,
        company_contact_full_name: c.company_contact_full_name,
        email: c.email,
        elevator_number: elevator_number,
        customer_city: address.ciy
        })
      end
    end

  end
end
