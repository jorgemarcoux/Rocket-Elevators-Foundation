module Dwh
  class Sync
    def self.sync_fact_quotes
      for q in Quote.all do
        # customer = Customer.where("customer_id" => q.customer_id)
        # lead = Lead.where("user_id" => user.id)

        FactQuote.create({
          quote_id: q.id,
          quote_created_at: q.created_at,
          # company_name: customer.business_name,
          # company_name: customer.company_name,
          email: user.email,
          elevator_number: q.elevator_number
        })
      end
    end

    def self.sync_dim_customers
      for c in Customer.all do
        elevator_number = 0
        customer_buildings = Building.where("customer_id" => c.id)

        for build in customer_buildings do
          batteries = Battery.where("building_id" => build.id)

          for bat in batteries do
            columns = Column.where("battery_id" => bat.id)

            for col in columns do
              elevators = Elevator.where("column_id" => col.id)
              elevator_number += elevators.size
            end
          end
        end

        address = Address.find(c.address_id)

        DimCustomer.create({
          created_at: c.created_at,
          company_name: c.company_name,
          company_contact_full_name: c.company_contact_full_name,
          company_contact_email: c.company_contact_email,
          elevator_number: elevator_number,
          customer_city: address.city
        })
      end
    end

    def self.sync_fact_leads
      for l in Lead.all do
        FactContact.create!({
          contact_id: l.id,
          company_name: l.business_name,
          email: l.email,
          project_name: l.project_name,
          created_at: l.created_at
        })
      end
    end

    def self.sync_fact_elevators

    end
  end
end
